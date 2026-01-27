import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Datenschutz | cockpit360 Signage",
  description: "Datenschutzerklärung für cockpit360 Signage",
  robots: "noindex, follow",
};

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const currentDate = new Date().toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="pt-28 md:pt-36 pb-16 px-4 min-h-screen bg-white relative overflow-hidden">
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

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-sm sm:prose-lg max-w-none text-slate-600">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mt-6 sm:mt-8 mb-3 sm:mb-4">1. Datenschutz auf einen Blick</h2>

          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mt-4 sm:mt-6 mb-2 sm:mb-3">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
            können Sie dem Impressum dieser Website entnehmen.
          </p>

          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong><br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B.
            um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Hosting</h2>
          <p>
            Die Inhalte unserer Website werden bei folgendem Anbieter gehostet:
          </p>
          <p>
            <strong>ALL-INKL</strong><br />
            Hauptstr. 68<br />
            02742 Neusalza-Spremberg
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
            dieser Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            Thomas Hauser<br />
            Korbangel 56<br />
            68305 Mannheim<br /><br />
            E-Mail: <a href="mailto:signage@cockpit360.de" className="text-blue-600 hover:underline">signage@cockpit360.de</a>
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Speicherdauer</h3>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
            Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
            berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
            werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung
            Ihrer personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
            letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Hinweis zur Datenweitergabe in die USA</h3>
          <p>
            Auf unserer Website sind unter anderem Tools von Unternehmen mit Sitz in den USA eingebunden. Wenn
            diese Tools aktiv sind, können Ihre personenbezogenen Daten an die US-Server der jeweiligen Unternehmen
            weitergegeben werden. Wir weisen darauf hin, dass die USA kein sicherer Drittstaat im Sinne des
            EU-Datenschutzrechts sind. US-Unternehmen sind dazu verpflichtet, personenbezogene Daten an
            Sicherheitsbehörden herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen können.
            Es kann daher nicht ausgeschlossen werden, dass US-Behörden (z.B. Geheimdienste) Ihre auf US-Servern
            befindlichen Daten zu Überwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben auf
            diese Verarbeitungstätigkeiten keinen Einfluss.
          </p>
          <p>
            Soweit wir Daten in die USA übertragen, verwenden wir Standardvertragsklauseln (SCC) gemäß Art. 46
            Abs. 2 lit. c DSGVO. Diese sind von der Europäischen Kommission genehmigte Vertragsmuster, die
            sicherstellen sollen, dass Ihre Daten auch nach der Übertragung in die USA dem europäischen
            Datenschutzniveau entsprechen.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Datenerfassung auf dieser Website</h2>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
            die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser
            Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
            Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen
            die Server-Log-Files erfasst werden. Die Server-Log-Dateien werden für maximal 7 Tage gespeichert und
            anschließend automatisch gelöscht.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
            von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            <strong>Rechtsgrundlage:</strong> Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
            lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem
            berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1
            lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
          </p>
          <p>
            <strong>Speicherdauer:</strong> Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns,
            bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für
            die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende
            gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Anfrage per E-Mail</h3>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus
            hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
            bei uns gespeichert und verarbeitet.
          </p>
          <p>
            <strong>Rechtsgrundlage:</strong> Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
            lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem
            berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1
            lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
          </p>
          <p>
            <strong>Speicherdauer:</strong> Die von Ihnen per E-Mail übermittelten Daten verbleiben bei uns, bis Sie
            uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
            Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
            gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Cookies</h2>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Allgemeine Informationen zu Cookies</h3>
          <p>
            Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden
            und die Ihr Browser speichert. Cookies richten auf Ihrem Endgerät keinen Schaden an und enthalten keine
            Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
          </p>
          <p>
            Einige Cookies sind &quot;Session-Cookies&quot;. Solche Cookies werden nach Ende Ihres Besuchs automatisch gelöscht.
            Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es
            uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
          </p>
          <p>
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies
            nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie
            das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von
            Cookies kann die Funktionalität dieser Website eingeschränkt sein.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Cookie-Kategorien</h3>

          <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">Notwendige Cookies</h4>
          <p>
            Notwendige Cookies ermöglichen grundlegende Funktionen und sind für die einwandfreie Funktion der Website
            erforderlich. Diese Cookies können nicht deaktiviert werden.
          </p>
          <p>
            <strong>Verwendete Cookies:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>cockpit360_cookie_consent</strong> – Speichert Ihre Cookie-Einstellungen (Speicherdauer: 1 Jahr, Typ: LocalStorage)</li>
            <li><strong>cockpit360_cookie_preferences</strong> – Speichert Ihre individuellen Cookie-Präferenzen (Speicherdauer: 1 Jahr, Typ: LocalStorage)</li>
            <li><strong>Laravel Session Cookie</strong> – Für die Funktionalität der Website erforderlich (Speicherdauer: Session, Typ: HTTP Cookie)</li>
          </ul>
          <p>
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Funktionalität der Website)
          </p>

          <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">Analytische Cookies</h4>
          <p>
            Analytische Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem Informationen
            anonym gesammelt und gemeldet werden. Diese Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt.
          </p>
          <p>
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
          </p>
          <p>
            <strong>Hinweis:</strong> Derzeit werden keine analytischen Cookies verwendet. Falls in Zukunft
            analytische Dienste (z.B. Google Analytics) integriert werden, werden Sie hierüber informiert und
            können diese jederzeit in den Cookie-Einstellungen deaktivieren.
          </p>

          <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">Marketing Cookies</h4>
          <p>
            Marketing Cookies werden verwendet, um Besuchern auf Webseiten zu folgen. Die Absicht ist, Anzeigen zu
            zeigen, die relevant und ansprechend für den einzelnen Benutzer sind. Diese Cookies werden nur mit Ihrer
            ausdrücklichen Einwilligung gesetzt.
          </p>
          <p>
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
          </p>
          <p>
            <strong>Hinweis:</strong> Derzeit werden keine Marketing Cookies verwendet. Falls in Zukunft
            Marketing-Dienste integriert werden, werden Sie hierüber informiert und können diese jederzeit in den
            Cookie-Einstellungen deaktivieren.
          </p>

          <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">Präferenz Cookies</h4>
          <p>
            Präferenz Cookies ermöglichen es einer Website, sich Informationen zu merken, die das Verhalten oder
            Aussehen der Website ändern, wie z. B. Ihre bevorzugte Sprache oder die Region, in der Sie sich befinden.
            Diese Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt.
          </p>
          <p>
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Cookie-Verwaltung</h3>
          <p>
            Sie können Ihre Cookie-Einstellungen jederzeit über das Cookie-Banner oder die Cookie-Einstellungen
            auf dieser Website anpassen. Sie haben die Möglichkeit, nicht-notwendige Cookies zu akzeptieren,
            abzulehnen oder individuell zu konfigurieren.
          </p>
          <p>
            Bitte beachten Sie, dass das Ablehnen oder Deaktivieren bestimmter Cookies die Funktionalität der
            Website beeinträchtigen kann.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Plugins und Tools</h2>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Google Fonts</h3>
          <p>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von
            Google bereitgestellt werden. Anbieter ist die Google Ireland Limited (&quot;Google&quot;), Gordon House, Barrow
            Street, Dublin 4, Irland.
          </p>
          <p>
            Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts direkt von den Servern von Google in
            Ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Zu diesem Zweck muss der von Ihnen
            verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis
            darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde.
          </p>
          <p>
            Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte
            Interesse liegt in der einheitlichen Darstellung des Schriftbildes auf unserer Website.
          </p>
          <p>
            <strong>Datenübertragung in Drittländer:</strong> Google verarbeitet Ihre Daten in den USA. Die
            Datenübertragung erfolgt auf Basis der Standardvertragsklauseln der Europäischen Kommission gemäß
            Art. 46 Abs. 2 lit. c DSGVO.
          </p>
          <p>
            Weitere Informationen zu Google Fonts finden Sie unter{" "}
            <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://developers.google.com/fonts/faq</a>{" "}
            und in der Datenschutzerklärung von Google:{" "}
            <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://policies.google.com/privacy?hl=de</a>.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Google reCAPTCHA</h3>
          <p>
            Wir nutzen &quot;Google reCAPTCHA&quot; (im Folgenden &quot;reCAPTCHA&quot;) auf dieser Website. Anbieter ist die
            Google Ireland Limited (&quot;Google&quot;), Gordon House, Barrow Street, Dublin 4, Irland.
          </p>
          <p>
            Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf dieser Website (z. B. in einem
            Kontaktformular) durch einen Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu analysiert
            reCAPTCHA das Verhalten des Websitebesuchers anhand verschiedener Merkmale. Diese Analyse beginnt
            automatisch, sobald der Websitebesucher die Website betritt. Zur Analyse wertet reCAPTCHA verschiedene
            Informationen aus (z. B. IP-Adresse, Verweildauer des Websitebesuchers auf der Website oder vom Nutzer
            getätigte Mausbewegungen). Die bei der Analyse erfassten Daten werden an Google weitergeleitet.
          </p>
          <p>
            Die reCAPTCHA-Analysen laufen vollständig im Hintergrund. Websitebesucher werden nicht darauf hingewiesen,
            dass eine Analyse stattfindet. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            Der Websitebetreiber hat ein berechtigtes Interesse daran, seine Website vor missbräuchlicher
            automatisierter Ausspähung und vor SPAM zu schützen.
          </p>
          <p>
            Weitere Informationen zu Google reCAPTCHA finden Sie in den Google-Datenschutzbestimmungen und den
            Google Nutzungsbedingungen unter folgenden Links:{" "}
            <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://policies.google.com/privacy?hl=de</a>{" "}
            und{" "}
            <a href="https://policies.google.com/terms?hl=de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://policies.google.com/terms?hl=de</a>.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Lucide Icons</h3>
          <p>
            Diese Website nutzt Lucide Icons, eine Icon-Bibliothek. Die Icons werden lokal eingebunden und
            nicht von externen Servern geladen.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">7. Social Media</h2>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Open Graph und Twitter Cards</h3>
          <p>
            Diese Website verwendet Open Graph Meta-Tags und Twitter Cards, um eine optimale Darstellung beim
            Teilen von Inhalten in sozialen Netzwerken zu gewährleisten. Diese Meta-Tags enthalten keine
            personenbezogenen Daten und werden nur beim Teilen von Links auf dieser Website verwendet.
          </p>
          <p>
            Beim Teilen von Links auf dieser Website können die sozialen Netzwerke (Facebook, Twitter, LinkedIn,
            etc.) Informationen über die geteilte Seite abrufen. Diese Informationen werden direkt von den
            Servern dieser Website abgerufen und nicht über Drittanbieter weitergeleitet.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">8. Ihre Rechte</h2>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Ihre Rechte nach der DSGVO</h3>
          <p>
            Sie haben jederzeit das Recht, Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu
            erhalten. Außerdem haben Sie das Recht auf Berichtigung unrichtiger Daten, auf Löschung, auf
            Einschränkung der Verarbeitung, auf Datenübertragbarkeit sowie auf Widerspruch gegen die Verarbeitung
            Ihrer personenbezogenen Daten.
          </p>
          <p>
            <strong>Recht auf Auskunft (Art. 15 DSGVO):</strong><br />
            Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen, ob personenbezogene Daten, die
            Sie betreffen, von uns verarbeitet werden.
          </p>
          <p>
            <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong><br />
            Sie haben das Recht, von uns unverzüglich die Berichtigung unrichtiger Sie betreffender
            personenbezogener Daten zu verlangen.
          </p>
          <p>
            <strong>Recht auf Löschung (Art. 17 DSGVO):</strong><br />
            Sie haben das Recht, von uns zu verlangen, dass Sie betreffende personenbezogene Daten unverzüglich
            gelöscht werden.
          </p>
          <p>
            <strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong><br />
            Sie haben das Recht, von uns die Einschränkung der Verarbeitung zu verlangen.
          </p>
          <p>
            <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong><br />
            Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben,
            in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
          </p>
          <p>
            <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong><br />
            Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen
            die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder
            f DSGVO erfolgt, Widerspruch einzulegen.
          </p>
          <p>
            <strong>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO):</strong><br />
            Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das
            Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts,
            ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die
            Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
          </p>
          <p>
            Die zuständige Aufsichtsbehörde für Deutschland ist der Bundesbeauftragte für den Datenschutz und die
            Informationsfreiheit (BfDI). Weitere Informationen finden Sie unter:{" "}
            <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.bfdi.bund.de</a>.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">9. SSL- bzw. TLS-Verschlüsselung</h2>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
            Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
            TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
            von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
          <p>
            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln,
            nicht von Dritten mitgelesen werden.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">10. Datenschutzbeauftragter</h2>
          <p>
            Wir haben keinen gesetzlich verpflichtenden Datenschutzbeauftragten bestellt, da unser Unternehmen
            die gesetzlichen Voraussetzungen hierfür nicht erfüllt. Bei Fragen zum Datenschutz können Sie sich
            jederzeit direkt an uns wenden:
          </p>
          <p>
            <strong>Kontakt für Datenschutzanfragen:</strong><br />
            Thomas Hauser<br />
            Korbangel 56<br />
            68305 Mannheim<br />
            Deutschland<br />
            E-Mail: <a href="mailto:signage@cockpit360.de" className="text-blue-600 hover:underline">signage@cockpit360.de</a>
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">11. Änderung dieser Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
            Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen,
            z. B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue
            Datenschutzerklärung.
          </p>

          <p className="mt-8 text-sm">
            Stand: {currentDate}
          </p>
        </div>
      </div>
    </div>
  );
}
