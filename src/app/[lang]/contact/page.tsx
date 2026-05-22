/**
 * Contact Page - Design Exploration
 * 
 * Two variations for presenting contact form:
 * A: Centered Single Column
 * B: Split Layout with Contact Info
 */

import { getDictionary, type Locale } from "@/lib/dictionaries";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import { FamilyViewProvider } from "@/lib/context/FamilyViewContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StarDivider } from "@/components/patterns";
import { ContactForm } from "./ContactForm";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const isRTL = lang === "ar";

  const exp = dict.contact.exploration;
  const formDict = dict.contact.form;

  return (
    <LanguageProvider initialLanguage={lang as Locale}>
      <FamilyViewProvider>
        <Navbar dict={dict} lang={lang as Locale} />
        <main className="flex-1">
          {/* Page Header */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1F4A47] text-white">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-arabic-heading">
                {dict.contact.title}
              </h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                {dict.contact.subtitle}
              </p>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
            
            {/* Variation A: Centered Single Column */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-[#1F4A47] text-white text-sm font-medium rounded-full">
                  A
                </span>
                <h2 className="text-xl font-bold text-[#6B6B68]">
                  {exp.variationA.label}
                </h2>
              </div>

              <div className="max-w-xl mx-auto">
                <div className="bg-white rounded-2xl shadow-sm border border-[#E8E3D7] p-8">
                  <h3 className="text-2xl font-bold text-[#1F4A47] mb-2 text-center font-arabic-heading">
                    {exp.variationA.formTitle}
                  </h3>
                  <p className="text-[#6B6B68] text-center mb-8">
                    {exp.variationA.formSubtitle}
                  </p>
                  <ContactForm 
                    formDict={formDict} 
                    isRTL={isRTL}
                    variant="centered"
                  />
                </div>
              </div>

              <StarDivider />
            </section>

            {/* Variation B: Split Layout */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-[#A85A3E] text-white text-sm font-medium rounded-full">
                  B
                </span>
                <h2 className="text-xl font-bold text-[#6B6B68]">
                  {exp.variationB.label}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Info Side */}
                <div className="bg-[#1F4A47] rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 font-arabic-heading">
                    {exp.variationB.contactInfoTitle}
                  </h3>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    {exp.variationB.contactInfoText}
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium mb-1">{exp.variationB.addressLabel}</div>
                        <div className="text-white/70">{exp.variationB.addressValue}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium mb-1">{exp.variationB.emailLabel}</div>
                        <div className="text-white/70">{exp.variationB.emailValue}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Side */}
                <div className="bg-white rounded-2xl shadow-sm border border-[#E8E3D7] p-8">
                  <h3 className="text-2xl font-bold text-[#1F4A47] mb-6 font-arabic-heading">
                    {exp.variationB.formTitle}
                  </h3>
                  <ContactForm 
                    formDict={formDict} 
                    isRTL={isRTL}
                    variant="split"
                  />
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