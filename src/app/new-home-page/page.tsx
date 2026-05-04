//File :- src/app/new-home-page/page.tsx
import AnnouncementMarquee from "./_components/announcement-marquee";
import HighlightCards from "./_components/highlight-cards";
import CurriculumStages from "./_components/curriculum-stages";
import AboutUs from "./_components/about-us";
import TrainingTracks from "./_components/training-tracks";
import StrengthsStats from "./_components/strengths-stats";
import VideoShowcase from "./_components/video-showcase";
import WhyJoin from "./_components/why-join";
import Gallery from "./_components/gallery";
import UpcomingEvents from "./_components/upcoming-events";
import QuickEnquiry from "./_components/quick-enquiry";
import Blogs from "./_components/blogs";
import HeroSection from "../../../components/hero-curiosity";
import GsapExpandingHeader from "../../../components/header";
import Footerone from "../../../components/footer";

export default function NewHomePage() {
  return (
    <>
      <GsapExpandingHeader />
      <main className="font-sans">
        <HeroSection />
        <AnnouncementMarquee />
        <HighlightCards />
        <CurriculumStages />
        <AboutUs />
        <TrainingTracks />
        <StrengthsStats />
        <VideoShowcase />
        <WhyJoin />
        <Gallery />
        <UpcomingEvents />
        <Blogs />
        <QuickEnquiry />
      </main>
      <Footerone />
    </>
  );
}
