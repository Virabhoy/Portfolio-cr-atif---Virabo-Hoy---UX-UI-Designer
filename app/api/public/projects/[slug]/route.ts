import { NextRequest, NextResponse } from "next/server";
import { getData } from "@/lib/blob-storage";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const data = await getData("projects.json");

    if (!data) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    const project = data.projects.find((p: any) => p.slug === slug);

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load project" }, { status: 500 });
  }
}
