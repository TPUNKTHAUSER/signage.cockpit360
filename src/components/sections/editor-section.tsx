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

  const getColor = (color: string) => {
    const map: Record<string, { bg: string; text: string }> = {
      blue: { bg: "bg-blue-500/10", text: "text-blue-600" },
      emerald: { bg: "bg-emerald-500/10", text: "text-emerald-600" },
      purple: { bg: "bg-purple-500/10", text: "text-purple-600" },
      orange: { bg: "bg-orange-500/10", text: "text-orange-600" },
      indigo: { bg: "bg-indigo-500/10", text: "text-indigo-600" },
    };
    return map[color] || map.blue;
  };

  return (
    <section id="editor" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-slate-900">
            {t("title")}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Features List */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              {t("customizationsTitle")}
            </h3>
            <div className="space-y-2">
              {editorFeatures.map((feature, index) => {
                const c = getColor(feature.color);
                return (
                  <div key={index} className="flex gap-3 p-3 rounded-lg">
                    <div className={`w-9 h-9 ${c.bg} rounded-lg flex items-center justify-center ${c.text} shrink-0`}>
                      <feature.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 text-sm">{feature.title}</h4>
                      <p className="text-slate-500 text-sm">{feature.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Editor Window Mockup */}
          <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-100">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-indigo-500 rounded-lg flex items-center justify-center text-white">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{t("cardTitle")}</h3>
                  <p className="text-slate-400 text-xs">{t("cardSubtitle")}</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm mb-1">{t("screensaverTitle")}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{t("screensaverText")}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-600 shrink-0">
                    <LayoutGrid className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm mb-1">{t("adsTitle")}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{t("adsText")}</p>
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
