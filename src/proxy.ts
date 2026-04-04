import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== "/") {
    return NextResponse.next();
  }

  const preferredLocale = request.cookies.get("preferred_locale")?.value;

  if (preferredLocale === "it") {
    return NextResponse.redirect(new URL("/it", request.url));
  }

  if (preferredLocale === "en") {
    return NextResponse.next();
  }

  const acceptLanguage =
    request.headers.get("accept-language")?.toLowerCase() || "";

  const prefersItalian =
    acceptLanguage.includes("it") || acceptLanguage.includes("it-it");

  if (prefersItalian) {
    return NextResponse.redirect(new URL("/it", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
