import type { Metadata } from "next";
import { Reem_Kufi, Tajawal, Cormorant, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import { FamilyViewProvider } from "@/lib/context/FamilyViewContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Arabic fonts
const reemKufi = Reem_Kufi({
  variable: "--font-reem-kufi",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

// English fonts
const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "وقف الخضاوردي | Khadawardi Waqf",
  description:
    "وقف ذري يضم أصولاً راسخة منذ تأسيس المملكة العربية السعودية. A family waqf with deep roots since the founding of Saudi Arabia.",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang?: string };
}) {
  // Default to Arabic if no language specified
  const lang = params?.lang === "en" ? "en" : "ar";
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={lang}
      dir={dir}
      className={`${reemKufi.variable} ${tajawal.variable} ${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-arabic-body">
        <LanguageProvider initialLanguage={lang as "ar" | "en"}>
          <FamilyViewProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </FamilyViewProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}