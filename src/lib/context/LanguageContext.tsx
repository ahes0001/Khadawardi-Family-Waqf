"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: "rtl" | "ltr";
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Storage key for persisting language preference
const STORAGE_KEY = "waqf-language";

// Helper to get stored language (runs once during initialization)
function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "ar";
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored && (stored === "ar" || stored === "en")) {
    return stored;
  }
  return "ar";
}

export function LanguageProvider({
  children,
  initialLanguage = "ar",
}: {
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  // Use lazy initialization to avoid re-running localStorage access
  const [language, setLanguageState] = useState<Language>(() => {
    // On server, use initialLanguage; on client, check localStorage
    if (typeof window === "undefined") return initialLanguage;
    return getInitialLanguage();
  });

  const router = useRouter();
  const pathname = usePathname();

  const setLanguage = useCallback(
    (lang: Language) => {
      setLanguageState(lang);
      localStorage.setItem(STORAGE_KEY, lang);

      // Update HTML dir attribute
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;

      // Navigate to the localized path
      const currentPath = pathname;
      const pathWithoutLang = currentPath.replace(/^\/(ar|en)/, "");
      const newPath = `/${lang}${pathWithoutLang || "/"}`;
      router.push(newPath);
    },
    [pathname, router]
  );

  const dir: "rtl" | "ltr" = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir }}>
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