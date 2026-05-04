import HeroSection from "../../../components/hero-curiosity";
import AwardsStripe from "../../../components/awards-stripe";
import AcademicsFeature from "../../../components/academics-feature";
import ProfessorsMarquee from "../../../components/professors-marquee";
import Philosophy from "../../../components/philosophy";
import Features from "../../../components/schoolfeatures";
import Programs from "../../../components/programs";
import DailyLife from "../../../components/daily-life";
import Testimonials from "../../../components/testimonials";
import FaqOne from "../../../components/faqs";
import AdmissionsCTA from "../../../components/admissions-cta";

export default function Home() {
  return (
    <main className="font-sans">
      <HeroSection />
      <AwardsStripe />
      <AcademicsFeature />
      <ProfessorsMarquee />
      <Philosophy />
      <Features />
      <Programs />
      <DailyLife />
      <Testimonials />
      <FaqOne />
      <AdmissionsCTA />
    </main>
  );
}
