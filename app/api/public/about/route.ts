import { NextResponse } from "next/server";
import { getData } from "@/lib/blob-storage";

export async function GET() {
  try {
    const data = await getData("about.json");
    return NextResponse.json(data || {});
  } catch (error) {
    return NextResponse.json({});
  }
}
