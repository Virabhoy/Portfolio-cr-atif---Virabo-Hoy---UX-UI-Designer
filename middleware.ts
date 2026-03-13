import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the request is for admin routes (except login page)
  const isAdminRoute = pathname.startsWith("/admin") && !pathname.startsWith("/admin/login");
  const isAdminApi = pathname.startsWith("/api/admin");

  // Get the session cookie
  const sessionCookie = request.cookies.get("admin_session");

  if (isAdminRoute || isAdminApi) {
    // If no session, redirect to login (for pages) or return 401 (for API)
    if (!sessionCookie?.value) {
      if (isAdminApi) {
        return NextResponse.json(
          { error: "Non autorisé" },
          { status: 401 }
        );
      }

      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }

    // Validate the session token format
    try {
      const decoded = Buffer.from(sessionCookie.value, "base64").toString();
      const parts = decoded.split(":");

      if (parts.length !== 3) {
        throw new Error("Invalid token format");
      }

      // Check if token is expired (24 hours)
      const timestamp = parseInt(parts[1], 10);
      const now = Date.now();
      const maxAge = 24 * 60 * 60 * 1000; // 24 hours in ms

      if (now - timestamp > maxAge) {
        throw new Error("Token expired");
      }
    } catch {
      // Invalid session, clear cookie and redirect
      const response = isAdminApi
        ? NextResponse.json({ error: "Session invalide" }, { status: 401 })
        : NextResponse.redirect(new URL("/admin/login", request.url));

      response.cookies.delete("admin_session");
      return response;
    }
  }

  // If already logged in and trying to access login page, redirect to admin
  if (pathname === "/admin/login" && sessionCookie?.value) {
    try {
      const decoded = Buffer.from(sessionCookie.value, "base64").toString();
      const parts = decoded.split(":");
      const timestamp = parseInt(parts[1], 10);
      const now = Date.now();
      const maxAge = 24 * 60 * 60 * 1000;

      if (now - timestamp < maxAge && parts.length === 3) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
    } catch {
      // Invalid session, let them access login page
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
