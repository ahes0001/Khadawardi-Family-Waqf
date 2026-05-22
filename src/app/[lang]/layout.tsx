import type { Metadata } from "next";
import { Reem_Kufi, Tajawal, Cormorant, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import "../globals.css";

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

// Generate static params for both locales
export function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "en" }];
}

// Generate metadata based on locale
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  
  return {
    title: `${dict.site.name} | ${dict.site.tagline}`,
    description: dict.site.tagline,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // Validate locale
  if (lang !== "ar" && lang !== "en") {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={lang}
      dir={dir}
      className={`${reemKufi.variable} ${tajawal.variable} ${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-arabic-body">
        {children}
      </body>
    </html>
  );
}