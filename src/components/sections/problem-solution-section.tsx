"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { MonitorSmartphone, ArrowRight } from "lucide-react";

export default function ProblemSolutionSection() {
  const t = useTranslations("problemSolution");

  return (
    <section id="start" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-light opacity-50" />

      {/* Decorative elements */}
      <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-blue-500/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-[10%] left-[5%] w-64 h-64 bg-emerald-500/5 rounded-full blur-[60px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">
              {t("title")}
            </h2>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>{t("text1")}</p>
              <p>{t("text2")}</p>
            </div>
          </div>

          {/* Right: Feature Box */}
          <div>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative glass-light p-6 md:p-8 rounded-3xl border border-slate-200/50 hover:border-blue-200/50 transition-all duration-300 hover-lift">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-emerald-500/5 rounded-bl-[100px] -z-10" />

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MonitorSmartphone className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">{t("boxTitle")}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                    {t("boxText")}{" "}
                    <strong className="text-slate-900">{t("boxCta")}</strong>{" "}
                    {t("boxText2")}
                  </p>

                  <Link
                    href="#kontakt"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors group/btn"
                  >
                    {t("boxLink")}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
