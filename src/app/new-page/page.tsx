//File :- src/app/new-page/page.tsx
import localFont from "next/font/local";
import { Header } from "../../../components/newDesignUi/boty/header";
import { Hero } from "../../../components/newDesignUi/boty/hero";
import { TrustBadges } from "../../../components/newDesignUi/boty/trust-badges";
import { AboutSection } from "../../../components/newDesignUi/boty/about-section";
import { FeatureSection } from "../../../components/newDesignUi/boty/feature-section";
import { CurriculumSection } from "../../../components/newDesignUi/boty/curriculum-section";
import { AmenitiesSection } from "../../../components/newDesignUi/boty/amenities-section";
import { DirectorSection } from "../../../components/newDesignUi/boty/director-section";
import { DoctorsSection } from "../../../components/newDesignUi/boty/doctors-section";
import { HostelSection } from "../../../components/newDesignUi/boty/hostel-section";
import { VideoSection } from "../../../components/newDesignUi/boty/video-section";
import { Testimonials } from "../../../components/newDesignUi/boty/testimonials";
import { TestimonialCarousel } from "../../../components/newDesignUi/boty/testimonial-carousel";
import { VideoTestimonials } from "../../../components/newDesignUi/boty/video-testimonials";
import { Events } from "../../../components/newDesignUi/boty/events";
import { BlogsSection } from "../../../components/newDesignUi/boty/blogs-section";
import { CTABanner } from "../../../components/newDesignUi/boty/cta-banner";
import { BookAppointment } from "../../../components/newDesignUi/boty/book-appointment";
import { Newsletter } from "../../../components/newDesignUi/boty/newsletter";
import { Footer } from "../../../components/newDesignUi/boty/footer";
import FloatingCTA from "../../../components/newDesignUi/boty/floating-cta";
import { AdmissionPopup } from "../../../components/newDesignUi/boty/admission-popup";
import { RankingBannerPopup } from "../../../components/newDesignUi/boty/ranking-banner-popup";
import { HeaderVariantB } from "../../../components/header-variants";

// Temporary: load the Chirag font scoped to this page only.
const chirag = localFont({
  src: [
    {
      path: "../../../public/chirag-font/chirag-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/chirag-font/chirag-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-chirag",
});

export default function NewPage() {
  return (
    <div
      className={chirag.variable}
      style={
        {
          // Remap the theme font tokens so font-sans/serif/display utilities
          // used by the boty sections all render in Chirag — page-scoped only.
          "--font-sans": "var(--font-chirag)",
          "--font-serif": "var(--font-chirag)",
          "--font-display": "var(--font-chirag)",
          fontFamily: "var(--font-chirag)",
        } as React.CSSProperties
      }
    >
      <HeaderVariantB />
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
        {/* <AmenitiesSection /> */}

        <DoctorsSection />

        {/* <VideoSection /> */}

        {/* <Events /> */}

        <BookAppointment />
        <CTABanner />
      </main>

      {/* Overlays */}
      <FloatingCTA />
      <AdmissionPopup />
      <RankingBannerPopup />
    </div>
  );
}
