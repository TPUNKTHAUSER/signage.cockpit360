"use client";

import { useTranslations } from "next-intl";

export default function HowItWorksSection() {
  const t = useTranslations("howItWorks");

  const steps = [
    { num: "1", title: t("step1Title"), text: t("step1Text"), color: "blue" },
    { num: "2", title: t("step2Title"), text: t("step2Text"), color: "emerald" },
    { num: "3", title: t("step3Title"), text: t("step3Text"), color: "purple" },
    { num: "4", title: t("step4Title"), text: t("step4Text"), color: "orange" },
  ];

  const getColor = (color: string) => {
    const map: Record<string, { bg: string; ring: string }> = {
      blue: { bg: "bg-blue-600", ring: "ring-blue-100" },
      emerald: { bg: "bg-emerald-600", ring: "ring-emerald-100" },
      purple: { bg: "bg-purple-600", ring: "ring-purple-100" },
      orange: { bg: "bg-orange-500", ring: "ring-orange-100" },
    };
    return map[color] || map.blue;
  };

  return (
    <section id="so-funktionierts" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-slate-900">
            {t("title")}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="absolute top-6 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-0.5 bg-slate-200" />

            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => {
                const c = getColor(step.color);
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    {/* Step circle */}
                    <div className={`w-12 h-12 ${c.bg} ring-4 ${c.ring} rounded-full flex items-center justify-center mb-6 relative z-10`}>
                      <span className="text-sm font-bold text-white">{step.num}</span>
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative max-w-lg mx-auto">
            {/* Vertical connecting line */}
            <div className="absolute top-6 bottom-6 left-6 w-0.5 bg-slate-200" />

            <div className="space-y-10">
              {steps.map((step, index) => {
                const c = getColor(step.color);
                return (
                  <div key={index} className="flex gap-5 relative">
                    {/* Step circle */}
                    <div className={`w-12 h-12 ${c.bg} ring-4 ${c.ring} rounded-full flex items-center justify-center shrink-0 relative z-10`}>
                      <span className="text-sm font-bold text-white">{step.num}</span>
                    </div>
                    <div className="pt-1.5">
                      <h3 className="font-semibold text-slate-900 mb-1.5 text-sm">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
