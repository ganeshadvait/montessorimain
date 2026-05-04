import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const hostGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/Host Grotesk/co3BmWBnlCJ3U42vbbfdwMjZpFjmw07Arg.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Host Grotesk/-F63fjptAgt5VM-kVkqdyU8n1i8q131nj-o.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-host-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Montessori Prime",
  description:
    "Montessori Prime — a CBSE-affiliated Montessori school combining rigorous academics with child-centered, hands-on learning from Pre-Nursery to Grade XII.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hostGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
