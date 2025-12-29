import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { BannerProvider } from "@/context/BannerContext";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Codology | Modern Web Development Agency",
  description:
    "Building the future of software. We craft stunning, high-performance web and mobile applications for forward-thinking businesses.",
  keywords: [
    "web development",
    "mobile apps",
    "UI/UX design",
    "software agency",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Codology" }],
  openGraph: {
    title: "Codology | Modern Web Development Agency",
    description:
      "Building the future of software. We craft stunning, high-performance web and mobile applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased">
        <Providers>
          <BannerProvider>
            <StickyBanner className="bg-gradient-to-r from-blue-500 to-blue-600">
              <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
                We are Live! Kickstart your 2026 with 20% off your first
                software solution.{" "}
                <a
                  href="#"
                  className="font-semibold transition duration-200 hover:underline"
                >
                  View Offer →
                </a>
              </p>
            </StickyBanner>
            <Header />
            <main>{children}</main>
            <Footer />
          </BannerProvider>
        </Providers>
      </body>
    </html>
  );
}
