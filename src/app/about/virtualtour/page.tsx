//File :- src/app/about/virtualtour/page.tsx

import PageHero from "../../../../components/page-hero";
import VirtualTourAccordion, {
  type VirtualTourItem,
} from "../../../../components/about/virtual-tour-accordion";

const tourItems: VirtualTourItem[] = [
  {
    title: "Main Entrance",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1778675336479!6m8!1m7!1sCAoSLEFGMVFpcE9ZTUVlNGZqV2ZBamxJZ0w0WXRzU3NDVkVWOGdkd3FNcDJPZFpj!2m2!1d18.09040232893893!2d79.49110377903715!3f87.06!4f0!5f0.5970117501821992",
  },
  {
    title: "Administrative Office",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1778675468550!6m8!1m7!1sCAoSLEFGMVFpcE14MmlvZEFtMkNvaTdSMVBGOVJTUklPc2hfcktnQ3Nxdmg2YTdC!2m2!1d18.09039702461681!2d79.49116024268264!3f20!4f10!5f0.5970117501821992",
  },
  {
    title: "Kinder Garten Class",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1778675485717!6m8!1m7!1sCAoSLEFGMVFpcE0ycHBDOFM0Wk5kQml0M013T3N3TnY4aHpMRFo4U003S3FCM292!2m2!1d18.09039702461681!2d79.49116024268264!3f20!4f10!5f0.5970117501821992",
  },
  {
    title: "II Class",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1778675503772!6m8!1m7!1sCAoSLEFGMVFpcE94aHhld0NCX0VPVERqWGF5N3AxOUI3TE5RUkRWR3I3OTFDOS05!2m2!1d18.09039702461681!2d79.49116024268264!3f7.03!4f3.25!5f0.5970117501821992",
  },
  {
    title: "IV Class",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1778675520380!6m8!1m7!1sCAoSLEFGMVFpcE5ETU9Vbk50SC1CLVdXaEZDUlA0bm9rRFlUb2FIX1laTjBGMWNY!2m2!1d18.09039702461681!2d79.49116024268264!3f0!4f-90!5f3.325193203789971",
  },
  {
    title: "VIII Class",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1778675539611!6m8!1m7!1sCAoSLEFGMVFpcE1TOXlESno1bEZzcUtPaHFpU3ZoeVppTDBodEpBZVk1SWZzTVNo!2m2!1d18.09039702461681!2d79.49116024268264!3f19.68!4f5.269999999999996!5f0.5970117501821992",
  },
  {
    title: "Physics Laboratory",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1778675576796!6m8!1m7!1sCAoSLEFGMVFpcE1uWnFRd0lXV2VLbDctS3dXa3BsYkQ3aGEyR2NvS191SmROU1Fw!2m2!1d18.09039702461681!2d79.49116024268264!3f0!4f0!5f0.5970117501821992",
  },
  {
    title: "Biology Laboratory",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1778675595373!6m8!1m7!1sCAoSLEFGMVFpcE1ENlFTUUxQcjlGQnZtYi1PUUpvcnBYVjhfaGFRVXJoMmRJTVE0!2m2!1d18.09039702461681!2d79.49116024268264!3f0!4f0!5f0.5970117501821992",
  },
  {
    title: "Computer Laboratory",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1778675614982!6m8!1m7!1sCAoSLEFGMVFpcE5EdHZUckdGVVN2OEltcFJxazhleEVSVWdsdHJtaEl2ZHpuQnhS!2m2!1d18.09039702461681!2d79.49116024268264!3f0!4f-90!5f3.325193203789971",
  },
  {
    title: "Digital Library",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1778675643457!6m8!1m7!1sCAoSLEFGMVFpcE95aUQzdkZ4dUlvaEVFWE9leGQ2RWF5ekNMc3ZnUmF6bjhpZVVw!2m2!1d18.09039702461681!2d79.49116024268264!3f0!4f0!5f0.5970117501821992",
  },
  {
    title: "Music Class",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1778675668824!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ3h0OFNPUnc.!2m2!1d18.09042379644174!2d79.4911630744451!3f178.68191560674316!4f4.0104062073807825!5f0.7820865974627469",
  },
  {
    title: "Swimming Pool",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1778675699732!6m8!1m7!1sCAoSLEFGMVFpcE5vRmhxbDJ4b1RZcmZqWVlXUDh4ZGc4bFBScDNYT0FqZVBTWFRj!2m2!1d18.09039702461681!2d79.49116024268264!3f0.1!4f0!5f0.5970117501821992",
  },
  {
    title: "Horse Ride",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1778675755894!6m8!1m7!1sCAoSLEFGMVFpcFBmd285QmZfaU03TmZJSjIxdFc0U2RkcjNHa196cGlvbTg5STlK!2m2!1d18.09039702461681!2d79.49116024268264!3f327.6719590242862!4f6.240917087170089!5f0.5970117501821992",
  },
  {
    title: "Girls Hostel",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1778675785200!6m8!1m7!1sCAoSLEFGMVFpcE1GSWtVY1dyMk9DaDZqbnVkSU1nbkU2VW8yQ1QyNmJ1cnJKb2xM!2m2!1d18.09039702461681!2d79.49116024268264!3f37.18!4f-2.760000000000005!5f0.4000000000000002",
  },
  {
    title: "Boys Hostel",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1778675805881!6m8!1m7!1sCAoSLEFGMVFpcE1QUWQyWEpZdkhpTE9Oc0ZuLU9mM3BuUF9VR1M0dkN5MXYxSi1S!2m2!1d18.09039702461681!2d79.49116024268264!3f0.1!4f0!5f0.5970117501821992",
  },
];

export default function VirtualTourPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Virtual Tour" },
        ]}
        title="Virtual Tour"
      />

      <section className="w-full">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 py-12 md:py-16">
          <VirtualTourAccordion items={tourItems} />
        </div>
      </section>
    </main>
  );
}
