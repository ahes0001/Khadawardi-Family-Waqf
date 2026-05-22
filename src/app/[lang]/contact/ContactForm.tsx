/**
 * Contact Form Component
 * 
 * Interactive form with relation dropdown (client component).
 */

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  formDict: {
    name: string;
    email: string;
    relation: {
      label: string;
      options: {
        family: string;
        relative: string;
        researcher: string;
        other: string;
      };
    };
    message: string;
    submit: string;
    success: string;
  };
  isRTL: boolean;
  variant: "centered" | "split";
}

export function ContactForm({ formDict, isRTL, variant }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [relation, setRelation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-green-600 font-medium">{formDict.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A] mb-2">
          {formDict.name}
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-[#E8E3D7] focus:border-[#1F4A47] focus:ring-2 focus:ring-[#1F4A47]/20 outline-none transition-all"
          placeholder={formDict.name}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-2">
          {formDict.email}
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-[#E8E3D7] focus:border-[#1F4A47] focus:ring-2 focus:ring-[#1F4A47]/20 outline-none transition-all"
          placeholder={formDict.email}
        />
      </div>

      <div>
        <label htmlFor="relation" className="block text-sm font-medium text-[#1A1A1A] mb-2">
          {formDict.relation.label}
        </label>
        <select
          id="relation"
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg border border-[#E8E3D7] focus:border-[#1F4A47] focus:ring-2 focus:ring-[#1F4A47]/20 outline-none transition-all bg-white"
        >
          <option value="">{isRTL ? "اختر..." : "Select..."}</option>
          <option value="family">{formDict.relation.options.family}</option>
          <option value="relative">{formDict.relation.options.relative}</option>
          <option value="researcher">{formDict.relation.options.researcher}</option>
          <option value="other">{formDict.relation.options.other}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A] mb-2">
          {formDict.message}
        </label>
        <textarea
          id="message"
          rows={4}
          required
          className="w-full px-4 py-3 rounded-lg border border-[#E8E3D7] focus:border-[#1F4A47] focus:ring-2 focus:ring-[#1F4A47]/20 outline-none transition-all resize-none"
          placeholder={formDict.message}
        />
      </div>

      <Button type="submit" variant="primary" fullWidth>
        {formDict.submit}
      </Button>
    </form>
  );
}