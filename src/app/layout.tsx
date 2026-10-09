import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "./globals.css";
import "./scroll-motion.css";

export const metadata: Metadata = {
  title: "507-AD — Your food. Your floor.",
  description: site.description,
  ...(site.url
    ? { metadataBase: new URL(site.url), alternates: { canonical: "/" } }
    : {}),
  openGraph: {
    title: "507-AD — Your food. Your floor.",
    description: site.description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "507-AD — Your food. Your floor.",
    description: site.description,
  },
};
export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
