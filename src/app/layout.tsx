import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aitryhard-site.vercel.app"),
  title: "aitryhard",
  description: "desktop apps · backend · ai — actively learning, building, practicing",
  openGraph: {
    title: "aitryhard",
    description: "building desktop apps, backend services and ai tools",
    siteName: "aitryhard",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "aitryhard",
    description: "desktop apps · backend · ai",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
