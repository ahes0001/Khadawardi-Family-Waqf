/**
 * Property Page - Design Exploration
 * 
 * Two variations for presenting property information:
 * A: Split Screen Layout
 * B: Stacked Editorial Layout
 */

import { getDictionary, type Locale } from "@/lib/dictionaries";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import { FamilyViewProvider } from "@/lib/context/FamilyViewContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StarDivider, EightPointedStar } from "@/components/patterns";
import { CardServer as Card } from "@/components/ui/CardServer";

// Photo Placeholder
function PhotoPlaceholder({ className }: { className?: string }) {
  return (
    <div className={`bg-[#E8E3D7] rounded-xl flex items-center justify-center ${className}`}>
      <EightPointedStar size={48} color="#1F4A47" opacity={0.2} />
    </div>
  );
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const isRTL = lang === "ar";

  const exp = dict.property.exploration;
  const hotel = dict.property.hotel;
  const b1 = hotel.building1;
  const b2 = hotel.building2;

  return (
    <LanguageProvider initialLanguage={lang as Locale}>
      <FamilyViewProvider>
        <Navbar dict={dict} lang={lang as Locale} />
        <main className="flex-1">
          {/* Page Header */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1F4A47] text-white">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-arabic-heading">
                {dict.property.title}
              </h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                {hotel.name}
              </p>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
            
            {/* Variation A: Split Screen Layout */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-[#1F4A47] text-white text-sm font-medium rounded-full">
                  A
                </span>
                <h2 className="text-xl font-bold text-[#6B6B68]">
                  {exp.variationA.label}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 min-h-[500px]">
                {/* Building 1 - Left Half */}
                <div className="relative bg-[#FAF8F3] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0">
                    <PhotoPlaceholder className="w-full h-full" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F4A47]/90 via-[#1F4A47]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="text-sm text-[#D4B896] font-medium mb-2">
                      {exp.variationA.building1Label}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 font-arabic-heading">{b1.name}</h3>
                    <p className="text-white/80 text-sm mb-4">{b1.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <EightPointedStar size={16} color="#D4B896" />
                      <span>{exp.variationA.year1}</span>
                    </div>
                  </div>
                </div>

                {/* Building 2 - Right Half */}
                <div className="relative bg-[#FAF8F3] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0">
                    <PhotoPlaceholder className="w-full h-full" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#A85A3E]/90 via-[#A85A3E]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="text-sm text-[#D4B896] font-medium mb-2">
                      {exp.variationA.building2Label}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 font-arabic-heading">{b2.name}</h3>
                    <p className="text-white/80 text-sm mb-4">{b2.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <EightPointedStar size={16} color="#D4B896" />
                      <span>{exp.variationA.year2}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Info */}
              <div className="flex items-center justify-center gap-2 text-[#6B6B68]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">{exp.variationA.locationLabel}:</span>
                <span>{exp.variationA.locationValue}</span>
              </div>

              <StarDivider />
            </section>

            {/* Variation B: Stacked Editorial Layout */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-[#A85A3E] text-white text-sm font-medium rounded-full">
                  B
                </span>
                <h2 className="text-xl font-bold text-[#6B6B68]">
                  {exp.variationB.label}
                </h2>
              </div>

              <div className="max-w-4xl mx-auto space-y-12">
                {/* Intro */}
                <p className="text-xl text-[#1A1A1A] text-center leading-relaxed">
                  {exp.variationB.intro}
                </p>

                {/* Main Photo */}
                <PhotoPlaceholder className="w-full h-64 rounded-2xl" />

                {/* Buildings Stack */}
                <div className="space-y-8">
                  <Card>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <PhotoPlaceholder className="w-full h-48" />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold text-[#1F4A47] mb-2 font-arabic-heading">
                          {b1.name}
                        </h3>
                        <p className="text-[#6B6B68] mb-4">{b1.description}</p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1F4A47]/10 text-[#1F4A47] rounded-full text-sm">
                          <EightPointedStar size={14} color="#1F4A47" />
                          <span>{exp.variationA.year1}</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <PhotoPlaceholder className="w-full h-48" />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold text-[#1F4A47] mb-2 font-arabic-heading">
                          {b2.name}
                        </h3>
                        <p className="text-[#6B6B68] mb-4">{b2.description}</p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A85A3E]/10 text-[#A85A3E] rounded-full text-sm">
                          <EightPointedStar size={14} color="#A85A3E" />
                          <span>{exp.variationA.year2}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Features */}
                <div className="bg-[#FAF8F3] rounded-xl p-8">
                  <h3 className="text-lg font-bold text-[#1F4A47] mb-6 text-center font-arabic-heading">
                    {exp.variationB.featuresTitle}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#1F4A47]/10 flex items-center justify-center">
                        <EightPointedStar size={20} color="#1F4A47" />
                      </div>
                      <p className="text-[#1A1A1A] font-medium">{exp.variationB.feature1}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#1F4A47]/10 flex items-center justify-center">
                        <EightPointedStar size={20} color="#1F4A47" />
                      </div>
                      <p className="text-[#1A1A1A] font-medium">{exp.variationB.feature2}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#1F4A47]/10 flex items-center justify-center">
                        <EightPointedStar size={20} color="#1F4A47" />
                      </div>
                      <p className="text-[#1A1A1A] font-medium">{exp.variationB.feature3}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </main>
        <Footer dict={dict} lang={lang as Locale} />
      </FamilyViewProvider>
    </LanguageProvider>
  );
}