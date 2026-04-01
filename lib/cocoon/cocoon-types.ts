export type Screen =
  | "home"
  | "search"
  | "property-detail"
  | "management"
  | "documents"
  | "messages"
  | "conversation"
  | "finance"
  | "works"
  | "profile"
  | "notifications";

export type PropertyStatus = "loue" | "disponible" | "travaux";
export type PropertyType = "studio" | "t2" | "t3" | "t4" | "maison";
export type DocumentType = "bail" | "quittance" | "facture" | "autre";
export type TransactionType = "income" | "expense";
export type WorkStatus = "planifie" | "en-cours" | "termine";
export type NotificationType = "loyer" | "message" | "travaux" | "document" | "alerte";

export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  type: PropertyType;
  surface: number;
  rooms: number;
  floor: number;
  price: number;
  status: PropertyStatus;
  image: string;
  features: string[];
  tenantId?: string;
  description: string;
}

export interface Tenant {
  id: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  moveInDate: string;
  rentStatus: "ok" | "retard" | "impaye";
}

export interface CocoonDocument {
  id: string;
  name: string;
  type: DocumentType;
  date: string;
  size: string;
  propertyId: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  participantName: string;
  participantRole: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  online: boolean;
  messages: Message[];
}

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  date: string;
  description: string;
  propertyId: string;
}

export interface Artisan {
  name: string;
  job: string;
  avatar: string;
  rating: number;
}

export interface Work {
  id: string;
  title: string;
  status: WorkStatus;
  artisan: Artisan;
  startDate: string;
  endDate?: string;
  cost: number;
  propertyId: string;
  steps: { label: string; done: boolean }[];
}

export interface AppNotification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export interface CocoonState {
  screen: Screen;
  previousScreen: Screen;
  selectedPropertyId: string | null;
  selectedConversationId: string | null;
  activeDocTab: DocumentType | "all";
}

export type CocoonAction =
  | { type: "NAVIGATE"; screen: Screen }
  | { type: "SELECT_PROPERTY"; id: string }
  | { type: "SELECT_CONVERSATION"; id: string }
  | { type: "SET_DOC_TAB"; tab: DocumentType | "all" }
  | { type: "GO_BACK" };
