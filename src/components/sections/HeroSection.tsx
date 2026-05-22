/**
 * Hero Section
 * 
 * Main hero with waqf name, tagline, and CTAs.
 */

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { EightPointedStar, StarPattern } from "@/components/patterns";
import type { Dictionary, Locale } from "@/lib/dictionaries";

interface HeroSectionProps {
  dict: Dictionary;
  lang: Locale;
}

export function HeroSection({ dict, lang }: HeroSectionProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#1F4A47]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <StarPattern count={15} starSize={80} color="#FFFFFF" gap={40} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 start-20 opacity-20">
        <EightPointedStar size={120} color="#D4B896" />
      </div>
      <div className="absolute bottom-20 end-20 opacity-20">
        <EightPointedStar size={100} color="#D4B896" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Star above title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 flex justify-center"
          >
            <EightPointedStar size={48} color="#D4B896" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-arabic-heading leading-tight">
            {dict.home.hero.title}
          </h1>

          <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            {dict.home.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${lang}/history`}>
              <Button size="lg" className="min-w-[180px]">
                {dict.home.hero.ctaPrimary}
              </Button>
            </Link>
            <Link href={`/${lang}/family-tree`}>
              <Button size="lg" variant="outline" className="min-w-[180px] border-white text-white hover:bg-white hover:text-[#1F4A47]">
                {dict.home.hero.ctaSecondary}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 start-0 end-0 h-32 bg-gradient-to-t from-[#FAF8F3] to-transparent" />
    </section>
  );
}