"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { XCircle, Tv, Monitor, ExternalLink, Wrench } from "lucide-react";

export default function HardwareSection() {
  const t = useTranslations("hardware");

  return (
    <section id="ihr-display" className="py-12 sm:py-16 md:py-20 px-4 bg-white relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-light opacity-40" />

      {/* Decorative elements */}
      <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-orange-500/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-[10%] left-[5%] w-64 h-64 bg-amber-500/5 rounded-full blur-[60px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main card with diagonal clip */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative glass-light rounded-2xl md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 border border-slate-200/50 overflow-hidden">
            {/* Background decorative gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/10 to-amber-500/5 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />

            {/* Floating decorative shapes */}
            <div className="absolute top-[15%] right-[10%] w-16 h-16 border border-orange-500/20 rounded-2xl rotate-12 animate-float-slow hidden lg:block" />
            <div className="absolute bottom-[20%] left-[5%] w-12 h-12 border border-amber-500/20 rounded-full animate-float-delayed hidden lg:block" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left: Text Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                  <XCircle className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-medium text-orange-700">{t("badge")}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
                  {t("title")}
                </h2>

                <div className="space-y-6 text-slate-600 text-base md:text-lg">
                  <p className="leading-relaxed">
                    {t("text1").split("*")[0]}
                    <span className="text-orange-500 font-bold">*</span>
                    {t("text1").split("*")[1]}
                  </p>

                  <div className="glass-light p-4 rounded-xl border border-orange-200/50 text-sm">
                    <span className="text-orange-600 font-bold">*</span>{" "}
                    <span className="text-slate-500">{t("footnote").replace("* ", "")}</span>
                  </div>
                </div>
              </div>

              {/* Right: Hardware Info Card */}
              <div className="relative">
                {/* Glow behind card */}
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Animated gradient border */}
                  <div className="absolute -inset-[2px] bg-gradient-to-br from-orange-500 via-amber-500 to-orange-500 rounded-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />

                  {/* Card content */}
                  <div className="relative glass-light rounded-3xl p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-500/25">
                        <Tv className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{t("cardTitle")}</h3>
                        <p className="text-slate-500 text-sm">{t("cardSubtitle")}</p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6 leading-relaxed">{t("cardText")}</p>

                    {/* Recommendation box */}
                    <div className="glass rounded-xl p-4 border border-orange-200/50 mb-4 group/rec hover:border-orange-300/50 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-600 shrink-0 group-hover/rec:scale-110 transition-transform">
                          <Monitor className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-slate-900 text-sm font-semibold block mb-1">
                            {t("recommendation")}
                          </span>
                          <p className="text-slate-500 text-sm">
                            {t("recommendationText")}{" "}
                            <a
                              href="https://iiyama.com/de_de/products/lfd/#/filter/category:8"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 hover:underline transition-colors"
                            >
                              iiyama
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </p>
                          <p className="text-slate-500 text-xs mt-2">{t("recommendationNote")}</p>
                        </div>
                      </div>
                    </div>

                    {/* Service note */}
                    <div className="glass rounded-xl p-4 border border-slate-200/50 group/service hover:border-blue-200/50 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600 shrink-0 group-hover/service:scale-110 transition-transform">
                          <Wrench className="w-5 h-5" />
                        </div>
                        <p className="text-slate-600 text-sm">
                          {t("serviceNote")}{" "}
                          <Link
                            href="#kontakt"
                            className="text-blue-600 hover:text-blue-700 hover:underline transition-colors font-medium"
                          >
                            {t("serviceLink")}
                          </Link>
                        </p>
                      </div>
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
