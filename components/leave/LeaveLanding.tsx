"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight, Shield, Eye, Heart, Lock, CheckCircle2, Star, Play,
  Mail, Phone, MapPin, Send, Users, Clock, FileCheck, Headphones, Info,
  Video, Mic, PenLine, Sparkles, Briefcase,
} from "lucide-react";
import { processSteps, pricingPlans, testimonials } from "@/lib/leave/leave-data";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const ILL = "/images/projects/leave/illustrations";

export default function LeaveLanding() {
  return (
    <div className="min-h-screen bg-white text-[#333] font-montserrat overflow-x-hidden">
      {/* ─── HEADER ─── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/leave-landing" className="flex items-center gap-2 text-xl font-bold text-[#5B7FD6]" style={{ fontFamily: "var(--font-grandstander), cursive" }}>
            <Send className="w-5 h-5" /> Leave
          </Link>
          <nav className="hidden md:flex gap-8">
            {["Services", "Valeurs", "Tarifs", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-zinc-500 hover:text-[#5B7FD6] transition-colors">{l}</a>
            ))}
          </nav>
          <Link href="/leave-app" className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#5B7FD6] text-white text-sm font-semibold hover:bg-[#4a6bc4] transition-colors">
            S&apos;inscrire
          </Link>
        </div>
      </header>

      {/* ═══════════════ HERO — 100vh ═══════════════ */}
      <section className="w-full md:min-h-screen bg-[#E8EDF4] overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-0 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <motion.div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6"
              initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="relative">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
                  style={{ fontFamily: "var(--font-grandstander), cursive" }}>
                  Plus qu&apos;un héritage,<br />
                  <span className="text-[#5B7FD6]">un message</span>
                </h1>
              </motion.div>

              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-lg text-zinc-500 max-w-lg leading-relaxed">
                Leave facilite et sécurise la réalisation et la transmission de messages (audio/vidéo/lettres) pour vos proches après votre disparition.
              </motion.p>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="/leave-app" className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#5B7FD6] px-8 py-4 text-sm font-semibold text-white hover:bg-[#4a6bc4] transition-colors overflow-visible">
                  <span className="relative z-10 flex items-center gap-2">Nos découvrir <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                  {/* Hand-drawn circle on hover/click */}
                  <motion.svg
                    className="absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] pointer-events-none"
                    viewBox="0 0 200 60"
                    initial="idle"
                    whileTap="draw"
                    whileHover="draw"
                  >
                    <motion.path
                      d="M 15 30 C 15 10, 60 3, 100 5 C 140 7, 188 14, 186 32 C 184 50, 140 55, 100 55 C 60 55, 14 48, 15 30"
                      fill="none"
                      strokeWidth="2.5"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      variants={{
                        idle: { pathLength: 0, opacity: 0 },
                        draw: { pathLength: 1, opacity: 0.7, transition: { pathLength: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }, opacity: { duration: 0.2 } } },
                      }}
                    />
                  </motion.svg>
                </Link>
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F5C6D0] px-8 py-4 text-sm font-semibold text-white hover:bg-[#f0b4c0] transition-colors">
                  En savoir plus
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4">
                {[
                  { value: "15,2K", label: "Utilisateurs actifs", icon: Users },
                  { value: "4,5K", label: "Messages créés", icon: Send },
                  { value: "100%", label: "Sécurisé", icon: Shield },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/60">
                      <stat.icon className="h-5 w-5 text-[#5B7FD6]" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-[#333]">{stat.value}</p>
                      <p className="text-xs text-zinc-500">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Image Collage with illustrations */}
            <motion.div className="relative h-[400px] sm:h-[500px] w-full"
              initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>

              {/* Floating decorative shapes */}
              <motion.div className="absolute -top-4 left-1/4 h-16 w-16 rounded-full bg-[#a0ced9]/30"
                animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
              <motion.div className="absolute bottom-0 right-1/4 h-12 w-12 rounded-lg bg-[#F5C6D0]/40"
                animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} />
              <motion.div className="absolute bottom-1/4 left-4 h-6 w-6 rounded-full bg-[#adf7b6]/40"
                animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />

              {/* Main image - family */}
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
                className="absolute left-1/2 top-0 -translate-x-1/2 h-52 w-52 sm:h-64 sm:w-64 rounded-2xl bg-[#F5C6D0]/30 p-3 shadow-lg">
                <Image src={`${ILL}/family-walk.png`} alt="Famille heureuse" width={250} height={250} className="h-full w-full rounded-xl object-contain" />
              </motion.div>

              {/* Second image - hearts */}
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
                className="absolute right-0 top-1/3 h-44 w-44 sm:h-56 sm:w-56 rounded-2xl bg-[#fcf5c7]/50 p-3 shadow-lg">
                <Image src={`${ILL}/hearts-hands.png`} alt="Couple faisant un coeur" width={220} height={220} className="h-full w-full rounded-xl object-contain" />
              </motion.div>

              {/* Third image - boy with grandparents */}
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
                className="absolute bottom-0 left-0 h-36 w-36 sm:h-48 sm:w-48 rounded-2xl bg-[#a0ced9]/20 p-3 shadow-lg">
                <Image src={`${ILL}/boy-grandparents.png`} alt="Garçon avec ses grands-parents" width={190} height={190} className="h-full w-full rounded-xl object-contain" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ POURQUOI LEAVE ═══════════════ */}
      <section id="valeurs" className="w-full py-20 md:py-28 bg-[#F5C6D0]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
            {/* Illustration - famille */}
            <motion.div {...fadeUp} className="relative rounded-3xl overflow-hidden bg-[#ffee93]/40 p-6 flex items-end justify-center min-h-[300px]">
              <Image src={`${ILL}/family-walk.png`} alt="Famille heureuse en promenade" width={350} height={280} className="relative z-10 h-[260px] w-auto object-contain" />
              <Image src={`${ILL}/heart.png`} alt="" width={24} height={24} className="absolute top-4 right-8 opacity-40" />
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.15, duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5C6D0] text-sm text-[#C4637A] font-medium mb-4">
                Pourquoi Leave ?
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-bricolage mb-8">
                Les valeurs que nous respectons, pour restituer votre message de la meilleure manière
              </h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                {[
                  { icon: Send, title: "Transmettez", desc: "Votre amour, votre sagesse, votre esprit." },
                  { icon: Users, title: "Accompagnez", desc: "Vos proches dans le deuil." },
                  { icon: Heart, title: "Réalisez", desc: "Un acte d'amour d'une valeur inestimable." },
                  { icon: Sparkles, title: "Impactez", desc: "Une vie, le mode de leur vie." },
                  { icon: Shield, title: "Sécurisez", desc: "Garantir la confidentialité de vos messages." },
                  { icon: Eye, title: "Modularité", desc: "Personnalisez chaque aspect de vos messages." },
                ].map((v, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-[#D4A853]/20">
                      <v.icon className="w-3 h-3 text-[#D4A853]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{v.title}</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROCESS ═══════════════ */}
      <section id="services" className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center space-y-4 mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8EDF4] text-sm text-[#5B7FD6] font-medium">
              <Clock className="w-3.5 h-3.5" /> Notre process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-bricolage">Les étapes de création de vos messages</h2>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
            {/* Left - illustration composition */}
            <motion.div {...fadeUp} className="relative min-h-[420px] flex items-center justify-center">
              <div className="relative w-full max-w-[360px] mx-auto">
                {/* Phone mockup bg */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-80 rounded-3xl bg-[#fcf5c7] border-2 border-[#ffee93]/50" />
                {/* Woman illustration */}
                <Image src={`${ILL}/woman-waving.png`} alt="Femme accueillante" width={200} height={280} className="relative z-10 mx-auto h-[300px] w-auto object-contain" />
                {/* Lock icon */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#E8EDF4] flex items-center justify-center">
                  <Lock className="w-5 h-5 text-[#5B7FD6]" />
                </div>
              </div>
            </motion.div>

            {/* Right - steps */}
            <div className="space-y-1">
              {[
                { ...processSteps[0], icon: Users, illust: "woman-waving.png" },
                { ...processSteps[1], icon: FileCheck, illust: "woman-book.png" },
                { ...processSteps[2], icon: Eye, illust: "searching.png" },
                { ...processSteps[3], icon: Video, illust: "camera.png" },
                { ...processSteps[4], icon: Heart, illust: "sitting-woman.png" },
              ].map((s, i) => (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#E8EDF4]/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#5B7FD6] text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-bold font-bricolage">{s.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed mt-1">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ VIDÉO ═══════════════ */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center space-y-4 mb-10">
            <h2 className="text-3xl font-bold font-bricolage">Découvrir nos process en vidéo</h2>
          </motion.div>
          <motion.div {...fadeUp} className="relative rounded-3xl overflow-hidden bg-[#F5C6D0] aspect-video flex items-center justify-center cursor-pointer group">
            {/* Decorative illustrations */}
            <Image src={`${ILL}/boy-grandparents.png`} alt="" width={180} height={180} className="absolute bottom-0 left-6 h-[160px] w-auto object-contain opacity-70" />
            <Image src={`${ILL}/heart-balloons.png`} alt="" width={80} height={80} className="absolute top-6 right-10 h-[70px] w-auto object-contain opacity-50" />
            {/* Play button */}
            <div className="relative z-10 w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-[#C4637A] ml-1" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ TARIFS ═══════════════ */}
      <section id="tarifs" className="w-full py-20 md:py-28 bg-[#FCF5C7]/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center space-y-4 mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#adf7b6]/30 text-sm text-green-700 font-medium">Tarifs</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-bricolage">Choisissez le pack répondant à votre besoin</h2>
            <p className="text-zinc-500 text-sm">Tous les packs sont sécurisés et à une durée de stockage illimité.</p>
          </motion.div>

          <div className="relative">
            {/* Decorative hearts */}
            <Image src={`${ILL}/heart.png`} alt="" width={28} height={28} className="absolute -top-6 -left-4 opacity-30" />
            <Image src={`${ILL}/heart.png`} alt="" width={20} height={20} className="absolute -bottom-4 -right-2 opacity-20" />

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Message unique */}
              <motion.div {...fadeUp} className="rounded-2xl border border-[#a0ced9]/30 bg-[#E8EDF4]/50 p-8 space-y-5">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold font-bricolage text-lg">Message unique</h3>
                  <Star className="w-4 h-4 text-[#D4A853]" />
                </div>
                <div>
                  <span className="text-5xl font-bold font-bricolage">59<span className="text-2xl">€</span></span>
                  <span className="text-zinc-400 text-sm ml-1">TTC</span>
                </div>
                <ul className="space-y-3">
                  {["1 message audio/vidéo", "1 message texte", "Sécurisation, conservation et protection", "Durée de stockage illimité", "Renouvellement optionnel", "Restitution sécurisé du message"].map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-zinc-600">
                      <CheckCircle2 className="h-4 w-4 text-[#5B7FD6] shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl bg-[#5B7FD6] text-white text-sm font-semibold hover:bg-[#4a6bc4] transition-colors">
                  Nous découvrir
                </button>
              </motion.div>

              {/* Message illimité */}
              <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }} className="rounded-2xl border border-[#adf7b6]/40 bg-[#adf7b6]/10 p-8 space-y-5">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold font-bricolage text-lg">Message illimité</h3>
                  <Star className="w-4 h-4 text-[#D4A853]" />
                  <Star className="w-4 h-4 text-[#D4A853]" />
                </div>
                <div>
                  <span className="text-5xl font-bold font-bricolage">149<span className="text-2xl">€</span></span>
                  <span className="text-zinc-400 text-sm ml-1">TTC</span>
                </div>
                <ul className="space-y-3">
                  {["Messages audio/vidéo illimités", "Destinataires illimités", "Sécurisation, conservation et protection", "Durée de stockage illimité", "Renouvellement optionnel", "Restitution sécurisé du message"].map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-zinc-600">
                      <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl bg-[#4CAF50] text-white text-sm font-semibold hover:bg-[#43A047] transition-colors">
                  Nous découvrir
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ GARANTIE SÉCURITÉ ═══════════════ */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/15 text-sm text-[#B8920A] font-medium mb-4">
              Garanties de sécurité
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-bricolage mb-10">
              Les valeurs que nous respectons, pour restituer votre message de la meilleure manière
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            {/* Illustration - person with paper plane */}
            <motion.div {...fadeUp} className="relative flex items-center justify-center min-h-[300px]">
              <Image src={`${ILL}/woman-presenting.png`} alt="Femme présentant" width={200} height={250} className="h-[230px] w-auto object-contain" />
              {/* Cloud + lock decorative */}
              <div className="absolute top-4 right-12 w-16 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center">
                <Lock className="w-5 h-5 text-zinc-400" />
              </div>
              <div className="absolute top-0 right-4 w-10 h-8 rounded-xl bg-zinc-50" />
            </motion.div>

            {/* Cards */}
            <motion.div {...fadeUp} transition={{ delay: 0.15, duration: 0.5 }} className="space-y-4">
              {[
                {
                  title: "Confidentialité et Sécurité",
                  icon: Lock,
                  desc: "Votre message ne sera jamais consulté, pas même par nos équipes. Chiffrement de bout en bout, certifications ISO 27001 et SOC2.",
                  borderColor: "#ffc09f",
                },
                {
                  title: "Contrôle de présence",
                  icon: CheckCircle2,
                  desc: "Un petit questionnaire envoyé à la fréquence de votre choix. Sans réponse, vos référents seront contactés automatiquement.",
                  borderColor: "#F5C6D0",
                },
                {
                  title: "Restitution des messages",
                  icon: Send,
                  desc: "Une fois informé, nous procéderons aux prises de contact avec vos destinataires et restituerons vos messages fidèlement.",
                  borderColor: "#a0ced9",
                },
              ].map((v, i) => (
                <div key={i} className="rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition-shadow" style={{ borderLeftWidth: 3, borderLeftColor: v.borderColor }}>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold font-bricolage">{v.title}</h3>
                    <v.icon className="w-4 h-4" style={{ color: v.borderColor }} />
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ACCOMPAGNEMENT ═══════════════ */}
      <section className="w-full py-20 md:py-28 bg-[#E8EDF4]/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center space-y-4 mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5C6D0]/30 text-sm text-[#C4637A] font-medium">Accompagnement</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-bricolage max-w-2xl mx-auto">
              Nous vous accompagnons dans la création de votre message
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: FileCheck, title: "Pré-discours.com", desc: "Consultez nos modèles de discours pour vous inspirer.", img: "woman-book.png" },
              { icon: Star, title: "Inspirez-vous", desc: "Parcourez des exemples pour trouver le ton juste.", img: "searching.png" },
              { icon: Video, title: "Template ou enregistrement", desc: "Choisissez votre format et lancez-vous.", img: "camera.png" },
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }} className="rounded-2xl border border-zinc-100 bg-white p-6 hover:shadow-md transition-shadow">
                <div className="h-28 flex items-center justify-center mb-4">
                  <Image src={`${ILL}/${s.img}`} alt={s.title} width={80} height={80} className="h-[70px] w-auto object-contain" />
                </div>
                <h3 className="font-bold text-sm font-bricolage mb-2 text-center">{s.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed text-center">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ AIDE ═══════════════ */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold font-bricolage">Nous pouvons vous aider</h2>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <Image src={`${ILL}/customer-service.png`} alt="Service client" width={120} height={120} className="h-[100px] w-auto object-contain" />
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5B7FD6] text-white text-sm font-semibold hover:bg-[#4a6bc4] transition-colors">
                <Headphones className="w-4 h-4" /> Contacter le SAV
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-200 text-sm font-semibold hover:bg-zinc-50 transition-colors">
                <Info className="w-4 h-4" /> Prise d&apos;informations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TÉMOIGNAGES ═══════════════ */}
      <section className="w-full py-20 md:py-28 bg-[#E8EDF4]/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center space-y-4 mb-14">
            <h2 className="text-3xl font-bold font-bricolage flex items-center justify-center gap-2">
              Nos témoignages sont certifiés <Shield className="w-6 h-6 text-[#5B7FD6]" />
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => {
              const headshots = ["smile-woman.png", "smile-man.png", "smile-woman2.png"];
              return (
                <motion.div key={t.id} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }} className="rounded-2xl border border-zinc-100 bg-white p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto">
                    <Image src={`${ILL}/${headshots[i]}`} alt={t.name} width={64} height={64} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`w-4 h-4 ${j < Math.floor(t.rating) ? "text-[#D4A853] fill-[#D4A853]" : "text-zinc-200"}`} />
                    ))}
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                  <p className="font-bold text-sm">{t.name}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ PARTENAIRES ═══════════════ */}
      <section className="w-full py-16 bg-[#FCF5C7]/30 border-y border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <h3 className="font-bold font-bricolage text-lg mb-3">Nos partenaires</h3>
            <p className="text-sm text-zinc-500 max-w-lg mb-6">Nos partenaires nous soutiennent et nous accompagnent dans cette mission.</p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "Assurance Vie", icon: Shield },
                { name: "Notaires de France", icon: FileCheck },
                { name: "La Poste", icon: Mail },
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-xl border border-zinc-100 bg-white">
                  <p.icon className="w-5 h-5 text-[#5B7FD6]" />
                  <span className="text-sm font-medium">{p.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <section id="contact" className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold font-bricolage mb-6">Formulaire de contact</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input placeholder="Nom" className="px-4 py-3 rounded-xl border border-zinc-200 text-sm" readOnly />
                  <input placeholder="Prénom" className="px-4 py-3 rounded-xl border border-zinc-200 text-sm" readOnly />
                </div>
                <input placeholder="Adresse email" className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm" readOnly />
                <input placeholder="Sujet" className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm" readOnly />
                <textarea placeholder="Votre message..." className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm h-28 resize-none" readOnly />
                <button className="w-full py-3 rounded-xl bg-[#5B7FD6] text-white text-sm font-semibold">Envoyer</button>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.15, duration: 0.5 }}>
              <h2 className="text-2xl font-bold font-bricolage mb-6">Contactez nous</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-zinc-600"><Mail className="h-4 w-4 text-[#5B7FD6]" /> contact@leave.ms</div>
                <div className="flex items-center gap-3 text-sm text-zinc-600"><Phone className="h-4 w-4 text-[#5B7FD6]" /> +33 1 23 45 67 89</div>
                <div className="flex items-center gap-3 text-sm text-zinc-600"><MapPin className="h-4 w-4 text-[#5B7FD6]" /> Paris, France</div>
              </div>

              {/* Illustration + newsletter */}
              <div className="flex items-end gap-4 mb-6">
                <Image src={`${ILL}/woman-writing.png`} alt="Femme écrivant" width={100} height={120} className="h-[100px] w-auto object-contain" />
              </div>

              <div className="rounded-2xl bg-[#5B7FD6] text-white p-6">
                <h3 className="font-bold font-bricolage mb-2">S&apos;inscrire à notre newsletter</h3>
                <p className="text-xs text-white/80 mb-4">Recevez nos conseils pour préparer vos messages.</p>
                <div className="flex gap-2">
                  <input placeholder="Votre email" className="flex-1 px-4 py-2.5 rounded-lg text-sm text-[#333] bg-white" readOnly />
                  <button className="px-4 py-2.5 rounded-lg bg-white/20 text-sm font-semibold">OK</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="w-full bg-[#1A1A1A] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-lg font-bold font-bricolage">
            <Send className="w-5 h-5 text-[#5B7FD6]" /> Leave
          </div>
          <p className="text-xs text-zinc-500">
            Projet UX/UI par <Link href="/" className="text-[#5B7FD6] hover:underline">Virabo Hoy</Link>
          </p>
          <div className="flex gap-4 text-xs text-zinc-400">
            <span>Mentions légales</span>
            <span>Confidentialité</span>
            <span>CGV</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
