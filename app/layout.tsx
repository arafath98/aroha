import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant-garamond",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aroha.fashion"),

  title: {
    default: "Aroha Fashion",
    template: `%s | Aroha Fashion`,
  },
  description:
    "Discover the latest trends with Aroha Fashion. Shop our collection of quality clothing, accessories, and more.",

  keywords: ["fashion", "clothing", "style", "apparel", "accessories", "Aroha"],

  openGraph: {
    title: "Aroha Fashion",
    description: "Discover the latest trends with Aroha Fashion.",
    url: "https://aroha.fashion",
    siteName: "Aroha Fashion",
    images: [
      {
        url: "/AROHA.png",
        width: 1000,
        height: 1000,
        alt: "Aroha Fashion",
      },
    ],
    type: "website",
  },

  icons: {
    icon: "favicon.ico",
    apple: "icons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
