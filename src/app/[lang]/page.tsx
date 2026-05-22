/**
 * Home Page
 * 
 * Main landing page for the waqf website.
 */

import { HeroSection, QuickFacts } from "@/components/sections";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FoundersPreview } from "@/components/sections/FoundersPreview";
import { HistoryPreview } from "@/components/sections/HistoryPreview";
import { GatedContent } from "@/components/sections/GatedContent";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickFacts />
      <AboutPreview />
      <FoundersPreview />
      <HistoryPreview />
      <GatedContent />
      <FooterCTA />
    </>
  );
}