/**
 * Navbar Component
 * 
 * Site navigation with language toggle and family view toggle.
 * Supports both RTL and LTR layouts.
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";
import { useFamilyView } from "@/lib/context/FamilyViewContext";
import { EightPointedStar } from "@/components/patterns";
import arTranslations from "@/lib/translations/ar.json";

const navLinks = [
  { href: "/", labelAr: "الرئيسية", labelEn: "Home" },
  { href: "/about", labelAr: "عن الوقف", labelEn: "About" },
  { href: "/history", labelAr: "التاريخ", labelEn: "History" },
  { href: "/founders", labelAr: "المؤسسون", labelEn: "Founders" },
  { href: "/property", labelAr: "الوقف", labelEn: "Property" },
  { href: "/family-tree", labelAr: "شجرة العائلة", labelEn: "Family Tree" },
  { href: "/contact", labelAr: "تواصل", labelEn: "Contact" },
];

export function Navbar() {
  const { language, setLanguage, dir } = useLanguage();
  const { isFamilyView, toggleFamilyView } = useFamilyView();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Get current path without language prefix
  const currentPath = pathname.replace(/^\/(ar|en)/, "") || "/";

  const isActive = (href: string) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8E3D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${language}`} className="flex items-center gap-3 group">
            <div className="relative">
              <EightPointedStar
                size={32}
                color="#1F4A47"
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#1F4A47] leading-tight">
                {arTranslations.site.name}
              </span>
              <span className="text-xs text-[#6B6B68] hidden sm:block">
                {arTranslations.site.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${language}${link.href}`}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-[#1F4A47] bg-[#1F4A47]/10"
                    : "text-[#6B6B68] hover:text-[#1F4A47] hover:bg-[#1F4A47]/5"
                }`}
              >
                {language === "ar" ? link.labelAr : link.labelEn}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              className="px-3 py-1.5 text-sm font-medium text-[#6B6B68] hover:text-[#1F4A47] border border-[#E8E3D7] rounded-lg hover:border-[#1F4A47] transition-colors"
              aria-label={language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
            >
              {language === "ar" ? "EN" : "عربي"}
            </button>

            {/* Family View Toggle */}
            <button
              onClick={toggleFamilyView}
              className={`hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                isFamilyView
                  ? "bg-[#A85A3E] text-white"
                  : "bg-[#E8E3D7] text-[#6B6B68] hover:bg-[#D4B896] hover:text-[#1A1A1A]"
              }`}
              aria-pressed={isFamilyView}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isFamilyView ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                )}
              </svg>
              <span className="hidden md:inline">
                {isFamilyView
                  ? arTranslations.nav.publicView
                  : arTranslations.nav.familyView}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#6B6B68] hover:text-[#1F4A47] rounded-lg hover:bg-[#1F4A47]/5"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-[#E8E3D7] bg-white"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${language}${link.href}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-[#1F4A47] bg-[#1F4A47]/10"
                      : "text-[#6B6B68] hover:text-[#1F4A47] hover:bg-[#1F4A47]/5"
                  }`}
                >
                  {language === "ar" ? link.labelAr : link.labelEn}
                </Link>
              ))}
              
              {/* Mobile Family View Toggle */}
              <button
                onClick={() => {
                  toggleFamilyView();
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 mt-4 rounded-lg font-medium transition-colors ${
                  isFamilyView
                    ? "bg-[#A85A3E] text-white"
                    : "bg-[#E8E3D7] text-[#6B6B68]"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {isFamilyView
                  ? arTranslations.nav.publicView
                  : arTranslations.nav.familyView}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}