"use client";

import { useTranslations } from "next-intl";
import { Monitor, Cloud, RefreshCw, Smartphone, ImageIcon, Shield } from "lucide-react";

export default function BenefitsSection() {
  const t = useTranslations("benefits");

  const features = [
    { icon: Monitor, title: t("feature1Title"), description: t("feature1Text"), color: "blue", size: "large" },
    { icon: Cloud, title: t("feature2Title"), description: t("feature2Text"), color: "emerald", size: "small" },
    { icon: RefreshCw, title: t("feature3Title"), description: t("feature3Text"), color: "purple", size: "small" },
    { icon: Smartphone, title: t("feature4Title"), description: t("feature4Text"), color: "orange", size: "large" },
    { icon: ImageIcon, title: t("feature5Title"), description: t("feature5Text"), color: "pink", size: "small" },
    { icon: Shield, title: t("feature6Title"), description: t("feature6Text"), color: "indigo", size: "small" },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: "bg-blue-500/10", text: "text-blue-600", border: "group-hover:border-blue-200" },
      emerald: { bg: "bg-emerald-500/10", text: "text-emerald-600", border: "group-hover:border-emerald-200" },
      purple: { bg: "bg-purple-500/10", text: "text-purple-600", border: "group-hover:border-purple-200" },
      orange: { bg: "bg-orange-500/10", text: "text-orange-600", border: "group-hover:border-orange-200" },
      pink: { bg: "bg-pink-500/10", text: "text-pink-600", border: "group-hover:border-pink-200" },
      indigo: { bg: "bg-indigo-500/10", text: "text-indigo-600", border: "group-hover:border-indigo-200" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="funktionen" className="py-12 sm:py-16 md:py-20 px-4 bg-white relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-light opacity-40" />

      {/* Decorative elements */}
      <div className="absolute top-[5%] left-[5%] w-72 h-72 bg-blue-500/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-[5%] right-[5%] w-64 h-64 bg-emerald-500/5 rounded-full blur-[60px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            {t("title")}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            return (
              <div
                key={index}
                className={`group relative glass-light rounded-2xl p-6 border border-slate-200/50 ${
                  feature.size === "large" ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative">
                  <div className={`w-12 h-12 ${colorClasses.bg} rounded-xl flex items-center justify-center ${colorClasses.text} mb-4`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
