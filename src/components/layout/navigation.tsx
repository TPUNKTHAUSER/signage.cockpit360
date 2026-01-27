"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

interface NavigationProps {
  locale: string;
}

export default function Navigation({ locale }: NavigationProps) {
  const t = useTranslations("navigation");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseUrl = `/${locale}`;

  const navLinks = [
    { href: `${baseUrl}#start`, label: t("start") },
    { href: `${baseUrl}#preise`, label: t("pricing") },
    { href: `${baseUrl}#funktionen`, label: t("features") },
    { href: `${baseUrl}#vorteile`, label: t("benefits") },
    { href: `${baseUrl}#so-funktionierts`, label: t("howItWorks") },
    { href: `${baseUrl}#kontakt`, label: t("contact") },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-1.5 md:py-2 bg-white/95 shadow-sm border-b border-slate-100"
          : "py-2 md:py-4 bg-white/90"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo - smaller on mobile */}
          <Link
            href={`/${locale}#start`}
            className="relative flex items-center"
          >
            <Image
              src="/images/cockpit360.png"
              alt="cockpit360 Logo"
              width={200}
              height={48}
              className="nav-logo"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors text-sm lg:text-base font-medium group"
              >
                {link.label}
                {/* Animated underline */}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
              </Link>
            ))}

            {/* Language Switcher with flags */}
            <div className="flex items-center gap-1 ml-4 pl-4 border-l border-slate-200">
              <Link
                href="/de"
                className={`px-2 py-1.5 rounded-full text-lg transition-all duration-300 ${
                  locale === "de"
                    ? "bg-blue-500/10 shadow-sm scale-110"
                    : "opacity-60 hover:opacity-100 hover:bg-slate-100"
                }`}
                title="Deutsch"
              >
                🇩🇪
              </Link>
              <Link
                href="/en"
                className={`px-2 py-1.5 rounded-full text-lg transition-all duration-300 ${
                  locale === "en"
                    ? "bg-blue-500/10 shadow-sm scale-110"
                    : "opacity-60 hover:opacity-100 hover:bg-slate-100"
                }`}
                title="English"
              >
                🇺🇸
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-1.5 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors">
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] bg-white border-l border-slate-200"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              <div className="flex flex-col space-y-1 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-2.5 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors text-base font-medium"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Language Switcher Mobile */}
                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-slate-100 px-3">
                  <span className="text-sm text-slate-400">
                    {locale === "en" ? "Language:" : "Sprache:"}
                  </span>
                  <div className="flex gap-2">
                    <Link
                      href="/de"
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl transition-all ${
                        locale === "de"
                          ? "scale-110"
                          : "opacity-50 hover:opacity-100"
                      }`}
                    >
                      🇩🇪
                    </Link>
                    <Link
                      href="/en"
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl transition-all ${
                        locale === "en"
                          ? "scale-110"
                          : "opacity-50 hover:opacity-100"
                      }`}
                    >
                      🇺🇸
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
