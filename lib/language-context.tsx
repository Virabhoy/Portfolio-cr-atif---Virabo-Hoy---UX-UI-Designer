"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.contact": "Contact",

    // Hero
    "hero.tagline": "Product Builder Digital & UX/UI Designer",
    "hero.description": "Je conçois des interfaces qui ne cherchent pas à impressionner, mais à être vraiment efficaces.",
    "hero.cta.projects": "Voir mes projets",
    "hero.cta.contact": "Me contacter",

    // Floating elements
    "hero.badge.ux": "UX/UI Design",
    "hero.badge.product": "Product Builder",
    "hero.badge.branding": "Branding",
    "hero.badge.web": "Web Design",
    "hero.badge.ia": "IA & Automation",
    "hero.badge.motion": "Motion Design",

    // About
    "about.title": "À propos",
    "about.intro": "Bonjour, moi c'est Virabo.",
    "about.bio": "J'ai construit mon parcours en menant en parallèle plus d'une vingtaine de projets web et mobiles pour des startups, TPE et grands comptes comme Accor. Avec plus de 35 clients accompagnés, j'ai développé une manière de travailler axée sur la clarté : structurer vite, comprendre les usages et simplifier ce qui semble complexe.",
    "about.bio2": "J'aime collaborer avec les équipes, faire avancer plusieurs projets en même temps et continuer à apprendre à chaque mission.",
    "about.stats.clients": "Clients",
    "about.stats.years": "Ans d'expérience",
    "about.stats.projects": "Projets livrés",

    // Projects
    "projects.title": "Projets",
    "projects.subtitle": "Une sélection de mes réalisations récentes",
    "projects.view": "Voir le projet",

    // Project descriptions
    "project.mercure.title": "Mercure Bucket List",
    "project.mercure.client": "Accor",
    "project.mercure.description": "Interface claire et mobile-first présentant 50 expériences gastronomiques mondiales avec carte interactive.",

    "project.novotel.title": "Novotel x Pixar",
    "project.novotel.client": "Disney Pixar / Accor",
    "project.novotel.description": "Landing page immersive inspirée de l'univers Lightyear pour valoriser les offres familiales.",

    "project.leave.title": "Leave",
    "project.leave.client": "Startup",
    "project.leave.description": "Interface simple et rassurante pour enregistrer et transmettre des messages en toute sécurité.",

    "project.driiink.title": "Driiink",
    "project.driiink.client": "Application Mobile",
    "project.driiink.description": "Application mobile-first permettant aux clients de commander leurs boissons sans attendre.",

    "project.situal.title": "Situal",
    "project.situal.client": "Agence Web",
    "project.situal.description": "Identité claire et site simple pour comprendre rapidement les offres et demander un devis.",

    "project.parella.title": "Parella Group",
    "project.parella.client": "Corporate",
    "project.parella.description": "Refonte multisite WordPress pour ce leader du conseil en immobilier d'entreprise.",

    // Skills
    "skills.title": "Compétences",
    "skills.subtitle": "Mes domaines d'expertise",

    "skills.ux.title": "UX Design & Recherche",
    "skills.ux.items": "Personas, User flows, Wireframes, Tests utilisateurs, Design Thinking",

    "skills.ui.title": "UI Design & Direction Artistique",
    "skills.ui.items": "Maquettes Figma, Design Systems, Identités visuelles, Motion Design",

    "skills.ia.title": "IA & Automatisation",
    "skills.ia.items": "Claude, ChatGPT, Midjourney, Figma AI, Automatisation workflows",

    "skills.project.title": "Gestion de Projet",
    "skills.project.items": "Agile Scrum, Kanban, Design Thinking, Coordination équipes",

    "skills.tools.title": "Outils",
    "skills.tools.items": "Figma, Adobe Suite, WordPress, Webflow, Notion, Jira",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Discutons de votre projet",
    "contact.description": "Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.",
    "contact.form.name": "Nom",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Envoyer",
    "contact.info.email": "Email",
    "contact.info.phone": "Téléphone",
    "contact.info.location": "Localisation",

    // Footer
    "footer.rights": "Tous droits réservés",
    "footer.made": "Conçu avec",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    // Hero
    "hero.tagline": "Digital Product Builder & UX/UI Designer",
    "hero.description": "I design interfaces that don't seek to impress, but to be truly effective.",
    "hero.cta.projects": "View my projects",
    "hero.cta.contact": "Contact me",

    // Floating elements
    "hero.badge.ux": "UX/UI Design",
    "hero.badge.product": "Product Builder",
    "hero.badge.branding": "Branding",
    "hero.badge.web": "Web Design",
    "hero.badge.ia": "AI & Automation",
    "hero.badge.motion": "Motion Design",

    // About
    "about.title": "About",
    "about.intro": "Hi, I'm Virabo.",
    "about.bio": "I've built my career by running over twenty web and mobile projects in parallel for startups, SMEs and major accounts like Accor. With over 35 clients supported, I've developed a way of working focused on clarity: structure quickly, understand usage and simplify what seems complex.",
    "about.bio2": "I love collaborating with teams, moving multiple projects forward at the same time and continuing to learn with each mission.",
    "about.stats.clients": "Clients",
    "about.stats.years": "Years experience",
    "about.stats.projects": "Projects delivered",

    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "A selection of my recent work",
    "projects.view": "View project",

    // Project descriptions
    "project.mercure.title": "Mercure Bucket List",
    "project.mercure.client": "Accor",
    "project.mercure.description": "Clean, mobile-first interface showcasing 50 global culinary experiences with an interactive map.",

    "project.novotel.title": "Novotel x Pixar",
    "project.novotel.client": "Disney Pixar / Accor",
    "project.novotel.description": "Immersive landing page inspired by the Lightyear universe to showcase family offerings.",

    "project.leave.title": "Leave",
    "project.leave.client": "Startup",
    "project.leave.description": "Simple and reassuring interface for recording and transmitting messages securely.",

    "project.driiink.title": "Driiink",
    "project.driiink.client": "Mobile App",
    "project.driiink.description": "Mobile-first app allowing customers to order drinks without waiting.",

    "project.situal.title": "Situal",
    "project.situal.client": "Web Agency",
    "project.situal.description": "Clear identity and simple website to quickly understand offers and request quotes.",

    "project.parella.title": "Parella Group",
    "project.parella.client": "Corporate",
    "project.parella.description": "WordPress multisite redesign for this leading corporate real estate consulting firm.",

    // Skills
    "skills.title": "Skills",
    "skills.subtitle": "My areas of expertise",

    "skills.ux.title": "UX Design & Research",
    "skills.ux.items": "Personas, User flows, Wireframes, User testing, Design Thinking",

    "skills.ui.title": "UI Design & Art Direction",
    "skills.ui.items": "Figma mockups, Design Systems, Visual identities, Motion Design",

    "skills.ia.title": "AI & Automation",
    "skills.ia.items": "Claude, ChatGPT, Midjourney, Figma AI, Workflow automation",

    "skills.project.title": "Project Management",
    "skills.project.items": "Agile Scrum, Kanban, Design Thinking, Team coordination",

    "skills.tools.title": "Tools",
    "skills.tools.items": "Figma, Adobe Suite, WordPress, Webflow, Notion, Jira",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Let's discuss your project",
    "contact.description": "Have a project in mind? Don't hesitate to contact me to discuss it.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.location": "Location",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.made": "Designed with",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  }, []);

  const t = useCallback(
    (key: string): string => {
      const translation = translations[language][key as keyof typeof translations.fr];
      return translation || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
