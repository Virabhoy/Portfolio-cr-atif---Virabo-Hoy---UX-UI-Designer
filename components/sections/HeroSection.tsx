"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "@/lib/language-context";
import { Gravity, MatterBody } from "@/components/ui/gravity";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const { t } = useLanguage();
  const [gravityActive, setGravityActive] = useState(false);

  const gravity = useMemo(() => (
    gravityActive ? { x: 0, y: 1 } : { x: 0, y: 0 }
  ), [gravityActive]);

  const badges: { key: string; color: string; x: string; y: string; angle?: number }[] = [
    // Single row just above "VIRABO HOY" — evenly spaced, y=25%
    { key: "hero.badge.ux", color: "bg-primary", x: "10%", y: "25%" },
    { key: "hero.badge.product", color: "bg-[#E794DA]", x: "27%", y: "25%" },
    { key: "hero.badge.ia", color: "bg-[#ffd726]", x: "44%", y: "25%" },
    { key: "hero.badge.web", color: "bg-[#ff5941]", x: "56%", y: "25%" },
    { key: "hero.badge.branding", color: "bg-[#1f464d]", x: "73%", y: "25%" },
    { key: "hero.badge.motion", color: "bg-orange-500", x: "90%", y: "25%" },
  ];

  const handleBadgeClick = () => {
    if (!gravityActive) {
      setGravityActive(true);
    }
  };

  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      {/* Content Layer - z-30 to be above Gravity layer */}
      <div className="relative z-30 container-custom flex flex-col items-center justify-center min-h-screen text-center text-white pt-20 pointer-events-none">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
          VIRABO HOY
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl font-medium opacity-90 mb-4">
          {t("hero.tagline")}
        </p>

        {/* Description */}
        <p className="text-base md:text-lg max-w-2xl mx-auto opacity-80 mb-8 leading-relaxed">
          {t("hero.description")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 pointer-events-auto">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <a href="#projects">{t("hero.cta.projects")}</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary"
            asChild
          >
            <a href="#contact">{t("hero.cta.contact")}</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator - z-30 to be above Gravity layer */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-30"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
      </a>

      {/* Mobile — static badge row (no physics) */}
      <div className="md:hidden relative z-20 px-4 -mt-4 mb-4">
        <div className="flex flex-wrap justify-center gap-2">
          {badges.map((badge) => (
            <div
              key={badge.key}
              className={`${badge.color} text-white text-xs font-medium rounded-full px-4 py-2 shadow-md select-none`}
            >
              {t(badge.key)}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — Gravity Physics Layer */}
      <div className="hidden md:block absolute inset-0 z-20 pointer-events-auto" onClick={handleBadgeClick}>
        <Gravity
          gravity={gravity}
          className="w-full h-full"
          grabCursor={true}
          resetOnResize={true}
        >
          {/* Logo — centered at top */}
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.4, density: 0.003, isStatic: !gravityActive }}
            x="50%"
            y="12%"
            angle={0}
          >
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-2xl hover:cursor-grab select-none bg-white">
              <Image
                src="/images/logo.png"
                alt="Virabo Hoy Logo"
                width={144}
                height={144}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </MatterBody>

          {/* Shelves — wooden platforms to catch falling badges */}
          <MatterBody
            matterBodyOptions={{ isStatic: true, friction: 1, restitution: 0.05 }}
            x="18%"
            y="82%"
            angle={0}
          >
            <div className="w-44 md:w-56 h-3 rounded-sm bg-gradient-to-b from-[#A0784A] to-[#7A5C38] shadow-md border-b-2 border-[#6B4F30]" />
          </MatterBody>

          <MatterBody
            matterBodyOptions={{ isStatic: true, friction: 1, restitution: 0.05 }}
            x="50%"
            y="88%"
            angle={0}
          >
            <div className="w-52 md:w-64 h-3 rounded-sm bg-gradient-to-b from-[#A0784A] to-[#7A5C38] shadow-md border-b-2 border-[#6B4F30]" />
          </MatterBody>

          <MatterBody
            matterBodyOptions={{ isStatic: true, friction: 1, restitution: 0.05 }}
            x="82%"
            y="80%"
            angle={0}
          >
            <div className="w-40 md:w-52 h-3 rounded-sm bg-gradient-to-b from-[#A0784A] to-[#7A5C38] shadow-md border-b-2 border-[#6B4F30]" />
          </MatterBody>

          {/* Skill badges — positioned above shelves, static until clicked */}
          {badges.map((badge) => (
            <MatterBody
              key={badge.key}
              matterBodyOptions={{
                friction: 0.5,
                restitution: 0.3,
                density: 0.002,
                isStatic: !gravityActive,
              }}
              x={badge.x}
              y={badge.y}
              angle={badge.angle || 0}
            >
              <div
                className={`${badge.color} text-white text-sm md:text-lg lg:text-xl font-medium rounded-full px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 shadow-lg hover:cursor-grab select-none whitespace-nowrap transition-transform ${!gravityActive ? "hover:scale-105" : ""}`}
              >
                {t(badge.key)}
              </div>
            </MatterBody>
          ))}
        </Gravity>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-dark/30 rounded-full blur-3xl" />
    </section>
  );
}
