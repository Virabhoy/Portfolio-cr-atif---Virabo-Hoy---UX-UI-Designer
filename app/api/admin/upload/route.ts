import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const folder = formData.get("folder") as string || "uploads";

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({
        error: `Invalid file type: ${file.type}. Allowed: ${ALLOWED_TYPES.join(', ')}`
      }, { status: 400 });
    }

    // Validate file size
    if (file.size > MAX_SIZE) {
      return NextResponse.json({
        error: `File too large: ${(file.size / 1024 / 1024).toFixed(2)}MB. Max: 10MB`
      }, { status: 400 });
    }

    // Generate unique filename with random suffix to avoid collisions
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const filename = `${timestamp}-${random}.${extension}`;
    const path = `images/${folder}/${filename}`;

    // Upload to Vercel Blob
    const { url } = await put(path, file, {
      access: 'public',
      addRandomSuffix: false,
    });

    return NextResponse.json({ success: true, path: url });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({
      error: error instanceof Error ? error.message : "Failed to upload file"
    }, { status: 500 });
  }
}
