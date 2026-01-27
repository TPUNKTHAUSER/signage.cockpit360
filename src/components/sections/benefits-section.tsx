"use client";

import { useTranslations } from "next-intl";
import { Monitor, Cloud, RefreshCw, Smartphone, ImageIcon, Shield } from "lucide-react";

export default function BenefitsSection() {
  const t = useTranslations("benefits");

  const features = [
    { icon: Monitor, title: t("feature1Title"), description: t("feature1Text"), color: "blue" },
    { icon: Cloud, title: t("feature2Title"), description: t("feature2Text"), color: "emerald" },
    { icon: RefreshCw, title: t("feature3Title"), description: t("feature3Text"), color: "purple" },
    { icon: Smartphone, title: t("feature4Title"), description: t("feature4Text"), color: "orange" },
    { icon: ImageIcon, title: t("feature5Title"), description: t("feature5Text"), color: "pink" },
    { icon: Shield, title: t("feature6Title"), description: t("feature6Text"), color: "indigo" },
  ];

  const getColor = (color: string) => {
    const map: Record<string, { bg: string; text: string }> = {
      blue: { bg: "bg-blue-500/10", text: "text-blue-600" },
      emerald: { bg: "bg-emerald-500/10", text: "text-emerald-600" },
      purple: { bg: "bg-purple-500/10", text: "text-purple-600" },
      orange: { bg: "bg-orange-500/10", text: "text-orange-600" },
      pink: { bg: "bg-pink-500/10", text: "text-pink-600" },
      indigo: { bg: "bg-indigo-500/10", text: "text-indigo-600" },
    };
    return map[color] || map.blue;
  };

  return (
    <section id="funktionen" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            {t("title")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, index) => {
            const c = getColor(feature.color);
            return (
              <div key={index}>
                <div className={`w-10 h-10 ${c.bg} rounded-lg flex items-center justify-center ${c.text} mb-4`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1.5">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
