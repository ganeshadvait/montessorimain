import HeroSection from "../../../components/hero-curiosity";
import AwardsStripe from "../../../components/awards-stripe";
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
      <AwardsStripe />
      <Philosophy />
      <Features />
      <Programs />
      <DailyLife />
      <Testimonials />
      <AdmissionsCTA />
    </main>
  );
}
