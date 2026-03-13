import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const projectsData = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "data", "projects.json"), "utf-8")
    );

    return NextResponse.json({
      projectsCount: projectsData.projects.length,
      imagesCount: projectsData.projects.reduce(
        (acc: number, p: any) => acc + (p.images?.length || 0),
        0
      ),
    });
  } catch (error) {
    return NextResponse.json({ projectsCount: 0, imagesCount: 0 });
  }
}
