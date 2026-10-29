export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "TransportationService"],
        "@id": "https://slntransportation.com/#organization",
        "name": "SLN Transportation",
        "legalName": "SLN Transportation LLC",
        "url": "https://slntransportation.com",
        "logo": "https://slntransportation.com/images/logo.webp",
        "image": "https://slntransportation.com/images/hero-social.webp",
        "description":
          "SLN Transportation provides certified, safe, and reliable school transportation services, student vehicle transit, and driver career opportunities in Chicago and Cook County, IL.",
        "telephone": "+1-773-349-2773",
        "email": "slntransportationllc999@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "9002 Senate Dr",
          "addressLocality": "Des Plaines",
          "addressRegion": "IL",
          "postalCode": "60016",
          "addressCountry": "US",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 42.0334,
          "longitude": -87.8834,
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Chicago Metro Area, IL",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Chicago, IL",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Cook County, IL",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Des Plaines, IL",
          },
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          "opens": "06:00",
          "closes": "18:00",
        },
        "priceRange": "$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "School Transportation Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Student School Transportation",
                "description":
                  "Daily safe vehicle transportation to and from schools in Chicago.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Specialized Student Transit",
                "description":
                  "Dedicated school vehicle services for students requiring tailored transportation assistance.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hard to Serve Routes",
                "description":
                  "Reliable school transit for non-traditional, rural, or remote student routes.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "McKinney-Vento Transportation",
                "description":
                  "Compliant, compassionate transportation keeping displaced students connected to their school of origin.",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What student transportation services does SLN Transportation offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "SLN Transportation provides door-to-door student pickup, special education transportation, out-of-district routes, hard-to-serve routes, and school event charter transit across Chicago and Cook County.",
            },
          },
          {
            "@type": "Question",
            "name": "How are drivers and monitors vetted for student safety?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Every driver and monitor undergoes thorough background checks, FBI fingerprinting, motor vehicle record audits, regular drug screenings, and specialized student safety training.",
            },
          },
          {
            "@type": "Question",
            "name": "How can I apply for a School Vehicle Driver or Monitor job?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "You can apply directly online on our website's career application page. We offer flexible school hours, competitive pay, and supportive team environments.",
            },
          },
          {
            "@type": "Question",
            "name": "What areas in Illinois does SLN Transportation serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "SLN Transportation operates throughout Chicago, Des Plaines, Evanston, Skokie, and broader Cook County and neighboring Northern Illinois communities.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
