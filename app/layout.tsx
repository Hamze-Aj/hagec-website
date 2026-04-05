import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "HAGEC – Horn of African Geology & Engineering Consultant",
    template: "%s | HAGEC",
  },
  description:
    "HAGEC is a leading multidisciplinary engineering consultancy based in Jigjiga, Somali Region, Ethiopia. Specializing in irrigation, hydrology, geotechnical studies, solar-pump systems, GIS, surveying, and environmental impact assessments.",
  keywords: [
    "engineering consultancy Ethiopia",
    "irrigation design Somali Region",
    "hydrology Horn of Africa",
    "geotechnical studies Jigjiga",
    "solar pump irrigation Ethiopia",
    "GIS surveying Ethiopia",
    "water resources consultancy",
    "HAGEC engineering",
  ],
  authors: [{ name: "HAGEC – Horn of African Geology & Engineering Consultant" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hagec.et",
    siteName: "HAGEC Engineering Consultancy",
    title: "HAGEC – Sustainable Engineering Solutions for the Horn of Africa",
    description:
      "Multidisciplinary engineering consultancy delivering world-class irrigation, water resources, geotechnical, and infrastructure solutions across the Horn of Africa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HAGEC – Engineering Consultancy | Horn of Africa",
    description:
      "Delivering sustainable engineering solutions for water resources & infrastructure in the Horn of Africa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
