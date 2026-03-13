import { NextResponse } from "next/server";
import { getData } from "@/lib/blob-storage";

export async function GET() {
  try {
    const data = await getData("projects.json");

    if (!data) {
      return NextResponse.json({ projects: [] });
    }

    // Only return visible projects
    const visibleProjects = data.projects.filter((p: any) => p.visible !== false);

    return NextResponse.json({ projects: visibleProjects });
  } catch (error) {
    return NextResponse.json({ projects: [] });
  }
}
