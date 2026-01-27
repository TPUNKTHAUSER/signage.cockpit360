"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { MonitorSmartphone, ArrowRight } from "lucide-react";

export default function ProblemSolutionSection() {
  const t = useTranslations("problemSolution");

  return (
    <section id="start" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-slate-900 leading-tight">
              {t("title")}
            </h2>

            <div className="space-y-4 text-slate-500 text-base sm:text-lg leading-relaxed">
              <p>{t("text1")}</p>
              <p>{t("text2")}</p>
            </div>
          </div>

          {/* Right: Feature Box */}
          <div>
            <div className="rounded-2xl border border-slate-100 p-8 md:p-10">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <MonitorSmartphone className="w-5 h-5" />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">{t("boxTitle")}</h3>
              <p className="text-slate-500 leading-relaxed mb-6 text-sm sm:text-base">
                {t("boxText")}{" "}
                <strong className="text-slate-900">{t("boxCta")}</strong>{" "}
                {t("boxText2")}
              </p>

              <Link
                href="#kontakt"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors group/btn"
              >
                {t("boxLink")}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
