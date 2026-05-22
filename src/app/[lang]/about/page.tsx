/**
 * About Page - Design Exploration
 * 
 * Three variations for presenting "What is a Waqf" content:
 * A: Editorial long-form
 * B: Definition cards grid
 * C: Q&A format
 */

import { getDictionary, type Locale } from "@/lib/dictionaries";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import { FamilyViewProvider } from "@/lib/context/FamilyViewContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StarDivider } from "@/components/patterns";
import { CardServer as Card } from "@/components/ui/CardServer";
import { GatedAboutContent } from "./GatedAboutContent";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const isRTL = lang === "ar";

  return (
    <LanguageProvider initialLanguage={lang as Locale}>
      <FamilyViewProvider>
        <Navbar dict={dict} lang={lang as Locale} />
        <main className="flex-1">
          {/* Page Header */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1F4A47] text-white">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-arabic-heading">
                {dict.about.title}
              </h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                {isRTL 
                  ? "استكشف تنويعات مختلفة لتقديم محتوى الصفحة"
                  : "Explore different variations for presenting page content"}
              </p>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
            
            {/* Variation A: Editorial Long-form */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-[#1F4A47] text-white text-sm font-medium rounded-full">
                  A
                </span>
                <h2 className="text-xl font-bold text-[#6B6B68]">
                  {dict.about.exploration.variationA.label}
                </h2>
              </div>
              
              <div className="max-w-3xl">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-[#1A1A1A] leading-relaxed mb-8 font-medium">
                    {dict.about.exploration.variationA.intro}
                  </p>
                  
                  <div className="bg-[#FAF8F3] p-8 rounded-xl border-l-4 border-[#1F4A47] mb-8">
                    <p className="text-[#6B6B68] leading-relaxed mb-4">
                      {dict.about.exploration.variationA.definition}
                    </p>
                    <p className="text-[#6B6B68] leading-relaxed">
                      {dict.about.exploration.variationA.legacy}
                    </p>
                  </div>
                </div>

                {/* Beneficiaries Section */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-[#1F4A47] mb-6 font-arabic-heading">
                    {dict.about.exploration.beneficiaries.title}
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E8E3D7]">
                      <div className="text-3xl font-bold text-[#1F4A47] mb-2">
                        {dict.about.exploration.beneficiaries.count}
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E8E3D7]">
                      <div className="text-lg font-medium text-[#1F4A47]">
                        {dict.about.exploration.beneficiaries.generations}
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E8E3D7]">
                      <div className="text-lg font-medium text-[#1F4A47]">
                        {dict.about.exploration.beneficiaries.locations}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <StarDivider />
            </section>

            {/* Variation B: Definition Cards */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-[#A85A3E] text-white text-sm font-medium rounded-full">
                  B
                </span>
                <h2 className="text-xl font-bold text-[#6B6B68]">
                  {dict.about.exploration.variationB.label}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card decorative className="h-full">
                  <div className="text-sm text-[#A85A3E] font-medium uppercase tracking-wider mb-2">
                    {dict.about.exploration.variationB.definitionTitle}
                  </div>
                  <p className="text-lg text-[#1A1A1A]">
                    {dict.about.exploration.variationB.definitionText}
                  </p>
                </Card>

                <Card decorative className="h-full">
                  <div className="text-sm text-[#A85A3E] font-medium uppercase tracking-wider mb-2">
                    {dict.about.exploration.variationB.purposeTitle}
                  </div>
                  <p className="text-lg text-[#1A1A1A]">
                    {dict.about.exploration.variationB.purposeText}
                  </p>
                </Card>

                <Card decorative className="h-full">
                  <div className="text-sm text-[#A85A3E] font-medium uppercase tracking-wider mb-2">
                    {dict.about.exploration.variationB.scopeTitle}
                  </div>
                  <p className="text-lg text-[#1A1A1A]">
                    {dict.about.exploration.variationB.scopeText}
                  </p>
                </Card>

                <Card decorative className="h-full">
                  <div className="text-sm text-[#A85A3E] font-medium uppercase tracking-wider mb-2">
                    {dict.about.exploration.variationB.durationTitle}
                  </div>
                  <p className="text-lg text-[#1A1A1A]">
                    {dict.about.exploration.variationB.durationText}
                  </p>
                </Card>
              </div>

              <StarDivider />
            </section>

            {/* Variation C: Q&A Format */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-[#D4B896] text-[#1A1A1A] text-sm font-medium rounded-full">
                  C
                </span>
                <h2 className="text-xl font-bold text-[#6B6B68]">
                  {dict.about.exploration.variationC.label}
                </h2>
              </div>

              <div className="space-y-6 max-w-3xl">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E8E3D7]">
                  <h3 className="text-lg font-bold text-[#1F4A47] mb-3 font-arabic-heading">
                    Q: {dict.about.exploration.variationC.q1}
                  </h3>
                  <p className="text-[#6B6B68] leading-relaxed">
                    {dict.about.exploration.variationC.a1}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E8E3D7]">
                  <h3 className="text-lg font-bold text-[#1F4A47] mb-3 font-arabic-heading">
                    Q: {dict.about.exploration.variationC.q2}
                  </h3>
                  <p className="text-[#6B6B68] leading-relaxed">
                    {dict.about.exploration.variationC.a2}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E8E3D7]">
                  <h3 className="text-lg font-bold text-[#1F4A47] mb-3 font-arabic-heading">
                    Q: {dict.about.exploration.variationC.q3}
                  </h3>
                  <p className="text-[#6B6B68] leading-relaxed">
                    {dict.about.exploration.variationC.a3}
                  </p>
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

              <GatedAboutContent dict={dict} />
            </section>

          </div>
        </main>
        <Footer dict={dict} lang={lang as Locale} />
      </FamilyViewProvider>
    </LanguageProvider>
  );
}