import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const folder = formData.get("folder") as string || "uploads";

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), "public", "images", folder);
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const extension = path.extname(file.name);
    const filename = `${timestamp}${extension}`;
    const filepath = path.join(uploadDir, filename);

    fs.writeFileSync(filepath, buffer);

    const publicPath = `/images/${folder}/${filename}`;

    return NextResponse.json({ success: true, path: publicPath });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
  }
}
