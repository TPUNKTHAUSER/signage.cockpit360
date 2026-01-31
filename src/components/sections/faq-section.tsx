"use client";

import { useTranslations } from "next-intl";
import { HelpCircle } from "lucide-react";
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
    { question: t("q7"), answer: t("a7") },
    { question: t("q8"), answer: t("a8") },
    { question: t("q9"), answer: t("a9") },
    { question: t("q10"), answer: t("a10") },
  ];

  const leftColumn = faqs.slice(0, 5);
  const rightColumn = faqs.slice(5);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 mb-5">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">{t("badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-slate-900">
            {t("title")}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Two-column FAQ layout */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left column */}
          <Accordion type="single" collapsible className="space-y-3">
            {leftColumn.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`left-${index}`}
                className="bg-slate-50 rounded-xl border border-slate-100"
              >
                <AccordionTrigger className="px-5 py-4 text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span className="font-medium text-slate-900 text-sm pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 pt-0">
                  <div className="text-slate-500 leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Right column */}
          <Accordion type="single" collapsible className="space-y-3">
            {rightColumn.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`right-${index}`}
                className="bg-slate-50 rounded-xl border border-slate-100"
              >
                <AccordionTrigger className="px-5 py-4 text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span className="font-medium text-slate-900 text-sm pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 pt-0">
                  <div className="text-slate-500 leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
