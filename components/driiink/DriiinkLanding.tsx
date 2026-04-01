"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  QrCode,
  Smartphone,
  CreditCard,
  Users,
  Clock,
  ShieldCheck,
  Zap,
  Star,
  ArrowUpRight,
  TrendingUp,
  BarChart3,
  Heart,
  CheckCircle2,
  AlertTriangle,
  Timer,
  BookOpen,
  CircleCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { AppStoreButton } from "@/components/ui/app-store-button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DriiinkLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isYearly, setIsYearly] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  const showBanner = bannerVisible && scrollY < 100;

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 font-montserrat">
      {/* ─── ANNOUNCEMENT BANNER ─── */}
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="relative z-[60] w-full bg-[#104911] text-white"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 px-6 py-2.5 text-xs sm:text-sm">
            <span className="bg-[#ffd449] text-[#104911] font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0">
              Nouveau
            </span>
            <Link href="/driiink-ux" className="hover:underline underline-offset-2 transition-all">
              Découvrez l&apos;étude UX complète du projet Driiink
            </Link>
            <ArrowRight className="h-3 w-3 shrink-0 opacity-60" />
            <button
              onClick={() => setBannerVisible(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      )}

      {/* ─── HEADER ─── */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky ${showBanner ? "top-[38px]" : "top-0"} z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-xl transition-all ${scrollY > 50 ? "shadow-sm" : ""}`}
      >
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/driiink-landing" className="flex items-center gap-2.5">
            <Image src="/images/projects/Driiink/logo-dark.png" alt="Driiink" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-lg font-bricolage">Driiink</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {[
              ["Solution", "#solution"],
              ["Avantages", "#avantages"],
              ["Tarifs", "#tarifs"],
              ["Étude UX", "/driiink-ux"],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="rounded-full" asChild>
              <Link href="/driiink-ux">Étude UX</Link>
            </Button>
            <Button size="sm" className="rounded-full bg-[#104911] hover:bg-[#104911]/90 text-white" asChild>
              <Link href="/driiink">Tester la démo</Link>
            </Button>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 bg-white md:hidden pt-16">
          <div className="absolute top-0 right-0 p-5">
            <button onClick={() => setMenuOpen(false)}><X className="h-6 w-6" /></button>
          </div>
          <nav className="px-6 grid gap-1 pt-6">
            {["Solution", "Avantages", "Tarifs", "Étude UX"].map((l, i) => (
              <Link key={i} href="#" className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-zinc-50 text-lg" onClick={() => setMenuOpen(false)}>
                {l}<ChevronRight className="h-4 w-4 text-zinc-400" />
              </Link>
            ))}
            <Button className="mt-6 w-full rounded-full bg-[#104911]" asChild>
              <Link href="/driiink">Tester la démo</Link>
            </Button>
          </nav>
        </motion.div>
      )}

      <main className="flex-1">
        {/* ─── HERO ─── */}
        <section className="w-full py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-bricolage leading-[1.1]">
                  Solutions de commande et de paiement{" "}
                  <span className="bg-gradient-to-r from-[#548c2f] to-[#104911] bg-clip-text text-transparent">
                    conçus pour les bars
                  </span>
                </h1>
                <p className="text-zinc-500 text-lg max-w-xl">
                  Adapté à vos besoins &middot; Personnalisable
                </p>
                {/* Metrics */}
                <div className="flex flex-wrap gap-8">
                  {[
                    { value: "-60%", label: "temps d'attente" },
                    { value: "x3", label: "pourboires" },
                    { value: "+25%", label: "de commandes" },
                  ].map((m, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="text-center">
                      <p className="text-3xl font-bold text-[#548c2f] font-bricolage">{m.value}</p>
                      <p className="text-xs text-zinc-400 mt-1">{m.label}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 items-start">
                  <Button size="lg" className="rounded-full bg-[#548c2f] hover:bg-[#104911] text-white group" asChild>
                    <Link href="/driiink">
                      Demander une démo
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <AppStoreButton className="rounded-full bg-[#104911] hover:bg-[#104911]/90 text-white" />
                </div>
              </motion.div>
              {/* Hero - Image accordion (desktop) */}
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="hidden lg:flex flex-row items-center justify-center gap-2">
                {[
                  { title: "Menu digital", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=500&fit=crop" },
                  { title: "Cocktails", img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=500&fit=crop" },
                  { title: "Commande", img: "https://images.unsplash.com/photo-1560512823-829485b8bf24?w=400&h=500&fit=crop" },
                  { title: "Paiement", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=500&fit=crop" },
                  { title: "Entre amis", img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=400&h=500&fit=crop" },
                ].map((ac, i) => (
                  <div
                    key={i}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out h-[380px] ${i === 2 ? "w-[220px]" : "w-[48px]"} hover:w-[220px]`}
                    style={{ flexShrink: 0 }}
                  >
                    <Image src={ac.img} alt={ac.title} fill className="object-cover" sizes="220px" />
                    <div className="absolute inset-0 bg-black/30" />
                    <span className="absolute bottom-4 left-4 text-white text-sm font-semibold">{ac.title}</span>
                  </div>
                ))}
              </motion.div>
              {/* Mobile: logo */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="lg:hidden flex justify-center">
                <Image src="/images/projects/Driiink/logo-dark.png" alt="Driiink" width={200} height={200} className="drop-shadow-2xl" priority />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── SOCIAL PROOF ─── */}
        <section className="w-full py-12 border-y border-zinc-100 bg-zinc-50/50">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "3 500+", label: "Tables équipées", icon: QrCode },
                { value: "80k+", label: "Commandes passées", icon: Smartphone },
                { value: "150k€", label: "Pourboires collectés", icon: Heart },
                { value: "4.8/5", label: "Satisfaction client", icon: Star },
              ].map((s, i) => (
                <motion.div key={i} variants={item} className="space-y-2">
                  <s.icon className="h-5 w-5 text-[#548c2f] mx-auto mb-2" />
                  <p className="text-2xl font-bold font-bricolage">{s.value}</p>
                  <p className="text-xs text-zinc-400">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ─── PROBLEM ─── */}
        <section className="w-full py-20 md:py-28 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-3xl mx-auto text-center space-y-6 mb-12">
              <div className="inline-flex items-center rounded-full bg-red-50 border border-red-200 px-4 py-1.5 text-sm text-red-600">
                <AlertTriangle className="mr-2 h-3.5 w-3.5" />
                Le problème
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-bricolage">
                L&apos;attente au bar tue votre chiffre d&apos;affaires
              </h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Timer, title: "12 min d'attente", desc: "Au comptoir aux heures de pointe." },
                { icon: TrendingUp, title: "30% de CA perdu", desc: "Clients qui ne re-commandent pas." },
                { icon: Users, title: "Staff sous pression", desc: "Le rush pousse les équipes à partir." },
              ].map((p, i) => (
                <motion.div key={i} variants={item} className="rounded-2xl border border-red-100 bg-white p-6 space-y-3 shadow-sm">
                  <p.icon className="h-8 w-8 text-red-500" />
                  <h3 className="font-bold font-bricolage">{p.title}</h3>
                  <p className="text-zinc-500 text-sm">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── SOLUTION ─── */}
        <section id="solution" className="w-full py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center space-y-4 mb-14">
              <div className="inline-flex items-center rounded-full bg-[#548c2f]/10 border border-[#548c2f]/20 px-4 py-1.5 text-sm text-[#548c2f]">La solution</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bricolage">Tout-en-un pour votre bar</h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: QrCode, title: "Menu digital", desc: "Scannez le QR code et accédez au menu complet avec photos et prix." },
                { icon: Smartphone, title: "Commande instantanée", desc: "Ajoutez au panier et envoyez la commande en un tap." },
                { icon: Users, title: "Split de l'addition", desc: "Divisez la note entre amis, choisissez qui paie quoi." },
                { icon: CreditCard, title: "Paiement sécurisé", desc: "Apple Pay, carte bancaire, Google Pay." },
                { icon: BarChart3, title: "Analytics temps réel", desc: "Suivez les commandes et le CA en temps réel." },
                { icon: ShieldCheck, title: "Intégration POS", desc: "Connectez Driiink à votre caisse existante." },
              ].map((f, i) => (
                <motion.div key={i} variants={item} whileHover={{ y: -6 }} className="group rounded-2xl border border-zinc-200 bg-white p-6 space-y-3 transition-all hover:shadow-lg hover:border-[#548c2f]/20">
                  <f.icon className="h-8 w-8 text-[#548c2f]" />
                  <h3 className="font-bold font-bricolage">{f.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── MULTI-STAKEHOLDER ─── */}
        <section id="avantages" className="w-full py-20 md:py-28 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center space-y-4 mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold font-bricolage">Des avantages pour tous</h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Pour les gérants", color: "border-[#548c2f]/20 bg-[#22C55E]/5", items: ["+25% de chiffre d'affaires", "Analytics en temps réel", "Réduction des erreurs", "Fidélisation automatisée", "Intégration caisse"] },
                { title: "Pour le staff", color: "border-blue-200 bg-blue-50/50", items: ["Moins de stress", "Pourboires x3", "Focus sur le service", "Moins d'erreurs", "Workflow simplifié"] },
                { title: "Pour les clients", color: "border-purple-200 bg-purple-50/50", items: ["Zéro attente", "Menu visuel", "Split addition", "Paiement en 2s", "Expérience premium"] },
              ].map((col, i) => (
                <motion.div key={i} variants={item} className={`rounded-2xl border p-6 space-y-5 ${col.color}`}>
                  <h3 className="text-lg font-bold font-bricolage">{col.title}</h3>
                  <ul className="space-y-3">
                    {col.items.map((it, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-zinc-600">
                        <CheckCircle2 className="h-4 w-4 text-[#548c2f] mt-0.5 shrink-0" />{it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="w-full py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-3xl border border-[#548c2f]/20 bg-[#22C55E]/5 p-8 md:p-14">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center rounded-full bg-[#548c2f]/10 border border-[#548c2f]/20 px-4 py-1.5 text-sm text-[#548c2f]">Comment ça marche</div>
                  <h2 className="text-3xl sm:text-4xl font-bold font-bricolage">3 étapes, 0 friction</h2>
                  <div className="space-y-8">
                    {[
                      { step: "01", title: "Scannez le QR code", desc: "Un QR code est placé sur chaque table. Le client le scanne et accède au menu." },
                      { step: "02", title: "Commandez vos boissons", desc: "Parcourez le menu visuel, ajoutez au panier et envoyez la commande." },
                      { step: "03", title: "Partagez et payez", desc: "Divisez l'addition entre amis et réglez en un tap." },
                    ].map((s, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className="flex gap-5">
                        <span className="text-4xl font-bold text-[#548c2f]/20 font-bricolage shrink-0 leading-none">{s.step}</span>
                        <div>
                          <h3 className="font-bold text-lg font-bricolage">{s.title}</h3>
                          <p className="text-zinc-500 text-sm mt-1">{s.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                  <Image src="/images/projects/Driiink/screens.png" alt="Screens" width={600} height={400} className="w-full rounded-2xl shadow-lg" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="w-full py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold font-bricolage">Ce qu&apos;ils en disent</h2>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-5">
              {[
                { quote: "Depuis Driiink, nos serveurs se concentrent sur le service. Le CA a augmenté de 25% en 2 mois.", author: "Marc D.", role: "Gérant — Le Comptoir, Paris", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face" },
                { quote: "Le split de l'addition entre potes, c'est la meilleure feature. Plus de prise de tête.", author: "Thomas L.", role: "Client régulier", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face" },
                { quote: "Nos pourboires ont triplé depuis qu'on utilise Driiink. Le staff est ravi.", author: "Sophie R.", role: "Directrice — Café des Arts", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face" },
                { quote: "L'interface est tellement intuitive. Même les clients les moins tech-savvy s'y retrouvent.", author: "Julie M.", role: "Barmaid — L'Atelier", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
              ].map((t, i) => (
                <motion.div key={i} variants={item} whileHover={{ y: -4 }} className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-4 shadow-sm">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 text-[#f9a620] fill-current" />)}
                  </div>
                  <p className="text-zinc-600 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden shrink-0">
                      <Image src={t.img} alt={t.author} fill className="object-cover" sizes="40px" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{t.author}</p>
                      <p className="text-xs text-zinc-400">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section id="tarifs" className="w-full py-20 md:py-28 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center space-y-4 mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bricolage">Un prix simple, transparent</h2>
              <p className="text-zinc-500 text-lg">Pas de frais cachés.</p>
              <div className="flex items-center justify-center gap-3 text-sm pt-2">
                <span className={isYearly ? "text-zinc-400" : "text-zinc-900 font-medium"}>Mensuel</span>
                <Switch checked={isYearly} onCheckedChange={() => setIsYearly(!isYearly)} />
                <span className={isYearly ? "text-zinc-900 font-medium" : "text-zinc-400"}>
                  Annuel <span className="text-[#548c2f] text-xs ml-1">-20%</span>
                </span>
              </div>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { name: "Starter", desc: "Pour les petits bars", monthly: "49", yearly: "39", features: ["1 établissement", "Jusqu'à 20 tables", "Menu digital illimité", "Commandes en temps réel", "Support email"], popular: false },
                { name: "Pro", desc: "Le plus populaire", monthly: "99", yearly: "79", features: ["Jusqu'à 3 établissements", "Tables illimitées", "Split addition", "Analytics avancés", "Support prioritaire 24/7", "Intégration POS"], popular: true },
                { name: "Enterprise", desc: "Pour les groupes", monthly: "249", yearly: "199", features: ["Établissements illimités", "Tables illimitées", "API personnalisée", "Account manager dédié", "SLA garanti 99.9%", "Formation sur site"], popular: false },
              ].map((plan, i) => (
                <motion.div key={i} variants={item} whileHover={{ y: -6 }} className={`rounded-2xl p-6 flex flex-col justify-between transition-all ${plan.popular ? "bg-[#104911] text-white border-2 border-[#548c2f]/30 shadow-xl relative" : "bg-white border border-zinc-200 shadow-sm"}`}>
                  {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#22C55E] text-white text-xs font-bold px-4 py-1 rounded-full">Populaire</span>}
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg font-bricolage">{plan.name}</h3>
                      <p className={`text-sm ${plan.popular ? "text-zinc-400" : "text-zinc-500"}`}>{plan.desc}</p>
                    </div>
                    <div>
                      <span className="text-4xl font-bold font-bricolage">{isYearly ? plan.yearly : plan.monthly}€</span>
                      <span className={`text-sm ml-1 ${plan.popular ? "text-zinc-400" : "text-zinc-500"}`}>/mois</span>
                    </div>
                    <div className={`h-px ${plan.popular ? "bg-[#548c2f]/30" : "bg-zinc-200"}`} />
                    <ul className="space-y-3 pt-2">
                      {plan.features.map((feat, j) => (
                        <li key={j} className={`flex items-center gap-2 text-sm ${plan.popular ? "text-zinc-300" : "text-zinc-600"}`}>
                          <CircleCheck className="h-4 w-4 text-[#548c2f] shrink-0" />{feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className={`w-full rounded-full mt-6 ${plan.popular ? "bg-[#548c2f] hover:bg-[#104911] text-white" : "bg-[#104911] hover:bg-[#104911]/90 text-white"}`}>
                    {plan.popular ? "Essai gratuit 14j" : "Commencer"}<ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── CTA UX ─── */}
        <section className="w-full py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-zinc-200 bg-white p-10 md:p-14 flex flex-col md:flex-row items-center gap-8 shadow-sm">
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center rounded-full bg-zinc-100 px-4 py-1.5 text-sm text-zinc-500">
                  <BookOpen className="mr-2 h-3.5 w-3.5" />Case Study
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-bricolage">Découvrez l&apos;étude UX complète</h2>
                <p className="text-zinc-500 max-w-lg">Personas, user stories, wireframes, tests utilisateurs et résultats.</p>
              </div>
              <Button size="lg" className="rounded-full bg-[#104911] hover:bg-[#104911]/90 text-white shrink-0 group" asChild>
                <Link href="/driiink-ux">
                  Lire l&apos;étude
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ─── CTA DEMO ─── */}
        <section className="w-full py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl bg-[#104911] text-white p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold font-bricolage mb-4">Prêt à transformer votre bar ?</h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8">Testez la démo interactive et voyez Driiink en action.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full bg-[#548c2f] hover:bg-[#104911] text-white text-lg px-8" asChild>
                  <Link href="/driiink">Lancer la démo<ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10 text-lg px-8" asChild>
                  <Link href="/#projects">Retour au portfolio</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="w-full border-t border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 py-8 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/images/projects/Driiink/logo-dark.png" alt="Driiink" width={20} height={20} className="rounded" />
            <span className="font-bold font-bricolage text-sm">Driiink</span>
          </div>
          <p className="text-xs text-zinc-400">
            Projet UX/UI par{" "}
            <Link href="/" className="text-[#548c2f] hover:underline">Virabo Hoy</Link>
            {" "}&middot; Les prémices de Sunday
          </p>
        </div>
      </footer>
    </div>
  );
}
