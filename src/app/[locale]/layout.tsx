import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Poppins } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Toaster } from "@/components/ui/sonner";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import CookieProvider from "@/components/cookie/cookie-provider";
import StructuredData from "@/components/seo/structured-data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

// Import messages directly for static export
import deMessages from "../../../messages/de.json";
import enMessages from "../../../messages/en.json";

const messagesMap = {
  de: deMessages,
  en: enMessages,
} as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = messagesMap[locale as keyof typeof messagesMap] || messagesMap.de;
  const meta = messages.metadata as { title: string; description: string; keywords: string };

  const baseUrl = "https://signage.cockpit360.de";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: meta.title,
      template: `%s | cockpit360 Signage`,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Thomas Hauser", url: "https://www.cockpit360.de" }],
    creator: "cockpit360 solutions",
    publisher: "cockpit360 solutions",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        "de-DE": `${baseUrl}/de`,
        "en-US": `${baseUrl}/en`,
        "x-default": `${baseUrl}/de`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}`,
      siteName: "cockpit360 Signage",
      locale: locale === "de" ? "de_DE" : "en_US",
      alternateLocale: locale === "de" ? "en_US" : "de_DE",
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: locale === "de"
            ? "cockpit360 Signage - Digital Signage für Immobilienmakler"
            : "cockpit360 Signage - Digital Signage for Real Estate Agents",
        },
        {
          url: `${baseUrl}/images/cockpit360.png`,
          width: 200,
          height: 48,
          alt: "cockpit360 Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/images/og-image.png`],
      creator: "@cockpit360",
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/images/apple-touch-icon.png", sizes: "180x180" },
      ],
      other: [
        { rel: "mask-icon", url: "/images/safari-pinned-tab.svg", color: "#3b82f6" },
      ],
    },
    manifest: "/manifest.json",
    category: "technology",
    classification: "Digital Signage Software",
    other: {
      "msapplication-TileColor": "#1e293b",
      "theme-color": "#1e293b",
      "google-site-verification": "",
      "format-detection": "telephone=no",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  // Validate locale
  if (!routing.locales.includes(locale as "de" | "en")) {
    notFound();
  }

  const messages = messagesMap[locale as keyof typeof messagesMap] || messagesMap.de;

  return (
    <html lang={locale} className={poppins.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900 overflow-x-hidden font-[family-name:var(--font-poppins)]">
        <NextIntlClientProvider messages={messages}>
          <StructuredData locale={locale} />
          <CookieProvider>
            <Navigation locale={locale} />
            <main>{children}</main>
            <Footer locale={locale} />
            <Toaster />
          </CookieProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
