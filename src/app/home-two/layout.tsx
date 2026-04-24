import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Two",
  description: "Alternate home layout",
};

export default function HomeTwoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="home-two flex-1">{children}</section>;
}
