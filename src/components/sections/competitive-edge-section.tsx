"use client";

import { useTranslations } from "next-intl";
import { Maximize2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export default function CompetitiveEdgeSection() {
  const t = useTranslations("competitiveEdge");

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Top: Badge + Title left-aligned, subtitle right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">{t("badge")}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold leading-tight text-slate-900">
              {t("title")}
            </h2>
          </div>

          <div className="lg:pt-10">
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
              {t("subtitle")}
            </p>
            <p className="text-base sm:text-lg font-medium text-slate-900 mt-3">
              {t("slogan")}
            </p>
          </div>
        </div>

        {/* Two Argument Cards - visual with colored top border and arrow indicator */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Argument 1: Display Freedom */}
          <div className="rounded-xl border border-slate-100 border-t-4 border-t-blue-500 p-6 sm:p-8 bg-slate-50/50">
            <div className="flex items-center gap-3 mb-5">
              <Maximize2 className="w-5 h-5 text-blue-600 shrink-0" />
              <h3 className="text-lg font-semibold text-slate-900">
                {t("arg1Title")}
              </h3>
            </div>

            <p className="text-slate-500 leading-relaxed mb-5 text-sm">
              {t("arg1Text")}
            </p>

            <div className="flex items-center gap-2 text-blue-600">
              <ArrowRight className="w-4 h-4" />
              <p className="font-medium text-sm">
                {t("arg1Highlight")}
              </p>
            </div>
          </div>

          {/* Argument 2: Hardware Independence */}
          <div className="rounded-xl border border-slate-100 border-t-4 border-t-emerald-500 p-6 sm:p-8 bg-slate-50/50">
            <div className="flex items-center gap-3 mb-5">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <h3 className="text-lg font-semibold text-slate-900">
                {t("arg2Title")}
              </h3>
            </div>

            <p className="text-slate-500 leading-relaxed mb-5 text-sm">
              {t("arg2Text")}
            </p>

            <div className="flex items-center gap-2 text-emerald-600">
              <ArrowRight className="w-4 h-4" />
              <p className="font-medium text-sm">
                {t("arg2Highlight")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
