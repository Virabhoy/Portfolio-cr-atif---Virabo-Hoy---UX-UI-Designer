"use client";

import { useLanguage } from "@/lib/language-context";
import {
  Lightbulb,
  Palette,
  Bot,
  Users,
  Wrench,
} from "lucide-react";

export default function SkillsSection() {
  const { t } = useLanguage();

  const skills = [
    {
      titleKey: "skills.ux.title",
      itemsKey: "skills.ux.items",
      icon: Lightbulb,
      color: "bg-blue-500",
    },
    {
      titleKey: "skills.ui.title",
      itemsKey: "skills.ui.items",
      icon: Palette,
      color: "bg-pink-500",
    },
    {
      titleKey: "skills.ia.title",
      itemsKey: "skills.ia.items",
      icon: Bot,
      color: "bg-purple-500",
    },
    {
      titleKey: "skills.project.title",
      itemsKey: "skills.project.items",
      icon: Users,
      color: "bg-emerald-500",
    },
    {
      titleKey: "skills.tools.title",
      itemsKey: "skills.tools.items",
      icon: Wrench,
      color: "bg-orange-500",
    },
  ];

  const tools = [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
    { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
    { name: "After Effects", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "Webflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg" },
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill) => (
            <div
              key={skill.titleKey}
              className="group p-6 bg-muted rounded-2xl hover:bg-primary hover:text-white transition-all duration-300"
            >
              <div
                className={`w-14 h-14 ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors`}
              >
                <skill.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3">{t(skill.titleKey)}</h3>

              <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">
                {t(skill.itemsKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="bg-muted rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            {t("skills.tools.title")}
          </h3>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 p-3 bg-white rounded-2xl shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
