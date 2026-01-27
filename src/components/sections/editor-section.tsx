"use client";

import { useTranslations } from "next-intl";
import { ImageIcon, Type, Palette, Award, Wand2, Sliders, Monitor, LayoutGrid } from "lucide-react";

export default function EditorSection() {
  const t = useTranslations("editor");

  const editorFeatures = [
    { icon: ImageIcon, title: t("feature1Title"), text: t("feature1Text"), color: "blue" },
    { icon: Type, title: t("feature2Title"), text: t("feature2Text"), color: "emerald" },
    { icon: Palette, title: t("feature3Title"), text: t("feature3Text"), color: "purple" },
    { icon: Award, title: t("feature4Title"), text: t("feature4Text"), color: "orange" },
    { icon: Wand2, title: t("feature5Title"), text: t("feature5Text"), color: "indigo" },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      blue: { bg: "bg-blue-500/10", text: "text-blue-600" },
      emerald: { bg: "bg-emerald-500/10", text: "text-emerald-600" },
      purple: { bg: "bg-purple-500/10", text: "text-purple-600" },
      orange: { bg: "bg-orange-500/10", text: "text-orange-600" },
      indigo: { bg: "bg-indigo-500/10", text: "text-indigo-600" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="editor" className="py-12 sm:py-16 md:py-20 px-4 bg-white relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-light opacity-40" />

      {/* Decorative elements */}
      <div className="absolute top-[5%] right-[5%] w-72 h-72 bg-purple-500/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-[5%] left-[5%] w-64 h-64 bg-blue-500/5 rounded-full blur-[60px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            {t("title")}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Features List */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
              {t("customizationsTitle")}
            </h3>
            <div className="space-y-4">
              {editorFeatures.map((feature, index) => {
                const colorClasses = getColorClasses(feature.color);
                return (
                  <div
                    key={index}
                    className="group flex gap-4 p-4 glass-light rounded-xl border border-slate-200/50 hover:border-transparent transition-all duration-300 hover-lift"
                  >
                    <div className={`w-11 h-11 ${colorClasses.bg} rounded-xl flex items-center justify-center ${colorClasses.text} shrink-0 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-0.5">{feature.title}</h4>
                      <p className="text-slate-600 text-sm">{feature.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Visual Card - Editor Window Mockup */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Editor window mockup */}
            <div className="relative glass-light rounded-sm overflow-hidden border border-slate-200/50 shadow-xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-100/80 border-b border-slate-200/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Sliders className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{t("cardTitle")}</h3>
                    <p className="text-slate-500 text-sm">{t("cardSubtitle")}</p>
                  </div>
                </div>

                {/* Block 1: Screensaver */}
                <div className="glass-light rounded-xl p-5 md:p-6 border border-slate-200/50 hover:border-indigo-200/50 transition-colors group/card">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-600 group-hover/card:scale-110 transition-transform">
                      <Monitor className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">{t("screensaverTitle")}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {t("screensaverText")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Block 2: Ad Placements */}
                <div className="glass-light rounded-xl p-5 md:p-6 border border-slate-200/50 hover:border-pink-200/50 transition-colors group/card">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-600 group-hover/card:scale-110 transition-transform">
                      <LayoutGrid className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">{t("adsTitle")}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{t("adsText")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
