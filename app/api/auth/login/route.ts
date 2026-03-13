import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    const validUsername = process.env.ADMIN_USERNAME || "admin";
    const validPassword = process.env.ADMIN_PASSWORD || "admin";

    if (username === validUsername && password === validPassword) {
      // Create a simple session token
      const sessionToken = Buffer.from(
        `${username}:${Date.now()}:${process.env.SESSION_SECRET || "secret"}`
      ).toString("base64");

      // Set the session cookie
      const cookieStore = await cookies();
      cookieStore.set("admin_session", sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Identifiants incorrects" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur de connexion" },
      { status: 500 }
    );
  }
}
