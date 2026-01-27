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

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; glow: string }> = {
      blue: { bg: "bg-blue-500/20", text: "text-blue-400", glow: "group-hover:shadow-blue-500/20" },
      emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400", glow: "group-hover:shadow-emerald-500/20" },
      purple: { bg: "bg-purple-500/20", text: "text-purple-400", glow: "group-hover:shadow-purple-500/20" },
      orange: { bg: "bg-orange-500/20", text: "text-orange-400", glow: "group-hover:shadow-orange-500/20" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="preise" className="py-12 sm:py-16 md:py-20 px-4 bg-slate-800 text-white relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-dark opacity-50" />

      {/* Animated gradient orbs */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] animate-float-delayed" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern-dark opacity-20" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Headline */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t("title")}</h2>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Pricing Card - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="relative group h-full">
              {/* Animated gradient border */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift" style={{ backgroundSize: '200% 100%' }} />

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card content */}
              <div className="relative glass-dark rounded-3xl p-6 sm:p-8 h-full flex flex-col">
                <div className="flex flex-col items-center text-center">
                  <span className="text-emerald-400 text-sm font-semibold mb-6 px-4 py-1 bg-emerald-500/10 rounded-full">
                    {t("trialText")}
                  </span>

                  <div className="mb-2 flex items-baseline justify-center gap-1">
                    <span className="text-sm text-slate-300 mt-2">{t("pricePrefix")}</span>
                    <span className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-300 tracking-tight">
                      29
                    </span>
                    <span className="text-2xl text-slate-300">{t("currency")}</span>
                  </div>
                  <p className="text-slate-300 text-sm mb-8">{t("priceUnit")}</p>

                  {/* Onboarding box */}
                  <div className="w-full glass rounded-2xl p-4 mb-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">{t("onboardingTitle")}</span>
                      <span className="text-emerald-400 font-bold">{t("onboardingValue")}</span>
                    </div>
                    <div className="text-xs text-slate-500 text-left mt-1">
                      {t("onboardingNote")}
                    </div>
                  </div>

                  {/* Setup box */}
                  <div className="w-full glass rounded-2xl p-4 mb-8">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">{t("setupTitle")}</span>
                      <span className="text-white font-bold">{t("setupPrice")}</span>
                    </div>
                    <div className="text-xs text-slate-500 text-left mt-1">
                      {t("setupNote")}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="text-left space-y-4 w-full mb-8">
                    <li className="flex gap-3 items-center">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="text-slate-300 text-sm">{t("feature1")}</span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="text-slate-300 text-sm">{t("feature2")}</span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="text-slate-300 text-sm">{t("feature3")}</span>
                    </li>
                  </ul>

                  <Button
                    asChild
                    className="w-full mt-auto py-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02]"
                  >
                    <Link href="#kontakt">{t("cta")}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards - Bento Grid - Takes 3 columns */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 md:gap-6 content-start">
            {featureCards.map((card, index) => {
              const colorClasses = getColorClasses(card.color);
              return (
                <div
                  key={index}
                  className={`group glass rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover-lift ${colorClasses.glow} hover:shadow-xl ${
                    card.size === "large" ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className={`w-12 h-12 ${colorClasses.bg} rounded-xl flex items-center justify-center ${colorClasses.text} mb-4 group-hover:scale-110 transition-transform`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-slate-500 text-xs sm:text-sm text-center mt-12">
          {t("disclaimer")}
        </p>
      </div>
    </section>
  );
}
