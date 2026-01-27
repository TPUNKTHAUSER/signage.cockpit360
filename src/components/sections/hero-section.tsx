"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const t = useTranslations("hero");
  const [isPortrait, setIsPortrait] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-20 md:pb-24">
      {/* Mesh gradient overlays */}
      <div className="absolute inset-0 mesh-gradient-hero opacity-60" />

      {/* Animated gradient orbs */}
      <div className="absolute top-[10%] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/20 rounded-full blur-[80px] md:blur-[120px] animate-float-slow" />
      <div className="absolute bottom-[20%] left-[5%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-emerald-500/15 rounded-full blur-[60px] md:blur-[100px] animate-float-delayed" />
      <div className="absolute top-[40%] left-[30%] w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-blue-600/10 rounded-full blur-[50px] md:blur-[80px] animate-float" />

      {/* Floating geometric shapes */}
      <div className="absolute top-[15%] right-[20%] w-20 h-20 md:w-32 md:h-32 border border-blue-500/20 rounded-2xl rotate-12 animate-float-slow hidden lg:block" />
      <div className="absolute bottom-[30%] left-[8%] w-16 h-16 md:w-24 md:h-24 border border-emerald-500/20 rounded-full animate-float-delayed hidden lg:block" />
      <div className="absolute top-[60%] right-[5%] w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-xl rotate-45 animate-float hidden lg:block" />
      <div className="absolute top-[25%] left-[15%] w-8 h-8 md:w-12 md:h-12 bg-blue-500/20 rounded-full animate-pulse-dot hidden lg:block" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern-dark opacity-30" />

      <div className="container mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Side: Text Content */}
        <div className="text-left animate-fade-in-up relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6 sm:mb-8">
            {t("title1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-emerald-400 animate-gradient-x">
              {t("title2")} <br className="hidden sm:block" />
              {t("title3")}
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-10 leading-relaxed max-w-xl font-light">
            {t("subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="group relative px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl text-base font-semibold hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02]"
            >
              <Link href="#start" className="flex items-center justify-center gap-2">
                {t("learnMore")}
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="px-8 py-6 bg-white/5 text-white border border-white/20 rounded-2xl text-base font-semibold hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-sm"
            >
              <Link href="#kontakt">
                {t("getInTouch")}
              </Link>
            </Button>
          </div>

        </div>

        {/* Right Side: Rotating TV Display */}
        <div className="relative hidden lg:flex flex-col items-center animate-fade-in-delay-1">
          {/* Glow effect behind TV */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-emerald-500/20 rounded-sm blur-3xl transform translate-x-4 translate-y-4 animate-glow-pulse" />

          {/* TV Frame with gradient border */}
          <div className="relative group">
            {/* Animated gradient border */}
            <div className="absolute -inset-[3px] bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 rounded-sm opacity-60 group-hover:opacity-100 transition-all duration-700 animate-gradient-shift" style={{ backgroundSize: '200% 100%' }} />

            {/* TV Frame with size transition */}
            <div
              className={`relative z-10 rounded-sm overflow-hidden bg-slate-900 p-3 transition-all duration-700 ease-in-out ${
                isPortrait ? 'w-[320px]' : 'w-[580px]'
              }`}
            >
              {/* TV Screen */}
              <div
                className={`rounded-sm overflow-hidden relative bg-slate-950 screen-flare transition-all duration-700 ease-in-out ${
                  isPortrait ? 'aspect-[9/16]' : 'aspect-video'
                }`}
                style={isPortrait ? { backgroundImage: "url('/images/hintergrund_display2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
              >
                {/* Landscape Slideshow */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${isPortrait ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  <Image
                    src="/images/signage-storefront-2.jpg"
                    alt="Signage Slide 1"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover animate-slide-1 opacity-0"
                    priority
                  />
                  <Image
                    src="/images/signage-storefront-3.jpg"
                    alt="Signage Slide 2"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover animate-slide-2 opacity-0"
                    loading="lazy"
                  />
                  <Image
                    src="/images/signage-storefront-4.jpg"
                    alt="Signage Slide 3"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover animate-slide-3 opacity-0"
                    loading="lazy"
                  />
                  <Image
                    src="/images/signage-storefront-5.jpg"
                    alt="Signage Slide 4"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover animate-slide-4 opacity-0"
                    loading="lazy"
                  />
                </div>

                {/* Portrait Slideshow */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${isPortrait ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <Image
                    src="/images/signage-storefront-6.png"
                    alt="Signage Hochformat 1"
                    fill
                    sizes="320px"
                    className="object-contain animate-slide-portrait-1 opacity-0"
                    loading="lazy"
                  />
                  <Image
                    src="/images/signage-storefront-7.png"
                    alt="Signage Hochformat 2"
                    fill
                    sizes="320px"
                    className="object-contain animate-slide-portrait-2 opacity-0"
                    loading="lazy"
                  />
                  <Image
                    src="/images/signage-storefront-8.png"
                    alt="Signage Hochformat 3"
                    fill
                    sizes="320px"
                    className="object-contain animate-slide-portrait-3 opacity-0"
                    loading="lazy"
                  />
                  <Image
                    src="/images/signage-storefront-9.png"
                    alt="Signage Hochformat 4"
                    fill
                    sizes="320px"
                    className="object-contain animate-slide-portrait-4 opacity-0"
                    loading="lazy"
                  />
                </div>

              </div>

              {/* TV Stand indicator */}
              <div className="flex justify-center mt-3">
                <div className="w-16 h-1 bg-slate-700 rounded-full" />
              </div>
            </div>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsPortrait(!isPortrait)}
            className="mt-6 flex items-center gap-2 px-4 py-2 glass text-white rounded-xl font-medium hover:bg-white/20 transition-all group/btn z-10"
          >
            <RotateCcw className={`w-4 h-4 transition-transform duration-500 ${isPortrait ? 'rotate-90' : ''}`} />
            <span className="text-sm">{isPortrait ? 'Querformat' : 'Hochformat'}</span>
          </button>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
