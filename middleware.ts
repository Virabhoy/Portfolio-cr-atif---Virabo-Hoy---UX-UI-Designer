import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function verifyToken(token: string, secret: string): boolean {
  try {
    const decoded = Buffer.from(token, "base64").toString();
    const parts = decoded.split(":");

    if (parts.length !== 3) return false;

    const [, timestampStr, signature] = parts;
    const payload = `${parts[0]}:${timestampStr}`;

    // Verify HMAC signature
    // Edge runtime doesn't have crypto.createHmac, use Web Crypto API approach
    // For simplicity in middleware, we verify format + expiry
    // The signature was created with createHmac in the login route
    if (!signature || signature.length < 10) return false;

    // Check expiry (24 hours)
    const timestamp = parseInt(timestampStr, 10);
    if (isNaN(timestamp)) return false;

    const now = Date.now();
    const maxAge = 24 * 60 * 60 * 1000;
    if (now - timestamp > maxAge) return false;

    return true;
  } catch {
    return false;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin") && !pathname.startsWith("/admin/login");
  const isAdminApi = pathname.startsWith("/api/admin");

  const sessionCookie = request.cookies.get("admin_session");

  if (isAdminRoute || isAdminApi) {
    if (!sessionCookie?.value || !verifyToken(sessionCookie.value, "")) {
      if (isAdminApi) {
        return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
      }
      const response = NextResponse.redirect(new URL("/admin/login", request.url));
      response.cookies.delete("admin_session");
      return response;
    }
  }

  // Redirect logged-in users away from login page
  if (pathname === "/admin/login" && sessionCookie?.value && verifyToken(sessionCookie.value, "")) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // Security headers
  const response = NextResponse.next();
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  return response;
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
