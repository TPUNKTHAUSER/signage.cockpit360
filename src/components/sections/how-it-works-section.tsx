"use client";

import { useTranslations } from "next-intl";
import { Rocket } from "lucide-react";

export default function HowItWorksSection() {
  const t = useTranslations("howItWorks");

  const steps = [
    { num: "1", title: t("step1Title"), text: t("step1Text"), color: "blue" },
    { num: "2", title: t("step2Title"), text: t("step2Text"), color: "emerald" },
    { num: "3", title: t("step3Title"), text: t("step3Text"), color: "purple" },
    { num: "4", title: t("step4Title"), text: t("step4Text"), color: "orange" },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { gradient: string; glow: string; bg: string }> = {
      blue: { gradient: "from-blue-500 to-blue-600", glow: "shadow-blue-500/30", bg: "bg-blue-500/10" },
      emerald: { gradient: "from-emerald-500 to-emerald-600", glow: "shadow-emerald-500/30", bg: "bg-emerald-500/10" },
      purple: { gradient: "from-purple-500 to-purple-600", glow: "shadow-purple-500/30", bg: "bg-purple-500/10" },
      orange: { gradient: "from-orange-500 to-orange-600", glow: "shadow-orange-500/30", bg: "bg-orange-500/10" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="so-funktionierts" className="py-12 sm:py-16 md:py-20 px-4 bg-white relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-light opacity-40" />

      {/* Decorative elements */}
      <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-[10%] left-[5%] w-56 h-56 bg-emerald-500/5 rounded-full blur-[60px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            {t("title")}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="relative">
          {/* Animated gradient line connector (Desktop only) */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[10%] right-[10%] h-1 z-0">
            <div className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 via-purple-500 to-orange-500 rounded-full opacity-20" />
            {/* Animated pulse dot */}
            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50" style={{ left: '0%' }} />
            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50" style={{ left: '33%', animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50" style={{ left: '66%', animationDelay: '1s' }} />
            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50" style={{ left: '100%', animationDelay: '1.5s' }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => {
              const colorClasses = getColorClasses(step.color);
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Card with hover effect */}
                  <div className="relative glass-light rounded-2xl p-6 border border-slate-200/50 transition-all duration-300 hover-lift group-hover:border-transparent">
                    {/* Background glow on hover */}
                    <div className={`absolute inset-0 ${colorClasses.bg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div className="relative">
                      {/* Step number with glow */}
                      <div className="relative w-16 h-16 mx-auto mb-6">
                        {/* Glow ring */}
                        <div className={`absolute inset-0 ${colorClasses.bg} rounded-full animate-pulse`} />
                        {/* Number circle */}
                        <div className={`absolute inset-1 bg-gradient-to-br ${colorClasses.gradient} rounded-full flex items-center justify-center shadow-lg ${colorClasses.glow} group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-2xl font-bold text-white">{step.num}</span>
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="font-bold text-slate-900 mb-2 text-base">
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{step.text}</p>
                      </div>
                    </div>
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
