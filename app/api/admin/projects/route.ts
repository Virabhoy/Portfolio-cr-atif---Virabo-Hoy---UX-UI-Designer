import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "projects.json");

export async function GET() {
  try {
    const data = fs.readFileSync(dataFilePath, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const currentData = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

    // Generate new ID
    const newId = String(Math.max(...currentData.projects.map((p: any) => parseInt(p.id)), 0) + 1);
    const newProject = { ...body, id: newId };

    currentData.projects.push(newProject);
    fs.writeFileSync(dataFilePath, JSON.stringify(currentData, null, 2));

    return NextResponse.json({ success: true, project: newProject });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save project" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const currentData = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

    const index = currentData.projects.findIndex((p: any) => p.id === body.id);
    if (index === -1) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    currentData.projects[index] = body;
    fs.writeFileSync(dataFilePath, JSON.stringify(currentData, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID required" }, { status: 400 });
    }

    const currentData = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
    currentData.projects = currentData.projects.filter((p: any) => p.id !== id);
    fs.writeFileSync(dataFilePath, JSON.stringify(currentData, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
