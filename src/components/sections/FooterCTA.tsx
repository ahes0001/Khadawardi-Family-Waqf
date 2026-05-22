/**
 * Footer CTA Section
 * 
 * Call-to-action section before the footer.
 */

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { EightPointedStar } from "@/components/patterns";
import type { Dictionary, Locale } from "@/lib/dictionaries";

interface FooterCTAProps {
  dict: Dictionary;
  lang: Locale;
}

export function FooterCTA({ dict, lang }: FooterCTAProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F4A47] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 opacity-10">
        <EightPointedStar size={200} color="#FFFFFF" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <EightPointedStar size={150} color="#FFFFFF" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <EightPointedStar size={48} color="#D4B896" className="mx-auto mb-6" />
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-arabic-heading mb-4">
            {dict.site.name}
          </h2>
          
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            {dict.footer.tagline}
          </p>

          <Link href={`/${lang}/contact`}>
            <Button variant="secondary" size="lg">
              {dict.nav.contact}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}