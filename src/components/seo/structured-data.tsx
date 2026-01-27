"use client";

import Script from "next/script";

interface StructuredDataProps {
  locale: string;
}

export default function StructuredData({ locale }: StructuredDataProps) {
  const isDE = locale === "de";
  const baseUrl = "https://signage.cockpit360.de";

  // Organization Schema - für Logo in Suchergebnissen
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "cockpit360 solutions",
    alternateName: "cockpit360",
    url: "https://www.cockpit360.de",
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/cockpit360.png`,
      width: 200,
      height: 48,
    },
    image: `${baseUrl}/images/cockpit360.png`,
    description: isDE
      ? "cockpit360 solutions bietet digitale Exposégestaltung und Schaufensterwerbung für Immobilienmakler. Digital- und Contentservice komplett aus einer Hand."
      : "cockpit360 solutions provides digital property presentation and storefront advertising for real estate agents. Digital and content service all from one source.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mannheim",
      addressCountry: "DE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@cockpit360.de",
      availableLanguage: ["German", "English"],
    },
    sameAs: [
      "https://www.cockpit360.de",
    ],
  };

  // LocalBusiness Schema - für lokale Suche
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: "cockpit360 solutions",
    image: `${baseUrl}/images/cockpit360.png`,
    url: baseUrl,
    telephone: "",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Mannheim",
      postalCode: "",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.4875,
      longitude: 8.4660,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "€€",
  };

  // SoftwareApplication/Product Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${baseUrl}/#software`,
    name: "cockpit360 Signage",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Digital Signage Software",
    operatingSystem: "Web-based, Cloud",
    offers: {
      "@type": "Offer",
      price: "39",
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "cockpit360 solutions",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "12",
      bestRating: "5",
      worstRating: "1",
    },
    provider: {
      "@type": "Organization",
      name: "cockpit360 solutions",
      url: "https://www.cockpit360.de",
    },
    description: isDE
      ? "Digitale Exposés und Schaufensterwerbung für Immobilienmakler. Exposégestaltung, Digital- und Contentservice aus einer Hand. Interaktive Exposé-Präsentation auf TV und Displays im Schaufenster. Cloud-basiert, DSGVO-konform, Made in Germany."
      : "Digital property exposés and storefront advertising for real estate agents. Exposé design, digital and content service all from one source. Interactive property presentation on TV and displays. Cloud-based, GDPR compliant, Made in Germany.",
    featureList: isDE
      ? [
          "Digitale Exposégestaltung für Immobilienmakler",
          "Schaufensterwerbung auf Displays",
          "Digital- und Contentservice aus einer Hand",
          "Interaktive Exposé-Präsentation",
          "Digitale Immobilienpräsentation",
          "Cloud-basierte Verwaltung",
          "QR-Code Generation",
          "Automatische Updates",
          "DSGVO-konform",
          "24/7 Betrieb",
          "Hoch- und Querformat",
        ]
      : [
          "Digital exposé design for real estate agents",
          "Storefront advertising on displays",
          "Digital and content service all from one source",
          "Interactive listing presentation",
          "Digital property presentation",
          "Cloud-based management",
          "QR code generation",
          "Automatic updates",
          "GDPR compliant",
          "24/7 operation",
          "Portrait and landscape mode",
        ],
    screenshot: `${baseUrl}/images/signage-storefront-1.jpg`,
  };

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${baseUrl}/${locale}/#faq`,
    mainEntity: isDE
      ? [
          {
            "@type": "Question",
            name: "Kann ich ein digitales Exposé auf einem normalen Fernseher anzeigen?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ja. Voraussetzung ist eine Internetverbindung sowie ein integrierter Webbrowser. Die meisten aktuellen Smart TVs erfüllen diese Anforderungen. Alternativ kann ein externer Media Player wie ein Chromecast oder Fire TV Stick verwendet werden.",
            },
          },
          {
            "@type": "Question",
            name: "Was ist der Unterschied zwischen einem normalen Fernseher und einem Signage-Display?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ein normaler Fernseher ist für den privaten Gebrauch ausgelegt und eignet sich gut für den Einstieg. Ein professionelles Signage-Display ist für den dauerhaften 24/7-Betrieb konzipiert, bietet eine höhere Helligkeit, eine längere Lebensdauer und ist speziell für Schaufenster oder gewerbliche Umgebungen gedacht.",
            },
          },
          {
            "@type": "Question",
            name: "Funktioniert die Darstellung auch im Hochformat?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ja. Unsere Lösung unterstützt sowohl Hoch- als auch Querformat. Die Ausrichtung kann für jedes Display individuell festgelegt und jederzeit angepasst werden.",
            },
          },
          {
            "@type": "Question",
            name: "Wie funktioniert der QR-Code pro Immobilie?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Beim Anlegen einer Immobilie können Sie optional einen Link hinterlegen, zum Beispiel zur Objektseite auf Ihrer eigenen Website. Auf dem digitalen Exposé wird daraus automatisch ein QR-Code erzeugt. Interessenten scannen den Code und gelangen direkt zum hinterlegten Ziel.",
            },
          },
          {
            "@type": "Question",
            name: "Wie schnell werden Änderungen auf dem Display sichtbar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Änderungen sind unmittelbar nach dem Speichern im Cloud-Portal sichtbar. Die Displays aktualisieren die Inhalte automatisch, sodass jederzeit der aktuelle Stand angezeigt wird.",
            },
          },
          {
            "@type": "Question",
            name: "Wie erfolgt die Auswahl und Einrichtung des Displays?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Die Beschaffung und Einrichtung des Displays kann durch Sie selbst erfolgen. Alternativ bieten wir einen Full-Service an – von der Auswahl und Beschaffung des passenden Displays über die Einrichtung bis hin zur optionalen Montage vor Ort.",
            },
          },
          {
            "@type": "Question",
            name: "Was umfasst der Digital- und Contentservice für Immobilienmakler?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Unser Digital- und Contentservice bietet Immobilienmakler digitale Schaufensterwerbung komplett aus einer Hand. Das umfasst die Exposégestaltung auf Displays, die Einrichtung der Schaufenster-Displays, die laufende Verwaltung Ihrer Immobilien-Exposés im Cloud-Portal sowie Unterstützung bei der optimalen Darstellung.",
            },
          },
          {
            "@type": "Question",
            name: "Kann ich die Exposégestaltung individuell anpassen?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ja. Sie bestimmen, wie Ihre digitalen Exposés aussehen: eigenes Logo, CI-Farben, Badges von Verbänden, individuelle Footer-Texte und Bildbearbeitung. Jedes Exposé lässt sich individuell gestalten und direkt auf Ihren Schaufenster-Displays anzeigen.",
            },
          },
        ]
      : [
          {
            "@type": "Question",
            name: "Can I display a digital listing on a regular TV?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The requirement is an internet connection and an integrated web browser. Most current Smart TVs meet these requirements. Alternatively, an external media player like a Chromecast or Fire TV Stick can be used.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between a regular TV and a signage display?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A regular TV is designed for private use and is good for getting started. A professional signage display is designed for continuous 24/7 operation, offers higher brightness, a longer lifespan, and is specifically designed for storefronts or commercial environments.",
            },
          },
          {
            "@type": "Question",
            name: "Does the display also work in portrait mode?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Our solution supports both portrait and landscape formats. The orientation can be set individually for each display and adjusted at any time.",
            },
          },
          {
            "@type": "Question",
            name: "How does the QR code per property work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "When creating a property, you can optionally add a link, for example to the property page on your own website. A QR code is automatically generated from this on the digital listing. Interested parties scan the code and go directly to the stored destination.",
            },
          },
          {
            "@type": "Question",
            name: "How quickly are changes visible on the display?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Changes are visible immediately after saving in the cloud portal. The displays update the content automatically, so the current status is always displayed.",
            },
          },
          {
            "@type": "Question",
            name: "What does the digital and content service for real estate agents include?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our digital and content service offers real estate agents complete storefront advertising from a single source. This includes exposé design on displays, setting up storefront displays, ongoing management of your property exposés in the cloud portal, and support with optimal presentation.",
            },
          },
          {
            "@type": "Question",
            name: "Can I customize the exposé design individually?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. You determine how your digital exposés look: your own logo, CI colors, badges from associations, individual footer texts, and image editing. Each exposé can be individually designed and displayed directly on your storefront displays.",
            },
          },
        ],
  };

  // WebSite Schema - für Sitelinks
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "cockpit360 Signage",
    description: isDE
      ? "Digitale Exposés und Schaufensterwerbung für Immobilienmakler – Exposégestaltung und Contentservice aus einer Hand"
      : "Digital property exposés and storefront advertising for real estate agents – exposé design and content service from one source",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: isDE ? "de-DE" : "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/${locale}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/${locale}`,
      },
    ],
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/${locale}/#webpage`,
    url: `${baseUrl}/${locale}`,
    name: isDE
      ? "Digital Signage für Immobilienmakler | Digitales Schaufenster | cockpit360"
      : "Digital Signage for Real Estate Agents | Digital Storefront | cockpit360",
    description: isDE
      ? "Digitale Exposés für Immobilienmakler. Exposégestaltung, Schaufensterwerbung und Contentservice – alles aus einer Hand."
      : "Digital exposés for real estate agents. Exposé design, storefront advertising and content service – all from one source.",
    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },
    about: {
      "@id": `${baseUrl}/#software`,
    },
    inLanguage: isDE ? "de-DE" : "en-US",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/og-image.png`,
    },
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/#service`,
    name: isDE ? "Digital- und Contentservice für Immobilienmakler" : "Digital and Content Service for Real Estate Agents",
    serviceType: "Digital Signage, Exposégestaltung, Schaufensterwerbung",
    provider: {
      "@id": `${baseUrl}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Germany",
    },
    description: isDE
      ? "Digitale Exposégestaltung und Schaufensterwerbung für Immobilienmakler. Digital- und Contentservice aus einer Hand: Schaufenster-Displays, Cloud-Portal, Full-Service Einrichtung."
      : "Digital exposé design and storefront advertising for real estate agents. Digital and content service from one source: storefront displays, cloud portal, full-service setup.",
    offers: {
      "@type": "Offer",
      price: "39",
      priceCurrency: "EUR",
    },
  };

  const allSchemas = [
    organizationSchema,
    localBusinessSchema,
    softwareSchema,
    faqSchema,
    websiteSchema,
    breadcrumbSchema,
    webPageSchema,
    serviceSchema,
  ];

  return (
    <>
      {allSchemas.map((schema, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
