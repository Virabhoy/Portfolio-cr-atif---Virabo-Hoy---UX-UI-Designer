import { NextRequest, NextResponse } from "next/server";
import { getData, saveData } from "@/lib/blob-storage";

const DATA_FILE = "about.json";

const defaultData = {
  name: "Virabo Hoy",
  title: { fr: "Product Builder Digital & UX/UI Designer", en: "Digital Product Builder & UX/UI Designer" },
  profileImage: "/images/profile.jpg",
  intro: { fr: "", en: "" },
  bio: { fr: "", en: "" },
  bio2: { fr: "", en: "" },
  stats: [],
  location: { city: "", region: "" },
  social: { linkedin: "", behance: "", instagram: "", dribbble: "" }
};

export async function GET() {
  try {
    const data = await getData(DATA_FILE);
    return NextResponse.json(data || defaultData);
  } catch (error) {
    return NextResponse.json(defaultData);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await saveData(DATA_FILE, body);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
  }
}
