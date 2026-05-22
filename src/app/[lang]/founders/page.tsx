/**
 * Founders Page - Design Exploration
 * 
 * Three variations for presenting founders:
 * A: Editorial Portrait + Biography
 * B: Compact Card Grid
 * C: Featured Founder Pattern
 */

import { getDictionary, type Locale } from "@/lib/dictionaries";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import { FamilyViewProvider } from "@/lib/context/FamilyViewContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StarDivider, EightPointedStar } from "@/components/patterns";
import { CardServer as Card } from "@/components/ui/CardServer";
import { GatedFoundersContent } from "./GatedFoundersContent";

// Placeholder silhouette SVG
function PortraitPlaceholder({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 140" fill="none">
      <rect width="120" height="140" rx="8" fill="#E8E3D7" />
      <circle cx="60" cy="45" r="25" fill="#1F4A47" opacity="0.2" />
      <path d="M30 110C30 85 45 75 60 75C75 75 90 85 90 110" fill="#1F4A47" opacity="0.2" />
    </svg>
  );
}

export default async function FoundersPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const isRTL = lang === "ar";

  const exp = dict.founders.exploration;
  const f1 = dict.founders.founder1;
  const f2 = dict.founders.founder2;
  const f3 = dict.founders.founder3;

  return (
    <LanguageProvider initialLanguage={lang as Locale}>
      <FamilyViewProvider>
        <Navbar dict={dict} lang={lang as Locale} />
        <main className="flex-1">
          {/* Page Header */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1F4A47] text-white">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-arabic-heading">
                {dict.founders.title}
              </h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                {dict.founders.subtitle}
              </p>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
            
            {/* Variation A: Editorial Portrait + Biography */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-[#1F4A47] text-white text-sm font-medium rounded-full">
                  A
                </span>
                <h2 className="text-xl font-bold text-[#6B6B68]">
                  {exp.variationA.label}
                </h2>
              </div>

              <div className="space-y-16">
                {/* Founder 1 - Featured */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={`${isRTL ? "md:order-2" : ""}`}>
                    <PortraitPlaceholder className="w-full max-w-sm mx-auto h-auto rounded-xl shadow-lg" />
                  </div>
                  <div className={`${isRTL ? "md:order-1" : ""} space-y-4`}>
                    <div className="text-sm text-[#A85A3E] font-medium uppercase tracking-wider">
                      {exp.variationA.founder1Role}
                    </div>
                    <h3 className="text-3xl font-bold text-[#1F4A47] font-arabic-heading">
                      {f1.name}
                    </h3>
                    <p className="text-[#6B6B68] italic">{f1.dates}</p>
                    <p className="text-[#1A1A1A] leading-relaxed">
                      {exp.variationA.extendedBio1}
                    </p>
                  </div>
                </div>

                {/* Founder 2 */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="text-sm text-[#A85A3E] font-medium uppercase tracking-wider">
                      {exp.variationA.founder2Role}
                    </div>
                    <h3 className="text-3xl font-bold text-[#1F4A47] font-arabic-heading">
                      {f2.name}
                    </h3>
                    <p className="text-[#6B6B68] italic">{f2.dates}</p>
                    <p className="text-[#1A1A1A] leading-relaxed">
                      {exp.variationA.extendedBio2}
                    </p>
                  </div>
                  <div>
                    <PortraitPlaceholder className="w-full max-w-sm mx-auto h-auto rounded-xl shadow-lg" />
                  </div>
                </div>

                {/* Founder 3 */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={`${isRTL ? "md:order-2" : ""}`}>
                    <PortraitPlaceholder className="w-full max-w-sm mx-auto h-auto rounded-xl shadow-lg" />
                  </div>
                  <div className={`${isRTL ? "md:order-1" : ""} space-y-4`}>
                    <div className="text-sm text-[#A85A3E] font-medium uppercase tracking-wider">
                      {exp.variationA.founder3Role}
                    </div>
                    <h3 className="text-3xl font-bold text-[#1F4A47] font-arabic-heading">
                      {f3.name}
                    </h3>
                    <p className="text-[#6B6B68] italic">{f3.dates}</p>
                    <p className="text-[#1A1A1A] leading-relaxed">
                      {exp.variationA.extendedBio3}
                    </p>
                  </div>
                </div>
              </div>

              <StarDivider />
            </section>

            {/* Variation B: Compact Card Grid */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-[#A85A3E] text-white text-sm font-medium rounded-full">
                  B
                </span>
                <h2 className="text-xl font-bold text-[#6B6B68]">
                  {exp.variationB.label}
                </h2>
              </div>

              <div className="text-center mb-8">
                <span className="text-sm text-[#6B6B68] uppercase tracking-wider">
                  {exp.variationB.cardSubtitle}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card decorative className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#E8E3D7] flex items-center justify-center">
                    <EightPointedStar size={32} color="#1F4A47" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F4A47] mb-1 font-arabic-heading">
                    {f1.name}
                  </h3>
                  <p className="text-sm text-[#6B6B68] mb-3">{f1.dates}</p>
                  <p className="text-sm text-[#6B6B68]">{f1.bio}</p>
                </Card>

                <Card decorative className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#E8E3D7] flex items-center justify-center">
                    <EightPointedStar size={32} color="#1F4A47" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F4A47] mb-1 font-arabic-heading">
                    {f2.name}
                  </h3>
                  <p className="text-sm text-[#6B6B68] mb-3">{f2.dates}</p>
                  <p className="text-sm text-[#6B6B68]">{f2.bio}</p>
                </Card>

                <Card decorative className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#E8E3D7] flex items-center justify-center">
                    <EightPointedStar size={32} color="#1F4A47" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F4A47] mb-1 font-arabic-heading">
                    {f3.name}
                  </h3>
                  <p className="text-sm text-[#6B6B68] mb-3">{f3.dates}</p>
                  <p className="text-sm text-[#6B6B68]">{f3.bio}</p>
                </Card>
              </div>

              <StarDivider />
            </section>

            {/* Variation C: Featured Founder Pattern */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-[#D4B896] text-[#1A1A1A] text-sm font-medium rounded-full">
                  C
                </span>
                <h2 className="text-xl font-bold text-[#6B6B68]">
                  {exp.variationC.label}
                </h2>
              </div>

              <div className="space-y-8">
                {/* Featured Founder */}
                <div className="bg-[#1F4A47] rounded-2xl p-8 text-white">
                  <div className="text-sm text-[#D4B896] font-medium uppercase tracking-wider mb-4">
                    {exp.variationC.featuredLabel}
                  </div>
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                      <div className="bg-white/10 rounded-xl p-6 aspect-square flex items-center justify-center">
                        <EightPointedStar size={64} color="#D4B896" />
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <h3 className="text-3xl font-bold font-arabic-heading">{f1.name}</h3>
                      <p className="text-white/70">{f1.dates}</p>
                      <p className="text-white/90 leading-relaxed">{f1.bio}</p>
                    </div>
                  </div>
                </div>

                {/* Secondary Founders */}
                <div className="text-sm text-[#6B6B68] uppercase tracking-wider mb-4">
                  {exp.variationC.secondaryLabel}
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg bg-[#E8E3D7] flex items-center justify-center flex-shrink-0">
                        <EightPointedStar size={24} color="#A85A3E" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1F4A47] font-arabic-heading">{f2.name}</h4>
                        <p className="text-sm text-[#6B6B68] mb-2">{f2.dates}</p>
                        <p className="text-sm text-[#6B6B68]">{f2.bio}</p>
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg bg-[#E8E3D7] flex items-center justify-center flex-shrink-0">
                        <EightPointedStar size={24} color="#A85A3E" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1F4A47] font-arabic-heading">{f3.name}</h4>
                        <p className="text-sm text-[#6B6B68] mb-2">{f3.dates}</p>
                        <p className="text-sm text-[#6B6B68]">{f3.bio}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <StarDivider />
            </section>

            {/* Gated Section */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-[#A85A3E] text-white text-sm font-medium rounded-full">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <h2 className="text-xl font-bold text-[#6B6B68]">
                  {isRTL ? "قسم الأعضاء فقط" : "Family Members Only"}
                </h2>
              </div>

              <GatedFoundersContent dict={dict} />
            </section>

          </div>
        </main>
        <Footer dict={dict} lang={lang as Locale} />
      </FamilyViewProvider>
    </LanguageProvider>
  );
}