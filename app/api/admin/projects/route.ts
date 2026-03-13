import { NextRequest, NextResponse } from "next/server";
import { getData, saveData } from "@/lib/blob-storage";

const DATA_FILE = "projects.json";

const defaultData = { projects: [] };

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
    const currentData = await getData(DATA_FILE) || defaultData;

    // Generate new ID
    const newId = String(Math.max(...currentData.projects.map((p: any) => parseInt(p.id) || 0), 0) + 1);
    const newProject = { ...body, id: newId };

    currentData.projects.push(newProject);
    await saveData(DATA_FILE, currentData);

    return NextResponse.json({ success: true, project: newProject });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save project" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const currentData = await getData(DATA_FILE) || defaultData;

    const index = currentData.projects.findIndex((p: any) => p.id === body.id);
    if (index === -1) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    currentData.projects[index] = body;
    await saveData(DATA_FILE, currentData);

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

    const currentData = await getData(DATA_FILE) || defaultData;
    currentData.projects = currentData.projects.filter((p: any) => p.id !== id);
    await saveData(DATA_FILE, currentData);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
