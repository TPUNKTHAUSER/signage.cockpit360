"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { XCircle, Tv, Monitor, ExternalLink, Wrench } from "lucide-react";

export default function HardwareSection() {
  const t = useTranslations("hardware");

  return (
    <section id="ihr-display" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 mb-5">
              <XCircle className="w-3.5 h-3.5 text-orange-500" />
              <span className="text-sm font-medium text-orange-600">{t("badge")}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold mb-5 text-slate-900 leading-tight">
              {t("title")}
            </h2>

            <div className="space-y-4 text-slate-500 text-base">
              <p className="leading-relaxed">
                {t("text1").split("*")[0]}
                <span className="text-orange-500 font-semibold">*</span>
                {t("text1").split("*")[1]}
              </p>

              <p className="text-sm text-slate-400">
                <span className="text-orange-500 font-semibold">*</span>{" "}
                {t("footnote").replace("* ", "")}
              </p>
            </div>
          </div>

          {/* Right: Hardware Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500">
                <Tv className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{t("cardTitle")}</h3>
                <p className="text-slate-400 text-sm">{t("cardSubtitle")}</p>
              </div>
            </div>

            <p className="text-slate-500 leading-relaxed text-sm">{t("cardText")}</p>

            {/* Recommendation */}
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100">
              <div className="w-9 h-9 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 shrink-0">
                <Monitor className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-900 text-sm font-medium block mb-1">
                  {t("recommendation")}
                </span>
                <p className="text-slate-400 text-sm">
                  {t("recommendationText")}{" "}
                  <a
                    href="https://iiyama.com/de_de/products/lfd/#/filter/category:8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-orange-600 hover:underline"
                  >
                    iiyama
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
                <p className="text-slate-400 text-xs mt-1">{t("recommendationNote")}</p>
              </div>
            </div>

            {/* Service note */}
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100">
              <div className="w-9 h-9 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                <Wrench className="w-4 h-4" />
              </div>
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
