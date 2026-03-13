import { NextRequest, NextResponse } from "next/server";
import { getData, saveData } from "@/lib/blob-storage";

const DATA_FILE = "skills.json";

const defaultData = { categories: [] };

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
