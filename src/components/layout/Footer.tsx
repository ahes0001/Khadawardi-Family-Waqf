/**
 * Footer Component
 * 
 * Site footer with navigation, contact info, and copyright.
 */

"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { EightPointedStar, StarPattern } from "@/components/patterns";
import arTranslations from "@/lib/translations/ar.json";

const footerLinks = [
  { href: "/", labelAr: "الرئيسية", labelEn: "Home" },
  { href: "/about", labelAr: "عن الوقف", labelEn: "About" },
  { href: "/history", labelAr: "التاريخ", labelEn: "History" },
  { href: "/family-tree", labelAr: "شجرة العائلة", labelEn: "Family Tree" },
  { href: "/contact", labelAr: "تواصل", labelEn: "Contact" },
];

export function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F4A47] text-white mt-auto relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <StarPattern count={20} starSize={48} color="#FFFFFF" opacity={1} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <EightPointedStar size={40} color="#D4B896" />
              <span className="text-xl font-bold">{arTranslations.site.name}</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              {arTranslations.site.tagline}
            </p>
            <p className="text-white/50 text-xs italic">
              {arTranslations.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#D4B896] font-semibold mb-4">
              {language === "ar" ? "التنقل" : "Navigation"}
            </h3>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${language}${link.href}`}
                  className="block text-white/70 hover:text-white transition-colors text-sm"
                >
                  {language === "ar" ? link.labelAr : link.labelEn}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#D4B896] font-semibold mb-4">
              {language === "ar" ? "تواصل معنا" : "Contact"}
            </h3>
            <address className="not-italic space-y-2 text-sm text-white/70">
              <p>{language === "ar" ? "مكة المكرمة، المملكة العربية السعودية" : "Makkah, Saudi Arabia"}</p>
              <p>
                <a href="mailto:info@khadawardi.waqf" className="hover:text-white transition-colors">
                  info@khadawardi.waqf
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            {arTranslations.footer.copyright.replace("{year}", String(currentYear))}
          </p>
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <EightPointedStar size={16} color="currentColor" opacity={0.5} />
            <span>Hijazi Modern</span>
          </div>
        </div>
      </div>
    </footer>
  );
}