import type { Metadata } from "next";
import DriverApplication from "./driver-application";

export const metadata: Metadata = {
  title: "School Driver & Monitor Careers | Apply Online | SLN Transportation",
  description:
    "Join the SLN Transportation team in Chicago and Cook County, IL. Apply online for school vehicle driver and student monitor opportunities with competitive pay and supportive culture.",
  keywords: [
    "school bus driver jobs Cook County",
    "school vehicle driver Chicago",
    "student transportation jobs Illinois",
    "van driver hiring Des Plaines",
    "school monitor jobs Chicago",
    "non-CDL driver jobs Chicago",
  ],
  alternates: {
    canonical: "https://slntransportation.com/apply",
  },
  openGraph: {
    title: "Careers & Driver Applications | SLN Transportation",
    description:
      "Join the SLN Transportation team in Chicago and Cook County, IL. Apply online for school vehicle driver and student monitor opportunities.",
    url: "https://slntransportation.com/apply",
    images: [
      {
        url: "/images/hero-social.webp",
        width: 1200,
        height: 630,
        alt: "SLN Transportation Careers and Driver Application",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "School Driver & Monitor Careers | SLN Transportation",
    description:
      "Apply online for school vehicle driver and student monitor opportunities with SLN Transportation in Chicago, IL.",
    images: ["/images/hero-social.webp"],
  },
};

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ position?: string | string[] }>;
}) {
  const { position } = await searchParams;
  const initialPosition = position === "monitor" ? "monitor" : "driver";

  return <DriverApplication initialPosition={initialPosition} />;
}
