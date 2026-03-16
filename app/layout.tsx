import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Mono } from "next/font/google";
import { AnalyticsProvider } from "@/analytics";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "EARTH SIMULATION CONTROL PANEL — CLASSIFIED",
  description:
    "What would the control panel look like if Earth were a simulation? Explore the settings that produce our reality.",
  metadataBase: new URL("https://earth.jamelna.com"),
  openGraph: {
    title: "EARTH SIMULATION CONTROL PANEL — CLASSIFIED",
    description: "What if Earth were a simulation? Explore the control panel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${spaceMono.variable}`}>
      <body className="bg-bg text-text font-mono antialiased">
        <AnalyticsProvider projectId="earth-simulator">
          <div className="scanline-overlay" />
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}
