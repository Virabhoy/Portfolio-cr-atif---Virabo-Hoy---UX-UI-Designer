"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Clock, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

interface ProjectImage {
  src: string;
  alt: string;
  captionFr?: string;
  captionEn?: string;
}

interface Project {
  id: string;
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
}

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { language } = useLanguage();

  const [project, setProject] = useState<Project | null>(null);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch(`/api/public/projects/${slug}`).then((res) => res.json()),
      fetch("/api/public/projects").then((res) => res.json()),
    ])
      .then(([projectData, allData]) => {
        if (projectData.error) {
          setError(true);
        } else {
          setProject(projectData);
          setAllProjects(allData.projects || []);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  const getText = (obj: { fr: string; en: string } | undefined) => {
    if (!obj) return "";
    return obj[language] || obj.fr || "";
  };

  const getCaption = (image: ProjectImage) => {
    return language === "fr" ? image.captionFr : image.captionEn;
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </main>
    );
  }

  if (error || !project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className={`relative py-16 md:py-24 bg-gradient-to-br ${project.color}`}>
        <div className="container-custom">
          {/* Back button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{language === "fr" ? "Retour aux projets" : "Back to projects"}</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white">
              <p className="text-lg font-medium opacity-80 mb-2">
                {getText(project.client)}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {getText(project.title)}
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
                {getText(project.description)}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap gap-3">
                {project.slug === "mercure" && (
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-white/90"
                    asChild
                  >
                    <Link href="/mercure-bucketlist">
                      {language === "fr" ? "Voir la démo" : "View demo"}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                )}
                {project.slug === "oxynum" && (
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-white/90"
                    asChild
                  >
                    <Link href="/oxynum-charte">
                      {language === "fr" ? "Voir la démo" : "View demo"}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                )}
                {project.slug === "driiink" && (
                  <>
                    <Button
                      size="lg"
                      className="bg-white text-gray-900 hover:bg-white/90"
                      asChild
                    >
                      <Link href="/driiink-landing">
                        {language === "fr" ? "Voir la landing" : "View landing"}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      className="bg-white/20 text-white hover:bg-white/30 border border-white/30"
                      asChild
                    >
                      <Link href="/driiink">
                        {language === "fr" ? "Tester la démo" : "Try demo"}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </>
                )}
                {project.link && (
                  <Button
                    size="lg"
                    className={project.slug === "mercure" ? "bg-white/20 text-white hover:bg-white/30 border border-white/30" : "bg-white text-gray-900 hover:bg-white/90"}
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {language === "fr" ? "Voir le site" : "View website"}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                {project.heroImage && (
                  <Image
                    src={project.heroImage}
                    alt={getText(project.title)}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Role */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold">
                  {language === "fr" ? "Rôle" : "Role"}
                </h3>
              </div>
              <p className="text-muted-foreground">{getText(project.role)}</p>
            </div>

            {/* Duration */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold">
                  {language === "fr" ? "Durée" : "Duration"}
                </h3>
              </div>
              <p className="text-muted-foreground">{getText(project.duration)}</p>
            </div>

            {/* Year */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold">
                  {language === "fr" ? "Année" : "Year"}
                </h3>
              </div>
              <p className="text-muted-foreground">{project.year}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Long Description */}
      {getText(project.longDescription) && (
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                {language === "fr" ? "À propos du projet" : "About the project"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {getText(project.longDescription)}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Project Images Gallery */}
      {project.images && project.images.length > 0 && (
        <section className="py-16 bg-muted">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {language === "fr" ? "Galerie du projet" : "Project Gallery"}
            </h2>

            <div className="space-y-12">
              {project.images.map((image, index) => (
                <div key={index} className="group">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-white">
                    <Image
                      src={image.src}
                      alt={image.alt || getText(project.title)}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {getCaption(image) && (
                    <p className="text-center text-muted-foreground mt-4">
                      {getCaption(image)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation to other projects */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-8">
            {language === "fr" ? "Voir d'autres projets" : "View other projects"}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {allProjects
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="px-6 py-3 bg-muted rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
                >
                  {getText(p.title)}
                </Link>
              ))}
          </div>

          <div className="mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/#projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === "fr" ? "Tous les projets" : "All projects"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
