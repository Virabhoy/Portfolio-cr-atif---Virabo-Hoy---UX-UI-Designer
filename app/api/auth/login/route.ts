import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";

function safeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

function signToken(payload: string, secret: string): string {
  const hmac = createHmac("sha256", secret);
  hmac.update(payload);
  return hmac.digest("hex");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    const validUsername = process.env.ADMIN_USERNAME;
    const validPassword = process.env.ADMIN_PASSWORD;
    const sessionSecret = process.env.SESSION_SECRET;

    // Refuse to operate without proper configuration
    if (!validUsername || !validPassword || !sessionSecret) {
      console.error("AUTH: Missing ADMIN_USERNAME, ADMIN_PASSWORD, or SESSION_SECRET env vars");
      return NextResponse.json(
        { error: "Configuration serveur manquante" },
        { status: 500 }
      );
    }

    if (
      safeCompare(username || "", validUsername) &&
      safeCompare(password || "", validPassword)
    ) {
      // Create HMAC-signed session token
      const payload = `${username}:${Date.now()}`;
      const signature = signToken(payload, sessionSecret);
      const sessionToken = Buffer.from(`${payload}:${signature}`).toString("base64");

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
  } catch {
    return NextResponse.json(
      { error: "Erreur de connexion" },
      { status: 500 }
    );
  }
}
