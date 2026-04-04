import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Applica la logica solo alla home inglese
  if (pathname !== "/") {
    return NextResponse.next();
  }

  // Se l'utente ha già scelto una lingua, rispetta la scelta
  const preferredLocale = request.cookies.get("preferred_locale")?.value;
  if (preferredLocale === "it") {
    return NextResponse.redirect(new URL("/it", request.url));
  }
  if (preferredLocale === "en") {
    return NextResponse.next();
  }

  // Prima visita: controlla Accept-Language
  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase() || "";

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