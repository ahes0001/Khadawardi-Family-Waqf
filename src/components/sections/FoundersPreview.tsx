/**
 * Founders Preview Section
 * 
 * Preview of the founders with placeholder portraits.
 */

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Dictionary, Locale } from "@/lib/dictionaries";

interface FoundersPreviewProps {
  dict: Dictionary;
  lang: Locale;
}

interface Founder {
  name: string;
  dates: string;
  bio: string;
}

const founders = [
  { key: "founder1", imageColor: "#1F4A47" },
  { key: "founder2", imageColor: "#2A6360" },
  { key: "founder3", imageColor: "#D4B896" },
];

export function FoundersPreview({ dict, lang }: FoundersPreviewProps) {
  const foundersData = dict.founders as unknown as Record<string, Founder | string>;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F4A47] font-arabic-heading mb-4">
            {dict.home.founders.title}
          </h2>
          <p className="text-lg text-[#6B6B68] max-w-2xl mx-auto">
            {dict.home.founders.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {founders.map((founder, index) => {
            const founderData = foundersData[founder.key] as Founder;
            const name = founderData.name;
            const dates = founderData.dates;
            const bio = founderData.bio;

            return (
              <Card key={founder.key} decorative delay={index * 0.1}>
                {/* Placeholder portrait */}
                <div
                  className="w-full h-48 rounded-lg mb-4"
                  style={{ backgroundColor: founder.imageColor, opacity: 0.3 }}
                />
                <h3 className="text-xl font-bold text-[#1F4A47] mb-1 font-arabic-heading">
                  {name}
                </h3>
                <p className="text-sm text-[#6B6B68] mb-3">{dates}</p>
                <p className="text-[#6B6B68] text-sm leading-relaxed line-clamp-3">
                  {bio}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link href={`/${lang}/founders`}>
            <Button variant="outline">
              {dict.home.founders.viewAll}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}