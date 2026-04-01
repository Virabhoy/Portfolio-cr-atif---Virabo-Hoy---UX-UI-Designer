import type { LeaveMessage, Recipient, Referent, PricingPlan, Testimonial } from "./leave-types";

export const recipients: Recipient[] = [
  { id: "r1", firstName: "Boris", lastName: "Monterrat", email: "boris.monterrat@leave.ms", phone: "06 13 24 53 37", relation: "Fils" },
  { id: "r2", firstName: "Mehdi", lastName: "Chaouch", email: "mehdi.chaouch@leave.ms", phone: "06 24 35 67 89", relation: "Ami proche" },
  { id: "r3", firstName: "Claire", lastName: "Dubois", email: "claire.dubois@email.com", phone: "06 45 78 90 12", relation: "Fille" },
  { id: "r4", firstName: "Antoine", lastName: "Martin", email: "antoine.martin@email.com", relation: "Petit-fils" },
];

export const referents: Referent[] = [
  { id: "ref1", firstName: "Boris", lastName: "Monterrat", email: "boris.monterrat@leave.ms", phone: "06 13 24 53 37" },
  { id: "ref2", firstName: "Mehdi", lastName: "Chaouch", email: "mehdi.chaouch@leave.ms", phone: "06 24 35 67 89" },
];

export const messages: LeaveMessage[] = [
  {
    id: "msg1", type: "video", title: "Message vidéo pour mes enfants",
    status: "active", recipients: [recipients[0], recipients[2]],
    referents: [referents[0], referents[1]],
    controlFrequency: "monthly", controlType: "email",
    createdAt: "2024-01-15", notes: "Parler du voyage en Italie et des souvenirs d'enfance.",
  },
  {
    id: "msg2", type: "letter", title: "Lettre à mon ami Mehdi",
    status: "active", recipients: [recipients[1]],
    referents: [referents[0]],
    controlFrequency: "yearly", controlType: "sms",
    createdAt: "2024-02-20", notes: "Lui dire merci pour tout.",
  },
  {
    id: "msg3", type: "audio", title: "Message audio famille",
    status: "draft", recipients: [recipients[0], recipients[2], recipients[3]],
    referents: [referents[0]],
    controlFrequency: "monthly", controlType: "email",
    createdAt: "2024-03-10",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "plan1", name: "Message unique", price: 59, period: "/TTC",
    icon: "✉️",
    features: ["1 message audio/vidéo", "Stockage 5 ans", "1 destinataire", "Alertes email", "Support standard"],
  },
  {
    id: "plan2", name: "Message illimité", price: 149, period: "/TTC",
    icon: "💎", popular: true,
    features: ["Messages illimités", "Stockage illimité", "Destinataires illimités", "Alertes email + SMS", "Support prioritaire", "Notes personnelles", "Multi-référents"],
  },
];

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Sarah C.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", text: "Leave m'a permis de laisser un message sincère à mes proches. C'est rassurant de savoir que mes mots seront transmis.", rating: 5 },
  { id: "t2", name: "François R.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", text: "Une interface simple et rassurante. J'ai pu enregistrer mon message en quelques minutes, sans stress.", rating: 5 },
  { id: "t3", name: "Arlene S.", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face", text: "Le concept est magnifique. Savoir que mon héritage émotionnel sera préservé me donne une grande sérénité.", rating: 4.5 },
];

export const processSteps = [
  { step: "1", title: "Inscrivez vous", desc: "Créez votre compte sécurisé en quelques clics." },
  { step: "2", title: "Préparez vous", desc: "Consultez notre rubrique conseil et préparez votre discours." },
  { step: "3", title: "Vérifiez à qui il convient", desc: "Définissez vos destinataires et référents de confiance." },
  { step: "4", title: "Enregistrez vous", desc: "Enregistrez votre message vidéo, audio ou écrit." },
  { step: "5", title: "Détendez-vous", desc: "Leave s'occupe du reste. Vos messages seront transmis." },
];

export const values = [
  { title: "Confidentialité et sécurité", desc: "Vos messages sont chiffrés de bout en bout. Personne ne peut y accéder sans autorisation.", icon: "🔒" },
  { title: "Contrôle de présence", desc: "Un système de vérification régulier pour s'assurer que tout va bien.", icon: "✅" },
  { title: "Restitution des messages", desc: "Vos messages sont transmis fidèlement à vos destinataires, au moment voulu.", icon: "💌" },
];

export const partners = [
  { name: "Assurance Vie", logo: "🏛️" },
  { name: "Notaires de France", logo: "⚖️" },
  { name: "La Poste", logo: "📮" },
];

// Helpers
export function getMessageById(id: string) { return messages.find((m) => m.id === id); }
export function getActiveMessages() { return messages.filter((m) => m.status === "active"); }
export function getDraftMessages() { return messages.filter((m) => m.status === "draft"); }
