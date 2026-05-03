import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shringaar Studio by Samapti | Best Nail Extension in Indirapuram",
    template: "%s | Shringaar Studio by Samapti",
  },
  description:
    "Premium nail extension, nail art, manicure & pedicure studio in Indirapuram, Ghaziabad. Hygiene-first approach with expert nail technicians. Book your appointment today!",
  keywords: [
    "nail extension indirapuram",
    "nail art indirapuram",
    "nail salon ghaziabad",
    "best nail extensions near me",
    "gel nails indirapuram",
    "acrylic nails indirapuram",
    "manicure pedicure indirapuram",
    "shringaar studio",
  ],
  authors: [{ name: "Shringaar Studio by Samapti" }],
  creator: "Shringaar Studio by Samapti",
  metadataBase: new URL("https://shringaarstudio.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shringaarstudio.com",
    siteName: "Shringaar Studio by Samapti",
    title: "Shringaar Studio by Samapti | Best Nail Extension in Indirapuram",
    description:
      "Premium nail extension, nail art, manicure & pedicure studio in Indirapuram, Ghaziabad.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shringaar Studio by Samapti",
    description:
      "Premium nail extension, nail art, manicure & pedicure studio in Indirapuram.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
