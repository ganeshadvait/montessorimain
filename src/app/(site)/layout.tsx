import Footerone from "../../../components/footer";
import GsapExpandingHeader from "../../../components/header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GsapExpandingHeader />
      {children}
      <Footerone />
    </>
  );
}
