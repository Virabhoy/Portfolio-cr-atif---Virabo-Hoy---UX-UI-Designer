import { NextResponse } from "next/server";
import { getData } from "@/lib/blob-storage";

export async function GET() {
  try {
    const projectsData = await getData("projects.json") || { projects: [] };

    return NextResponse.json({
      projectsCount: projectsData.projects.length,
      imagesCount: projectsData.projects.reduce(
        (acc: number, p: any) => acc + (p.images?.length || 0),
        0
      ),
    });
  } catch (error) {
    console.error("Stats error:", error);
    return NextResponse.json({ projectsCount: 0, imagesCount: 0 });
  }
}
