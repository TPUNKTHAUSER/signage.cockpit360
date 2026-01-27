import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import HeroSection from "@/components/sections/hero-section";
import ProblemSolutionSection from "@/components/sections/problem-solution-section";
import ShowcaseSection from "@/components/sections/showcase-section";
import HardwareSection from "@/components/sections/hardware-section";
import PricingSection from "@/components/sections/pricing-section";
import BenefitsSection from "@/components/sections/benefits-section";
import StandOutSection from "@/components/sections/stand-out-section";
import CompetitiveEdgeSection from "@/components/sections/competitive-edge-section";
import MultiOfficeSection from "@/components/sections/multi-office-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import EditorSection from "@/components/sections/editor-section";
import CloudPortalSection from "@/components/sections/cloud-portal-section";
import FaqSection from "@/components/sections/faq-section";
import ContactCtaSection from "@/components/sections/contact-cta-section";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <EditorSection />
      <ShowcaseSection />
      <HardwareSection />
      <PricingSection />
      <BenefitsSection />
      <StandOutSection />
      <CompetitiveEdgeSection />
      <MultiOfficeSection />
      <HowItWorksSection />
      <CloudPortalSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}
