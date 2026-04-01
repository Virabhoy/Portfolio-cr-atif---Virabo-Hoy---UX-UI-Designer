"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu, X, ArrowRight, ArrowUpRight,
  Building, Home, RefreshCw,
  BookOpen, Star, CheckCircle2,
  Wallet, FileText, MessageSquare, Search, Wrench, Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MenuVertical } from "@/components/ui/menu-vertical";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ReviewStars } from "@/components/ui/animated-cards-stack";
import { Banner } from "@/components/ui/banner";

/* Animations — visible par défaut, l'animation est un bonus */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const TESTIMONIALS = [
  {
    id: "marc",
    name: "Marc D.",
    profession: "Locataire",
    rating: 5,
    description:
      "Marc a utilisé notre application pour trouver un appartement correspondant à ses critères et communiquer directement avec les propriétaires. Il a économisé du temps et trouvé le bien idéal pour sa famille.",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: "sylvie",
    name: "Sylvie M.",
    profession: "Propriétaire",
    rating: 4.5,
    description:
      "Notre application a aidé Sylvie à trouver des locataires sérieux, signer rapidement un contrat de location, suivre les travaux en temps réel et gérer facilement ses dépenses et revenus.",
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
  },
];

const NAV_ITEMS = [
  { label: "Qui sommes nous", href: "#about" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Étude UX", href: "/cocoon-ux" },
];

const FEATURES = [
  { title: "Gestion financière", icon: Wallet, items: ["Quittances de loyer automatiques", "Suivi des dépenses et revenus", "Prélèvement SEPA intégré", "Bilans financiers personnalisés"], color: "#FF6B6B" },
  { title: "Documents & Baux", icon: FileText, items: ["Modèle de bail pré-rempli", "États des lieux numériques", "Archivage sécurisé de documents", "Modèles de lettres types"], color: "#e09f3e" },
  { title: "Communication", icon: MessageSquare, items: ["Messagerie interne propriétaire-locataire", "Notifications en temps réel", "Partage de documents simplifié", "Carnet d'adresses intégré"], color: "#335c67" },
  { title: "Recherche & Annonces", icon: Search, items: ["Propositions d'offres adaptées", "Évaluation du prix de marché", "Comparatifs des loyers du quartier", "Publication d'annonces en un clic"], color: "#FF6B6B" },
  { title: "Travaux & Entretien", icon: Wrench, items: ["Suivi des travaux en temps réel", "Devis et mise en relation artisans", "Historique d'entretien du bien", "Photos et factures archivées"], color: "#e09f3e" },
  { title: "Juridique & Pro", icon: Scale, items: ["Mise en relation notaires et avocats", "Outil de révision du loyer", "Connexion bancaire sécurisée", "API pour gestionnaires multi-biens"], color: "#335c67" },
];

const PLANS = [
  { title: "Essentiel", description: "Pour les propriétaires d'un seul bien", price: "0€", period: "/mois", highlighted: false, features: ["1 bien", "Quittances de loyer", "Messagerie interne", "Documents de base"], buttonText: "Commencer gratuitement" },
  { title: "Premium", description: "La solution complète pour gérer sereinement", price: "9.99€", originalPrice: "14.99€", period: "/mois", highlighted: true, features: ["Jusqu'à 5 biens", "Prélèvement SEPA", "Baux pré-remplis", "Suivi des dépenses", "États des lieux", "Support prioritaire"], buttonText: "Choisir Premium" },
  { title: "Pro", description: "Pour les gestionnaires multi-biens", price: "29.99€", period: "/mois", highlighted: false, features: ["Biens illimités", "Comparatifs de marché", "Connexion bancaire", "Notaires & avocats", "Bilans personnalisés", "API & intégrations"], buttonText: "Choisir Pro" },
];

const BENCHMARK_ROWS = [
  { feature: "Messagerie intégrée", values: [false, true, false, true] },
  { feature: "Prélèvement SEPA", values: [true, true, false, true] },
  { feature: "Bail numérique", values: [false, true, true, true] },
  { feature: "Suivi des dépenses", values: [true, true, true, true] },
  { feature: "Comparatifs marché", values: [false, false, false, true] },
  { feature: "Application mobile", values: [false, false, false, true] },
  { feature: "Gratuit pour démarrer", values: [true, false, false, true] },
];

export default function CocoonLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [userType, setUserType] = useState<"locataire" | "proprietaire">("locataire");
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#333] font-montserrat">
      {/* ─── HEADER ─── */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-zinc-100 transition-shadow ${scrollY > 50 ? "shadow-sm" : ""}`}
      >
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/cocoon" className="flex items-center gap-2">
            <Image src="/images/projects/cocoon/logo.png" alt="Cocoon" width={100} height={30} className="h-7 w-auto invert" />
          </Link>
          <nav className="hidden md:flex gap-6">
            {NAV_ITEMS.map(({ label, href }) => (
              <Link key={label} href={href} className="text-sm text-zinc-500 hover:text-[#FF6B6B] transition-colors">{label}</Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button size="sm" className="rounded-full bg-[#FF6B6B] hover:bg-[#e05555] text-white" asChild>
              <a href="#signup">S&apos;inscrire</a>
            </Button>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[#1A1A1A] md:hidden flex flex-col items-center justify-center">
            <div className="absolute top-0 right-0 p-5">
              <button onClick={() => setMenuOpen(false)}><X className="h-6 w-6 text-white" /></button>
            </div>
            <MenuVertical menuItems={NAV_ITEMS} color="#e09f3e" onItemClick={() => setMenuOpen(false)} />
            <Button className="mt-10 rounded-full bg-[#FF6B6B] hover:bg-[#e09f3e] text-white px-8" asChild>
              <a href="#signup" onClick={() => setMenuOpen(false)}>S&apos;inscrire à la beta</a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* ═══════════════════ HERO ═══════════════════ */}
        <section className="relative w-full md:min-h-screen bg-zinc-950 text-white overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <Image src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&h=1000&fit=crop" alt="Salon cosy lumière dorée" fill className="object-cover opacity-50" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-20 lg:px-8 w-full">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
              <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                      Gestion Locative Simplifiée <Star className="w-3.5 h-3.5 text-[#e09f3e] fill-[#e09f3e]" />
                    </span>
                  </div>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.95] font-bricolage">
                  Piloter Tout<br />De Chez{" "}
                  <span className="bg-gradient-to-br from-white via-white to-[#e09f3e] bg-clip-text text-transparent">Soi</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="max-w-xl text-lg text-zinc-300 leading-relaxed">
                  Gérez vos biens, vos locataires et vos finances depuis une seule application. Quittances, baux, paiements — tout est centralisé.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-4">
                  <a href="#signup" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6B6B] px-8 py-4 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#e09f3e] active:scale-[0.98]">
                    S&apos;inscrire à la beta <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <Link href="/cocoon-ux" className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20">
                    <BookOpen className="w-4 h-4" /> Étude UX
                  </Link>
                </motion.div>
              </div>
              <div className="lg:col-span-5 space-y-6 lg:mt-12">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-[#FF6B6B]/10 blur-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                        <Building className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold tracking-tight text-white">42%</div>
                        <div className="text-sm text-zinc-400">Des propriétaires gèrent seuls</div>
                      </div>
                    </div>
                    <div className="space-y-3 mb-8">
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-400">Satisfaction utilisateurs</span>
                        <span className="text-white font-medium">96%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/50">
                        <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#e09f3e]" />
                      </div>
                    </div>
                    <div className="h-px w-full bg-white/10 mb-6" />
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {[{ value: "300M", label: "Marché" }, { value: "13M", label: "Locataires" }, { value: "100%", label: "Gratuit" }].map((s, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <span className="text-xl font-bold text-white sm:text-2xl">{s.value}</span>
                          <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">{s.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2">
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                        <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" /></span>
                        BETA OUVERTE
                      </div>
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                        <Star className="w-3 h-3 text-[#e09f3e]" /> GRATUIT
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ QUI SOMMES NOUS ═══════════════════ */}
        <section id="about" className="w-full py-20 md:py-28 bg-white text-zinc-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-[80px] sm:text-[120px] lg:text-[160px] font-bold font-bricolage leading-none tracking-tighter opacity-5 absolute top-8 left-6">COCON</h2>
            <motion.div {...fadeUp} className="relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-16">
              <div className="space-y-6">
                <h3 className="text-3xl sm:text-4xl font-bold font-bricolage">QUI SOMMES NOUS ?</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Notre application est une solution innovante conçue pour simplifier la vie des locataires et des propriétaires. Que vous soyez en recherche de biens immobiliers, la gestion immobilière facilite l&apos;ensemble des démarches administratives. Notre mission : offrir une expérience fluide, transparente et accessible pour toutes les parties impliquées dans la location.
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  En combinant des outils de gestion puissants avec une interface intuitive, nous permettons à nos utilisateurs de piloter leur vie locative depuis leur canapé. Fini le stress des papiers, des relances et des calculs — Cocoon s&apos;occupe de tout.
                </p>
              </div>
              <div className="relative h-[350px] rounded-3xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop" alt="Salon moderne" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════ COMMENT ÇA MARCHE ═══════════════════ */}
        <section className="w-full py-20 md:py-28 bg-[#FFF8F0]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="text-center space-y-4 mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bricolage tracking-tight">COMMENT ÇA MARCHE ?</h2>
              <p className="text-zinc-500 max-w-xl mx-auto">En 4 étapes simples, prenez le contrôle de votre gestion locative.</p>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Créez votre compte", desc: "Inscrivez-vous gratuitement en tant que propriétaire ou locataire. Votre profil est prêt en 2 minutes.", color: "#FF6B6B" },
                { step: "02", title: "Ajoutez vos biens", desc: "Renseignez les informations de votre bien immobilier : adresse, surface, loyer, photos. Un bail pré-rempli est généré automatiquement.", color: "#e09f3e" },
                { step: "03", title: "Gérez au quotidien", desc: "Quittances automatiques, suivi des paiements, messagerie avec vos locataires, gestion des dépenses et travaux — tout est centralisé.", color: "#335c67" },
                { step: "04", title: "Suivez vos résultats", desc: "Bilans financiers personnalisés, comparatifs de marché, historique complet. Gardez une vision claire de votre patrimoine.", color: "#FF6B6B" },
              ].map((s, i) => (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }} className="space-y-4">
                  <div className="text-5xl font-bold font-bricolage opacity-15" style={{ color: s.color }}>{s.step}</div>
                  <h3 className="text-lg font-bold font-bricolage">{s.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ FONCTIONNALITÉS ═══════════════════ */}
        <section id="features" className="w-full py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="space-y-4 mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bricolage tracking-tight">NOS FONCTIONNALITÉS.</h2>
              <p className="text-zinc-500 max-w-2xl">Tout ce dont vous avez besoin pour gérer vos biens immobiliers, réunis dans une seule application.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {FEATURES.map((cat, i) => (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08, duration: 0.5 }} className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${cat.color}15` }}>
                    <cat.icon className="w-5 h-5" style={{ color: cat.color }} />
                  </div>
                  <h3 className="font-bold font-bricolage text-lg">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.items.map((it, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-zinc-600">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" style={{ color: cat.color }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ LE MARCHÉ ═══════════════════ */}
        <section className="w-full py-20 md:py-28 bg-[#FFF8F0]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="space-y-4 mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bricolage tracking-tight">LE MARCHÉ.</h2>
              <p className="text-zinc-500 max-w-2xl">La gestion locative en France : un marché fragmenté, une opportunité immense.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Donut chart */}
              <motion.div {...fadeUp} className="rounded-2xl border border-zinc-200 bg-white p-8">
                <h3 className="font-bold font-bricolage text-lg mb-6">Répartition de la gestion locative</h3>
                <div className="flex items-center gap-8">
                  <div className="relative w-40 h-40 shrink-0">
                    <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#f0f0f0" strokeWidth="16" />
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#FF6B6B" strokeWidth="16" strokeDasharray="132 182" strokeLinecap="round" />
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#e09f3e" strokeWidth="16" strokeDasharray="100 214" strokeDashoffset="-132" strokeLinecap="round" />
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#335c67" strokeWidth="16" strokeDasharray="82 232" strokeDashoffset="-232" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold font-bricolage">7.5M</span>
                      <span className="text-[10px] text-zinc-400">logements</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { color: "#FF6B6B", label: "Autogestion", value: "42%", desc: "3.15M propriétaires gèrent seuls" },
                      { color: "#e09f3e", label: "Agences", value: "32%", desc: "2.4M via des agences traditionnelles" },
                      { color: "#335c67", label: "Autres", value: "26%", desc: "1.95M via administrateurs de biens" },
                    ].map((s, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-3 h-3 rounded-full mt-1 shrink-0" style={{ backgroundColor: s.color }} />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm">{s.label}</span>
                            <span className="text-sm font-bold" style={{ color: s.color }}>{s.value}</span>
                          </div>
                          <p className="text-xs text-zinc-500">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Bar chart */}
              <motion.div {...fadeUp} transition={{ delay: 0.15, duration: 0.5 }} className="rounded-2xl border border-zinc-200 bg-white p-8">
                <h3 className="font-bold font-bricolage text-lg mb-6">Croissance du marché proptech</h3>
                <div className="space-y-4">
                  {[
                    { year: "2019", value: 45, amount: "45M€" },
                    { year: "2020", value: 62, amount: "62M€" },
                    { year: "2021", value: 85, amount: "85M€" },
                    { year: "2022", value: 120, amount: "120M€" },
                    { year: "2023", value: 180, amount: "180M€" },
                    { year: "2024", value: 250, amount: "250M€" },
                  ].map((d, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500 w-10 shrink-0 font-mono">{d.year}</span>
                      <div className="flex-1 h-8 bg-zinc-100 rounded-lg overflow-hidden">
                        <div className="h-full rounded-lg" style={{ width: `${(d.value / 250) * 100}%`, background: `linear-gradient(90deg, #FF6B6B, ${i >= 4 ? '#e09f3e' : '#FF6B6B'})` }} />
                      </div>
                      <span className="text-xs font-bold text-zinc-700 w-12 text-right">{d.amount}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-zinc-400 mt-4 flex items-center gap-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#FF6B6B]" /> +18% de croissance annuelle moyenne
                </p>
              </motion.div>
            </div>

            {/* TAM / SAM / SOM */}
            <motion.div {...fadeUp} className="rounded-2xl border border-zinc-200 bg-white p-8 mb-12">
              <h3 className="font-bold font-bricolage text-lg mb-6">Opportunité de marché (TAM / SAM / SOM)</h3>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-64 h-64 shrink-0">
                  <div className="absolute inset-0 rounded-full bg-[#FF6B6B]/10 border-2 border-[#FF6B6B]/20 flex items-center justify-center">
                    <span className="absolute top-3 text-[10px] font-bold text-[#FF6B6B] uppercase tracking-wider">TAM</span>
                  </div>
                  <div className="absolute inset-8 rounded-full bg-[#e09f3e]/15 border-2 border-[#e09f3e]/30 flex items-center justify-center">
                    <span className="absolute top-2 text-[10px] font-bold text-[#e09f3e] uppercase tracking-wider">SAM</span>
                  </div>
                  <div className="absolute inset-16 rounded-full bg-[#335c67]/20 border-2 border-[#335c67]/40 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-lg font-bold font-bricolage text-[#335c67]">15M€</p>
                      <p className="text-[9px] text-zinc-500">SOM Année 1</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 flex-1">
                  {[
                    { label: "TAM — Marché total adressable", value: "300M€+", desc: "L'ensemble du marché de la gestion locative en France.", color: "#FF6B6B" },
                    { label: "SAM — Marché accessible", value: "125M€", desc: "Propriétaires particuliers autogérants, digitalisables.", color: "#e09f3e" },
                    { label: "SOM — Objectif année 1", value: "15M€", desc: "Early adopters urbains, 25-45 ans, 1 à 3 biens.", color: "#335c67" },
                  ].map((t, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 self-stretch rounded-full shrink-0" style={{ backgroundColor: t.color }} />
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: t.color }}>{t.label}</span>
                          <span className="text-lg font-bold font-bricolage">{t.value}</span>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed mt-1">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Constat / Positionnement */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div {...fadeUp} className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-4">
                <h3 className="font-bold font-bricolage text-lg">Le constat</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Les propriétaires particuliers jonglent entre tableurs Excel, courriers postaux et échanges informels. Les solutions existantes sont soit trop chères (agences : 7-10% du loyer), soit trop complexes, soit incomplètes.
                </p>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {[
                    { emoji: "💸", label: "Agences chères", sub: "7-10% du loyer" },
                    { emoji: "😵", label: "Outils complexes", sub: "Pro uniquement" },
                    { emoji: "📝", label: "Papier partout", sub: "Zéro digitalisation" },
                  ].map((p, i) => (
                    <div key={i} className="text-center rounded-xl bg-[#FFF8F0] p-3">
                      <span className="text-xl">{p.emoji}</span>
                      <p className="text-[10px] font-bold mt-1">{p.label}</p>
                      <p className="text-[9px] text-zinc-400">{p.sub}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }} className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-4">
                <h3 className="font-bold font-bricolage text-lg">Notre positionnement</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Cocoon : la première solution tout-en-un, mobile-first et freemium, pensée pour les particuliers. Gratuit pour un bien, premium pour les multi-propriétaires.
                </p>
                <div className="relative rounded-xl border border-zinc-200 bg-[#FFF8F0] p-4 mt-2">
                  <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-2"><span>Simple</span><span>Complexe</span></div>
                  <div className="relative h-24">
                    <div className="absolute inset-x-0 top-1/2 h-px bg-zinc-200" />
                    <div className="absolute inset-y-0 left-1/2 w-px bg-zinc-200" />
                    <div className="absolute top-2 right-4 w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-[8px] font-bold text-zinc-500">R</div>
                    <div className="absolute top-4 right-16 w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-[8px] font-bold text-zinc-500">U</div>
                    <div className="absolute bottom-2 right-8 w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-[8px] font-bold text-zinc-500">L</div>
                    <div className="absolute bottom-1 left-6 w-10 h-10 rounded-full bg-[#FF6B6B] flex items-center justify-center text-[9px] font-bold text-white shadow-lg ring-2 ring-[#FF6B6B]/30">C</div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-zinc-400 mt-2"><span>Accessible</span><span>Cher</span></div>
                  <div className="flex flex-wrap gap-2 mt-3 text-[9px]">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#FF6B6B]" /> Cocoon</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-zinc-300" /> R = Rentila</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-zinc-300" /> U = Ublo</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-zinc-300" /> L = Locagestion</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ TARIFS ═══════════════════ */}
        <section id="pricing" className="w-full py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="text-center space-y-4 mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bricolage tracking-tight">NOS TARIFS.</h2>
              <p className="text-zinc-500 max-w-xl mx-auto">Des offres adaptées à chaque profil, du propriétaire débutant au gestionnaire multi-biens.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {PLANS.map((plan, i) => (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`rounded-2xl border p-8 flex flex-col justify-between space-y-6 transition-shadow hover:shadow-lg ${plan.highlighted ? "bg-[#FF6B6B] text-white border-[#FF6B6B] shadow-xl scale-[1.02]" : "bg-white border-zinc-200"}`}
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold font-bricolage">{plan.title}</h3>
                      <p className={`text-sm mt-1 ${plan.highlighted ? "text-white/80" : "text-zinc-500"}`}>{plan.description}</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold font-bricolage">{plan.price}</span>
                      {plan.originalPrice && <span className={`text-lg line-through ml-2 ${plan.highlighted ? "text-white/50" : "text-zinc-400"}`}>{plan.originalPrice}</span>}
                      <span className={`text-sm ${plan.highlighted ? "text-white/70" : "text-zinc-400"}`}>{plan.period}</span>
                    </div>
                    <ul className="space-y-3 pt-2">
                      {plan.features.map((feat, j) => (
                        <li key={j} className="flex items-center gap-2.5 text-sm">
                          <CheckCircle2 className={`h-4 w-4 shrink-0 ${plan.highlighted ? "text-white" : "text-[#FF6B6B]"}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className={`w-full py-3 rounded-full text-sm font-semibold transition-colors ${plan.highlighted ? "bg-white text-[#FF6B6B] hover:bg-white/90" : "bg-[#FF6B6B] text-white hover:bg-[#e05555]"}`}>
                    {plan.buttonText}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ BENCHMARK ═══════════════════ */}
        <section className="w-full py-20 md:py-28 bg-[#FFF8F0]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="text-center space-y-4 mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bricolage tracking-tight">POURQUOI COCOON ?</h2>
              <p className="text-zinc-500 max-w-xl mx-auto">Comparatif des solutions de gestion locative sur le marché français.</p>
            </motion.div>
            <motion.div {...fadeUp} className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-100 bg-zinc-50">
                      <th className="text-left p-4 font-bold text-xs uppercase tracking-wider text-zinc-400 w-1/5">Fonctionnalité</th>
                      <th className="p-4 text-center font-bold text-xs uppercase tracking-wider text-zinc-400">Rentila</th>
                      <th className="p-4 text-center font-bold text-xs uppercase tracking-wider text-zinc-400">Locagestion</th>
                      <th className="p-4 text-center font-bold text-xs uppercase tracking-wider text-zinc-400">Ublo</th>
                      <th className="p-4 text-center font-bold text-xs uppercase tracking-wider text-[#FF6B6B] bg-[#FF6B6B]/5">Cocoon</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BENCHMARK_ROWS.map((row, i) => (
                      <tr key={i} className="border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors">
                        <td className="p-4 text-zinc-700 font-medium">{row.feature}</td>
                        {row.values.map((v, j) => (
                          <td key={j} className={`p-4 text-center ${j === 3 ? "bg-[#FF6B6B]/5" : ""}`}>
                            {v ? <CheckCircle2 className={`h-5 w-5 mx-auto ${j === 3 ? "text-[#FF6B6B]" : "text-zinc-400"}`} /> : <span className="inline-block h-5 w-5 leading-5 text-zinc-300 mx-auto">—</span>}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {[
                { title: "Mobile-first", desc: "Seule solution pensée nativement pour le smartphone." },
                { title: "Marketplace intégrée", desc: "Recherche + gestion dans une seule application." },
                { title: "Freemium accessible", desc: "Gratuit pour démarrer, sans engagement." },
              ].map((d, i) => (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }} className="rounded-xl bg-[#FF6B6B] text-white p-5 space-y-2">
                  <h4 className="font-bold text-sm font-bricolage">{d.title}</h4>
                  <p className="text-xs text-white/80 leading-relaxed">{d.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ AVANTAGES ═══════════════════ */}
        <section id="advantages" className="w-full py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="space-y-4 mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold font-bricolage">NOS AVANTAGES +</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div {...fadeUp} className="space-y-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex gap-2">
                    <div className="w-10 h-10 bg-[#FF6B6B]/10 rounded-xl flex items-center justify-center"><RefreshCw className="h-5 w-5 text-[#FF6B6B]" /></div>
                    <div className="w-10 h-10 bg-[#FF6B6B]/10 rounded-xl flex items-center justify-center"><Building className="h-5 w-5 text-[#FF6B6B]" /></div>
                    <div className="w-10 h-10 bg-[#335c67]/10 rounded-xl flex items-center justify-center"><Home className="h-5 w-5 text-[#335c67]" /></div>
                  </div>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">Synchronisation de vos réservations et gestion de vos locations saisonnières.</p>
                <p className="text-sm text-zinc-600 leading-relaxed">Archivez et partagez vos documents scannés (photos, factures, impôts, charges...) avec votre locataire / propriétaire.</p>
              </motion.div>
              <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }} className="space-y-4">
                <p className="text-sm text-zinc-600 leading-relaxed">Nous proposons également divers outils : modèles de lettres, carnet d&apos;adresses, devis travaux et côte des loyers.</p>
                <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-lg mt-4">
                  <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop" alt="Clés appartement" fill className="object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ TÉMOIGNAGES ═══════════════════ */}
        <section className="w-full py-20 md:py-28 bg-[#FFF8F0]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="text-center space-y-4 mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold font-bricolage tracking-tight">Témoignages</h2>
              <p className="text-zinc-500 max-w-lg mx-auto">Découvrez les retours de Marc et Sylvie, nos premiers utilisateurs.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((testimonial, i) => (
                <motion.div key={testimonial.id} {...fadeUp} transition={{ delay: i * 0.15, duration: 0.5 }} className="rounded-2xl border border-zinc-200 bg-white p-8 space-y-6 shadow-sm">
                  <ReviewStars className="text-[#e09f3e]" rating={testimonial.rating} />
                  <blockquote className="text-zinc-700 leading-relaxed text-lg italic">&ldquo;{testimonial.description}&rdquo;</blockquote>
                  <div className="flex items-center gap-4 pt-2">
                    <Avatar className="!size-12 border border-stone-200">
                      <AvatarImage src={testimonial.avatarUrl} alt={`Portrait de ${testimonial.name}`} />
                      <AvatarFallback>{testimonial.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="block text-lg font-semibold tracking-tight">{testimonial.name}</span>
                      <span className="block text-sm text-zinc-500">{testimonial.profession}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ INSCRIPTION ═══════════════════ */}
        <section id="signup" className="w-full py-20 md:py-28 bg-[#FF6B6B]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp} className="space-y-4 text-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bricolage leading-tight">INSCRIPTIONS POUR LES TESTS</h2>
                <p className="text-white/80">Démarrez gratuitement. Tenez vous au courant des nouveautés.</p>
              </motion.div>
              <motion.div {...fadeUp} transition={{ delay: 0.15, duration: 0.5 }} className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="font-bold text-lg mb-1">INSCRIPTION</h3>
                <div className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className="text-xs text-zinc-500 mb-1 block">NOM</label><Input placeholder="Votre nom" className="rounded-lg" /></div>
                    <div><label className="text-xs text-zinc-500 mb-1 block">PRÉNOM</label><Input placeholder="Votre prénom" className="rounded-lg" /></div>
                  </div>
                  <div><label className="text-xs text-zinc-500 mb-1 block">ADRESSE E-MAIL</label><Input type="email" placeholder="email@exemple.com" className="rounded-lg" /></div>
                  <div>
                    <label className="text-xs text-zinc-500 mb-2 block">JE SUIS</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button onClick={() => setUserType("locataire")} className={`py-2.5 rounded-lg text-sm font-medium transition-all ${userType === "locataire" ? "bg-[#FF6B6B] text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}>LOCATAIRE</button>
                      <button onClick={() => setUserType("proprietaire")} className={`py-2.5 rounded-lg text-sm font-medium transition-all ${userType === "proprietaire" ? "bg-[#FF6B6B] text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}>PROPRIÉTAIRE</button>
                    </div>
                  </div>
                  <Button className="w-full rounded-lg bg-[#1A1A1A] hover:bg-[#333] text-white">S&apos;INSCRIRE</Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ CTA ÉTUDE UX ═══════════════════ */}
        <section className="w-full py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <Banner
              show={showBanner}
              onHide={() => setShowBanner(false)}
              variant="default"
              size="lg"
              title="Découvrez l'étude UX complète"
              description="Personas, user flows, wireframes, benchmark et résultats du projet Cocoon."
              showShade
              closable
              icon={<BookOpen className="h-5 w-5 text-[#FF6B6B]" />}
              className="rounded-3xl border-zinc-200 p-10"
              action={
                <Button size="lg" className="rounded-full bg-[#FF6B6B] hover:bg-[#e05555] text-white shrink-0 group" asChild>
                  <Link href="/cocoon-ux">Lire l&apos;étude <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
                </Button>
              }
            />
          </div>
        </section>
      </main>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="w-full bg-[#1A1A1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <nav className="space-y-2 text-sm text-zinc-400"><p>Qui sommes nous ?</p><p>Nos fonctionnalités</p><p>Travailler avec nous</p><p>Où Sommes nous ?</p></nav>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Légales</h4>
            <nav className="space-y-2 text-sm text-zinc-400"><p>Mentions légales</p><p>Politiques de cookies</p><p>Conditions de services</p><p>Politiques de confidentialités</p></nav>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <nav className="space-y-2 text-sm text-zinc-400"><p>contact@cocoon.fr</p><p>Partenaires</p><p>19 avenue victor Hugo</p><p>75016 Paris</p><p>+33 6 01 02 75 26</p></nav>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/images/projects/cocoon/logo.png" alt="Cocoon" width={100} height={30} className="h-7 w-auto" />
          <p className="text-xs text-zinc-500">Projet UX/UI par <Link href="/" className="text-[#e09f3e] hover:underline">Virabo Hoy</Link></p>
        </div>
      </footer>
    </div>
  );
}
