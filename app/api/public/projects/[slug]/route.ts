import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const dataFilePath = path.join(process.cwd(), "data", "projects.json");
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

    const project = data.projects.find((p: any) => p.slug === slug);

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load project" }, { status: 500 });
  }
}
