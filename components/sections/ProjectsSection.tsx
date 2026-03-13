"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

interface Project {
  id: string;
  slug: string;
  title: { fr: string; en: string };
  client: { fr: string; en: string };
  description: { fr: string; en: string };
  heroImage: string;
  tags: string[];
  color: string;
}

export default function ProjectsSection() {
  const { language, t } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/public/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getText = (obj: { fr: string; en: string }) => obj[language] || obj.fr;

  if (loading) {
    return (
      <section id="projects" className="section-padding bg-[#F5F5F5]">
        <div className="container-custom flex justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding bg-[#F5F5F5]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-[#888888] max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10`} />
                {project.heroImage && (
                  <Image
                    src={project.heroImage}
                    alt={getText(project.title)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}

                {/* View project overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <span className="flex items-center gap-2 text-white font-medium bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                    {t("projects.view")}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:text-[#0099FF] transition-colors">
                    {getText(project.title)}
                  </h3>
                </div>

                <p className="text-sm text-[#0099FF] font-medium mb-3">
                  {getText(project.client)}
                </p>

                <p className="text-[#888888] text-sm mb-4 line-clamp-2">
                  {getText(project.description)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 bg-[#F5F5F5] rounded-full text-[#888888]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {projects.length === 0 && !loading && (
          <p className="text-center text-gray-500 py-12">
            Aucun projet à afficher
          </p>
        )}
      </div>
    </section>
  );
}
