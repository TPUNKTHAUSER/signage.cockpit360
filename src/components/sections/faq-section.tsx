"use client";

import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  const t = useTranslations("faq");

  const faqs = [
    { question: t("q1"), answer: t("a1") },
    { question: t("q2"), answer: t("a2") },
    { question: t("q3"), answer: t("a3") },
    { question: t("q4"), answer: t("a4") },
    { question: t("q5"), answer: t("a5") },
    { question: t("q6"), answer: t("a6") },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-light opacity-40" />

      {/* Decorative elements */}
      <div className="absolute top-[5%] left-[5%] w-72 h-72 bg-blue-500/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-[5%] right-[5%] w-64 h-64 bg-emerald-500/5 rounded-full blur-[60px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Large decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-slate-100/50 pointer-events-none select-none whitespace-nowrap hidden lg:block">
        FAQ
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            {t("title")}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="group glass-light rounded-2xl border border-slate-200/50 overflow-hidden hover:border-blue-200/50 transition-all duration-300 hover-lift"
            >
              <AccordionTrigger className="px-5 sm:px-6 py-4 sm:py-5 text-left hover:no-underline [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:bg-blue-50/50">
                <div className="flex items-center gap-4 pr-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="font-semibold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                <div className="pl-14 text-slate-600 leading-relaxed text-base">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}
