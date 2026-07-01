//File :- components/new-design-home.tsx
// Shared boty landing content, rendered at both "/" and "/new-page".
// Header (HeaderVariantB) and the Chirag font are provided globally by layout.tsx.
import { Hero } from "./newDesignUi/boty/hero";
import { TrustBadges } from "./newDesignUi/boty/trust-badges";
import { CurriculumSection } from "./newDesignUi/boty/curriculum-section";
import { AboutSection } from "./newDesignUi/boty/about-section";
import { Testimonials } from "./newDesignUi/boty/testimonials";
import { VideoTestimonials } from "./newDesignUi/boty/video-testimonials";
import { DirectorSection } from "./newDesignUi/boty/director-section";
import { HostelSection } from "./newDesignUi/boty/hostel-section";
import { FeatureSection } from "./newDesignUi/boty/feature-section";
import { TestimonialCarousel } from "./newDesignUi/boty/testimonial-carousel";
import { DoctorsSection } from "./newDesignUi/boty/doctors-section";
import { BookAppointment } from "./newDesignUi/boty/book-appointment";
import { CTABanner } from "./newDesignUi/boty/cta-banner";
import FloatingCTA from "./newDesignUi/boty/floating-cta";
import { AdmissionPopup } from "./newDesignUi/boty/admission-popup";
import { RankingBannerPopup } from "./newDesignUi/boty/ranking-banner-popup";

export default function NewDesignHome() {
  return (
    <>
      <main>
        <Hero />
        <TrustBadges />
        <CurriculumSection />
        <AboutSection />
        <Testimonials />
        <VideoTestimonials />
        <DirectorSection />
        <HostelSection />
        <FeatureSection />
        <TestimonialCarousel />
        <DoctorsSection />
        <BookAppointment />
        <CTABanner />
      </main>

      {/* Overlays */}
      <FloatingCTA />
      <AdmissionPopup />
      <RankingBannerPopup />
    </>
  );
}
