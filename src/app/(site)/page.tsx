import HeroSection from "../../../components/hero-curiosity";
import Philosophy from "../../../components/philosophy";
import Features from "../../../components/schoolfeatures";
import Programs from "../../../components/programs";
import DailyLife from "../../../components/daily-life";
import Testimonials from "../../../components/testimonials";
import AdmissionsCTA from "../../../components/admissions-cta";

export default function Home() {
  return (
    <main className="font-sans">
      <HeroSection />
      <Philosophy />
      <Features />
      <Programs />
      <DailyLife />
      <Testimonials />
      <AdmissionsCTA />
    </main>
  );
}
