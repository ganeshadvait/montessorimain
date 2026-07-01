import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./flaticon.css";
import { HeaderVariantB as Header } from "../../components/header-variants";
import Footer from "../../components/footer-modern";
import HomeChairmanPopup from "../../components/home-chairman-popup";

// Chirag — used site-wide for all font roles.
const chirag = localFont({
  src: [
    { path: "../../public/chirag-font/chirag-regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/chirag-font/chirag-bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-chirag",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Montessori Prime School",
  description:
    "Montessori Prime School — child-centered education from pre-primary through high school.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
        className={`${chirag.variable} antialiased`}
        style={
          {
            // Point every theme font token at Chirag so the whole site uses it.
            "--font-family": "var(--font-chirag)",
            "--font-family2": "var(--font-chirag)",
            "--font-family4": "var(--font-chirag)",
          } as React.CSSProperties
        }
      >
        <Header />
        {children}
        <HomeChairmanPopup />
        <Footer />
      </body>
    </html>
  );
}
