/**
 * Gated Content Section
 * 
 * Shows family-only content when in family view mode.
 */

"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { useFamilyView } from "@/lib/context/FamilyViewContext";
import type { Dictionary } from "@/lib/dictionaries";

interface GatedContentProps {
  dict: Dictionary;
}

export function GatedContent({ dict }: GatedContentProps) {
  const { isFamilyView } = useFamilyView();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {isFamilyView ? (
            <motion.div
              key="gated"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <Card gated>
                <h3 className="text-xl font-bold text-[#1F4A47] mb-4 font-arabic-heading">
                  {dict.home.gated.announcements.title}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#A85A3E] mt-2" />
                    <span className="text-[#6B6B68]">{dict.home.gated.announcements.item1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#A85A3E] mt-2" />
                    <span className="text-[#6B6B68]">{dict.home.gated.announcements.item2}</span>
                  </li>
                </ul>
              </Card>

              <Card gated>
                <h3 className="text-xl font-bold text-[#1F4A47] mb-4 font-arabic-heading">
                  {dict.home.gated.gatherings.title}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#A85A3E] mt-2" />
                    <span className="text-[#6B6B68]">{dict.home.gated.gatherings.item1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#A85A3E] mt-2" />
                    <span className="text-[#6B6B68]">{dict.home.gated.gatherings.item2}</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="public"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E8E3D7] text-[#6B6B68] mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-[#6B6B68]">
                {dict.common.familyOnly}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}