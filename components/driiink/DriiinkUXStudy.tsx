"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  BookOpen,
  Target,
  Users,
  Search,
  MessageSquare,
  Layout,
  TestTube,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  AlertCircle,
  Wine,
  Star,
  Smile,
  Meh,
  Frown,
  Figma,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const tocSections = [
  { id: "contexte", label: "Contexte" },
  { id: "missions", label: "Missions" },
  { id: "objectifs", label: "Objectifs" },
  { id: "outils", label: "Outils" },
  { id: "persona", label: "Persona" },
  { id: "journey", label: "User Journey" },
  { id: "user-stories", label: "User Stories" },
  { id: "architecture", label: "Architecture" },
  { id: "wireframes", label: "Wireframes" },
  { id: "moodboard", label: "Direction artistique" },
  { id: "maquettes", label: "Maquettes Hi-Fi" },
  { id: "tests", label: "Tests utilisateurs" },
  { id: "iterations", label: "Itérations" },
  { id: "resultats", label: "Résultats" },
];

function Section({ id, children, bg = "white" }: { id: string; children: React.ReactNode; bg?: "white" | "gray" }) {
  return (
    <section id={id} className={`w-full py-16 md:py-24 ${bg === "gray" ? "bg-zinc-50" : "bg-white"}`}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn} className="max-w-4xl mx-auto px-6">
        {children}
      </motion.div>
    </section>
  );
}

function SectionTitle({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10 space-y-3">
      <span className="inline-flex items-center rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 px-3 py-1 text-xs font-medium text-[#22C55E]">{badge}</span>
      <h2 className="text-2xl sm:text-3xl font-bold font-bricolage text-zinc-900">{title}</h2>
      {subtitle && <p className="text-zinc-500 max-w-2xl">{subtitle}</p>}
    </div>
  );
}

export default function DriiinkUXStudy() {
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-montserrat">
      {/* ─── HEADER ─── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-6">
          <Link href="/driiink-landing" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Retour</span>
          </Link>
          <div className="flex items-center gap-2">
            <Image src="/images/projects/Driiink/logo.png" alt="Driiink" width={24} height={24} className="rounded" />
            <span className="font-bold text-sm font-bricolage">Driiink — Étude UX</span>
          </div>
          <Button size="sm" variant="outline" className="rounded-full text-xs hidden md:flex" onClick={() => setTocOpen(!tocOpen)}>
            Sommaire
          </Button>
        </div>
      </header>

      {/* ─── TOC Sidebar ─── */}
      {tocOpen && (
        <motion.div initial={{ opacity: 0, x: 300 }} animate={{ opacity: 1, x: 0 }} className="fixed right-0 top-14 w-72 h-[calc(100vh-3.5rem)] bg-white border-l border-zinc-100 z-40 p-6 overflow-y-auto shadow-lg">
          <h3 className="font-bold text-sm mb-4 text-zinc-500 uppercase tracking-wider">Sommaire</h3>
          <nav className="space-y-1">
            {tocSections.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={() => setTocOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 hover:text-[#22C55E] transition-colors">
                {s.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}

      {/* ─── HERO ─── */}
      <section className="w-full bg-gradient-to-b from-zinc-900 to-zinc-800 text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm text-zinc-300">
              <BookOpen className="mr-2 h-3.5 w-3.5" />
              Case Study UX/UI
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold font-bricolage leading-[1.1]">
            Étude UX :{" "}
            <span className="bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">Driiink</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-zinc-400 text-lg max-w-xl">
            Concevoir une application mobile permettant aux clients de commander et payer leurs boissons directement depuis leur table.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4 text-sm text-zinc-400">
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 15 min de lecture</span>
            <span>Rôle : UX/UI Designer</span>
            <span>Outils : Figma</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-2 pt-2">
            {["UI Design", "Web Design", "UX UI Design"].map((tag) => (
              <span key={tag} className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CONTEXTE ─── */}
      <Section id="contexte">
        <SectionTitle badge="01 — Contexte" title="Le projet Driiink" />
        <div className="prose prose-zinc max-w-none space-y-4">
          <p className="text-zinc-600 leading-relaxed">
            Driiink est une application mobile permettant aux clients de commander et payer leurs boissons directement depuis leur table, sans attente au comptoir. L&apos;objectif : fluidifier le service dans les bars et améliorer l&apos;expérience client grâce à une interface simple et intuitive.
          </p>
        </div>
      </Section>

      {/* ─── MISSIONS ─── */}
      <Section id="missions" bg="gray">
        <SectionTitle badge="02 — Missions" title="Mon rôle sur le projet" />
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-4">
          <p className="text-zinc-600 leading-relaxed">
            En tant qu&apos;UX/UI Designer, j&apos;ai piloté la recherche utilisateur, conçu les parcours clients, les wireframes, et les maquettes haute-fidélité sur Figma. J&apos;ai également défini la hiérarchie des fonctionnalités et construit un prototype interactif mobile-first pour valider les flux de commande et de paiement.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            {["Recherche utilisateur", "Parcours clients", "Wireframes", "Maquettes Hi-Fi", "Prototype interactif", "Tests utilisateurs", "Hiérarchie fonctionnelle", "Design system"].map((m, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#22C55E] shrink-0" />
                {m}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── OBJECTIFS ─── */}
      <Section id="objectifs">
        <SectionTitle badge="03 — Objectifs" title="Objectifs du projet" />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Clock, title: "Réduire l'attente", desc: "Réduire le temps d'attente au bar grâce à la commande mobile depuis la table." },
            { icon: Layout, title: "Simplifier le parcours", desc: "Simplifier la navigation et le paiement pour une expérience fluide et accessible." },
            { icon: Star, title: "Expérience nocturne", desc: "Offrir une expérience adaptée à une utilisation en soirée : lisible, contrastée, rapide." },
          ].map((o, i) => (
            <motion.div key={i} variants={staggerItem} className="rounded-2xl border border-zinc-200 p-6 space-y-3 bg-white">
              <o.icon className="h-8 w-8 text-[#22C55E]" />
              <h3 className="font-bold font-bricolage">{o.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{o.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ─── OUTILS ─── */}
      <Section id="outils" bg="gray">
        <SectionTitle badge="04 — Outils & Méthodologie" title="Stack de design" />
        <div className="flex flex-wrap gap-4">
          {[
            { name: "Figma", desc: "Wireframes, maquettes et prototype" },
            { name: "FigJam", desc: "User journey et brainstorming" },
            { name: "Notion", desc: "Documentation et user stories" },
          ].map((tool, i) => (
            <div key={i} className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-5 py-4">
              <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center">
                <Figma className="h-5 w-5 text-zinc-700" />
              </div>
              <div>
                <p className="font-bold text-sm">{tool.name}</p>
                <p className="text-xs text-zinc-500">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── PERSONA ─── */}
      <Section id="persona">
        <SectionTitle badge="05 — Persona" title="Antoine, notre utilisateur cible" subtitle="Profil principal identifié lors de la phase de recherche." />
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden">
          {/* Header persona */}
          <div className="bg-gradient-to-r from-[#22C55E]/10 to-transparent p-6 flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-zinc-100">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#22C55E]/30 shrink-0 bg-zinc-200">
              <Image src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face" alt="Antoine" fill className="object-cover" sizes="80px" />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h3 className="font-bold font-bricolage text-xl">Antoine</h3>
                <span className="text-sm text-zinc-500">22 ans</span>
              </div>
              <p className="text-sm text-zinc-500">Étudiant en école de marketing digital — La Défense</p>
              <p className="text-sm text-zinc-500">Bac +4</p>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Bio */}
            <p className="text-sm text-zinc-600 leading-relaxed">
              Antoine adore se retrouver en fin de semaine, généralement le vendredi en fin d&apos;après-midi après les études, avec quelques camarades de classe, souvent autour de la table 5. En général, il consomme au moins deux verres. Il aime discuter avec ses amis, jouer au billard, et reste souvent jusqu&apos;à 21h — même s&apos;il lui arrive de prolonger la soirée. Il lui arrive parfois d&apos;offrir un verre à un(e) ami(e), mais de manière générale, il préfère régler uniquement sa part.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Personnalité */}
              <div>
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Antoine est une personne plutôt :</h4>
                <div className="flex flex-wrap gap-2">
                  {["Sociable", "Amical", "Enthousiaste", "Extraverti", "Impatient", "Impulsif"].map((trait) => (
                    <span key={trait} className="bg-zinc-100 text-zinc-600 text-xs px-3 py-1 rounded-full">{trait}</span>
                  ))}
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-zinc-600">
                  <li>N&apos;aime pas trop lorsque les personnes à la table restent trop sur leur téléphone</li>
                  <li>Familier avec l&apos;environnement numérique</li>
                  <li>Résilient face au changement</li>
                </ul>
              </div>

              {/* Motivations */}
              <div>
                <h4 className="text-xs font-bold text-[#22C55E] uppercase tracking-wider mb-3">Ses motivations :</h4>
                <ul className="space-y-1.5">
                  {[
                    "Passer un moment agréable avec ses amies",
                    "Se détendre autour d'un verre",
                    "Besoin de service rapide & accessible",
                    "Aime entretenir une relation amicale avec le service",
                  ].map((m, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-600">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#22C55E] mt-0.5 shrink-0" />{m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Frustrations */}
            <div>
              <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3">Frustrations :</h4>
              <ul className="space-y-1.5">
                {[
                  "L'attente dans la queue pour commander",
                  "Avoir du mal à choisir sa commande",
                  "Le prix trop élevé",
                  "Les bars trop remplis",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-600">
                    <AlertCircle className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── USER JOURNEY ─── */}
      <Section id="journey" bg="gray">
        <SectionTitle badge="06 — User Journey" title="Parcours utilisateur" subtitle="Les 7 étapes du parcours d'Antoine, de l'installation à la réception de sa commande." />

        {/* Journey steps */}
        <div className="space-y-0">
          {[
            {
              step: "S'installe à sa table",
              actions: ["Accompagné ou seul"],
              emotion: "happy",
              painPoints: [],
            },
            {
              step: "Scan le QR code",
              actions: ["Prend le téléphone et scan", "Le QR code présent à la table"],
              emotion: "happy",
              painPoints: [],
            },
            {
              step: "Consulte la carte",
              actions: ["Arrive sur la carte", "Scroll et explore la carte", "Vois le prix facilement"],
              emotion: "happy",
              painPoints: ["Hésite entre plusieurs choix", "Ne trouve pas rapidement son article"],
            },
            {
              step: "Choisis et ajoute au panier",
              actions: ["Sélectionne des articles", "Voir le détails de l'article", "La rajoute dans son panier"],
              emotion: "neutral",
              painPoints: [],
            },
            {
              step: "Valide le panier",
              actions: ["Sélectionne validé la commande", "Voir le récapitulatif de la commande", "Supprimer / modifier la commande", "Vois le temps estimé pour sa commande"],
              emotion: "neutral",
              painPoints: ["Trouve le temps d'attente un peu élevé"],
            },
            {
              step: "Paiement",
              actions: ["Sélectionne une méthode de paiement (en ligne / Comptoir)"],
              emotion: "neutral",
              painPoints: ["Se demande quelle méthode de paiement choisir", "Se demande comment régler sa part / diviser la note"],
            },
            {
              step: "Réception de la commande",
              actions: [],
              emotion: "happy",
              painPoints: [],
            },
          ].map((s, i) => (
            <div key={i} className="flex gap-4 items-start">
              {/* Timeline */}
              <div className="flex flex-col items-center shrink-0 w-8">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  s.emotion === "happy" ? "bg-[#22C55E] border-[#22C55E]" :
                  s.emotion === "neutral" ? "bg-amber-400 border-amber-400" :
                  "bg-red-400 border-red-400"
                }`} />
                {i < 6 && <div className="w-0.5 h-full min-h-[60px] bg-zinc-200" />}
              </div>
              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-bold font-bricolage text-sm">{s.step}</h4>
                  {s.emotion === "happy" && <Smile className="h-4 w-4 text-[#22C55E]" />}
                  {s.emotion === "neutral" && <Meh className="h-4 w-4 text-amber-400" />}
                  {s.emotion === "sad" && <Frown className="h-4 w-4 text-red-400" />}
                </div>
                {s.actions.length > 0 && (
                  <ul className="space-y-1 mb-2">
                    {s.actions.map((a, j) => (
                      <li key={j} className="text-xs text-zinc-500">• {a}</li>
                    ))}
                  </ul>
                )}
                {s.painPoints.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {s.painPoints.map((p, j) => (
                      <div key={j} className="flex items-start gap-1.5 text-xs text-red-500">
                        <AlertCircle className="h-3 w-3 mt-0.5 shrink-0" />
                        {p}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── USER STORIES ─── */}
      <Section id="user-stories">
        <SectionTitle badge="07 — User Stories" title="User Stories" subtitle="Les besoins fonctionnels traduits en user stories." />
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-zinc-200">
                <th className="text-left py-3 px-4 font-bold text-xs uppercase tracking-wider text-zinc-500">En tant que</th>
                <th className="text-left py-3 px-4 font-bold text-xs uppercase tracking-wider text-zinc-500">Je veux</th>
                <th className="text-left py-3 px-4 font-bold text-xs uppercase tracking-wider text-zinc-500">Afin de</th>
                <th className="text-left py-3 px-4 font-bold text-xs uppercase tracking-wider text-zinc-500">Priorité</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Client", "Scanner un QR code à ma table", "Accéder au menu sans attendre", "Must"],
                ["Client", "Voir les photos et le prix des boissons", "Choisir facilement ma commande", "Must"],
                ["Client", "Ajouter des articles et voir le détail", "Composer ma commande", "Must"],
                ["Client", "Voir le récapitulatif et modifier", "Vérifier avant de valider", "Must"],
                ["Client", "Diviser la note entre amis", "Régler uniquement ma part", "Should"],
                ["Client", "Choisir paiement en ligne ou comptoir", "Payer comme je préfère", "Must"],
                ["Client", "Voir le temps estimé de ma commande", "Savoir quand elle arrive", "Should"],
                ["Gérant", "Recevoir les commandes en temps réel", "Optimiser la préparation", "Must"],
                ["Serveur", "Ne plus prendre les commandes manuellement", "Me concentrer sur le service", "Must"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
                  <td className="py-3 px-4 font-medium">{row[0]}</td>
                  <td className="py-3 px-4 text-zinc-600">{row[1]}</td>
                  <td className="py-3 px-4 text-zinc-600">{row[2]}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${row[3] === "Must" ? "bg-[#22C55E]/10 text-[#22C55E]" : "bg-blue-100 text-blue-600"}`}>{row[3]}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ─── ARCHITECTURE ─── */}
      <Section id="architecture" bg="gray">
        <SectionTitle badge="08 — Architecture" title="Architecture de l'information" />
        <div className="flex flex-col items-center gap-4 py-6">
          <div className="rounded-xl bg-[#22C55E] text-white px-6 py-3 font-bold font-bricolage text-sm">Driiink App</div>
          <div className="w-px h-6 bg-zinc-300" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Accueil / Menu", "Fiche Cocktail", "Panier / Commande", "Paiement"].map((n, i) => (
              <div key={i} className="rounded-xl border-2 border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-center">{n}</div>
            ))}
          </div>
          <div className="w-px h-6 bg-zinc-300" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
            {["Happy Hour", "Populaires", "Catégories", "Recherche", "Détail + Ingrédients", "Ajout panier", "Récapitulatif", "Split addition", "Paiement en ligne", "Paiement comptoir"].map((n, i) => (
              <div key={i} className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-center text-zinc-600">{n}</div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── WIREFRAMES ─── */}
      <Section id="wireframes">
        <SectionTitle badge="09 — Wireframes" title="Wireframes low-fidelity" subtitle="Premières ébauches des écrans principaux." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Accueil", elements: ["[Header + Logo]", "[Search bar]", "[Banner Happy Hour]", "[Offre du Moment]", "[Populaires →]", "[Catégories]", "[Grid boissons]", "[Nav bar]"] },
            { title: "Détail", elements: ["[Image cocktail]", "[← Retour]  [Panier]", "[Nom + Prix]", "[Description]", "[Ingrédients grid]", "[Quantité -/+]", "[CTA Ajouter]"] },
            { title: "Commande", elements: ["[Titre + Timer]", "[Item 1: -/+ nom prix ×]", "[Item 2: -/+ nom prix ×]", "[Total: XX.XX€]", "[CTA Valider]", "[Nav bar]"] },
            { title: "Paiement", elements: ["[← Retour]", "[Sélection articles]", "[Déjà réglé: XX€]", "[Total restant: XX€]", "[Diviser: -/X/+]", "[CTA Régler ma part]"] },
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

      {/* ─── MOODBOARD ─── */}
      <Section id="moodboard" bg="gray">
        <SectionTitle badge="10 — Direction artistique" title="Moodboard & Design System" />
        <div className="space-y-8">
          <div>
            <h3 className="font-bold font-bricolage text-sm mb-3">Palette de couleurs</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { color: "#0A0A0A", name: "Background" },
                { color: "#22C55E", name: "Primary / CTA" },
                { color: "#4ADE80", name: "Primary Light" },
                { color: "#18181B", name: "Cards" },
                { color: "#FFFFFF", name: "Text" },
                { color: "#71717A", name: "Secondary" },
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
            <h3 className="font-bold font-bricolage text-sm mb-3">Typographies</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-zinc-200 bg-white p-5">
                <p className="text-2xl font-bold font-bricolage">Bricolage Grotesque</p>
                <p className="text-xs text-zinc-500 mt-1">Titres — Bold, moderne, personnalité</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-5">
                <p className="text-lg font-montserrat">Montserrat</p>
                <p className="text-xs text-zinc-500 mt-1">Corps de texte — Lisible, clean</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold font-bricolage text-sm mb-3">Principes de design</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Dark & Nocturne", desc: "Design contrasté pensé pour un environnement nocturne, lisible en faible luminosité." },
                { title: "Glassmorphism", desc: "Effets de flou et transparence pour la profondeur et le côté premium." },
                { title: "Mobile-first", desc: "Conçu pour le pouce — zones d'interaction larges, parcours linéaire." },
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

      {/* ─── MAQUETTES ─── */}
      <Section id="maquettes">
        <SectionTitle badge="11 — Maquettes" title="Maquettes haute fidélité" subtitle="Les écrans finaux de l'application." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: "/images/projects/Driiink/app.png", title: "Accueil" },
            { src: "/images/projects/Driiink/detail.png", title: "Détail cocktail" },
            { src: "/images/projects/Driiink/Product page detail.png", title: "Page produit" },
            { src: "/images/projects/Driiink/Récapitulatif de la table.png", title: "Récapitulatif" },
          ].map((s, i) => (
            <div key={i} className="space-y-2">
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
                <Image src={s.src} alt={s.title} fill className="object-cover" sizes="200px" />
              </div>
              <p className="text-xs text-center text-zinc-500 font-medium">{s.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button className="rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white" asChild>
            <Link href="/driiink">Tester le prototype interactif <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </Section>

      {/* ─── TESTS ─── */}
      <Section id="tests" bg="gray">
        <SectionTitle badge="12 — Tests utilisateurs" title="Tests & Usability testing" subtitle="5 participants ont testé le prototype sur 3 scénarios clés." />
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { scenario: "Commander un Mojito", taux: "100%", temps: "48s", sat: "4.8/5" },
              { scenario: "Ajouter 3 boissons au panier", taux: "100%", temps: "72s", sat: "4.6/5" },
              { scenario: "Diviser l'addition en 4", taux: "80%", temps: "95s", sat: "4.2/5" },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-5 space-y-3">
                <h4 className="font-bold text-sm font-bricolage">{t.scenario}</h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div><p className="text-lg font-bold text-[#22C55E]">{t.taux}</p><p className="text-[10px] text-zinc-400">Complétion</p></div>
                  <div><p className="text-lg font-bold">{t.temps}</p><p className="text-[10px] text-zinc-400">Temps</p></div>
                  <div><p className="text-lg font-bold">{t.sat}</p><p className="text-[10px] text-zinc-400">Satisfaction</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── ITERATIONS ─── */}
      <Section id="iterations">
        <SectionTitle badge="13 — Itérations" title="Améliorations post-tests" />
        <div className="space-y-6">
          {[
            { title: "Split de l'addition", before: "Checkboxes grises peu visibles, texte pas assez explicite.", after: "Checkboxes vertes animées, titre reformulé, ajout d'une progress bar montrant le % déjà réglé." },
            { title: "Écran de paiement", before: "Le bouton ne montrait pas le montant. Feedback de succès minimal.", after: "CTA affiche le montant exact, ajout de confetti animation et message de confirmation détaillé." },
            { title: "Détail cocktail", before: "CTA sans indication de prix. Pas de feedback après ajout.", after: "CTA avec prix total dynamique, toast notification après ajout au panier." },
          ].map((it, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 overflow-hidden">
              <div className="bg-zinc-50 px-5 py-3 border-b border-zinc-200"><h4 className="font-bold font-bricolage text-sm">{it.title}</h4></div>
              <div className="grid md:grid-cols-2">
                <div className="p-5 border-r border-zinc-100"><span className="text-xs font-bold text-red-500 uppercase">Avant</span><p className="text-sm text-zinc-600 mt-2">{it.before}</p></div>
                <div className="p-5"><span className="text-xs font-bold text-[#22C55E] uppercase">Après</span><p className="text-sm text-zinc-600 mt-2">{it.after}</p></div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── RESULTATS ─── */}
      <Section id="resultats" bg="gray">
        <SectionTitle badge="14 — Résultats" title="Résultats du projet" subtitle="Une application au design contrasté et lisible, pensée pour un environnement nocturne." />
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-4 mb-8">
          <p className="text-zinc-600 leading-relaxed">
            Le prototype a permis de valider la pertinence du parcours et de renforcer l&apos;attractivité du concept auprès des établissements partenaires. Le design met en avant la rapidité et le confort d&apos;utilisation.
          </p>
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: "95%", label: "Taux de complétion", desc: "Sur tous les scénarios" },
            { value: "4.8/5", label: "Satisfaction", desc: "Score moyen des testeurs" },
            { value: "<2min", label: "Temps de commande", desc: "Du scan au paiement" },
            { value: "100%", label: "Attractivité", desc: "Concept validé par les partenaires" },
          ].map((r, i) => (
            <motion.div key={i} variants={staggerItem} className="rounded-2xl border border-zinc-200 bg-white p-5 text-center space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-[#22C55E] font-bricolage">{r.value}</p>
              <p className="font-bold text-sm">{r.label}</p>
              <p className="text-xs text-zinc-500">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ─── LEARNINGS ─── */}
      <Section id="learnings">
        <SectionTitle badge="15 — Learnings" title="Ce que j'ai appris" />
        <div className="space-y-4">
          {[
            { title: "Designer pour l'environnement nocturne", desc: "Un bar n'est pas un bureau. Faible luminosité, bruit, distractions — le design doit être contrasté, les zones tactiles larges, le parcours ultra-linéaire." },
            { title: "Le split addition est la feature la plus complexe", desc: "C'est la plus demandée mais aussi la plus difficile à designer. L'équilibre entre flexibilité (choisir qui paie quoi) et simplicité (diviser en X) a nécessité 3 itérations." },
            { title: "Mobile-first n'est pas mobile-only", desc: "Même si l'app est mobile, penser au contexte d'usage (debout, une main, verre dans l'autre) a radicalement changé les choix d'interaction." },
            { title: "Le prototype valide le concept", desc: "Le prototype interactif a été déterminant pour convaincre les établissements partenaires. Montrer plutôt qu'expliquer." },
          ].map((l, i) => (
            <div key={i} className="rounded-xl border border-zinc-200 p-5 space-y-2">
              <h3 className="font-bold font-bricolage text-sm flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-[#22C55E]" />{l.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── CTA FINAL ─── */}
      <section className="w-full py-20 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold font-bricolage">Envie de voir le résultat ?</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Testez le prototype interactif — parcourez le menu, ajoutez des cocktails et divisez l&apos;addition.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full bg-[#22C55E] hover:bg-[#16A34A]" asChild>
              <Link href="/driiink">Tester la démo <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10" asChild>
              <Link href="/driiink-landing">Voir la landing page</Link>
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
