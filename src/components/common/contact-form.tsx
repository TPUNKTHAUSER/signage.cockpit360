"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich").max(255),
  email: z.string().email("Ungültige E-Mail-Adresse").max(255),
  company: z.string().max(255).optional(),
  phone: z.string().max(50).optional(),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben").max(5000),
  // Honeypot field - should remain empty
  website: z.string().max(0, "").optional(),
  // Simple math challenge
  mathAnswer: z.string().min(1, "Bitte lösen Sie die Rechenaufgabe"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  locale: string;
}

export default function ContactForm({ locale }: ContactFormProps) {
  const t = useTranslations("contactForm");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Simple math challenge - generated client-side only to avoid hydration mismatch
  const [mathChallenge, setMathChallenge] = useState<{ a: number; b: number; answer: number } | null>(null);

  useEffect(() => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setMathChallenge({ a, b, answer: a + b });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot
    if (data.website && data.website.length > 0) {
      // Bot detected, silently fail
      setStatus("success");
      return;
    }

    // Check math answer
    if (!mathChallenge || parseInt(data.mathAnswer) !== mathChallenge.answer) {
      setErrorMessage(locale === "de" ? "Falsche Antwort auf die Rechenaufgabe" : "Wrong answer to math question");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          message: data.message,
          locale,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        locale === "de"
          ? "Fehler beim Senden. Bitte versuchen Sie es später erneut."
          : "Failed to send. Please try again later."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
        <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-emerald-800 mb-2">
          {locale === "de" ? "Nachricht gesendet!" : "Message sent!"}
        </h3>
        <p className="text-emerald-700 text-sm">
          {locale === "de"
            ? "Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen."
            : "Thank you for your inquiry. We will get back to you as soon as possible."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Honeypot field - hidden from users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            {locale === "de" ? "Name" : "Name"} *
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
            placeholder={locale === "de" ? "Ihr Name" : "Your name"}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            {locale === "de" ? "E-Mail" : "Email"} *
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
            placeholder={locale === "de" ? "ihre@email.de" : "your@email.com"}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
            {locale === "de" ? "Firma" : "Company"}
          </label>
          <input
            type="text"
            id="company"
            {...register("company")}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
            placeholder={locale === "de" ? "Firmenname (optional)" : "Company name (optional)"}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
            {locale === "de" ? "Telefon" : "Phone"}
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
            placeholder={locale === "de" ? "+49 123 456789" : "+1 234 567890"}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          {locale === "de" ? "Nachricht" : "Message"} *
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm"
          placeholder={
            locale === "de"
              ? "Ihre Nachricht... (Senden Sie gerne Ihr Logo mit, dann richten wir Ihnen einen Testzugang ein)"
              : "Your message... (Feel free to include your logo, and we'll set up a trial access for you)"
          }
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Math Challenge - Anti-Spam */}
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <label htmlFor="mathAnswer" className="block text-sm font-medium text-slate-700 mb-2">
          {locale === "de" ? "Sicherheitsfrage" : "Security question"}: {mathChallenge ? `${mathChallenge.a} + ${mathChallenge.b}` : "..."} = ? *
        </label>
        <input
          type="number"
          id="mathAnswer"
          {...register("mathAnswer")}
          disabled={!mathChallenge}
          className="w-24 px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm disabled:opacity-50"
          placeholder="?"
        />
        {errors.mathAnswer && (
          <p className="text-red-500 text-xs mt-1">{errors.mathAnswer.message}</p>
        )}
      </div>

      {status === "error" && errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {locale === "de" ? "Wird gesendet..." : "Sending..."}
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {locale === "de" ? "Nachricht senden" : "Send message"}
          </>
        )}
      </Button>

      <p className="text-xs text-slate-500 text-center">
        {locale === "de"
          ? "* Pflichtfelder. Ihre Daten werden vertraulich behandelt."
          : "* Required fields. Your data will be treated confidentially."}
      </p>
    </form>
  );
}
