"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ShowcaseSection() {
  const t = useTranslations("showcase");

  return (
    <section id="galerie" className="py-16 sm:py-20 bg-slate-900 text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            {t("title")}
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-10">
          <div className="rounded-xl overflow-hidden">
            <div className="relative aspect-[4/3] bg-slate-800">
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

          <div className="rounded-xl overflow-hidden">
            <div className="relative aspect-[4/3] bg-slate-800">
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

        {/* Description */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-slate-400 text-base leading-relaxed">
            {t("text")}
          </p>
          <p className="mt-3 text-sm">
            <span className="text-white font-medium">{t("formats")}</span>
            <span className="text-slate-400">{t("text2")}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
