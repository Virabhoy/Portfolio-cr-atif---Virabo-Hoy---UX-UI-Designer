import type {
  Property, Tenant, CocoonDocument, Conversation, Transaction,
  Work, AppNotification,
} from "./cocoon-types";

export const properties: Property[] = [
  {
    id: "p1", title: "Appartement T3 Bastille", address: "12 rue de la Roquette", city: "Paris 11e",
    type: "t3", surface: 65, rooms: 3, floor: 4, price: 1200, status: "loue",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    features: ["Balcon", "Parking", "Cave", "Digicode", "Ascenseur"],
    tenantId: "t1",
    description: "Bel appartement lumineux avec vue dégagée, proche métro Bastille. Parquet massif, cuisine équipée, double vitrage.",
  },
  {
    id: "p2", title: "Studio Montmartre", address: "8 rue Lepic", city: "Paris 18e",
    type: "studio", surface: 28, rooms: 1, floor: 6, price: 750, status: "disponible",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    features: ["Vue Sacré-Coeur", "Charme", "Mezzanine"],
    description: "Studio sous les toits avec vue exceptionnelle sur le Sacré-Coeur. Idéal investissement locatif.",
  },
  {
    id: "p3", title: "T2 République", address: "45 boulevard Voltaire", city: "Paris 11e",
    type: "t2", surface: 45, rooms: 2, floor: 2, price: 950, status: "loue",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    features: ["Cuisine équipée", "Parquet", "Double vitrage", "Cave"],
    tenantId: "t2",
    description: "Deux pièces fonctionnel et bien agencé, à deux pas de la Place de la République.",
  },
  {
    id: "p4", title: "Maison Vincennes", address: "23 avenue du Château", city: "Vincennes",
    type: "maison", surface: 120, rooms: 5, floor: 0, price: 1800, status: "travaux",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
    features: ["Jardin", "Garage", "Sous-sol", "Terrasse", "3 SDB"],
    description: "Maison de ville avec jardin privatif. Rénovation en cours : cuisine, salle de bains, isolation.",
  },
  {
    id: "p5", title: "T4 Neuilly", address: "7 boulevard d'Inkermann", city: "Neuilly-sur-Seine",
    type: "t4", surface: 95, rooms: 4, floor: 3, price: 2100, status: "loue",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
    features: ["Balcon", "Parking x2", "Cave", "Gardien", "Ascenseur"],
    tenantId: "t3",
    description: "Grand 4 pièces standing dans résidence sécurisée, proche Bois de Boulogne.",
  },
];

export const tenants: Tenant[] = [
  { id: "t1", name: "Marc Dupont", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", email: "marc.dupont@email.com", phone: "06 12 34 56 78", moveInDate: "2023-03-15", rentStatus: "ok" },
  { id: "t2", name: "Sophie Martin", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", email: "sophie.martin@email.com", phone: "06 98 76 54 32", moveInDate: "2022-09-01", rentStatus: "retard" },
  { id: "t3", name: "Pierre Leroy", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", email: "pierre.leroy@email.com", phone: "06 55 44 33 22", moveInDate: "2024-01-10", rentStatus: "ok" },
];

export const documents: CocoonDocument[] = [
  { id: "d1", name: "Bail - T3 Bastille", type: "bail", date: "2023-03-15", size: "2.4 Mo", propertyId: "p1" },
  { id: "d2", name: "Quittance Mars 2024", type: "quittance", date: "2024-03-01", size: "156 Ko", propertyId: "p1" },
  { id: "d3", name: "Quittance Février 2024", type: "quittance", date: "2024-02-01", size: "148 Ko", propertyId: "p1" },
  { id: "d4", name: "Bail - T2 République", type: "bail", date: "2022-09-01", size: "2.1 Mo", propertyId: "p3" },
  { id: "d5", name: "Facture plomberie", type: "facture", date: "2024-01-20", size: "340 Ko", propertyId: "p4" },
  { id: "d6", name: "Diagnostic énergétique", type: "autre", date: "2023-11-10", size: "1.8 Mo", propertyId: "p2" },
  { id: "d7", name: "Bail - T4 Neuilly", type: "bail", date: "2024-01-10", size: "2.6 Mo", propertyId: "p5" },
  { id: "d8", name: "Quittance Mars 2024", type: "quittance", date: "2024-03-01", size: "152 Ko", propertyId: "p3" },
  { id: "d9", name: "Devis rénovation cuisine", type: "facture", date: "2024-02-15", size: "890 Ko", propertyId: "p4" },
  { id: "d10", name: "État des lieux entrée", type: "autre", date: "2024-01-10", size: "4.2 Mo", propertyId: "p5" },
];

export const conversations: Conversation[] = [
  {
    id: "c1", participantName: "Marc Dupont", participantRole: "Locataire - T3 Bastille",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    lastMessage: "Bonjour, le robinet de la cuisine fuit depuis hier.", lastMessageTime: "10:32", unreadCount: 2, online: true,
    messages: [
      { id: "m1", senderId: "t1", text: "Bonjour, le robinet de la cuisine fuit depuis hier soir.", timestamp: "10:30", read: true },
      { id: "m2", senderId: "owner", text: "Bonjour Marc, je vais contacter un plombier rapidement.", timestamp: "10:31", read: true },
      { id: "m3", senderId: "t1", text: "Merci ! C'est urgent car ça coule beaucoup.", timestamp: "10:32", read: false },
      { id: "m4", senderId: "t1", text: "Je peux vous envoyer une photo si besoin.", timestamp: "10:32", read: false },
    ],
  },
  {
    id: "c2", participantName: "Sophie Martin", participantRole: "Locataire - T2 République",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    lastMessage: "Je ferai le virement demain sans faute.", lastMessageTime: "Hier", unreadCount: 0, online: false,
    messages: [
      { id: "m5", senderId: "owner", text: "Bonjour Sophie, le loyer de mars n'a pas encore été reçu.", timestamp: "Hier 14:00", read: true },
      { id: "m6", senderId: "t2", text: "Oui pardon, j'ai eu un souci bancaire.", timestamp: "Hier 16:30", read: true },
      { id: "m7", senderId: "t2", text: "Je ferai le virement demain sans faute.", timestamp: "Hier 16:31", read: true },
    ],
  },
  {
    id: "c3", participantName: "Pierre Leroy", participantRole: "Locataire - T4 Neuilly",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    lastMessage: "Parfait, merci pour votre réactivité !", lastMessageTime: "Lun", unreadCount: 0, online: true,
    messages: [
      { id: "m8", senderId: "t3", text: "Bonjour, est-il possible de renouveler le bail ?", timestamp: "Lun 09:00", read: true },
      { id: "m9", senderId: "owner", text: "Bien sûr Pierre, je prépare les documents.", timestamp: "Lun 10:15", read: true },
      { id: "m10", senderId: "t3", text: "Parfait, merci pour votre réactivité !", timestamp: "Lun 10:20", read: true },
    ],
  },
  {
    id: "c4", participantName: "Artisan Dupuis", participantRole: "Plombier - Devis Vincennes",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    lastMessage: "Le devis est prêt, je vous l'envoie.", lastMessageTime: "Mar", unreadCount: 1, online: false,
    messages: [
      { id: "m11", senderId: "owner", text: "Bonjour, avez-vous pu estimer les travaux ?", timestamp: "Mar 08:00", read: true },
      { id: "m12", senderId: "artisan", text: "Le devis est prêt, je vous l'envoie.", timestamp: "Mar 14:00", read: false },
    ],
  },
];

export const transactions: Transaction[] = [
  { id: "tx1", type: "income", amount: 1200, date: "2024-03-05", description: "Loyer Mars - T3 Bastille", propertyId: "p1" },
  { id: "tx2", type: "income", amount: 950, date: "2024-03-03", description: "Loyer Mars - T2 République", propertyId: "p3" },
  { id: "tx3", type: "income", amount: 2100, date: "2024-03-01", description: "Loyer Mars - T4 Neuilly", propertyId: "p5" },
  { id: "tx4", type: "expense", amount: -350, date: "2024-02-28", description: "Plomberie - T3 Bastille", propertyId: "p1" },
  { id: "tx5", type: "expense", amount: -1200, date: "2024-02-20", description: "Taxe foncière - Vincennes", propertyId: "p4" },
  { id: "tx6", type: "income", amount: 1200, date: "2024-02-05", description: "Loyer Fév - T3 Bastille", propertyId: "p1" },
  { id: "tx7", type: "income", amount: 2100, date: "2024-02-03", description: "Loyer Fév - T4 Neuilly", propertyId: "p5" },
  { id: "tx8", type: "expense", amount: -180, date: "2024-01-15", description: "Assurance habitation", propertyId: "p2" },
  { id: "tx9", type: "expense", amount: -4500, date: "2024-01-10", description: "Acompte rénovation cuisine", propertyId: "p4" },
  { id: "tx10", type: "income", amount: 1200, date: "2024-01-05", description: "Loyer Jan - T3 Bastille", propertyId: "p1" },
];

export const works: Work[] = [
  {
    id: "w1", title: "Rénovation cuisine", status: "en-cours",
    artisan: { name: "Jean Dupuis", job: "Plombier / Cuisiniste", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", rating: 4.8 },
    startDate: "2024-02-01", cost: 8500, propertyId: "p4",
    steps: [
      { label: "Démolition ancienne cuisine", done: true },
      { label: "Plomberie et électricité", done: true },
      { label: "Pose du carrelage", done: false },
      { label: "Installation meubles", done: false },
      { label: "Finitions", done: false },
    ],
  },
  {
    id: "w2", title: "Réfection salle de bains", status: "planifie",
    artisan: { name: "Marie Lefebvre", job: "Carreleur", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face", rating: 4.6 },
    startDate: "2024-04-15", cost: 4200, propertyId: "p4",
    steps: [
      { label: "Devis validé", done: true },
      { label: "Commande matériaux", done: false },
      { label: "Travaux", done: false },
      { label: "Réception", done: false },
    ],
  },
];

export const notifications: AppNotification[] = [
  { id: "n1", type: "loyer", title: "Loyer reçu", message: "Marc Dupont a payé 1 200€ pour le T3 Bastille.", timestamp: "Il y a 2h", read: false },
  { id: "n2", type: "message", title: "Nouveau message", message: "Marc Dupont vous a envoyé un message.", timestamp: "Il y a 3h", read: false },
  { id: "n3", type: "alerte", title: "Loyer en retard", message: "Sophie Martin - T2 République : retard de 5 jours.", timestamp: "Il y a 1j", read: false },
  { id: "n4", type: "travaux", title: "Travaux avancés", message: "Rénovation cuisine : étape 2/5 terminée.", timestamp: "Il y a 2j", read: true },
  { id: "n5", type: "document", title: "Quittance générée", message: "Quittance de mars pour le T3 Bastille.", timestamp: "Il y a 3j", read: true },
  { id: "n6", type: "loyer", title: "Loyer reçu", message: "Pierre Leroy a payé 2 100€ pour le T4 Neuilly.", timestamp: "Il y a 4j", read: true },
  { id: "n7", type: "message", title: "Nouveau message", message: "Artisan Dupuis a envoyé un devis.", timestamp: "Il y a 5j", read: true },
  { id: "n8", type: "alerte", title: "Assurance à renouveler", message: "L'assurance du Studio Montmartre expire dans 30 jours.", timestamp: "Il y a 6j", read: true },
];

// Helpers
export function getPropertyById(id: string) { return properties.find((p) => p.id === id); }
export function getTenantById(id: string) { return tenants.find((t) => t.id === id); }
export function getTenantForProperty(propertyId: string) {
  const prop = getPropertyById(propertyId);
  return prop?.tenantId ? getTenantById(prop.tenantId) : undefined;
}
export function getDocumentsForProperty(propertyId: string) { return documents.filter((d) => d.propertyId === propertyId); }
export function getTransactionsForProperty(propertyId: string) { return transactions.filter((t) => t.propertyId === propertyId); }
export function getWorksForProperty(propertyId: string) { return works.filter((w) => w.propertyId === propertyId); }
export function getConversationById(id: string) { return conversations.find((c) => c.id === id); }
export function getLouedProperties() { return properties.filter((p) => p.status === "loue"); }
export function getTotalRevenue() { return transactions.filter((t) => t.type === "income").reduce((s, t) => s + t.amount, 0); }
export function getTotalExpenses() { return transactions.filter((t) => t.type === "expense").reduce((s, t) => s + Math.abs(t.amount), 0); }
export function getUnreadNotifications() { return notifications.filter((n) => !n.read); }
