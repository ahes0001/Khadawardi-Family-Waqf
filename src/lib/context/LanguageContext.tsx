"use client";

import React, { createContext, useContext, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { Locale } from "@/lib/dictionaries";

interface LanguageContextType {
  language: Locale;
  setLanguage: (lang: Locale) => void;
  dir: "rtl" | "ltr";
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage: Locale;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const setLanguage = useCallback(
    (lang: Locale) => {
      // Navigate to the localized path by swapping the lang segment
      const currentPath = pathname;
      const pathWithoutLang = currentPath.replace(/^\/(ar|en)/, "");
      const newPath = `/${lang}${pathWithoutLang || "/"}`;
      router.push(newPath);
    },
    [pathname, router]
  );

  const dir: "rtl" | "ltr" = initialLanguage === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language: initialLanguage, setLanguage, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}