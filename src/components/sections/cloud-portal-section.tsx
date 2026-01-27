"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CloudPortalSection() {
  const t = useTranslations("cloudPortal");

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-slate-900">
            {t("title")}
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Browser frame mockup */}
        <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-100">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
          </div>

          {/* Screenshot content */}
          <div className="relative aspect-video">
            <Image
              src="/images/arbeitsplatz.png"
              alt="Cloud-Portal cockpit360 Signage"
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
