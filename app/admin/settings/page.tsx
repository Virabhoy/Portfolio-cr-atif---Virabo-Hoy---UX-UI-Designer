"use client";

import { useState } from "react";
import { Save, Loader2 } from "lucide-react";

export default function AdminSettingsPage() {
  const [saving, setSaving] = useState(false);

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Paramètres</h1>
        <p className="text-gray-500 mt-2">Configuration générale du portfolio</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Informations du site</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Titre du site
              </label>
              <input
                type="text"
                defaultValue="Virabo Hoy - Portfolio"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description (SEO)
              </label>
              <textarea
                defaultValue="Product Builder Digital & UX/UI Designer basé à Paris"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Langue par défaut</h2>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-yellow-800 mb-2">
            Fonctionnalité à venir
          </h2>
          <p className="text-yellow-700 text-sm">
            Les paramètres avancés (SEO, analytics, etc.) seront disponibles dans une prochaine version.
          </p>
        </div>
      </div>
    </div>
  );
}
