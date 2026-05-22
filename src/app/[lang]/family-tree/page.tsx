import { Metadata } from "next";
import { FamilyTree } from "@/components/FamilyTree";
import { StarDivider } from "@/components/patterns";
import arTranslations from "@/lib/translations/ar.json";

export const metadata: Metadata = {
  title: `${arTranslations.familyTree.title} | ${arTranslations.site.name}`,
};

export default function FamilyTreePage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1F4A47] font-arabic-heading mb-4">
          {arTranslations.familyTree.title}
        </h1>
        <p className="text-lg text-[#6B6B68] max-w-2xl mx-auto">
          {arTranslations.familyTree.subtitle}
        </p>
      </div>
      <StarDivider />
      <FamilyTree />
    </div>
  );
}