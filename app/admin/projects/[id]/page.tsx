"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Save, Upload, Loader2, Plus, Trash2, X } from "lucide-react";

interface ProjectImage {
  src: string;
  alt: string;
  captionFr: string;
  captionEn: string;
}

interface Project {
  id?: string;
  slug: string;
  title: { fr: string; en: string };
  client: { fr: string; en: string };
  description: { fr: string; en: string };
  longDescription: { fr: string; en: string };
  role: { fr: string; en: string };
  duration: { fr: string; en: string };
  year: string;
  tags: string[];
  heroImage: string;
  images: ProjectImage[];
  link?: string;
  color: string;
  visible: boolean;
}

const defaultProject: Project = {
  slug: "",
  title: { fr: "", en: "" },
  client: { fr: "", en: "" },
  description: { fr: "", en: "" },
  longDescription: { fr: "", en: "" },
  role: { fr: "", en: "" },
  duration: { fr: "", en: "" },
  year: new Date().getFullYear().toString(),
  tags: [],
  heroImage: "",
  images: [],
  link: "",
  color: "from-blue-600 to-blue-800",
  visible: true,
};

const colorOptions = [
  { value: "from-blue-600 to-blue-800", label: "Bleu" },
  { value: "from-purple-600 to-indigo-800", label: "Violet" },
  { value: "from-amber-500 to-orange-600", label: "Orange" },
  { value: "from-emerald-600 to-teal-700", label: "Vert" },
  { value: "from-cyan-500 to-blue-600", label: "Cyan" },
  { value: "from-pink-500 to-rose-600", label: "Rose" },
  { value: "from-red-500 to-red-700", label: "Rouge" },
];

export default function ProjectEditPage() {
  const params = useParams();
  const router = useRouter();
  const isNew = params.id === "new";

  const [project, setProject] = useState<Project>(defaultProject);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [newTag, setNewTag] = useState("");

  const heroInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isNew) {
      fetch("/api/admin/projects")
        .then((res) => res.json())
        .then((data) => {
          const found = data.projects.find((p: Project) => p.id === params.id);
          if (found) {
            setProject(found);
          }
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [params.id, isNew]);

  const handleSave = async () => {
    if (!project.slug || !project.title.fr) {
      setMessage({ type: "error", text: "Le slug et le titre sont requis" });
      return;
    }

    setSaving(true);
    setMessage(null);

    try {
      const method = isNew ? "POST" : "PUT";
      const res = await fetch("/api/admin/projects", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });

      if (res.ok) {
        setMessage({ type: "success", text: "Projet enregistré avec succès!" });
        if (isNew) {
          const data = await res.json();
          router.push(`/admin/projects/${data.project.id}`);
        }
      } else {
        throw new Error();
      }
    } catch {
      setMessage({ type: "error", text: "Erreur lors de l'enregistrement" });
    }

    setSaving(false);
  };

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "hero" | "gallery"
  ) => {
    const files = e.target.files;
    if (!files) return;

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", `projects/${project.slug || "temp"}`);

      try {
        const res = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
        });

        const result = await res.json();
        if (result.path) {
          if (type === "hero") {
            setProject({ ...project, heroImage: result.path });
          } else {
            setProject({
              ...project,
              images: [
                ...project.images,
                { src: result.path, alt: "", captionFr: "", captionEn: "" },
              ],
            });
          }
        }
      } catch {
        setMessage({ type: "error", text: "Erreur lors du téléchargement" });
      }
    }

    e.target.value = "";
  };

  const updateField = (path: string, value: any) => {
    const keys = path.split(".");
    const newProject = { ...project };
    let current: any = newProject;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setProject(newProject);
  };

  const addTag = () => {
    if (newTag && !project.tags.includes(newTag)) {
      setProject({ ...project, tags: [...project.tags, newTag] });
      setNewTag("");
    }
  };

  const removeTag = (tag: string) => {
    setProject({ ...project, tags: project.tags.filter((t) => t !== tag) });
  };

  const removeImage = (index: number) => {
    setProject({
      ...project,
      images: project.images.filter((_, i) => i !== index),
    });
  };

  const updateImage = (index: number, field: keyof ProjectImage, value: string) => {
    const newImages = [...project.images];
    newImages[index] = { ...newImages[index], [field]: value };
    setProject({ ...project, images: newImages });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/projects"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {isNew ? "Nouveau projet" : "Modifier le projet"}
            </h1>
            {!isNew && <p className="text-gray-500 mt-1">{project.title.fr}</p>}
          </div>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
        >
          {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
          Enregistrer
        </button>
      </div>

      {message && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="space-y-8">
        {/* Informations de base */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Informations de base</h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Slug (URL) *
                </label>
                <input
                  type="text"
                  value={project.slug}
                  onChange={(e) =>
                    updateField("slug", e.target.value.toLowerCase().replace(/\s+/g, "-"))
                  }
                  placeholder="mon-projet"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Année</label>
                <input
                  type="text"
                  value={project.year}
                  onChange={(e) => updateField("year", e.target.value)}
                  placeholder="2024"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Titre (FR) *</label>
                <input
                  type="text"
                  value={project.title.fr}
                  onChange={(e) => updateField("title.fr", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Titre (EN)</label>
                <input
                  type="text"
                  value={project.title.en}
                  onChange={(e) => updateField("title.en", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Client (FR)</label>
                <input
                  type="text"
                  value={project.client.fr}
                  onChange={(e) => updateField("client.fr", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Client (EN)</label>
                <input
                  type="text"
                  value={project.client.en}
                  onChange={(e) => updateField("client.en", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lien externe</label>
              <input
                type="url"
                value={project.link || ""}
                onChange={(e) => updateField("link", e.target.value)}
                placeholder="https://..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Descriptions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Descriptions</h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description courte (FR)
                </label>
                <textarea
                  value={project.description.fr}
                  onChange={(e) => updateField("description.fr", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description courte (EN)
                </label>
                <textarea
                  value={project.description.en}
                  onChange={(e) => updateField("description.en", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description longue (FR)
                </label>
                <textarea
                  value={project.longDescription.fr}
                  onChange={(e) => updateField("longDescription.fr", e.target.value)}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description longue (EN)
                </label>
                <textarea
                  value={project.longDescription.en}
                  onChange={(e) => updateField("longDescription.en", e.target.value)}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Rôle et durée */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Rôle et durée</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rôle (FR)</label>
              <input
                type="text"
                value={project.role.fr}
                onChange={(e) => updateField("role.fr", e.target.value)}
                placeholder="UX/UI Designer"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rôle (EN)</label>
              <input
                type="text"
                value={project.role.en}
                onChange={(e) => updateField("role.en", e.target.value)}
                placeholder="UX/UI Designer"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Durée (FR)</label>
              <input
                type="text"
                value={project.duration.fr}
                onChange={(e) => updateField("duration.fr", e.target.value)}
                placeholder="3 mois"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Durée (EN)</label>
              <input
                type="text"
                value={project.duration.en}
                onChange={(e) => updateField("duration.en", e.target.value)}
                placeholder="3 months"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full"
              >
                {tag}
                <button onClick={() => removeTag(tag)} className="hover:text-red-500">
                  <X className="w-4 h-4" />
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
              placeholder="Ajouter un tag..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              onClick={addTag}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Couleur */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Couleur du projet</h2>
          <div className="flex flex-wrap gap-3">
            {colorOptions.map((color) => (
              <button
                key={color.value}
                onClick={() => updateField("color", color.value)}
                className={`w-20 h-12 rounded-lg bg-gradient-to-br ${color.value} ${
                  project.color === color.value ? "ring-2 ring-offset-2 ring-gray-900" : ""
                }`}
                title={color.label}
              />
            ))}
          </div>
        </div>

        {/* Image hero */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Image principale</h2>
          <input
            ref={heroInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "hero")}
            className="hidden"
          />
          {project.heroImage ? (
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
              <Image src={project.heroImage} alt="Hero" fill className="object-cover" />
              <button
                onClick={() => updateField("heroImage", "")}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => heroInputRef.current?.click()}
              className="w-full aspect-video border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <Upload className="w-8 h-8 text-gray-400" />
              <span className="text-gray-500">Cliquez pour ajouter une image</span>
            </button>
          )}
        </div>

        {/* Galerie */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Galerie</h2>
            <input
              ref={galleryInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleImageUpload(e, "gallery")}
              className="hidden"
            />
            <button
              onClick={() => galleryInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              <Plus className="w-5 h-5" />
              Ajouter des images
            </button>
          </div>
          <div className="space-y-4">
            {project.images.map((image, index) => (
              <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                </div>
                <div className="flex-1 grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={image.alt}
                    onChange={(e) => updateImage(index, "alt", e.target.value)}
                    placeholder="Alt text"
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <input
                    type="text"
                    value={image.captionFr}
                    onChange={(e) => updateImage(index, "captionFr", e.target.value)}
                    placeholder="Légende (FR)"
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <input
                    type="text"
                    value={image.captionEn}
                    onChange={(e) => updateImage(index, "captionEn", e.target.value)}
                    placeholder="Légende (EN)"
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm col-span-2"
                  />
                </div>
                <button
                  onClick={() => removeImage(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg self-start"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
            {project.images.length === 0 && (
              <p className="text-center text-gray-500 py-8">
                Aucune image dans la galerie
              </p>
            )}
          </div>
        </div>

        {/* Visibilité */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Visibilité</h2>
              <p className="text-gray-500 text-sm mt-1">
                Les projets masqués ne seront pas affichés sur le site public
              </p>
            </div>
            <button
              onClick={() => updateField("visible", !project.visible)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                project.visible ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                  project.visible ? "right-1" : "left-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
