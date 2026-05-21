import HomeHero from "../../components/home-hero";
import HomeMarquee from "../../components/home-marquee";
import HomeHighlightCards from "../../components/home-highlight-cards";
import HomeCurriculum from "../../components/home-curriculum";
import HomeAboutUs from "../../components/home-about-us";
import HomeTraining from "../../components/home-training";
import HomeTrainingV2 from "../../components/home-training-v2";
import HomeStrengths from "../../components/home-strengths";
import HomeStrengthsV2 from "../../components/home-strengths-v2";
import HomeJoin from "../../components/home-join";
import HomeGallery from "../../components/home-gallery";
import HomeEvents from "../../components/home-events";
import HomeBlogs from "../../components/home-blogs";
import HomeQuickEnquiry from "../../components/home-quick-enquiry";
import HomeChairmanPopup from "../../components/home-chairman-popup";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeMarquee />
      <HomeHighlightCards />
      <HomeCurriculum />
      <HomeAboutUs />
      {/* <HomeTraining /> */}
      <HomeTrainingV2 />
      {/* <HomeStrengths /> */}
      <HomeStrengthsV2 />
      <HomeJoin />
      <HomeGallery />
      <HomeEvents />
      <HomeQuickEnquiry />
      <HomeBlogs />
    </main>
  );
}