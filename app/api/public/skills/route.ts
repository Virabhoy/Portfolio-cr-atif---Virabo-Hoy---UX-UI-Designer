import { NextResponse } from "next/server";
import { getData } from "@/lib/blob-storage";

export async function GET() {
  try {
    const data = await getData("skills.json");
    return NextResponse.json(data || { categories: [] });
  } catch (error) {
    return NextResponse.json({ categories: [] });
  }
}
