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

  const getColor = (color: string) => {
    const map: Record<string, { bg: string; text: string }> = {
      indigo: { bg: "bg-indigo-500/15", text: "text-indigo-400" },
      purple: { bg: "bg-purple-500/15", text: "text-purple-400" },
      pink: { bg: "bg-pink-500/15", text: "text-pink-400" },
      rose: { bg: "bg-rose-500/15", text: "text-rose-400" },
    };
    return map[color] || map.indigo;
  };

  return (
    <section id="vorteile" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            {t("title")}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-12 relative">
          {/* Before */}
          <div className="relative">
            <div className="absolute -top-3 left-4 z-20">
              <div className="px-3 py-1 bg-red-500/80 text-white rounded-full text-xs font-semibold uppercase tracking-wider">
                {t("before")}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <div className="relative aspect-[4/3] bg-slate-800">
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

          {/* Arrow */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* After */}
          <div className="relative">
            <div className="absolute -top-3 left-4 z-20">
              <div className="px-3 py-1 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wider">
                {t("after")}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <div className="relative aspect-[4/3] bg-slate-800">
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

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => {
            const c = getColor(benefit.color);
            return (
              <div key={index} className="flex gap-3 p-5 rounded-xl bg-white/5">
                <div className={`w-9 h-9 ${c.bg} rounded-lg flex items-center justify-center ${c.text} shrink-0`}>
                  <benefit.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-0.5 text-sm">{benefit.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
