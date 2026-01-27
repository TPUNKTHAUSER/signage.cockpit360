"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import ContactForm from "@/components/common/contact-form";

export default function ContactCtaSection() {
  const t = useTranslations("contact");
  const params = useParams();
  const locale = (params.locale as string) || "de";

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-light opacity-50" />

      {/* Decorative elements */}
      <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[20%] left-[10%] w-[250px] h-[250px] bg-emerald-500/5 rounded-full blur-[80px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            {t("title")}
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {t("text1")}
          </p>
        </div>

        {/* Contact Card */}
        <div className="relative group" id="kontakt">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Card content */}
          <div className="relative glass-light rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/50">
            <div className="text-center mb-8">
              <p className="text-slate-500 text-sm">{t("text2")}</p>
            </div>

            <ContactForm locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
