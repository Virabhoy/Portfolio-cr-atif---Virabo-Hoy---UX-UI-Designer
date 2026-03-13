"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Save, Upload, Loader2, Plus, Trash2 } from "lucide-react";

interface AboutData {
  profileImage: string;
  name: string;
  title: { fr: string; en: string };
  intro: { fr: string; en: string };
  bio: { fr: string; en: string };
  bio2: { fr: string; en: string };
  stats: { value: string; labelFr: string; labelEn: string }[];
  location: { city: string; region: string };
  socialLinks: { platform: string; url: string }[];
}

export default function AdminAboutPage() {
  const [data, setData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/admin/about")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    if (!data) return;
    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch("/api/admin/about", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setMessage({ type: "success", text: "Modifications enregistrées avec succès!" });
      } else {
        throw new Error();
      }
    } catch {
      setMessage({ type: "error", text: "Erreur lors de l'enregistrement" });
    }

    setSaving(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !data) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", "");

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.path) {
        setData({ ...data, profileImage: result.path });
        setMessage({ type: "success", text: "Image téléchargée!" });
      }
    } catch {
      setMessage({ type: "error", text: "Erreur lors du téléchargement" });
    }
  };

  const updateField = (path: string, value: any) => {
    if (!data) return;
    const keys = path.split(".");
    const newData = { ...data };
    let current: any = newData;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setData(newData);
  };

  const addStat = () => {
    if (!data) return;
    setData({
      ...data,
      stats: [...data.stats, { value: "", labelFr: "", labelEn: "" }],
    });
  };

  const removeStat = (index: number) => {
    if (!data) return;
    setData({
      ...data,
      stats: data.stats.filter((_, i) => i !== index),
    });
  };

  const updateStat = (index: number, field: string, value: string) => {
    if (!data) return;
    const newStats = [...data.stats];
    (newStats[index] as any)[field] = value;
    setData({ ...data, stats: newStats });
  };

  const addSocialLink = () => {
    if (!data) return;
    setData({
      ...data,
      socialLinks: [...data.socialLinks, { platform: "", url: "" }],
    });
  };

  const removeSocialLink = (index: number) => {
    if (!data) return;
    setData({
      ...data,
      socialLinks: data.socialLinks.filter((_, i) => i !== index),
    });
  };

  const updateSocialLink = (index: number, field: string, value: string) => {
    if (!data) return;
    const newLinks = [...data.socialLinks];
    (newLinks[index] as any)[field] = value;
    setData({ ...data, socialLinks: newLinks });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!data) {
    return <div className="text-red-500">Erreur lors du chargement des données</div>;
  }

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">À propos</h1>
          <p className="text-gray-500 mt-2">Gérer votre profil et informations personnelles</p>
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
        {/* Photo de profil */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Photo de profil</h2>
          <div className="flex items-center gap-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-100">
              {data.profileImage && (
                <Image
                  src={data.profileImage}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Upload className="w-5 h-5" />
                Changer la photo
              </button>
              <p className="text-sm text-gray-500 mt-2">JPG, PNG. Max 5MB</p>
            </div>
          </div>
        </div>

        {/* Informations générales */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Informations générales</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Titre (FR)</label>
                <input
                  type="text"
                  value={data.title.fr}
                  onChange={(e) => updateField("title.fr", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Titre (EN)</label>
                <input
                  type="text"
                  value={data.title.en}
                  onChange={(e) => updateField("title.en", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Biographie</h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Introduction (FR)</label>
                <textarea
                  value={data.intro.fr}
                  onChange={(e) => updateField("intro.fr", e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Introduction (EN)</label>
                <textarea
                  value={data.intro.en}
                  onChange={(e) => updateField("intro.en", e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio 1 (FR)</label>
                <textarea
                  value={data.bio.fr}
                  onChange={(e) => updateField("bio.fr", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio 1 (EN)</label>
                <textarea
                  value={data.bio.en}
                  onChange={(e) => updateField("bio.en", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio 2 (FR)</label>
                <textarea
                  value={data.bio2.fr}
                  onChange={(e) => updateField("bio2.fr", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio 2 (EN)</label>
                <textarea
                  value={data.bio2.en}
                  onChange={(e) => updateField("bio2.en", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Statistiques</h2>
            <button
              onClick={addStat}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              <Plus className="w-4 h-4" />
              Ajouter
            </button>
          </div>
          <div className="space-y-4">
            {data.stats.map((stat, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1 grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Valeur</label>
                    <input
                      type="text"
                      value={stat.value}
                      onChange={(e) => updateStat(index, "value", e.target.value)}
                      placeholder="35+"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Label (FR)</label>
                    <input
                      type="text"
                      value={stat.labelFr}
                      onChange={(e) => updateStat(index, "labelFr", e.target.value)}
                      placeholder="Clients"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Label (EN)</label>
                    <input
                      type="text"
                      value={stat.labelEn}
                      onChange={(e) => updateStat(index, "labelEn", e.target.value)}
                      placeholder="Clients"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeStat(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Localisation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Localisation</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
              <input
                type="text"
                value={data.location.city}
                onChange={(e) => updateField("location.city", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Région</label>
              <input
                type="text"
                value={data.location.region}
                onChange={(e) => updateField("location.region", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Réseaux sociaux</h2>
            <button
              onClick={addSocialLink}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              <Plus className="w-4 h-4" />
              Ajouter
            </button>
          </div>
          <div className="space-y-4">
            {data.socialLinks.map((link, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={link.platform}
                    onChange={(e) => updateSocialLink(index, "platform", e.target.value)}
                    placeholder="LinkedIn, Instagram, etc."
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    value={link.url}
                    onChange={(e) => updateSocialLink(index, "url", e.target.value)}
                    placeholder="https://..."
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <button
                  onClick={() => removeSocialLink(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
