import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import * as Sentry from "@sentry/nextjs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});


export function generateMetadata(): Metadata {
  return {
    title: "Horizon",
    description: "Horizon is a modern banking platform for everyone.",
    other: {
      ...Sentry.getTraceData(),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}