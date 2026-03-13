"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, FolderOpen, Image, FileText } from "lucide-react";

interface Stats {
  projectsCount: number;
  imagesCount: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({ projectsCount: 0, imagesCount: 0 });

  useEffect(() => {
    // Load stats
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => {});
  }, []);

  const cards = [
    {
      title: "Profil & À propos",
      description: "Gérer votre photo de profil, bio et informations personnelles",
      icon: User,
      href: "/admin/about",
      color: "bg-blue-500",
    },
    {
      title: "Projets",
      description: `${stats.projectsCount} projets - Ajouter, modifier ou supprimer des projets`,
      icon: FolderOpen,
      href: "/admin/projects",
      color: "bg-green-500",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-2">
          Bienvenue dans l'interface d'administration de votre portfolio
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-start gap-4">
              <div className={`${card.color} p-3 rounded-lg text-white`}>
                <card.icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {card.title}
                </h2>
                <p className="text-gray-500 mt-1">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Accès rapide
        </h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/admin/projects/new"
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            + Nouveau projet
          </Link>
          <Link
            href="/"
            target="_blank"
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Voir le site
          </Link>
        </div>
      </div>
    </div>
  );
}
