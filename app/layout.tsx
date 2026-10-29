import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Source_Serif_4 } from "next/font/google";
import Navbar from "@/components/navbar";
import SideDock from "@/components/side-dock";
import Footer from "@/components/footer";
import JsonLd from "@/components/json-ld";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif-head",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://slntransportation.com"),
  title: {
    default: "SLN Transportation | School Transportation Services in Chicago, IL",
    template: "%s | SLN Transportation",
  },
  description:
    "SLN Transportation provides safe, reliable school transportation services, student vehicle pickup, special education transit, and driver jobs in Chicago and Cook County, IL.",
  keywords: [
    "school transportation services",
    "SLN Transportation",
    "school transportation Chicago",
    "student vehicle services Chicago",
    "school bus driver jobs Cook County",
    "student transportation service IL",
    "special education transport Chicago",
    "McKinney-Vento transportation Chicago",
    "safe student pickup Cook County",
    "school van service Des Plaines IL",
    "non-CDL school transportation",
    "student transport provider Illinois",
  ],
  authors: [{ name: "SLN Transportation LLC", url: "https://slntransportation.com" }],
  creator: "SLN Transportation LLC",
  publisher: "SLN Transportation LLC",
  alternates: {
    canonical: "https://slntransportation.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/logo.webp", type: "image/webp" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/images/logo.webp" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://slntransportation.com/",
    siteName: "SLN Transportation",
    title: "SLN Transportation | School Transportation Services in Chicago, IL",
    description:
      "Safe, certified, and reliable school transportation vehicle services and student pickup in Chicago and surrounding Cook County communities.",
    images: [
      {
        url: "/images/hero-social.webp",
        width: 1200,
        height: 630,
        alt: "SLN Transportation School Vehicles and Fleet in Chicago, IL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SLN Transportation | School Transportation Services in Chicago, IL",
    description:
      "Safe, certified, and reliable school transportation vehicle services in Chicago, IL.",
    images: ["/images/hero-social.webp"],
  },
  other: {
    "geo.region": "US-IL",
    "geo.placename": "Chicago, Illinois",
    "geo.position": "42.0334;-87.8834",
    ICBM: "42.0334, -87.8834",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#f4eeee] text-[#160202]">
        <Navbar />
        <SideDock />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
