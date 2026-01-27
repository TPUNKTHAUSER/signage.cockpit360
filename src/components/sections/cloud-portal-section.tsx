"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CloudPortalSection() {
  const t = useTranslations("cloudPortal");

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-slate-800 text-white relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-dark opacity-50" />

      {/* Animated gradient orbs */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] animate-float-delayed" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern-dark opacity-20" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
              {t("title")}
            </span>
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Browser frame mockup */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative">
            {/* Animated gradient border */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 rounded-sm opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-gradient-shift" style={{ backgroundSize: '200% 100%' }} />

            {/* Browser window */}
            <div className="relative glass-dark rounded-sm overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
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

                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
