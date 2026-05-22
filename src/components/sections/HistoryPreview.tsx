"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { StarDivider } from "@/components/patterns";
import { useLanguage } from "@/lib/context/LanguageContext";
import arTranslations from "@/lib/translations/ar.json";

const timelineEvents = [
  { key: "foundation", year: "1932" },
  { key: "firstGeneration", year: "1950" },
  { key: "expansion", year: "1975" },
];

export function HistoryPreview() {
  const { language } = useLanguage();
  const timelineData = arTranslations.history.timeline as Record<string, { year: string; title: string; description: string }>;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F4A47] font-arabic-heading mb-4">
            {arTranslations.home.history.title}
          </h2>
          <p className="text-lg text-[#6B6B68] max-w-2xl mx-auto">
            {arTranslations.home.history.description}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#E8E3D7] -translate-y-1/2 hidden md:block" />

          <div className="grid md:grid-cols-3 gap-8">
            {timelineEvents.map((event, index) => {
              const eventData = timelineData[event.key];
              return (
                <motion.div
                  key={event.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1F4A47] text-white flex items-center justify-center mx-auto mb-4 text-sm font-bold relative z-10">
                    {event.year}
                  </div>
                  <h3 className="text-lg font-bold text-[#1F4A47] mb-2">
                    {eventData.title}
                  </h3>
                  <p className="text-sm text-[#6B6B68]">
                    {eventData.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href={`/${language}/history`}>
            <Button variant="outline">
              {arTranslations.home.history.viewTimeline}
            </Button>
          </Link>
        </div>
      </div>
      <StarDivider className="mt-16" />
    </section>
  );
}