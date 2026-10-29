import type { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About Us | Student Transportation in Chicago, IL",
  description:
    "Learn about SLN Transportation's safety standards, background-checked drivers, and dedicated school vehicle transportation services across Chicago and Cook County.",
  alternates: {
    canonical: "https://slntransportation.com/about",
  },
  openGraph: {
    title: "About Us | SLN Transportation",
    description:
      "Learn about SLN Transportation's safety standards, background-checked drivers, and dedicated school vehicle transportation services across Chicago and Cook County.",
    url: "https://slntransportation.com/about",
    images: [
      {
        url: "/images/hero-social.webp",
        width: 1200,
        height: 630,
        alt: "SLN Transportation - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | SLN Transportation",
    description:
      "Learn about SLN Transportation's safety standards, background-checked drivers, and dedicated school vehicle transportation services.",
    images: ["/images/hero-social.webp"],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
