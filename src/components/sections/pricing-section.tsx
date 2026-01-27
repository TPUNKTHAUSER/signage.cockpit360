"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Check, Layout, Layers, Play, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const t = useTranslations("pricing");

  const featureCards = [
    { icon: Layout, title: t("card1Title"), text: t("card1Text"), color: "blue", size: "large" },
    { icon: Layers, title: t("card2Title"), text: t("card2Text"), color: "emerald", size: "small" },
    { icon: Play, title: t("card3Title"), text: t("card3Text"), color: "purple", size: "small" },
    { icon: Settings, title: t("card4Title"), text: t("card4Text"), color: "orange", size: "large" },
  ];

  const getColor = (color: string) => {
    const map: Record<string, { bg: string; text: string }> = {
      blue: { bg: "bg-blue-500/20", text: "text-blue-400" },
      emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400" },
      purple: { bg: "bg-purple-500/20", text: "text-purple-400" },
      orange: { bg: "bg-orange-500/20", text: "text-orange-400" },
    };
    return map[color] || map.blue;
  };

  return (
    <section id="preise" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900 text-white">
      <div className="container mx-auto max-w-7xl">
        {/* Headline */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">{t("title")}</h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Pricing Card */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8 h-full flex flex-col">
              <div className="flex flex-col items-center text-center">
                <span className="text-emerald-400 text-sm font-medium mb-6 px-4 py-1 bg-emerald-500/10 rounded-full">
                  {t("trialText")}
                </span>

                <div className="mb-2 flex items-baseline justify-center gap-1">
                  <span className="text-sm text-slate-400 mt-2">{t("pricePrefix")}</span>
                  <span className="text-5xl sm:text-6xl font-bold text-white">
                    29
                  </span>
                  <span className="text-xl text-slate-400">{t("currency")}</span>
                </div>
                <p className="text-slate-400 text-sm mb-6">{t("priceUnit")}</p>

                {/* Onboarding box */}
                <div className="w-full bg-white/5 rounded-xl border border-white/10 p-3 mb-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">{t("onboardingTitle")}</span>
                    <span className="text-emerald-400 font-semibold">{t("onboardingValue")}</span>
                  </div>
                  <div className="text-xs text-slate-500 text-left mt-1">
                    {t("onboardingNote")}
                  </div>
                </div>

                {/* Setup box */}
                <div className="w-full bg-white/5 rounded-xl border border-white/10 p-3 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">{t("setupTitle")}</span>
                    <span className="text-white font-semibold">{t("setupPrice")}</span>
                  </div>
                  <div className="text-xs text-slate-500 text-left mt-1">
                    {t("setupNote")}
                  </div>
                </div>

                {/* Features */}
                <ul className="text-left space-y-3 w-full mb-6">
                  {[t("feature1"), t("feature2"), t("feature3")].map((feature, i) => (
                    <li key={i} className="flex gap-3 items-center">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="w-full mt-auto py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-colors"
                >
                  <Link href="#kontakt">{t("cta")}</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 content-start">
            {featureCards.map((card, index) => {
              const c = getColor(card.color);
              return (
                <div
                  key={index}
                  className={`bg-white/5 rounded-xl border border-white/10 p-5 ${
                    card.size === "large" ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className={`w-9 h-9 ${c.bg} rounded-lg flex items-center justify-center ${c.text} mb-3`}>
                    <card.icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-white mb-1.5">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-slate-500 text-xs sm:text-sm text-center mt-10">
          {t("disclaimer")}
        </p>
      </div>
    </section>
  );
}
