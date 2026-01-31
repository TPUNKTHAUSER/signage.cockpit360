"use client";

import { useTranslations } from "next-intl";
import { Monitor, Cloud, RefreshCw, Smartphone, ImageIcon, Shield } from "lucide-react";

export default function BenefitsSection() {
  const t = useTranslations("benefits");

  const features = [
    { icon: Monitor, title: t("feature1Title"), description: t("feature1Text"), color: "text-blue-600" },
    { icon: Cloud, title: t("feature2Title"), description: t("feature2Text"), color: "text-emerald-600" },
    { icon: RefreshCw, title: t("feature3Title"), description: t("feature3Text"), color: "text-purple-600" },
    { icon: Smartphone, title: t("feature4Title"), description: t("feature4Text"), color: "text-orange-600" },
    { icon: ImageIcon, title: t("feature5Title"), description: t("feature5Text"), color: "text-pink-600" },
    { icon: Shield, title: t("feature6Title"), description: t("feature6Text"), color: "text-indigo-600" },
  ];

  return (
    <section id="funktionen" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            {t("title")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, index) => (
            <div key={index}>
              <feature.icon className={`w-6 h-6 ${feature.color} mb-4`} />
              <h3 className="font-semibold text-slate-900 mb-1.5">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
