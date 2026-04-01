"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft, ArrowRight, Clock, BookOpen, Target, Users, Search,
  Layout, Lightbulb, CheckCircle2, AlertCircle, Star, Figma,
  TrendingUp, Home, Scale, RefreshCw, X,
  DollarSign, BarChart3, Globe, Rocket, Layers, Zap, Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const staggerItem = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

function Section({ id, children, bg = "white" }: { id: string; children: React.ReactNode; bg?: "white" | "gray" }) {
  return (
    <section id={id} className={`w-full py-16 md:py-24 ${bg === "gray" ? "bg-[#FFF8F0]" : "bg-white"}`}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn} className="max-w-4xl mx-auto px-6">
        {children}
      </motion.div>
    </section>
  );
}

function SectionTitle({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10 space-y-3">
      <span className="inline-flex items-center rounded-full bg-[#FF6B6B]/10 border border-[#FF6B6B]/20 px-3 py-1 text-xs font-medium text-[#FF6B6B]">{badge}</span>
      <h2 className="text-2xl sm:text-3xl font-bold font-bricolage text-zinc-900">{title}</h2>
      {subtitle && <p className="text-zinc-500 max-w-2xl">{subtitle}</p>}
    </div>
  );
}

const TOC_ITEMS = [
  "Contexte", "Objectifs", "Outils", "Personas", "User Flow",
  "Architecture", "Wireframes", "Direction artistique", "Résultats",
  "Viabilité marché", "Marges 2021", "Benchmark", "Expansion",
];

export default function CocoonUXStudy() {
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-montserrat">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-6">
          <Link href="/cocoon" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors">
            <ArrowLeft className="h-4 w-4" /><span className="text-sm">Retour</span>
          </Link>
          <span className="font-bold text-sm font-bricolage">CO<span className="text-[#FF6B6B]">C</span>ON — Étude UX</span>
          <Button size="sm" variant="outline" className="rounded-full text-xs hidden md:flex" onClick={() => setTocOpen(!tocOpen)}>Sommaire</Button>
        </div>
      </header>

      {/* TOC Sidebar */}
      {tocOpen && (
        <motion.div initial={{ opacity: 0, x: 300 }} animate={{ opacity: 1, x: 0 }} className="fixed right-0 top-14 w-72 h-[calc(100vh-3.5rem)] bg-white border-l border-zinc-100 z-40 p-6 overflow-y-auto shadow-lg">
          <h3 className="font-bold text-sm mb-4 text-zinc-500 uppercase tracking-wider">Sommaire</h3>
          <nav className="space-y-1">
            {TOC_ITEMS.map((s) => (
              <a key={s} href={`#${s.toLowerCase().replace(/ /g, "-").replace(/é/g, "e")}`} onClick={() => setTocOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-zinc-600 hover:bg-[#FFF8F0] hover:text-[#FF6B6B] transition-colors">{s}</a>
            ))}
          </nav>
        </motion.div>
      )}

      {/* Hero */}
      <section className="w-full bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm text-zinc-300">
              <BookOpen className="mr-2 h-3.5 w-3.5" />Case Study UX/UI
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold font-bricolage leading-[1.1]">
            Étude UX : <span className="text-[#e09f3e]">Cocoon</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-zinc-400 text-lg max-w-xl">
            Concevoir une application de gestion locative qui simplifie la vie des propriétaires et des locataires.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4 text-sm text-zinc-400">
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 15 min de lecture</span>
            <span>Rôle : UX/UI Designer</span>
            <span>Outils : Figma</span>
          </motion.div>
        </div>
      </section>

      {/* Contexte */}
      <Section id="contexte">
        <SectionTitle badge="01 — Contexte" title="Le projet Cocoon" />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-zinc-200 p-6 space-y-3">
            <h3 className="font-bold font-bricolage">Le constat</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              La gestion locative en France est encore largement fragmentée : entre les quittances de loyer, le suivi des dépenses, la communication avec les locataires/propriétaires et les démarches administratives, les outils existants sont complexes, chers, ou inadaptés aux particuliers.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 space-y-3">
            <h3 className="font-bold font-bricolage">L&apos;opportunité</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Créer une application tout-en-un qui centralise la gestion locative pour les particuliers : recherche de biens, signature de baux, gestion financière, messagerie et suivi des travaux. Le tout dans une interface simple, accessible et mobile-first.
            </p>
          </div>
        </div>
      </Section>

      {/* Objectifs */}
      <Section id="objectifs" bg="gray">
        <SectionTitle badge="02 — Objectifs" title="Ce que l'application doit accomplir" />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Home, title: "Simplifier la gestion", desc: "Centraliser tous les outils de gestion locative dans une seule interface." },
            { icon: Users, title: "Connecter les parties", desc: "Faciliter la communication entre propriétaires et locataires." },
            { icon: Star, title: "Expérience intuitive", desc: "Offrir une UX fluide, même pour les utilisateurs non-tech." },
          ].map((o, i) => (
            <motion.div key={i} variants={staggerItem} className="rounded-2xl border border-zinc-200 p-6 space-y-3 bg-white">
              <o.icon className="h-8 w-8 text-[#FF6B6B]" />
              <h3 className="font-bold font-bricolage">{o.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{o.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Outils */}
      <Section id="outils">
        <SectionTitle badge="03 — Outils & Méthode" title="Stack de design" />
        <div className="flex flex-wrap gap-4">
          {[
            { name: "Figma", desc: "Wireframes, maquettes, prototype" },
            { name: "FigJam", desc: "User flows et brainstorming" },
            { name: "Notion", desc: "Documentation et user stories" },
          ].map((tool, i) => (
            <div key={i} className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-5 py-4">
              <div className="w-10 h-10 bg-[#FF6B6B]/10 rounded-xl flex items-center justify-center">
                <Figma className="h-5 w-5 text-[#FF6B6B]" />
              </div>
              <div>
                <p className="font-bold text-sm">{tool.name}</p>
                <p className="text-xs text-zinc-500">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Personas */}
      <Section id="personas" bg="gray">
        <SectionTitle badge="04 — Personas" title="Nos utilisateurs cibles" subtitle="Deux profils principaux : un locataire en recherche et une propriétaire gestionnaire." />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Marc", age: "35 ans", role: "Locataire en recherche",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
              bio: "Cadre en entreprise, Marc cherche un appartement correspondant à ses critères. Il veut communiquer directement avec les propriétaires et économiser du temps.",
              goals: ["Trouver un bien rapidement", "Communiquer avec le propriétaire", "Signer le bail en ligne"],
              frustrations: ["Les agences trop chères", "Les visites qui n'aboutissent pas", "La paperasse administrative"],
              quote: "Je veux trouver le bien idéal pour ma famille sans y passer mes week-ends.",
            },
            {
              name: "Sylvie", age: "52 ans", role: "Propriétaire",
              img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
              bio: "Propriétaire d'un appartement, Sylvie veut trouver des locataires sérieux, gérer ses finances et suivre les travaux facilement.",
              goals: ["Trouver des locataires fiables", "Gérer les loyers et dépenses", "Suivre les travaux en temps réel"],
              frustrations: ["Les impayés de loyer", "La gestion administrative complexe", "Le manque de visibilité sur les dépenses"],
              quote: "Je veux gérer mon bien efficacement sans y consacrer tout mon temps libre.",
            },
          ].map((p, i) => (
            <motion.div key={i} variants={staggerItem} className="rounded-2xl border border-zinc-200 bg-white overflow-hidden">
              <div className="bg-gradient-to-r from-[#FF6B6B]/10 to-transparent p-6 flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#FF6B6B]/30 shrink-0">
                  <Image src={p.img} alt={p.name} fill className="object-cover" sizes="64px" />
                </div>
                <div>
                  <h3 className="font-bold font-bricolage text-lg">{p.name}</h3>
                  <p className="text-sm text-zinc-500">{p.age} — {p.role}</p>
                </div>
              </div>
              <div className="p-6 space-y-5">
                <p className="text-sm text-zinc-600">{p.bio}</p>
                <div>
                  <h4 className="text-xs font-bold text-[#FF6B6B] uppercase tracking-wider mb-2">Objectifs</h4>
                  <ul className="space-y-1.5">
                    {p.goals.map((g, j) => <li key={j} className="flex items-start gap-2 text-sm text-zinc-600"><CheckCircle2 className="h-3.5 w-3.5 text-[#FF6B6B] mt-0.5 shrink-0" />{g}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#e05555] uppercase tracking-wider mb-2">Frustrations</h4>
                  <ul className="space-y-1.5">
                    {p.frustrations.map((f, j) => <li key={j} className="flex items-start gap-2 text-sm text-zinc-600"><AlertCircle className="h-3.5 w-3.5 text-[#e05555]/70 mt-0.5 shrink-0" />{f}</li>)}
                  </ul>
                </div>
                <blockquote className="border-l-2 border-[#FF6B6B] pl-4 italic text-sm text-zinc-500">&ldquo;{p.quote}&rdquo;</blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* User Flow */}
      <Section id="user-flow">
        <SectionTitle badge="05 — User Flow" title="Parcours utilisateur" subtitle="Le flow principal du propriétaire et du locataire." />
        <div className="space-y-8">
          <div>
            <h3 className="font-bold font-bricolage text-sm mb-4 text-[#FF6B6B]">Parcours Propriétaire</h3>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["Inscription", "Ajouter un bien", "Créer une annonce", "Recevoir candidatures", "Sélectionner locataire", "Signer le bail", "Gérer les loyers", "Suivi dépenses"].map((step, i, arr) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`rounded-xl border-2 px-3 py-2 text-xs font-medium ${i === 0 || i === arr.length - 1 ? "bg-[#FF6B6B]/10 border-[#FF6B6B]/30 text-[#FF6B6B]" : "bg-white border-zinc-300"}`}>{step}</div>
                  {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-zinc-300 shrink-0" />}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold font-bricolage text-sm mb-4 text-[#FF6B6B]">Parcours Locataire</h3>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["Inscription", "Rechercher un bien", "Consulter annonce", "Contacter propriétaire", "Visiter", "Signer le bail", "Payer le loyer", "Messagerie"].map((step, i, arr) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`rounded-xl border-2 px-3 py-2 text-xs font-medium ${i === 0 || i === arr.length - 1 ? "bg-[#FF6B6B]/10 border-[#FF6B6B]/30 text-[#FF6B6B]" : "bg-white border-zinc-300"}`}>{step}</div>
                  {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-zinc-300 shrink-0" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Architecture */}
      <Section id="architecture" bg="gray">
        <SectionTitle badge="06 — Architecture" title="Architecture de l'information" />
        <div className="flex flex-col items-center gap-4 py-6">
          <div className="rounded-xl bg-[#FF6B6B] text-white px-6 py-3 font-bold font-bricolage text-sm">Cocoon App</div>
          <div className="w-px h-6 bg-zinc-300" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Accueil", "Recherche / Annonces", "Gestion locative", "Mon profil"].map((n, i) => (
              <div key={i} className="rounded-xl border-2 border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-center">{n}</div>
            ))}
          </div>
          <div className="w-px h-6 bg-zinc-300" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
            {["Quittances", "Baux", "Messagerie", "Dépenses", "SEPA / Paiements", "Travaux", "Documents", "Comparatif prix", "États des lieux", "Paramètres"].map((n, i) => (
              <div key={i} className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-center text-zinc-600">{n}</div>
            ))}
          </div>
        </div>
      </Section>

      {/* Wireframes */}
      <Section id="wireframes">
        <SectionTitle badge="07 — Wireframes" title="Wireframes low-fidelity" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Accueil", elements: ["[Header + Logo]", "[Search bar]", "[Biens à la une]", "[Recommandations]", "[Nav bar]"] },
            { title: "Fiche bien", elements: ["[Photos carousel]", "[Titre + Prix]", "[Description]", "[Caractéristiques]", "[Contacter]"] },
            { title: "Gestion", elements: ["[Mon bien]", "[Loyers perçus]", "[Dépenses]", "[Documents]", "[Messagerie]"] },
            { title: "Profil", elements: ["[Avatar + Nom]", "[Type: Proprio/Loc]", "[Mes biens]", "[Paramètres]", "[Déconnexion]"] },
          ].map((wf, i) => (
            <div key={i} className="rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-50 p-4 space-y-2">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider text-center">{wf.title}</h4>
              <div className="space-y-1.5">
                {wf.elements.map((el, j) => (
                  <div key={j} className="bg-zinc-200/60 rounded px-2 py-1.5 text-[10px] text-zinc-500 font-mono text-center">{el}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Direction artistique */}
      <Section id="direction-artistique" bg="gray">
        <SectionTitle badge="08 — Direction artistique" title="Design System" />
        <div className="space-y-8">
          <div>
            <h3 className="font-bold font-bricolage text-sm mb-3">Palette de couleurs</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { color: "#FF6B6B", name: "Corail (Primary)" },
                { color: "#e05555", name: "Corail Dark" },
                { color: "#335c67", name: "Dark Slate Grey" },
                { color: "#e09f3e", name: "Honey Bronze" },
                { color: "#fff3b0", name: "Vanilla Custard" },
                { color: "#FFF8F0", name: "Off White" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 pr-4">
                  <div className="w-10 h-10 rounded-lg border border-zinc-200 shadow-sm" style={{ backgroundColor: c.color }} />
                  <div>
                    <p className="text-xs font-bold">{c.name}</p>
                    <p className="text-[10px] text-zinc-400 font-mono">{c.color}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold font-bricolage text-sm mb-3">Principes</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Simplicité", desc: "Interface épurée, navigation claire, actions évidentes." },
                { title: "Confiance", desc: "Design rassurant pour des transactions immobilières sensibles." },
                { title: "Mobile-first", desc: "Pensé pour une utilisation en déplacement, lors de visites." },
              ].map((p, i) => (
                <div key={i} className="rounded-xl border border-zinc-200 bg-white p-4 space-y-2">
                  <h4 className="font-bold text-sm">{p.title}</h4>
                  <p className="text-xs text-zinc-500">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Résultats */}
      <Section id="resultats">
        <SectionTitle badge="09 — Résultats" title="Impact du projet" />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { value: "300M€", label: "Marché cible", desc: "Transactions immobilières/an" },
            { value: "42%", label: "Des propriétaires", desc: "Gèrent seuls leurs biens" },
            { value: "13M", label: "De locataires", desc: "En France recherchent activement" },
          ].map((r, i) => (
            <motion.div key={i} variants={staggerItem} className="rounded-2xl border border-zinc-200 bg-white p-5 text-center space-y-2">
              <p className="text-3xl font-bold text-[#FF6B6B] font-bricolage">{r.value}</p>
              <p className="font-bold text-sm">{r.label}</p>
              <p className="text-xs text-zinc-500">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-8 space-y-4">
          {[
            { title: "Le marché est fragmenté", desc: "Les outils actuels ciblent soit les professionnels soit les agences. Les particuliers manquent d'une solution simple." },
            { title: "La confiance est clé", desc: "En immobilier, le design doit inspirer confiance. Chaque interaction doit être rassurante et transparente." },
            { title: "Mobile = visites", desc: "Les utilisateurs consultent les biens en mobilité. L'app doit être performante sur smartphone, avec des photos de qualité et un chargement rapide." },
          ].map((l, i) => (
            <div key={i} className="rounded-xl border border-zinc-200 p-5 space-y-2">
              <h3 className="font-bold font-bricolage text-sm flex items-center gap-2"><Lightbulb className="h-4 w-4 text-[#FF6B6B]" />{l.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── VIABILITÉ MARCHÉ ─── */}
      <Section id="viabilite-marche" bg="gray">
        <SectionTitle badge="10 — Viabilité marché" title="Analyse de la viabilité du marché" subtitle="Le marché de la proptech locative en France offre une fenêtre d'opportunité significative pour Cocoon." />
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-4">
            <h3 className="font-bold font-bricolage flex items-center gap-2"><BarChart3 className="h-5 w-5 text-[#FF6B6B]" /> Taille du marché</h3>
            <div className="space-y-3">
              {[
                { label: "Logements locatifs privés", value: "7.5M", pct: "100%" },
                { label: "Propriétaires autogérants", value: "3.15M", pct: "42%" },
                { label: "Croissance proptech/an", value: "+18%", pct: "18%" },
              ].map((m, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600">{m.label}</span>
                    <span className="font-bold text-[#FF6B6B]">{m.value}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-zinc-100">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#e09f3e]" style={{ width: m.pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-4">
            <h3 className="font-bold font-bricolage flex items-center gap-2"><Target className="h-5 w-5 text-[#335c67]" /> TAM / SAM / SOM</h3>
            <div className="space-y-3">
              <div className="rounded-xl border-2 border-[#FF6B6B]/20 bg-[#FF6B6B]/5 p-4">
                <p className="text-xs font-bold text-[#FF6B6B] uppercase tracking-wider">TAM — Marché total adressable</p>
                <p className="text-2xl font-bold font-bricolage mt-1">300M€+</p>
                <p className="text-xs text-zinc-500 mt-1">Gestion locative France entière</p>
              </div>
              <div className="rounded-xl border-2 border-[#e09f3e]/20 bg-[#e09f3e]/5 p-4">
                <p className="text-xs font-bold text-[#e09f3e] uppercase tracking-wider">SAM — Marché accessible</p>
                <p className="text-2xl font-bold font-bricolage mt-1">125M€</p>
                <p className="text-xs text-zinc-500 mt-1">Propriétaires autogérants digitalisables</p>
              </div>
              <div className="rounded-xl border-2 border-[#335c67]/20 bg-[#335c67]/5 p-4">
                <p className="text-xs font-bold text-[#335c67] uppercase tracking-wider">SOM — Objectif année 1</p>
                <p className="text-2xl font-bold font-bricolage mt-1">15M€</p>
                <p className="text-xs text-zinc-500 mt-1">Early adopters urbains tech-savvy</p>
              </div>
            </div>
          </div>
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Scale, title: "Complexité réglementaire", desc: "Législation dense qui décourage la gestion manuelle" },
            { icon: TrendingUp, title: "Digitalisation", desc: "Accélération post-COVID de la dématérialisation" },
            { icon: RefreshCw, title: "Outils vieillissants", desc: "Solutions existantes datées et peu ergonomiques" },
            { icon: Search, title: "Demande de transparence", desc: "Locataires exigent plus de visibilité et de réactivité" },
          ].map((f, i) => (
            <motion.div key={i} variants={staggerItem} className="rounded-xl border border-zinc-200 bg-white p-4 space-y-2">
              <f.icon className="h-6 w-6 text-[#FF6B6B]" />
              <h4 className="font-bold text-xs">{f.title}</h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ─── MARGES 2021 ─── */}
      <Section id="marges-2021">
        <SectionTitle badge="11 — Marges 2021" title="Marges bénéficiaires du secteur en 2021" subtitle="Analyse de la structure de coûts et des marges dans le secteur de la proptech locative." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-5 mb-8">
          {[
            { value: "7-10%", label: "Frais de gestion", desc: "Commission moyenne sur le loyer perçu" },
            { value: "150-300€", label: "Coût d'acquisition", desc: "Par nouveau locataire (marketing + onboarding)" },
            { value: "8-15€/mois", label: "ARPU SaaS", desc: "Revenu moyen par utilisateur en proptech" },
          ].map((m, i) => (
            <motion.div key={i} variants={staggerItem} className="rounded-2xl border border-zinc-200 bg-white p-5 text-center space-y-2">
              <p className="text-2xl font-bold text-[#FF6B6B] font-bricolage">{m.value}</p>
              <p className="font-bold text-sm">{m.label}</p>
              <p className="text-xs text-zinc-500">{m.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-4">
            <h3 className="font-bold font-bricolage text-sm">Structure de coûts type (proptech)</h3>
            <div className="space-y-3">
              {[
                { label: "Développement", pct: 40, color: "#FF6B6B" },
                { label: "Marketing & Acquisition", pct: 25, color: "#e09f3e" },
                { label: "Opérations & Infrastructure", pct: 20, color: "#335c67" },
                { label: "Support client", pct: 15, color: "#e05555" },
              ].map((c, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600">{c.label}</span>
                    <span className="font-bold" style={{ color: c.color }}>{c.pct}%</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-zinc-100">
                    <div className="h-full rounded-full" style={{ width: `${c.pct}%`, backgroundColor: c.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-4">
            <h3 className="font-bold font-bricolage text-sm">Comparaison des modèles</h3>
            <div className="space-y-3">
              {[
                { model: "Agence traditionnelle", margin: "5-8%", note: "Coûts fixes élevés, personnel", color: "#e05555" },
                { model: "SaaS à l'échelle", margin: "60-70%", note: "Marges élevées après seuil de rentabilité", color: "#335c67" },
                { model: "Freemium (Cocoon)", margin: "~45%", note: "Nécessite 50K+ utilisateurs pour rentabilité", color: "#FF6B6B" },
              ].map((m, i) => (
                <div key={i} className="rounded-xl border border-zinc-200 p-4 space-y-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-sm">{m.model}</h4>
                    <span className="text-lg font-bold font-bricolage" style={{ color: m.color }}>{m.margin}</span>
                  </div>
                  <p className="text-xs text-zinc-500">{m.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ─── BENCHMARK ─── */}
      <Section id="benchmark" bg="gray">
        <SectionTitle badge="12 — Benchmark" title="Benchmark comparatif des applications concurrentes" subtitle="Positionnement de Cocoon face aux solutions existantes sur le marché français." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { name: "Rentila", focus: "Comptabilité", strength: "Outils financiers complets", weakness: "UX datée, web only", color: "#335c67" },
            { name: "Locagestion", focus: "Full-service", strength: "Prise en charge totale", weakness: "Modèle agence coûteux", color: "#e09f3e" },
            { name: "Ublo", focus: "Digital tools", strength: "Automatisation", weakness: "Interface complexe, pro only", color: "#e05555" },
            { name: "Cocoon", focus: "All-in-one", strength: "Mobile-first, freemium, UX moderne", weakness: "Nouveau sur le marché", color: "#FF6B6B" },
          ].map((c, i) => (
            <motion.div key={i} variants={staggerItem} className="rounded-2xl border border-zinc-200 bg-white p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: c.color }}>
                {c.name[0]}
              </div>
              <h4 className="font-bold font-bricolage">{c.name}</h4>
              <p className="text-[10px] uppercase tracking-wider text-zinc-400">{c.focus}</p>
              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#335c67] mt-0.5 shrink-0" />
                  <p className="text-xs text-zinc-600">{c.strength}</p>
                </div>
                <div className="flex items-start gap-1.5">
                  <X className="h-3.5 w-3.5 text-[#FF6B6B]/50 mt-0.5 shrink-0" />
                  <p className="text-xs text-zinc-500">{c.weakness}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature matrix */}
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-100">
                  <th className="text-left p-4 font-bold text-xs uppercase tracking-wider text-zinc-400">Fonctionnalité</th>
                  {["Rentila", "Locagestion", "Ublo", "Cocoon"].map((n) => (
                    <th key={n} className="p-4 text-center font-bold text-xs uppercase tracking-wider text-zinc-400">{n}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Messagerie intégrée", values: [false, true, false, true] },
                  { feature: "Prélèvement SEPA", values: [true, true, false, true] },
                  { feature: "Bail numérique", values: [false, true, true, true] },
                  { feature: "Suivi des dépenses", values: [true, true, true, true] },
                  { feature: "Comparatifs marché", values: [false, false, false, true] },
                  { feature: "App mobile native", values: [false, false, false, true] },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-zinc-50">
                    <td className="p-4 text-zinc-700 font-medium">{row.feature}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="p-4 text-center">
                        {v ? <CheckCircle2 className="h-4 w-4 text-[#335c67] mx-auto" /> : <X className="h-4 w-4 text-zinc-300 mx-auto" />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Layers, title: "Mobile-first", desc: "Seule solution pensée nativement pour le smartphone, adapté aux visites terrain." },
            { icon: Zap, title: "Marketplace intégrée", desc: "Recherche de biens + gestion dans une seule app, pas de redirection vers des tiers." },
            { icon: Shield, title: "Freemium accessible", desc: "Gratuit pour démarrer, pas de barrière à l'entrée contrairement aux agences." },
          ].map((d, i) => (
            <div key={i} className="rounded-xl bg-[#FF6B6B] text-white p-5 space-y-2">
              <d.icon className="h-6 w-6 text-[#e09f3e]" />
              <h4 className="font-bold text-sm">{d.title}</h4>
              <p className="text-xs text-white/80 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── EXPANSION ─── */}
      <Section id="expansion">
        <SectionTitle badge="13 — Expansion" title="Comment étendre l'offre" subtitle="Roadmap stratégique pour faire évoluer Cocoon d'un MVP vers un écosystème complet." />

        {/* Roadmap */}
        <div className="space-y-6 mb-10">
          {[
            {
              phase: "Phase 1 — Consolidation",
              period: "0-6 mois",
              color: "#FF6B6B",
              items: ["Fonctionnalités core (quittances, baux, messagerie)", "Feedback beta et itérations UX", "Onboarding simplifié propriétaires/locataires"],
            },
            {
              phase: "Phase 2 — Croissance",
              period: "6-18 mois",
              color: "#e09f3e",
              items: ["Intégration SEPA et paiements en ligne", "Partenariats assurances habitation", "Marketplace artisans et travaux", "Synchronisation locations saisonnières"],
            },
            {
              phase: "Phase 3 — Écosystème",
              period: "18-36 mois",
              color: "#335c67",
              items: ["API ouverte et white-label pour agences", "Estimation de loyer assistée par IA", "Expansion Belgique & Luxembourg", "Analytics et insights marché pour investisseurs"],
            },
          ].map((phase, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full border-4" style={{ borderColor: phase.color }} />
                {i < 2 && <div className="w-0.5 flex-1 bg-zinc-200" />}
              </div>
              <div className="pb-6 flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-bold font-bricolage" style={{ color: phase.color }}>{phase.phase}</h3>
                  <span className="text-xs text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-full">{phase.period}</span>
                </div>
                <ul className="space-y-1.5">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-zinc-600">
                      <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0" style={{ color: phase.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Sources de revenus */}
        <h3 className="font-bold font-bricolage text-sm mb-4">Sources de revenus</h3>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: DollarSign, title: "Abonnements Premium", desc: "9.99€ à 29.99€/mois selon le nombre de biens", color: "#FF6B6B" },
            { icon: Zap, title: "Frais SEPA", desc: "Commission de 0.5-1% sur les transactions de loyer", color: "#e09f3e" },
            { icon: Users, title: "Génération de leads", desc: "Mise en relation payante avec notaires, artisans, assureurs", color: "#335c67" },
            { icon: BarChart3, title: "Data & Analytics", desc: "Insights marché et tendances pour investisseurs professionnels", color: "#e05555" },
          ].map((r, i) => (
            <motion.div key={i} variants={staggerItem} className="rounded-xl border border-zinc-200 bg-white p-4 space-y-2">
              <r.icon className="h-6 w-6" style={{ color: r.color }} />
              <h4 className="font-bold text-xs">{r.title}</h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Expansion géographique */}
        <h3 className="font-bold font-bricolage text-sm mb-4">Expansion géographique</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { flag: "🇫🇷", zone: "France métropolitaine", phase: "Lancement", desc: "Paris et grandes métropoles, puis villes moyennes" },
            { flag: "🌴", zone: "DOM-TOM", phase: "Phase 2", desc: "Adaptation aux spécificités locales (bail, réglementation)" },
            { flag: "🇧🇪 🇱🇺", zone: "Belgique & Luxembourg", phase: "Phase 3", desc: "Marchés francophones proches, réglementation similaire" },
          ].map((g, i) => (
            <div key={i} className="rounded-xl border border-zinc-200 bg-white p-5 space-y-2">
              <span className="text-2xl">{g.flag}</span>
              <h4 className="font-bold font-bricolage text-sm">{g.zone}</h4>
              <span className="inline-block text-[10px] uppercase tracking-wider font-bold text-[#FF6B6B] bg-[#FF6B6B]/10 px-2 py-0.5 rounded-full">{g.phase}</span>
              <p className="text-xs text-zinc-500 leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Final */}
      <section className="w-full py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold font-bricolage">Découvrir le projet</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full bg-[#FF6B6B] hover:bg-[#e09f3e] text-white" asChild>
              <Link href="/cocoon">Voir la landing page<ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10" asChild>
              <Link href="/#projects">Retour portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
