"use client";

import { useTranslations } from "next-intl";
import { ImageIcon, Type, Palette, Award, Wand2, Sliders, Monitor, LayoutGrid } from "lucide-react";

export default function EditorSection() {
  const t = useTranslations("editor");

  const editorFeatures = [
    { icon: ImageIcon, title: t("feature1Title"), text: t("feature1Text"), color: "text-blue-600" },
    { icon: Type, title: t("feature2Title"), text: t("feature2Text"), color: "text-emerald-600" },
    { icon: Palette, title: t("feature3Title"), text: t("feature3Text"), color: "text-purple-600" },
    { icon: Award, title: t("feature4Title"), text: t("feature4Text"), color: "text-orange-600" },
    { icon: Wand2, title: t("feature5Title"), text: t("feature5Text"), color: "text-indigo-600" },
  ];

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
              {editorFeatures.map((feature, index) => (
                <div key={index} className="flex gap-3 p-3 rounded-lg">
                  <feature.icon className={`w-5 h-5 ${feature.color} shrink-0 mt-0.5`} />
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm">{feature.title}</h4>
                    <p className="text-slate-500 text-sm">{feature.text}</p>
                  </div>
                </div>
              ))}
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
                <Sliders className="w-5 h-5 text-indigo-600 shrink-0" />
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{t("cardTitle")}</h3>
                  <p className="text-slate-400 text-xs">{t("cardSubtitle")}</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Monitor className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm mb-1">{t("screensaverTitle")}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{t("screensaverText")}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <LayoutGrid className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
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
