import { Metadata } from "next";
import { FamilyTree } from "@/components/FamilyTree";
import { StarDivider } from "@/components/patterns";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import { FamilyViewProvider } from "@/lib/context/FamilyViewContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return {
    title: `${dict.familyTree.title} | ${dict.site.name}`,
  };
}

export default async function FamilyTreePage({
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
          <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-[#1F4A47] font-arabic-heading mb-4">
                {dict.familyTree.title}
              </h1>
              <p className="text-lg text-[#6B6B68] max-w-2xl mx-auto">
                {dict.familyTree.subtitle}
              </p>
            </div>
            <StarDivider />
            <FamilyTree dict={dict} />
          </div>
        </main>
        <Footer dict={dict} lang={lang as Locale} />
      </FamilyViewProvider>
    </LanguageProvider>
  );
}