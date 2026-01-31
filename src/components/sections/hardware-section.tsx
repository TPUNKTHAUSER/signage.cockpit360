"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Tv, Monitor, ExternalLink, Wrench } from "lucide-react";

export default function HardwareSection() {
  const t = useTranslations("hardware");

  return (
    <section id="ihr-display" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 mb-5">
              <Tv className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">{t("badge")}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-slate-900 leading-tight">
              {t("title")}
            </h2>

            <p className="text-lg text-slate-600 font-medium mb-5">
              {t("subtitle")}
            </p>

            <div className="space-y-4 text-slate-500 text-base">
              <p className="leading-relaxed">
                {t("text1").split("*")[0]}
                <span className="text-blue-600 font-semibold">*</span>
                {t("text1").split("*")[1]}
              </p>

              <p className="leading-relaxed">
                {t("text2")}
              </p>

              <p className="text-sm text-slate-400">
                <span className="text-blue-600 font-semibold">*</span>
                {t("footnote").replace("*", "")}
              </p>
            </div>
          </div>

          {/* Right: Hardware Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Tv className="w-5 h-5 text-blue-600 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{t("cardTitle")}</h3>
                <p className="text-slate-400 text-sm">{t("cardSubtitle")}</p>
              </div>
            </div>

            <p className="text-slate-500 leading-relaxed text-sm">{t("cardText")}</p>

            {/* Hardware Recommendations */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-slate-900 text-sm font-medium block mb-3">
                {t("recommendation")}
              </span>

              <div className="grid sm:grid-cols-2 gap-3">
                {/* iiyama */}
                <a
                  href="https://iiyama.com/de_de/products/lfd/#/filter/category:8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all group"
                >
                  <Monitor className="w-5 h-5 text-blue-600 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="text-slate-900 text-sm font-medium flex items-center gap-1">
                      {t("iiyamaName")}
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600" />
                    </span>
                    <span className="text-slate-400 text-xs block truncate">{t("iiyamaDesc")}</span>
                  </div>
                </a>

                {/* Samsung */}
                <a
                  href="https://www.samsung.com/de/business/displays/digital-signage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all group"
                >
                  <Monitor className="w-5 h-5 text-blue-600 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="text-slate-900 text-sm font-medium flex items-center gap-1">
                      {t("samsungName")}
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600" />
                    </span>
                    <span className="text-slate-400 text-xs block truncate">{t("samsungDesc")}</span>
                  </div>
                </a>
              </div>

              <p className="text-slate-400 text-xs mt-3">{t("recommendationNote")}</p>
            </div>

            {/* Service note */}
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <Wrench className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-slate-500 text-sm">
                {t("serviceNote")}{" "}
                <Link
                  href="#kontakt"
                  className="text-blue-600 hover:underline font-medium"
                >
                  {t("serviceLink")}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
