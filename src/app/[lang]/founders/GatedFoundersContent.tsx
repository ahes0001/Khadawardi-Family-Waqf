"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { useFamilyView } from "@/lib/context/FamilyViewContext";
import type { Dictionary } from "@/lib/dictionaries";

interface GatedFoundersContentProps {
  dict: Dictionary;
}

export function GatedFoundersContent({ dict }: GatedFoundersContentProps) {
  const { isFamilyView } = useFamilyView();
  const exp = dict.founders.exploration;

  return (
    <AnimatePresence mode="wait">
      {isFamilyView ? (
        <motion.div
          key="gated"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Card gated className="mb-6">
            <h3 className="text-xl font-bold text-[#1F4A47] mb-4 font-arabic-heading">
              {exp.gatedSection.title}
            </h3>
            <p className="text-[#6B6B68] mb-6">
              {exp.gatedSection.description}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#FAF8F3] p-4 rounded-lg">
                <h4 className="font-bold text-[#1F4A47] mb-2 text-sm">{exp.gatedSection.story1}</h4>
                <p className="text-xs text-[#6B6B68]">1932 • Family Home</p>
              </div>
              <div className="bg-[#FAF8F3] p-4 rounded-lg">
                <h4 className="font-bold text-[#1F4A47] mb-2 text-sm">{exp.gatedSection.story2}</h4>
                <p className="text-xs text-[#6B6B68]">1935-1940 • Various</p>
              </div>
              <div className="bg-[#FAF8F3] p-4 rounded-lg">
                <h4 className="font-bold text-[#1F4A47] mb-2 text-sm">{exp.gatedSection.story3}</h4>
                <p className="text-xs text-[#6B6B68]">Archive Collection</p>
              </div>
            </div>
          </Card>
        </motion.div>
      ) : (
        <motion.div
          key="public"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center py-12 bg-[#FAF8F3] rounded-xl border border-[#E8E3D7]"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E8E3D7] text-[#6B6B68] mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p className="text-[#6B6B68]">{dict.common.familyOnly}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}