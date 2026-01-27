"use client";

import { useTranslations } from "next-intl";
import { Building2, Users, ShieldCheck } from "lucide-react";

export default function MultiOfficeSection() {
  const t = useTranslations("multiOffice");

  const cards = [
    { icon: Building2, title: t("card1Title"), text: t("card1Text"), color: "blue" },
    { icon: Users, title: t("card2Title"), text: t("card2Text"), color: "emerald" },
    { icon: ShieldCheck, title: t("card3Title"), text: t("card3Text"), color: "purple" },
  ];

  const getColor = (color: string) => {
    const map: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: "bg-blue-500/10", text: "text-blue-600", border: "border-l-blue-500" },
      emerald: { bg: "bg-emerald-500/10", text: "text-emerald-600", border: "border-l-emerald-500" },
      purple: { bg: "bg-purple-500/10", text: "text-purple-600", border: "border-l-purple-500" },
    };
    return map[color] || map.blue;
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Title + Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-slate-900">
              {t("title")}
            </h2>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
              {t("text1")}
            </p>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mt-3">
              {t("text2")}{" "}
              <strong className="text-slate-900">{t("highlight")}</strong>.
            </p>
          </div>

          {/* Right: Feature Cards with colored left border */}
          <div className="space-y-4">
            {cards.map((card, index) => {
              const c = getColor(card.color);
              return (
                <div
                  key={index}
                  className={`flex gap-4 p-5 bg-white rounded-xl border-l-4 ${c.border} shadow-sm`}
                >
                  <div className={`w-10 h-10 ${c.bg} rounded-lg flex items-center justify-center ${c.text} shrink-0`}>
                    <card.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{card.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{card.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
