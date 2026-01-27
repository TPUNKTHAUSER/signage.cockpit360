"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import ContactForm from "@/components/common/contact-form";

export default function ContactCtaSection() {
  const t = useTranslations("contact");
  const params = useParams();
  const locale = (params.locale as string) || "de";

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-slate-900">
              {t("title")}
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              {t("text1")}
            </p>
          </div>

          {/* Contact Form */}
          <div id="kontakt">
            <p className="text-center text-slate-400 text-sm mb-6">{t("text2")}</p>
            <ContactForm locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
