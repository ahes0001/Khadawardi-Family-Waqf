/**
 * About Preview Section
 * 
 * Brief introduction to what a family waqf is.
 */

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CornerStar } from "@/components/patterns";
import type { Dictionary, Locale } from "@/lib/dictionaries";

interface AboutPreviewProps {
  dict: Dictionary;
  lang: Locale;
}

export function AboutPreview({ dict, lang }: AboutPreviewProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <CornerStar position="top-right" size={120} />
      <CornerStar position="bottom-left" size={100} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F4A47] font-arabic-heading mb-6">
            {dict.home.aboutWaqf.title}
          </h2>
          
          <p className="text-lg text-[#6B6B68] leading-relaxed mb-8 max-w-2xl mx-auto">
            {dict.home.aboutWaqf.description}
          </p>

          <Link href={`/${lang}/about`}>
            <Button variant="outline">
              {dict.common.readMore}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}