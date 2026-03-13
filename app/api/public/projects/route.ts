import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const dataFilePath = path.join(process.cwd(), "data", "projects.json");
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

    // Only return visible projects
    const visibleProjects = data.projects.filter((p: any) => p.visible !== false);

    return NextResponse.json({ projects: visibleProjects });
  } catch (error) {
    return NextResponse.json({ projects: [] });
  }
}
