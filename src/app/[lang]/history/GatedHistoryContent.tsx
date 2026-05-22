"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { useFamilyView } from "@/lib/context/FamilyViewContext";
import type { Dictionary } from "@/lib/dictionaries";

interface GatedHistoryContentProps {
  dict: Dictionary;
}

export function GatedHistoryContent({ dict }: GatedHistoryContentProps) {
  const { isFamilyView } = useFamilyView();
  const exp = dict.history.exploration;

  return (
    <AnimatePresence mode="wait">
      {isFamilyView ? (
        <motion.div
          key="gated"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <Card gated>
            <h3 className="text-lg font-bold text-[#1F4A47] mb-2 font-arabic-heading">
              {exp.gatedSection.milestone1}
            </h3>
            <p className="text-sm text-[#6B6B68]">1955 — {dict.common.location}</p>
          </Card>

          <Card gated>
            <h3 className="text-lg font-bold text-[#1F4A47] mb-2 font-arabic-heading">
              {exp.gatedSection.milestone2}
            </h3>
            <p className="text-sm text-[#6B6B68]">1985 — Administrative updates</p>
          </Card>

          <Card gated>
            <h3 className="text-lg font-bold text-[#1F4A47] mb-2 font-arabic-heading">
              {exp.gatedSection.milestone3}
            </h3>
            <p className="text-sm text-[#6B6B68]">2018 — Digital transformation</p>
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