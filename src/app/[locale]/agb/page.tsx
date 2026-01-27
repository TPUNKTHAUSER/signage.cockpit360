import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "AGB | cockpit360 Signage",
  description: "Allgemeine Geschäftsbedingungen für cockpit360 Signage",
  robots: "noindex, follow",
};

export default async function AGBPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="pt-32 md:pt-40 pb-16 px-4 min-h-screen bg-white relative overflow-hidden">
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

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">Allgemeine Geschäftsbedingungen</h1>

        <div className="prose prose-lg max-w-none text-slate-600">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mt-6 sm:mt-8 mb-3 sm:mb-4">§ 1 Geltungsbereich und Zielgruppe</h2>
          <p>
            (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend &quot;AGB&quot;) gelten für alle Geschäftsbeziehungen
            zwischen cockpit360 solutions, Thomas Hauser (nachfolgend &quot;Auftragnehmer&quot;) und dem Kunden
            (nachfolgend &quot;Auftraggeber&quot;).
          </p>
          <p>
            (2) Das Angebot des Auftragnehmers richtet sich ausschließlich an Unternehmer (§ 14 BGB),
            juristische Personen des öffentlichen Rechts oder öffentlich-rechtliche Sondervermögen.
            Ein Vertragsschluss mit Verbrauchern (§ 13 BGB) ist ausgeschlossen.
          </p>
          <p>
            (3) Maßgeblich ist jeweils die zum Zeitpunkt des Vertragsschlusses gültige Fassung der AGB.
            Abweichende, entgegenstehende oder ergänzende AGB des Auftraggebers werden nicht
            Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich zugestimmt.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mt-6 sm:mt-8 mb-3 sm:mb-4">§ 2 Vertragsgegenstand</h2>
          <p>
            (1) Der Auftragnehmer erbringt für den Auftraggeber Dienstleistungen im Bereich der
            Softwareentwicklung sowie die Bereitstellung von Software-as-a-Service (SaaS) Lösungen,
            insbesondere der cloudbasierten Signage-Lösung &quot;cockpit360 Signage&quot; zur digitalen
            Präsentation von Immobilien auf Displays.
          </p>
          <p>
            (2) Der genaue Umfang der Leistungen ergibt sich aus der jeweiligen Auftragsbestätigung
            bzw. dem Angebot des Auftragnehmers.
          </p>
          <p>
            (3) Bei SaaS-Leistungen gewährt der Auftragnehmer dem Auftraggeber die Nutzung der
            Software über das Internet für die vereinbarte Vertragslaufzeit. Die Software wird nicht
            an den Auftraggeber überlassen, sondern bleibt im Eigentum des Auftragnehmers.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">§ 3 Vertragsschluss</h2>
          <p>
            (1) Die Darstellung der Dienstleistungen auf der Website stellt kein rechtlich bindendes
            Vertragsangebot dar, sondern eine Aufforderung zur Abgabe eines Angebots.
          </p>
          <p>
            (2) Der Vertrag kommt zustande durch die Annahme des individuellen Angebots durch den
            Auftraggeber (z. B. per E-Mail oder Unterschrift) oder durch die faktische Bereitstellung
            der Leistung durch den Auftragnehmer nach Auftragserteilung.
          </p>
          <p>
            (3) Angebote des Auftragnehmers sind 30 Tage gültig, sofern keine andere Frist angegeben ist.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">§ 4 Leistungsumfang und Mitwirkungspflichten</h2>
          <p>
            (1) Der Auftragnehmer erbringt die vereinbarten Leistungen nach dem Stand der Technik und
            mit der erforderlichen Sorgfalt.
          </p>
          <p>
            (2) Der Auftraggeber stellt alle für die Durchführung des Auftrags erforderlichen
            Informationen und Unterlagen rechtzeitig zur Verfügung.
          </p>
          <p>
            (3) Bei SaaS-Leistungen stellt der Auftragnehmer die Software grundsätzlich mit einer
            Verfügbarkeit von 99% im Jahresmittel zur Verfügung. Geplante Wartungsarbeiten werden
            dem Auftraggeber rechtzeitig angekündigt und finden nach Möglichkeit außerhalb der
            üblichen Geschäftszeiten statt.
          </p>
          <p>
            (4) Der Auftraggeber ist verpflichtet, seine Zugangsdaten geheim zu halten und Dritten
            nicht zugänglich zu machen. Bei Verlust oder Missbrauch der Zugangsdaten hat der
            Auftraggeber den Auftragnehmer unverzüglich zu informieren.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">§ 5 Vergütung, Preisanpassung und Zahlungsbedingungen</h2>
          <p>
            (1) Die Vergütung richtet sich nach der jeweils gültigen Preisliste bzw. dem individuellen
            Angebot. Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.
          </p>
          <p>
            (2) Bei SaaS-Leistungen erfolgt die Abrechnung monatlich im Voraus. Rechnungen sind
            innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zahlbar.
          </p>
          <p>
            (3) Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem
            Basiszinssatz berechnet. Der Auftragnehmer behält sich vor, bei Zahlungsverzug die
            Leistungen einzustellen (Account-Sperrung), bis die ausstehenden Forderungen beglichen sind.
          </p>
          <p>
            (4) Preisanpassung: Der Auftragnehmer ist berechtigt, die monatlichen Entgelte für
            SaaS-Leistungen maximal einmal pro Kalenderjahr an veränderte Marktbedingungen
            (z. B. gestiegene Server- oder Personalkosten) anzupassen. Die Preisanpassung ist dem
            Auftraggeber mindestens sechs Wochen vor Inkrafttreten in Textform anzukündigen.
            Beträgt die Erhöhung mehr als 10 %, steht dem Auftraggeber ein Sonderkündigungsrecht
            zum Zeitpunkt des Wirksamwerdens der Erhöhung zu.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">§ 6 Nutzungsrechte und Geistiges Eigentum</h2>
          <p>
            (1) Der Auftraggeber erhält an den erstellten Arbeitsergebnissen (Individualsoftware)
            vorbehaltlich einer anderen Vereinbarung ein einfaches Nutzungsrecht.
          </p>
          <p>
            (2) Bei SaaS-Leistungen erhält der Auftraggeber ein zeitlich auf die Vertragslaufzeit
            beschränktes, nicht-exklusives, nicht übertragbares Recht zur Nutzung der Software
            via Internet. Eine Weitergabe der Software oder der Zugangsdaten an Dritte (ausgenommen
            verbundene Unternehmen oder Mitarbeiter) ist nicht gestattet.
          </p>
          <p>
            (3) Alle Rechte an der Standardsoftware, einschließlich Urheberrechte, Quellcodes,
            Patente und Marken, verbleiben beim Auftragnehmer. Der Auftraggeber ist nicht berechtigt,
            die Software zu kopieren, zu dekompilieren, zu reverse-engineeren oder zu bearbeiten,
            soweit dies nicht gesetzlich zwingend erlaubt ist.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">§ 7 Laufzeit, Kündigung und Datenexport</h2>
          <p>
            (1) SaaS-Verträge werden auf unbestimmte Zeit geschlossen, sofern nicht ausdrücklich
            etwas anderes vereinbart wurde.
          </p>
          <p>
            (2) Beide Vertragsparteien können den Vertrag mit einer Frist von einem Monat zum Ende
            eines Kalendermonats kündigen.
          </p>
          <p>
            (3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
          </p>
          <p>
            (4) Kündigungen bedürfen der Textform (E-Mail genügt).
          </p>
          <p>
            (5) Datenexport: Nach Beendigung des Vertrags hat der Auftraggeber die Möglichkeit,
            seine Daten innerhalb einer Karenzzeit von 30 Tagen zu exportieren. Der Auftragnehmer
            unterstützt den Export im Rahmen der vorhandenen Export-Funktionalitäten. Nach Ablauf
            dieser Frist ist der Auftragnehmer berechtigt, die Daten zu löschen.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">§ 8 Datenspeicherung, Inhalte und Sicherung im Cloud-Portal</h2>
          <p>
            (1) Umfang der Speicherung: Über das Cloud-Portal werden immobilienbezogene Daten
            gespeichert (z. B. Kaufpreise, Objektdetails, Adressen) sowie Medieninhalte (Fotos,
            Videos), die der Auftraggeber hochlädt.
          </p>
          <p>
            (2) Sicherheit: Der Auftragnehmer setzt zum Schutz der Daten geeignete technische und
            organisatorische Maßnahmen nach dem Stand der Technik ein (z. B. Verschlüsselung,
            Zugriffskontrollen, Firewalls), um die Vertraulichkeit, Integrität und Verfügbarkeit
            der Daten zu gewährleisten.
          </p>
          <p>
            (3) Backups: Der Auftragnehmer führt regelmäßige System-Backups durch. Dennoch obliegt
            es dem Auftraggeber, wesentliche Daten regelmäßig selbst zu sichern, da eine lückenlose
            Wiederherstellung durch den Auftragnehmer technisch nie zu 100 % garantiert werden kann.
          </p>
          <p>
            (4) Löschung: Löscht der Auftraggeber Daten im Portal, werden diese zeitnah aus dem
            Produktivsystem entfernt. Aus technischen Gründen (z. B. in rotierten Backups) kann
            eine endgültige physikalische Löschung zeitverzögert erfolgen. Gesetzliche
            Aufbewahrungspflichten bleiben unberührt.
          </p>
          <p>
            (5) Verantwortung und Freistellung: Der Auftraggeber ist allein verantwortlich für die
            Rechtmäßigkeit der von ihm hochgeladenen Inhalte. Er versichert, dass er über alle
            erforderlichen Rechte (insb. Urheberrechte an Fotos) verfügt. Der Auftraggeber stellt
            den Auftragnehmer von allen Ansprüchen Dritter frei, die auf einer rechtswidrigen Nutzung
            des Portals oder der Verletzung von Rechten Dritter durch den Auftraggeber beruhen.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">§ 9 Haftung</h2>
          <p>
            (1) Der Auftragnehmer haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie
            bei Verletzung des Lebens, des Körpers oder der Gesundheit.
          </p>
          <p>
            (2) Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung einer
            wesentlichen Vertragspflicht (Kardinalpflicht). In diesem Fall ist die Haftung auf den
            bei Vertragsschluss vorhersehbaren, typischerweise eintretenden Schaden begrenzt.
          </p>
          <p>
            (3) Die verschuldensunabhängige Haftung für bei Vertragsschluss vorhandene Mängel
            (§ 536a Abs. 1 BGB) wird ausgeschlossen.
          </p>
          <p>
            (4) Für den Verlust von Daten haftet der Auftragnehmer nur insoweit, als der Schaden
            auch bei ordnungsgemäßer Datensicherung durch den Auftraggeber eingetreten wäre
            (begrenzt auf den Wiederherstellungsaufwand).
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">§ 10 Datenschutz</h2>
          <p>
            (1) Die Verarbeitung personenbezogener Daten erfolgt gemäß der Datenschutzerklärung des
            Auftragnehmers, die unter{" "}
            <Link href="/de/datenschutz" className="text-blue-600 hover:underline">Datenschutzerklärung</Link>{" "}
            abrufbar ist.
          </p>
          <p>
            (2) Auftragsverarbeitung: Soweit der Auftragnehmer im Rahmen der Leistungserbringung
            personenbezogene Daten im Auftrag des Kunden verarbeitet (Art. 28 DSGVO), schließen die
            Parteien hierüber einen gesonderten Auftragsverarbeitungsvertrag (AVV). Dieser wird dem
            Kunden bei Vertragsschluss zur Verfügung gestellt.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">§ 11 Änderungen der AGB</h2>
          <p>
            (1) Der Auftragnehmer behält sich vor, diese AGB zu ändern, soweit dies erforderlich
            ist (z. B. bei Gesetzesänderungen oder Funktionserweiterungen).
          </p>
          <p>
            (2) Änderungen werden dem Auftraggeber spätestens sechs Wochen vor ihrem Inkrafttreten
            in Textform mitgeteilt. Widerspricht der Auftraggeber nicht innerhalb dieser Frist,
            gilt seine Zustimmung als erteilt. Auf diese Folge wird in der Mitteilung gesondert
            hingewiesen.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">§ 12 Schlussbestimmungen</h2>
          <p>
            (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
          </p>
          <p>
            (2) Gerichtsstand für alle Streitigkeiten aus diesem Vertragsverhältnis ist Mannheim.
          </p>
          <p>
            (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit
            der übrigen Bestimmungen unberührt.
          </p>
          <p>
            (4) Mündliche Nebenabreden bestehen nicht. Änderungen und Ergänzungen bedürfen der Textform.
          </p>

          <p className="text-slate-500 text-sm mt-8">
            Stand: 17.01.2026
          </p>
        </div>
      </div>
    </div>
  );
}
