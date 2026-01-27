"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Award, TrendingUp, Zap, Target, ArrowRight } from "lucide-react";

export default function StandOutSection() {
  const t = useTranslations("standOut");

  const benefits = [
    { icon: Award, title: t("benefit1Title"), text: t("benefit1Text"), color: "indigo" },
    { icon: TrendingUp, title: t("benefit2Title"), text: t("benefit2Text"), color: "purple" },
    { icon: Zap, title: t("benefit3Title"), text: t("benefit3Text"), color: "pink" },
    { icon: Target, title: t("benefit4Title"), text: t("benefit4Text"), color: "rose" },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      indigo: { bg: "bg-indigo-500/10", text: "text-indigo-600" },
      purple: { bg: "bg-purple-500/10", text: "text-purple-600" },
      pink: { bg: "bg-pink-500/10", text: "text-pink-600" },
      rose: { bg: "bg-rose-500/10", text: "text-rose-600" },
    };
    return colors[color] || colors.indigo;
  };

  return (
    <section id="vorteile" className="py-12 sm:py-16 md:py-20 px-4 bg-slate-800 text-white relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-dark opacity-50" />

      {/* Animated gradient orbs */}
      <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-[20%] right-[5%] w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] animate-float-delayed" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern-dark opacity-20" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-14">
          {/* Before */}
          <div className="group relative">
            <div className="absolute -inset-2 bg-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="absolute -top-3 left-4 z-20">
                <div className="px-4 py-1.5 bg-red-500 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  {t("before")}
                </div>
              </div>
              <div className="glass rounded-2xl p-2 border-2 border-red-500/30 group-hover:border-red-500/50 transition-colors">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/vorher.jpg"
                    alt="Vorher: Fotocollagen"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* After */}
          <div className="group relative">
            <div className="absolute -inset-2 bg-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="absolute -top-3 left-4 z-20">
                <div className="px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  {t("after")}
                </div>
              </div>
              <div className="glass rounded-2xl p-2 border-2 border-emerald-500/30 group-hover:border-emerald-500/50 transition-colors">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/signage-storefront-1.jpg"
                    alt="Nachher: Moderne digitale Präsentation"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => {
            const colorClasses = getColorClasses(benefit.color);
            return (
              <div
                key={index}
                className="group glass rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/10 hover-lift"
              >
                <div className="flex gap-4">
                  <div className={`w-12 h-12 ${colorClasses.bg} rounded-xl flex items-center justify-center ${colorClasses.text} shrink-0 group-hover:scale-110 transition-transform`}>
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{benefit.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{benefit.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
