/**
 * Home Page
 * 
 * Main landing page for the waqf website.
 */

import { getDictionary, type Locale } from "@/lib/dictionaries";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import { FamilyViewProvider } from "@/lib/context/FamilyViewContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  HeroSection, 
  QuickFacts, 
  AboutPreview, 
  FoundersPreview, 
  HistoryPreview, 
  GatedContent, 
  FooterCTA 
} from "@/components/sections";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <LanguageProvider initialLanguage={lang as Locale}>
      <FamilyViewProvider>
        <Navbar dict={dict} lang={lang as Locale} />
        <main className="flex-1">
          <HeroSection dict={dict} lang={lang as Locale} />
          <QuickFacts dict={dict} />
          <AboutPreview dict={dict} lang={lang as Locale} />
          <FoundersPreview dict={dict} lang={lang as Locale} />
          <HistoryPreview dict={dict} lang={lang as Locale} />
          <GatedContent dict={dict} />
          <FooterCTA dict={dict} lang={lang as Locale} />
        </main>
        <Footer dict={dict} lang={lang as Locale} />
      </FamilyViewProvider>
    </LanguageProvider>
  );
}