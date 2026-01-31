"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Navigation,
  Home,
  Star,
  PlayCircle,
  Mail,
  MapPin,
  CheckCircle,
} from "lucide-react";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations("footer");
  const nav = useTranslations("navigation");

  const baseUrl = `/${locale}`;

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 border-t border-slate-200 overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-light opacity-40" />

      {/* Decorative elements */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[20%] left-[5%] w-[250px] h-[250px] bg-emerald-500/5 rounded-full blur-[80px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-6">
          {/* Company Info */}
          <div className="md:col-span-2 text-center md:text-left">
            <Link
              href={`/${locale}`}
              className="group relative inline-block mb-6 mx-auto md:mx-0"
            >
              <div className="absolute -inset-2 bg-blue-500/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="/images/cockpit360.png"
                alt="cockpit360 Logo"
                width={200}
                height={48}
                className="relative h-10 md:h-12 w-auto"
              />
            </Link>

            <p className="text-slate-600 leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
              {t("description")}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <div className="glass-light px-3 py-2 rounded-lg flex items-center gap-2 border border-slate-200/50">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs text-slate-600">{t("hostedInGermany")}</span>
              </div>
              <div className="glass-light px-3 py-2 rounded-lg flex items-center gap-2 border border-slate-200/50">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs text-slate-600">{t("gdprCompliant")}</span>
              </div>
            </div>
          </div>

          {/* Quick Links - Desktop only */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold text-slate-900 mb-5 flex items-center gap-2">
              <Navigation className="w-4 h-4 text-blue-600" />
              {t("navigation")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`${baseUrl}#start`}
                  className="group text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <Home className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform">{nav("start")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`${baseUrl}#funktionen`}
                  className="group text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <Star className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform">{nav("features")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`${baseUrl}#so-funktionierts`}
                  className="group text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <PlayCircle className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform">{nav("howItWorks")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`${baseUrl}#kontakt`}
                  className="group text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform">{nav("contact")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Desktop only */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold text-slate-900 mb-5 flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-600" />
              {t("contactTitle")}
            </h3>
            <div className="space-y-4">
              <div className="group glass-light rounded-xl p-3 border border-slate-200/50 hover:border-blue-200/50 transition-colors">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 block mb-0.5">
                      {t("email")}
                    </span>
                    <Link
                      href={`${baseUrl}#kontakt`}
                      className="text-sm text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      {locale === "de" ? "Zum Kontaktformular" : "Contact form"}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group glass-light rounded-xl p-3 border border-slate-200/50 hover:border-emerald-200/50 transition-colors">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 block mb-0.5">
                      {t("location")}
                    </span>
                    <span className="text-sm text-slate-700">{t("locationValue")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block"></div>

          {/* Features & Hosting - Desktop only */}
          <div className="hidden md:block md:col-start-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-5 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              {t("quality")}
            </h3>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-600 group hover:text-slate-800 transition-colors">
                <CheckCircle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                <span>{t("hostedInGermany")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 group hover:text-slate-800 transition-colors">
                <CheckCircle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                <span>{t("gdprCompliant")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 group hover:text-slate-800 transition-colors">
                <CheckCircle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                <span>{t("cloudBased")}</span>
              </div>
            </div>

            {/* Hosting Banner */}
            <div className="glass-light rounded-xl p-3 inline-block border border-slate-200/50">
              <a
                href="https://all-inkl.com/info/rechenzentrum/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <Image
                  src="https://all-inkl.com/banner/allinkl-serverstandort-deutschland-195x72.png"
                  alt="Serverstandort Deutschland"
                  width={195}
                  height={72}
                  className="rounded"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Legal links */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-500 justify-center md:justify-start">
              <Link
                href={`/${locale}/impressum`}
                className="hover:text-slate-800 transition-colors"
              >
                {t("imprint")}
              </Link>
              <span className="hidden md:inline text-slate-300">•</span>
              <Link
                href={`/${locale}/datenschutz`}
                className="hover:text-slate-800 transition-colors"
              >
                {t("privacy")}
              </Link>
              <span className="hidden md:inline text-slate-300">•</span>
              <Link
                href={`/${locale}/agb`}
                className="hover:text-slate-800 transition-colors"
              >
                {t("terms")}
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} cockpit360®
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
