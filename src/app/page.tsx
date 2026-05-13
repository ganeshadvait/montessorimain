import HomeHero from "../../components/home-hero";
import HomeMarquee from "../../components/home-marquee";
import HomeHighlightCards from "../../components/home-highlight-cards";
import HomeCurriculum from "../../components/home-curriculum";
import HomeAboutUs from "../../components/home-about-us";
import HomeBlogs from "../../components/home-blogs";
import HomeQuickEnquiry from "../../components/home-quick-enquiry";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeMarquee />
      <HomeHighlightCards />
      <HomeCurriculum />
      <HomeAboutUs />
      <HomeBlogs />
      <HomeQuickEnquiry />
    </main>
  );
}
