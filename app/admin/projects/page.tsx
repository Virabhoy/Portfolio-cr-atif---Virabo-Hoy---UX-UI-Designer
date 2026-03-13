"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Edit2, Trash2, Eye, EyeOff, Loader2, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  slug: string;
  title: { fr: string; en: string };
  client: { fr: string; en: string };
  heroImage: string;
  year: string;
  tags: string[];
  visible: boolean;
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/admin/projects");
      const data = await res.json();
      setProjects(data.projects || []);
    } catch (error) {
      console.error("Failed to fetch projects");
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) return;

    setDeleting(id);
    try {
      await fetch(`/api/admin/projects?id=${id}`, { method: "DELETE" });
      setProjects(projects.filter((p) => p.id !== id));
    } catch (error) {
      alert("Erreur lors de la suppression");
    }
    setDeleting(null);
  };

  const toggleVisibility = async (project: Project) => {
    try {
      await fetch("/api/admin/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...project, visible: !project.visible }),
      });
      setProjects(
        projects.map((p) =>
          p.id === project.id ? { ...p, visible: !p.visible } : p
        )
      );
    } catch (error) {
      alert("Erreur lors de la mise à jour");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projets</h1>
          <p className="text-gray-500 mt-2">{projects.length} projet(s)</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Nouveau projet
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Projet</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Client</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Année</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Tags</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Statut</th>
                <th className="text-right px-6 py-4 text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        {project.heroImage && (
                          <Image
                            src={project.heroImage}
                            alt={project.title.fr}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{project.title.fr}</p>
                        <p className="text-sm text-gray-500">/{project.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{project.client.fr}</td>
                  <td className="px-6 py-4 text-gray-600">{project.year}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
                          +{project.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleVisibility(project)}
                      className={`flex items-center gap-1 px-2 py-1 rounded text-sm ${
                        project.visible
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {project.visible ? (
                        <>
                          <Eye className="w-4 h-4" /> Visible
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-4 h-4" /> Masqué
                        </>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        target="_blank"
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
                        title="Voir sur le site"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                      <Link
                        href={`/admin/projects/${project.id}`}
                        className="p-2 text-gray-500 hover:text-primary hover:bg-primary/10 rounded-lg"
                        title="Modifier"
                      >
                        <Edit2 className="w-5 h-5" />
                      </Link>
                      <button
                        onClick={() => handleDelete(project.id)}
                        disabled={deleting === project.id}
                        className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg disabled:opacity-50"
                        title="Supprimer"
                      >
                        {deleting === project.id ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <Trash2 className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucun projet pour le moment</p>
            <Link
              href="/admin/projects/new"
              className="inline-flex items-center gap-2 mt-4 text-primary hover:underline"
            >
              <Plus className="w-4 h-4" />
              Créer votre premier projet
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
