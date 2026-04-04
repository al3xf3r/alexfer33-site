"use client";

import { usePathname } from "next/navigation";

export default function LanguageToggle() {
  const pathname = usePathname();
  const isItalian = pathname === "/it";

  const setLocaleCookie = (locale: "en" | "it") => {
    document.cookie = `preferred_locale=${locale}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <div className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 p-1">
      <a
        href="/"
        onClick={() => setLocaleCookie("en")}
        className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition ${
          !isItalian
            ? "bg-white text-black"
            : "text-white/75 hover:text-white"
        }`}
      >
        EN
      </a>

      <a
        href="/it"
        onClick={() => setLocaleCookie("it")}
        className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition ${
          isItalian
            ? "bg-[#ff6a00] text-black"
            : "text-white/75 hover:text-white"
        }`}
      >
        IT
      </a>
    </div>
  );
}