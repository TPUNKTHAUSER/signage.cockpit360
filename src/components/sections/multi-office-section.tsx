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

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: "bg-blue-500/10", text: "text-blue-600", border: "border-blue-500/20" },
      emerald: { bg: "bg-emerald-500/10", text: "text-emerald-600", border: "border-emerald-500/20" },
      purple: { bg: "bg-purple-500/10", text: "text-purple-600", border: "border-purple-500/20" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-slate-800 text-white relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-dark opacity-50" />

      {/* Animated gradient orbs */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] animate-float-delayed" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern-dark opacity-20" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {t("title")}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-4 leading-relaxed">
              {t("text1")}
            </p>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              {t("text2")}{" "}
              <strong className="text-white">{t("highlight")}</strong>.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-3 px-4 py-2.5 glass rounded-xl">
                <Building2 className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium text-white">{t("badge1")}</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2.5 glass rounded-xl">
                <Users className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium text-white">{t("badge2")}</span>
              </div>
            </div>
          </div>

          {/* Right: Floating Dashboard Card */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              {/* Animated gradient border */}
              <div className="absolute -inset-[2px] bg-gradient-to-br from-blue-500 via-emerald-500 to-blue-500 rounded-sm opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />

              {/* Dashboard card */}
              <div className="relative glass-dark rounded-sm p-6 md:p-8">
                <div className="space-y-4">
                  {cards.map((card, index) => {
                    const colorClasses = getColorClasses(card.color);
                    return (
                      <div
                        key={index}
                        className={`group/card flex items-start gap-4 p-4 glass rounded-sm ${colorClasses.border} hover:bg-white/5 transition-all duration-300`}
                      >
                        <div className={`w-11 h-11 ${colorClasses.bg} rounded-xl flex items-center justify-center ${colorClasses.text} shrink-0 group-hover/card:scale-110 transition-transform`}>
                          <card.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-1">{card.title}</h3>
                          <p className="text-slate-300 text-sm">{card.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Connection lines decoration */}
                <div className="absolute top-1/2 -left-4 w-8 h-px bg-gradient-to-r from-transparent to-blue-500/30 hidden lg:block" />
                <div className="absolute top-1/3 -left-6 w-6 h-px bg-gradient-to-r from-transparent to-emerald-500/20 hidden lg:block" />
                <div className="absolute top-2/3 -left-5 w-5 h-px bg-gradient-to-r from-transparent to-purple-500/20 hidden lg:block" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
