"use client";

import { useLanguage } from "@/lib/language-context";
import Image from "next/image";
import { Linkedin, Instagram, Mail } from "lucide-react";

export default function AboutSection() {
  const { t } = useLanguage();

  const stats = [
    { value: "35+", label: t("about.stats.clients") },
    { value: "5+", label: t("about.stats.years") },
    { value: "20+", label: t("about.stats.projects") },
  ];

  const socialLinks = [
    {
      href: "https://linkedin.com/in/virabo-hoy/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/viracrea/",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "mailto:Virabhoy@gmail.com",
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-4 bg-[#0099FF] rounded-3xl rotate-6" />
              <div className="absolute inset-4 bg-[#0066CC] rounded-3xl rotate-3" />

              {/* Photo */}
              <div className="relative w-full h-full bg-[#F5F5F5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Virabo Hoy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 lg:right-10 bg-white rounded-2xl shadow-xl p-4 border border-[#E5E5E5]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0099FF] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✨</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Paris</p>
                  <p className="text-sm text-[#888888]">Île-de-France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("about.title")}
            </h2>

            <p className="text-2xl font-medium text-[#0099FF] mb-4">
              {t("about.intro")}
            </p>

            <p className="text-lg text-[#888888] mb-4 leading-relaxed">
              {t("about.bio")}
            </p>

            <p className="text-lg text-[#888888] mb-8 leading-relaxed">
              {t("about.bio2")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-[#0099FF]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#888888] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#F5F5F5] hover:bg-[#0099FF] hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
