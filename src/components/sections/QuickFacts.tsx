/**
 * Quick Facts Section
 * 
 * Statistics strip showing key numbers about the waqf.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { StatCard } from "@/components/ui/Card";
import { StarDivider } from "@/components/patterns";
import arTranslations from "@/lib/translations/ar.json";

const facts = [
  { key: "founded", value: "1932", icon: "calendar" },
  { key: "generations", value: "9", icon: "users" },
  { key: "members", value: "200+", icon: "family" },
  { key: "buildings", value: "2", icon: "building" },
];

const icons = {
  calendar: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  users: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  family: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  building: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
};

export function QuickFacts() {
  const getLabel = (key: string) => {
    const template = (arTranslations.home.quickFacts as Record<string, string>)[key];
    if (key === "founded") return template.replace("{year}", "1932");
    if (key === "generations") return template.replace("{count}", "9");
    if (key === "members") return template.replace("{count}", "200+");
    if (key === "buildings") return template.replace("{count}", "2");
    return template;
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1F4A47] font-arabic-heading mb-4">
          {arTranslations.home.quickFacts.title}
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {facts.map((fact, index) => (
          <StatCard
            key={fact.key}
            value={fact.value}
            label={getLabel(fact.key)}
            icon={icons[fact.key as keyof typeof icons]}
            delay={index * 0.1}
          />
        ))}
      </div>

      <StarDivider className="mt-16" />
    </section>
  );
}