/**
 * History Page - Design Exploration
 * 
 * Three variations for presenting timeline:
 * A: Vertical Timeline with Center Line
 * B: Generation Cards Grid
 * C: Horizontal Scroll Timeline
 */

import { getDictionary, type Locale } from "@/lib/dictionaries";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import { FamilyViewProvider } from "@/lib/context/FamilyViewContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StarDivider, EightPointedStar } from "@/components/patterns";
import { CardServer as Card } from "@/components/ui/CardServer";
import { GatedHistoryContent } from "./GatedHistoryContent";

export default async function HistoryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const isRTL = lang === "ar";

  const exp = dict.history.exploration;

  return (
    <LanguageProvider initialLanguage={lang as Locale}>
      <FamilyViewProvider>
        <Navbar dict={dict} lang={lang as Locale} />
        <main className="flex-1">
          {/* Page Header */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1F4A47] text-white">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-arabic-heading">
                {dict.history.title}
              </h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                {isRTL 
                  ? "استكشف تنويعات مختلفة لعرض الجدول الزمني"
                  : "Explore different timeline presentation variations"}
              </p>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
            
            {/* Variation A: Vertical Timeline with Center Line */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-[#1F4A47] text-white text-sm font-medium rounded-full">
                  A
                </span>
                <h2 className="text-xl font-bold text-[#6B6B68]">
                  {exp.variationA.label}
                </h2>
              </div>

              <div className="relative">
                {/* Center Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E8E3D7] -translate-x-1/2" />
                
                <div className="space-y-12 relative">
                  {/* 1932 */}
                  <div className="flex items-center gap-8">
                    <div className={`flex-1 ${isRTL ? "text-left" : "text-right"}`}>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E8E3D7] inline-block">
                        <div className="text-3xl font-bold text-[#1F4A47] mb-2">{exp.variationA.foundationYear}</div>
                        <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">{exp.variationA.foundationTitle}</h3>
                        <p className="text-[#6B6B68]">{exp.variationA.foundationDesc}</p>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-4 h-4 rounded-full bg-[#1F4A47] border-4 border-white shadow" />
                    </div>
                    <div className="flex-1" />
                  </div>

                  {/* 1950 */}
                  <div className="flex items-center gap-8">
                    <div className="flex-1" />
                    <div className="relative z-10">
                      <div className="w-4 h-4 rounded-full bg-[#A85A3E] border-4 border-white shadow" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E8E3D7] inline-block">
                        <div className="text-3xl font-bold text-[#A85A3E] mb-2">{exp.variationA.firstGenYear}</div>
                        <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">{exp.variationA.firstGenTitle}</h3>
                        <p className="text-[#6B6B68]">{exp.variationA.firstGenDesc}</p>
                      </div>
                    </div>
                  </div>

                  {/* 1975 */}
                  <div className="flex items-center gap-8">
                    <div className={`flex-1 ${isRTL ? "text-left" : "text-right"}`}>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E8E3D7] inline-block">
                        <div className="text-3xl font-bold text-[#1F4A47] mb-2">{exp.variationA.expansionYear}</div>
                        <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">{exp.variationA.expansionTitle}</h3>
                        <p className="text-[#6B6B68]">{exp.variationA.expansionDesc}</p>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-4 h-4 rounded-full bg-[#D4B896] border-4 border-white shadow" />
                    </div>
                    <div className="flex-1" />
                  </div>

                  {/* 2000 */}
                  <div className="flex items-center gap-8">
                    <div className="flex-1" />
                    <div className="relative z-10">
                      <div className="w-4 h-4 rounded-full bg-[#1F4A47] border-4 border-white shadow" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E8E3D7] inline-block">
                        <div className="text-3xl font-bold text-[#1F4A47] mb-2">{exp.variationA.modernYear}</div>
                        <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">{exp.variationA.modernTitle}</h3>
                        <p className="text-[#6B6B68]">{exp.variationA.modernDesc}</p>
                      </div>
                    </div>
                  </div>

                  {/* 2024 */}
                  <div className="flex items-center gap-8">
                    <div className={`flex-1 ${isRTL ? "text-left" : "text-right"}`}>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E8E3D7] inline-block">
                        <div className="text-3xl font-bold text-[#A85A3E] mb-2">{exp.variationA.presentYear}</div>
                        <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">{exp.variationA.presentTitle}</h3>
                        <p className="text-[#6B6B68]">{exp.variationA.presentDesc}</p>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <EightPointedStar size={32} color="#A85A3E" />
                    </div>
                    <div className="flex-1" />
                  </div>
                </div>
              </div>

              <StarDivider />
            </section>

            {/* Variation B: Generation Cards Grid */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-[#A85A3E] text-white text-sm font-medium rounded-full">
                  B
                </span>
                <h2 className="text-xl font-bold text-[#6B6B68]">
                  {exp.variationB.label}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card decorative className="text-center">
                  <div className="text-sm text-[#A85A3E] font-medium mb-2">{exp.variationB.gen1Years}</div>
                  <h3 className="text-xl font-bold text-[#1F4A47] mb-2 font-arabic-heading">{exp.variationB.gen1Title}</h3>
                  <p className="text-[#6B6B68]">{exp.variationB.gen1Desc}</p>
                </Card>

                <Card decorative className="text-center">
                  <div className="text-sm text-[#A85A3E] font-medium mb-2">{exp.variationB.gen2Years}</div>
                  <h3 className="text-xl font-bold text-[#1F4A47] mb-2 font-arabic-heading">{exp.variationB.gen2Title}</h3>
                  <p className="text-[#6B6B68]">{exp.variationB.gen2Desc}</p>
                </Card>

                <Card decorative className="text-center">
                  <div className="text-sm text-[#A85A3E] font-medium mb-2">{exp.variationB.gen3Years}</div>
                  <h3 className="text-xl font-bold text-[#1F4A47] mb-2 font-arabic-heading">{exp.variationB.gen3Title}</h3>
                  <p className="text-[#6B6B68]">{exp.variationB.gen3Desc}</p>
                </Card>

                <Card decorative className="text-center">
                  <div className="text-sm text-[#A85A3E] font-medium mb-2">{exp.variationB.gen4Years}</div>
                  <h3 className="text-xl font-bold text-[#1F4A47] mb-2 font-arabic-heading">{exp.variationB.gen4Title}</h3>
                  <p className="text-[#6B6B68]">{exp.variationB.gen4Desc}</p>
                </Card>
              </div>

              <StarDivider />
            </section>

            {/* Variation C: Horizontal Scroll Timeline */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-[#D4B896] text-[#1A1A1A] text-sm font-medium rounded-full">
                  C
                </span>
                <h2 className="text-xl font-bold text-[#6B6B68]">
                  {exp.variationC.label}
                </h2>
              </div>

              <div className="bg-[#FAF8F3] rounded-xl p-6 overflow-x-auto">
                <div className="flex items-center gap-4 min-w-max">
                  <div className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl shadow-sm border border-[#E8E3D7] min-w-[140px]">
                    <EightPointedStar size={24} color="#1F4A47" />
                    <span className="font-bold text-[#1F4A47]">{exp.variationC.era1}</span>
                    <span className="text-sm text-[#6B6B68]">1932</span>
                  </div>
                  
                  <div className="w-16 h-px bg-[#D4B896]" />
                  
                  <div className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl shadow-sm border border-[#E8E3D7] min-w-[140px]">
                    <EightPointedStar size={24} color="#A85A3E" />
                    <span className="font-bold text-[#1F4A47]">{exp.variationC.era2}</span>
                    <span className="text-sm text-[#6B6B68]">1950-2000</span>
                  </div>
                  
                  <div className="w-16 h-px bg-[#D4B896]" />
                  
                  <div className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl shadow-sm border border-[#E8E3D7] min-w-[140px]">
                    <EightPointedStar size={24} color="#D4B896" />
                    <span className="font-bold text-[#1F4A47]">{exp.variationC.era3}</span>
                    <span className="text-sm text-[#6B6B68]">2000+</span>
                  </div>
                  
                  <div className="w-16 h-px bg-[#D4B896]" />
                  
                  <div className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl shadow-sm border border-[#E8E3D7] min-w-[140px]">
                    <EightPointedStar size={24} color="#1F4A47" />
                    <span className="font-bold text-[#1F4A47]">{exp.variationC.era4}</span>
                    <span className="text-sm text-[#6B6B68]">...</span>
                  </div>
                </div>
                <p className="text-center text-sm text-[#6B6B68] mt-4 italic">
                  ← {exp.variationC.scrollHint} →
                </p>
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

              <GatedHistoryContent dict={dict} />
            </section>

          </div>
        </main>
        <Footer dict={dict} lang={lang as Locale} />
      </FamilyViewProvider>
    </LanguageProvider>
  );
}