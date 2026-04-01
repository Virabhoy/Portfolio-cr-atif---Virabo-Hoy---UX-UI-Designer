export type Screen =
  | "dashboard"
  | "create-message"
  | "record-video"
  | "recipients"
  | "my-messages"
  | "pricing"
  | "help"
  | "settings"
  | "account";

export type MessageType = "video" | "audio" | "letter";
export type MessageStatus = "draft" | "active" | "delivered";
export type ControlFrequency = "weekly" | "monthly" | "yearly";
export type ControlType = "email" | "sms";

export interface Recipient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  relation: string;
}

export interface Referent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface LeaveMessage {
  id: string;
  type: MessageType;
  title: string;
  status: MessageStatus;
  recipients: Recipient[];
  referents: Referent[];
  controlFrequency: ControlFrequency;
  controlType: ControlType;
  createdAt: string;
  notes?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface LeaveState {
  screen: Screen;
  previousScreen: Screen;
  selectedMessageId: string | null;
  selectedMessageType: MessageType | null;
  createStep: number;
}

export type LeaveAction =
  | { type: "NAVIGATE"; screen: Screen }
  | { type: "SELECT_MESSAGE"; id: string }
  | { type: "SET_MESSAGE_TYPE"; messageType: MessageType }
  | { type: "SET_CREATE_STEP"; step: number }
  | { type: "GO_BACK" };
