"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ShowcaseSection() {
  const t = useTranslations("showcase");

  return (
    <section id="galerie" className="py-12 sm:py-16 md:py-20 bg-slate-800 text-white overflow-hidden relative">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-dark opacity-60" />

      {/* Animated gradient orbs */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] animate-float-delayed" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern-dark opacity-20" />

      <div className="container mx-auto max-w-7xl relative z-10 px-4">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("title")}
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10">
          {/* Large Image 1 */}
          <div className="group relative">
            {/* Image container */}
            <div className="relative glass rounded-sm p-2 overflow-hidden">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-slate-900">
                <Image
                  src="/images/signage-storefront-1.jpg"
                  alt="Immobilienschaufenster"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Large Image 2 */}
          <div className="group relative">
            {/* Image container */}
            <div className="relative glass rounded-sm p-2 overflow-hidden">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-slate-900">
                <Image
                  src="/images/signage-storefront-2.jpg"
                  alt="Immobilienschaufenster Detail"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            {t("text")}
          </p>
          <p className="mt-4">
            <span className="text-white font-medium">{t("formats")}</span>
            <span className="text-slate-300">{t("text2")}</span>
          </p>
        </div>

      </div>
    </section>
  );
}
