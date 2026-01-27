import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Impressum | cockpit360 Signage",
  description: "Impressum und rechtliche Informationen zu cockpit360 Signage",
  robots: "noindex, follow",
};

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="pt-32 pb-16 px-4 min-h-screen bg-white relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-light opacity-40" />

      {/* Decorative elements */}
      <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-blue-500/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-[10%] left-[5%] w-64 h-64 bg-emerald-500/5 rounded-full blur-[60px]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 sm:mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Zurück zur Startseite</span>
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">Impressum</h1>

        <div className="prose prose-slate max-w-none">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mt-6 sm:mt-8 mb-3 sm:mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-slate-600">
            <strong>cockpit360</strong><br />
            Thomas Hauser<br />
            Korbangel 56<br />
            68305 Mannheim<br />
            Deutschland
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Kontakt</h2>
          <p className="text-slate-600">
            E-Mail: <a href="mailto:signage@cockpit360.de" className="text-blue-600 hover:underline">signage@cockpit360.de</a><br />
            Website: <a href="https://www.cockpit360.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.cockpit360.de</a>
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Redaktionell verantwortlich</h2>
          <p className="text-slate-600">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:<br />
            Thomas Hauser<br />
            Korbangel 56<br />
            68305 Mannheim
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">EU-Streitschlichtung</h2>
          <p className="text-slate-600">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p className="text-slate-600">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Dieses Impressum gilt auch für folgende Social Media Profile</h2>
          <p className="text-slate-600">
            LinkedIn: <a href="https://linkedin.com/in/dein-profil" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://linkedin.com/in/dein-profil</a><br />
            Xing: <a href="https://xing.com/profile/dein-profil" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://xing.com/profile/dein-profil</a>
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Haftungsausschluss</h2>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Haftung für Inhalte</h3>
          <p className="text-slate-600">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
            der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
            Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Haftung für Links</h3>
          <p className="text-slate-600">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
            Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
            zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Urheberrecht</h3>
          <p className="text-slate-600">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
            von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Bildnachweise</h3>
          <p className="text-slate-600">
            Icons by Lucide (Open Source).
          </p>
        </div>
      </div>
    </div>
  );
}
