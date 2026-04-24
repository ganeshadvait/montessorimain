//File :- /src/app/home-three/page.tsx
import Features from "../../../components/schoolfeatures";
import Header from "./header";
import HeroSection from "./hero-section";
import Programs from "./programs";

export default function HomeThree() {
  return (
    <>
      <div
        className="w-full min-h-screen overflow-hidden"
        style={{
          backgroundColor: "#FFF5ED",
          fontFamily: "var(--font-outfit), system-ui, sans-serif",
        }}
      >
        <Header />
        <HeroSection />
      </div>
      <Programs />
      <Features />
    </>
  );
}
