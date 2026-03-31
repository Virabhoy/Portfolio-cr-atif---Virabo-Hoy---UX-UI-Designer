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
  Wine,
  Zap,
  Star,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dock } from "@/components/ui/dock-two";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DriiinkLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dockItems = [
    { icon: QrCode, label: "Scanner" },
    { icon: Wine, label: "Menu" },
    { icon: Smartphone, label: "Commander" },
    { icon: CreditCard, label: "Payer" },
    { icon: Users, label: "Partager" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#0A0A0A] text-white font-montserrat">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl ${scrollY > 50 ? "shadow-lg shadow-black/50" : ""}`}
      >
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/driiink-landing" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="h-10 w-10 rounded-2xl bg-[#22C55E] flex items-center justify-center"
            >
              <Wine className="h-5 w-5 text-white" />
            </motion.div>
            <span className="font-bold text-xl font-bricolage">Driiink</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {["Fonctionnalites", "Comment ca marche", "Screens", "Temoignages"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-").replace(/é/g, "e").replace(/ç/g, "c")}`}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-[#22C55E]"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="rounded-full border-white/10 text-white hover:bg-white/10">
              <Link href="/projects/driiink">Voir le projet</Link>
            </Button>
            <Button size="sm" className="rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white">
              <Link href="/driiink">Tester la démo</Link>
            </Button>
          </div>
          <button className="flex md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-[#0A0A0A] md:hidden"
        >
          <div className="flex h-16 items-center justify-between px-6">
            <span className="font-bold text-xl font-bricolage">Driiink</span>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <motion.nav variants={staggerContainer} initial="hidden" animate="visible" className="px-6 grid gap-2 pt-6">
            {["Fonctionnalites", "Comment ca marche", "Screens", "Temoignages"].map((item, i) => (
              <motion.div key={i} variants={itemFadeIn}>
                <Link
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-lg font-medium hover:bg-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                  <ChevronRight className="h-4 w-4 text-zinc-500" />
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemFadeIn} className="flex flex-col gap-3 pt-6">
              <Button className="w-full rounded-full bg-[#22C55E] hover:bg-[#16A34A]">
                <Link href="/driiink">Tester la démo</Link>
              </Button>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0A0A0A] to-[#0F1A0F] p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="flex flex-col justify-center space-y-6"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 px-4 py-1.5 text-sm text-[#22C55E] w-fit"
                  >
                    <Zap className="mr-2 h-3.5 w-3.5" />
                    Les prémices de Sunday
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl font-bricolage leading-[1.1]"
                  >
                    Commandez vos boissons{" "}
                    <span className="bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
                      sans quitter votre table
                    </span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="max-w-[550px] text-zinc-400 text-lg"
                  >
                    Scannez le QR code, parcourez le menu, commandez et partagez l&apos;addition. Le tout depuis votre smartphone.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-col gap-3 sm:flex-row"
                  >
                    <Button size="lg" className="rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white group" asChild>
                      <Link href="/driiink">
                        Tester la démo
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full border-white/10 text-white hover:bg-white/5" asChild>
                      <Link href="/projects/driiink">Voir le case study</Link>
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center justify-center"
                >
                  <div className="relative h-[400px] w-[280px] md:h-[500px] md:w-[250px] overflow-hidden rounded-[2.5rem] border-[3px] border-zinc-700/80 shadow-2xl shadow-green-500/5">
                    <Image
                      src="/images/projects/driiink/app.png"
                      alt="Driiink App"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Dock navigation */}
        <section className="w-full pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <Dock items={dockItems} />
          </div>
        </section>

        {/* Features / Fonctionnalites */}
        <section id="fonctionnalites" className="w-full py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-7xl mx-auto px-6"
          >
            <div className="rounded-3xl border border-white/10 p-8 md:p-12">
              <div className="text-center space-y-4 mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-zinc-400"
                >
                  Fonctionnalités
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-bricolage"
                >
                  Tout pour simplifier la commande
                </motion.h2>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
              >
                {[
                  {
                    icon: <QrCode className="h-8 w-8 text-[#22C55E]" />,
                    title: "Scan QR Code",
                    description: "Scannez le code à votre table pour accéder instantanément au menu du bar.",
                  },
                  {
                    icon: <Wine className="h-8 w-8 text-[#22C55E]" />,
                    title: "Menu interactif",
                    description: "Parcourez les cocktails avec photos, ingrédients et descriptions détaillées.",
                  },
                  {
                    icon: <Smartphone className="h-8 w-8 text-[#22C55E]" />,
                    title: "Commande mobile",
                    description: "Ajoutez au panier, gérez les quantités et validez en un tap.",
                  },
                  {
                    icon: <Users className="h-8 w-8 text-[#22C55E]" />,
                    title: "Split de l'addition",
                    description: "Divisez la note entre amis, choisissez qui paie quoi.",
                  },
                  {
                    icon: <Clock className="h-8 w-8 text-[#22C55E]" />,
                    title: "Suivi en temps réel",
                    description: "Suivez le temps de préparation et le statut de votre commande.",
                  },
                  {
                    icon: <ShieldCheck className="h-8 w-8 text-[#22C55E]" />,
                    title: "Paiement sécurisé",
                    description: "Réglez directement depuis l'app avec un paiement 100% sécurisé.",
                  },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={itemFadeIn}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all hover:shadow-lg hover:shadow-green-500/5 hover:border-[#22C55E]/20"
                  >
                    <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#22C55E]/5 group-hover:bg-[#22C55E]/10 transition-all duration-500" />
                    <div className="relative space-y-3">
                      <div className="mb-4">{feature.icon}</div>
                      <h3 className="text-lg font-bold font-bricolage">{feature.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* How it works */}
        <section id="comment-ca-marche" className="w-full py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-7xl mx-auto px-6"
          >
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#22C55E]/5 to-transparent p-8 md:p-12">
              <div className="grid gap-10 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 px-4 py-1.5 text-sm text-[#22C55E]">
                    Comment ça marche
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-bricolage">
                    3 étapes, 0 attente
                  </h2>
                  <div className="space-y-6">
                    {[
                      { step: "01", title: "Scannez", desc: "Flashez le QR code placé sur votre table." },
                      { step: "02", title: "Commandez", desc: "Parcourez le menu, ajoutez vos boissons et validez." },
                      { step: "03", title: "Partagez & Payez", desc: "Divisez l'addition et réglez directement." },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className="flex gap-4 items-start"
                      >
                        <span className="text-3xl font-bold text-[#22C55E]/30 font-bricolage shrink-0">{item.step}</span>
                        <div>
                          <h3 className="font-bold text-lg">{item.title}</h3>
                          <p className="text-zinc-400 text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center"
                >
                  <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-3xl border border-white/10">
                    <Image
                      src="/images/projects/driiink/screens.png"
                      alt="Driiink Screens"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* App Screens Bento Grid */}
        <section id="screens" className="w-full py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-7xl mx-auto px-6"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
              <div className="text-center space-y-4 mb-12">
                <div className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-zinc-400">
                  Aperçu
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-bricolage">
                  L&apos;app en images
                </h2>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4 md:grid-cols-4 md:grid-rows-2"
              >
                <motion.div
                  variants={itemFadeIn}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 h-[350px] md:h-auto border border-white/10"
                >
                  <Image
                    src="/images/projects/driiink/mobile.png"
                    alt="Vue d'ensemble"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-xl font-bold font-bricolage">Vue d&apos;ensemble</h3>
                    <p className="text-sm text-zinc-300">L&apos;experience complète sur mobile</p>
                  </div>
                </motion.div>
                {[
                  { src: "/images/projects/driiink/detail.png", title: "Fiche cocktail", desc: "Ingrédients et détails" },
                  { src: "/images/projects/driiink/Product page detail.png", title: "Page produit", desc: "Design immersif" },
                  { src: "/images/projects/driiink/Récapitulatif de la table.png", title: "Commande", desc: "Récapitulatif de table" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemFadeIn}
                    whileHover={{ scale: 1.02 }}
                    className="group relative overflow-hidden rounded-2xl h-[200px] border border-white/10"
                  >
                    <Image src={item.src} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="font-bold font-bricolage">{item.title}</h3>
                      <p className="text-xs text-zinc-300">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  variants={itemFadeIn}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl md:col-span-2 h-[200px] border border-white/10"
                >
                  <Image
                    src="/images/projects/driiink/hero.png"
                    alt="Hero Driiink"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-xl font-bold font-bricolage">Interface complète</h3>
                    <p className="text-sm text-zinc-300">Du menu au paiement, une expérience fluide</p>
                  </div>
                </motion.div>
              </motion.div>
              <div className="flex justify-center pt-10">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white group" asChild>
                    <Link href="/driiink">
                      Tester la démo interactive
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section id="temoignages" className="w-full py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-7xl mx-auto px-6"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
              <div className="text-center space-y-4 mb-12">
                <div className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-zinc-400">
                  Retours
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-bricolage">
                  Ce qu&apos;ils en pensent
                </h2>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4 md:grid-cols-2"
              >
                {[
                  {
                    quote: "Plus besoin de faire la queue au bar. On scanne, on commande, on profite de la soirée.",
                    author: "Alexia M.",
                    role: "Utilisatrice régulière",
                  },
                  {
                    quote: "Le split de l'addition est génial. Fini les calculs de tête en fin de soirée entre potes.",
                    author: "Thomas L.",
                    role: "Groupe d'amis",
                  },
                  {
                    quote: "En tant que gérant, ça a réduit le temps d'attente de 60%. Les serveurs se concentrent sur le service.",
                    author: "Marc D.",
                    role: "Gérant de bar",
                  },
                  {
                    quote: "L'interface est super intuitive. Même après quelques verres, c'est facile à utiliser !",
                    author: "Julie R.",
                    role: "Utilisatrice",
                  },
                ].map((t, i) => (
                  <motion.div
                    key={i}
                    variants={itemFadeIn}
                    whileHover={{ y: -6 }}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
                  >
                    <div>
                      <div className="flex gap-0.5 text-[#22C55E] mb-4">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-zinc-300 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E] font-bold text-sm">
                        {t.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{t.author}</p>
                        <p className="text-xs text-zinc-500">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Final */}
        <section className="w-full py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-br from-[#22C55E]/20 to-[#0A0A0A] border border-[#22C55E]/20 p-12 md:p-16 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-bricolage mb-4">
                Prêt à révolutionner votre bar ?
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8">
                Découvrez l&apos;expérience Driiink avec notre démo interactive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white text-lg px-8" asChild>
                  <Link href="/driiink">
                    Lancer la démo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-white/10 text-white hover:bg-white/5 text-lg px-8" asChild>
                  <Link href="/#projects">Retour au portfolio</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 py-8 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Wine className="h-5 w-5 text-[#22C55E]" />
            <span className="font-bold font-bricolage">Driiink</span>
          </div>
          <p className="text-xs text-zinc-500">
            Projet UX/UI par{" "}
            <Link href="/" className="text-[#22C55E] hover:underline">
              Virabo Hoy
            </Link>{" "}
            &middot; Les prémices de Sunday
          </p>
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Driiink. Concept & Design.
          </p>
        </div>
      </footer>
    </div>
  );
}
