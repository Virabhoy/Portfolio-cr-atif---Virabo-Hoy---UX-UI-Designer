"use client";

import { useState, useEffect } from "react";
import { Save, Loader2, Plus, Trash2, GripVertical, X } from "lucide-react";

interface SkillCategory {
  id: string;
  titleFr: string;
  titleEn: string;
  icon: string;
  skills: string[];
}

const iconOptions = [
  { value: "Lightbulb", label: "Ampoule (UX)" },
  { value: "Palette", label: "Palette (UI)" },
  { value: "Sparkles", label: "Étoiles (IA)" },
  { value: "Users", label: "Utilisateurs (Gestion)" },
  { value: "Wrench", label: "Outils" },
  { value: "Code", label: "Code" },
  { value: "Smartphone", label: "Mobile" },
  { value: "Globe", label: "Web" },
  { value: "Layers", label: "Layers" },
  { value: "Zap", label: "Éclair" },
];

export default function AdminSkillsPage() {
  const [categories, setCategories] = useState<SkillCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [newSkills, setNewSkills] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    fetch("/api/admin/skills")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch("/api/admin/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ categories }),
      });

      if (res.ok) {
        setMessage({ type: "success", text: "Compétences enregistrées avec succès!" });
      } else {
        throw new Error();
      }
    } catch {
      setMessage({ type: "error", text: "Erreur lors de l'enregistrement" });
    }

    setSaving(false);
  };

  const addCategory = () => {
    const newId = String(Math.max(...categories.map((c) => parseInt(c.id)), 0) + 1);
    setCategories([
      ...categories,
      {
        id: newId,
        titleFr: "Nouvelle catégorie",
        titleEn: "New category",
        icon: "Lightbulb",
        skills: [],
      },
    ]);
  };

  const removeCategory = (id: string) => {
    if (confirm("Supprimer cette catégorie ?")) {
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  const updateCategory = (id: string, field: keyof SkillCategory, value: any) => {
    setCategories(
      categories.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  const addSkill = (categoryId: string) => {
    const skill = newSkills[categoryId]?.trim();
    if (!skill) return;

    setCategories(
      categories.map((c) =>
        c.id === categoryId && !c.skills.includes(skill)
          ? { ...c, skills: [...c.skills, skill] }
          : c
      )
    );
    setNewSkills({ ...newSkills, [categoryId]: "" });
  };

  const removeSkill = (categoryId: string, skill: string) => {
    setCategories(
      categories.map((c) =>
        c.id === categoryId
          ? { ...c, skills: c.skills.filter((s) => s !== skill) }
          : c
      )
    );
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
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Compétences</h1>
          <p className="text-gray-500 mt-2">Gérer vos catégories de compétences</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={addCategory}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Nouvelle catégorie
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
          >
            {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            Enregistrer
          </button>
        </div>
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

      <div className="space-y-6">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 text-gray-400 cursor-move">
                <GripVertical className="w-5 h-5" />
              </div>
              <div className="flex-1 grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Titre (FR)
                  </label>
                  <input
                    type="text"
                    value={category.titleFr}
                    onChange={(e) => updateCategory(category.id, "titleFr", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Titre (EN)
                  </label>
                  <input
                    type="text"
                    value={category.titleEn}
                    onChange={(e) => updateCategory(category.id, "titleEn", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Icône
                  </label>
                  <select
                    value={category.icon}
                    onChange={(e) => updateCategory(category.id, "icon", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {iconOptions.map((icon) => (
                      <option key={icon.value} value={icon.value}>
                        {icon.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                onClick={() => removeCategory(category.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            {/* Skills */}
            <div className="ml-11">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Compétences
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                    <button
                      onClick={() => removeSkill(category.id, skill)}
                      className="ml-1 text-gray-400 hover:text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkills[category.id] || ""}
                  onChange={(e) =>
                    setNewSkills({ ...newSkills, [category.id]: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addSkill(category.id);
                    }
                  }}
                  placeholder="Ajouter une compétence..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  onClick={() => addSkill(category.id)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {categories.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
            <p className="text-gray-500 mb-4">Aucune catégorie de compétences</p>
            <button
              onClick={addCategory}
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Plus className="w-4 h-4" />
              Créer une catégorie
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
