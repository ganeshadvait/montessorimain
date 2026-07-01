//File :- src/app/home-v1/page.tsx
// Previous home page design, preserved and still viewable at /home-v1.
import HomeHero from "../../../components/home-hero";
import HomeMarquee from "../../../components/home-marquee";
import HomeHighlightCards from "../../../components/home-highlight-cards";
import HomeCurriculum from "../../../components/home-curriculum";
import HomeAboutUs from "../../../components/home-about-us";
import HomeTrainingV2 from "../../../components/home-training-v2";
import HomeStrengthsV2 from "../../../components/home-strengths-v2";
import HomeJoin from "../../../components/home-join";
import HomeGallery from "../../../components/home-gallery";
import HomeEvents from "../../../components/home-events";
import HomeBlogs from "../../../components/home-blogs";
import HomeQuickEnquiry from "../../../components/home-quick-enquiry";

export default function HomeV1() {
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
