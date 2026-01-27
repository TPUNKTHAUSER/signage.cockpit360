# cockpit360 Signage

Digitale Exposés und Schaufensterwerbung für Immobilienmakler – Exposégestaltung und Contentservice aus einer Hand.

**Live:** [signage.cockpit360.de](https://signage.cockpit360.de)

## Tech-Stack

- [Next.js](https://nextjs.org) 16 (Static Export)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 4
- [next-intl](https://next-intl.dev) (i18n: DE / EN)
- [Framer Motion](https://www.framer.com/motion/) (Animationen)
- [Radix UI](https://www.radix-ui.com) (Barrierefreie UI-Komponenten)
- [Resend](https://resend.com) (E-Mail / Kontaktformular)

## Entwicklung

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

## Build

```bash
npm run build
```

Erzeugt statische Dateien im `out/`-Verzeichnis, bereit für das Deployment auf jedem Webserver.

## Docker

```bash
docker compose up -d --build
```

Baut das Projekt und startet einen nginx-Container auf Port `3000`.

### Umgebungsvariablen

| Variable | Beschreibung | Standard |
|---|---|---|
| `RESEND_API_KEY` | API-Key für Resend (Kontaktformular) | – |
| `CONTACT_EMAIL_PRIMARY` | Primäre Kontakt-E-Mail | `signage@cockpit360.de` |
| `CONTACT_EMAIL_BACKUP` | Backup Kontakt-E-Mail | – |

Erstelle eine `.env`-Datei im Root-Verzeichnis:

```env
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_EMAIL_PRIMARY=signage@cockpit360.de
CONTACT_EMAIL_BACKUP=backup@cockpit360.de
```

## Projektstruktur

```
src/
├── app/
│   └── [locale]/          # Locale-basiertes Routing (de/en)
│       ├── layout.tsx      # Layout mit SEO-Metadata
│       ├── page.tsx        # Hauptseite
│       ├── agb/            # AGB
│       ├── datenschutz/    # Datenschutz
│       └── impressum/      # Impressum
├── components/
│   ├── sections/           # Seitenabschnitte (Hero, FAQ, Pricing, etc.)
│   ├── layout/             # Navigation, Footer
│   ├── seo/                # Structured Data (JSON-LD)
│   ├── cookie/             # Cookie-Consent
│   └── ui/                 # Wiederverwendbare UI-Komponenten
├── i18n/                   # Internationalisierung
└── lib/                    # Utilities
messages/
├── de.json                 # Deutsche Übersetzungen
└── en.json                 # Englische Übersetzungen
```

## Lizenz

Proprietär – cockpit360 solutions
