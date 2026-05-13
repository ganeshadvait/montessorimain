//File :- src/app/about/infrastructure/page.tsx

import PageHero from "../../../../components/page-hero";
import FacilitySection, {
  Heading,
  Paragraph,
  ChevronListItem,
} from "../../../../components/about/facility-section";

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Infrastructure Facilities" },
        ]}
        title="Infrastructure Facilities"
      />

      {/* SECTION 1: Campus — image left */}
      <FacilitySection
        image="/about/Infrastructure Facilities/campus.png"
        imageAlt="Montessori Prime School campus"
        imageOnLeft
        background="#ffffff"
        tabs={[
          {
            label: "Infrastructure",
            content: (
              <>
                <Heading>Modern School Infrastructure</Heading>
                <Paragraph>
                  An ultra modern school Infrastructure building with FULLY
                  AirConditioned class rooms. Optimized class strength for
                  interactive learning Well stocked library, Modern 3D
                  Laboratories for Physics, Chemistry, Biology, Linguistic,
                  Math, Robotics State of the art Computer Lab An in house
                  clinic under the supervision of a trained nurse and doctor
                  for preventive and emergency medical care.
                </Paragraph>
                <Heading>Certification</Heading>
                <Paragraph>
                  We believe that creative achievements build a confident human
                  being with great self worth and esteem. Music and dance,
                  theatre, pottery and painting, crafting models are not just
                  extracurricular activities; they are co-curricular activities
                  integrated to their course of study to let the children
                  understand how all learning is interconnected-baking with
                  Chemistry, bowling with Physics, music with Mathematics.
                </Paragraph>
              </>
            ),
          },
          {
            label: "Our Garden Campus",
            content: (
              <>
                <Heading>Campus</Heading>
                <Paragraph>
                  Our garden campus is imaginative and includes safe play area
                  for young along with presentation and performance spaces
                  within each phase of the campus. Montessori Prime School,
                  located on the Warangal– Karimnagar Highway, built on lavish
                  9 acre campus with over 2,30,000 sq. ft. of carpet area, is
                  the first of its kind in Premium Education Institute in
                  WARANGAL Region. Montessori Prime School is just 8kms from
                  Kakatiya University. Sporting facilities include spacious
                  playground for Volleyball, Badminton, Shuttle, Basketball,
                  Skating Zone, Cricket stadium, Athletic Track, well planned
                  swimming pool.
                </Paragraph>
              </>
            ),
          },
        ]}
      />

      {/* SECTION 2: Transport — image right */}
      <FacilitySection
        image="/about/Infrastructure Facilities/transport.png"
        imageAlt="Modern transport facilities"
        imageOnLeft={false}
        background="#f3ede4"
        tabs={[
          {
            label: "Modern Transport",
            content: (
              <>
                <Heading>Modern School Infrastructure</Heading>
                <Paragraph>
                  Modern transport facilities equipped with GPRS, Mobile phones
                  and First Aid kits Fully Air-Conditioned Boys &amp; Girls
                  Hostel with attached bathroom and study infrastructure Well
                  planned nutritious Meal Plan for Children Periodic camps for
                  skin, dental and eyecare along with general healthcare..
                </Paragraph>
                <Heading>Discipline</Heading>
                <Paragraph>
                  Montessori Prime sows the seeds of discipline in all the
                  children in such a way that they germinate into complete
                  human beings. The curricula themselves have the discipline
                  aspect embedded within them. With this, a child learns to
                  obey and respect time and punctuality gets into his/her
                  blood forever.
                </Paragraph>
              </>
            ),
          },
          {
            label: "Quality Co-Curricular Facilities.",
            content: (
              <>
                <Heading>Facilities</Heading>
                <Paragraph>
                  Fully Air conditioned Girls Hostel with 4 students in a room
                  with facilities of attached bathrooms, study table for
                  individual learning. Fully Air conditioned Boys Hostel with 4
                  students in a room with facilities of attached bathrooms,
                  study table for individual learning.
                </Paragraph>
                <Paragraph>
                  Well furnished &amp; separate Air-Conditioned dining halls
                  for boys and girls.
                </Paragraph>
                <Paragraph>Homely atmosphere.</Paragraph>
                <Paragraph>Nutritious &amp; balanced diet.</Paragraph>
                <Paragraph>Regular counseling by professionals.</Paragraph>
              </>
            ),
          },
        ]}
      />

      {/* SECTION 3: Sports & Hostel — image left */}
      <FacilitySection
        image="/about/Infrastructure Facilities/sports.png"
        imageAlt="Sports facilities"
        imageOnLeft
        background="#ffffff"
        tabs={[
          {
            label: "Sports",
            content: (
              <>
                <Heading>Montessori Prime School</Heading>
                <Paragraph>
                  Montessori Prime School is with 9 acre lavish campus built
                  over 2, 30,000 sq.ft becomes the first school of its nature
                  in WARANGAL. It is located on the Warangal – Karimnagar
                  Highway, just 8kms from Kakatiya University.An ultra modern
                  school building with FULLY Air conditioned class rooms with
                  limited strength in each class. Our MPS provides quality
                  education, sports and co-curricular facilities. Well stocked
                  library, Modern 3D Laboratories for Physics, Chemistry,
                  Biology, Linguistic, Math and a state of the art computer
                  laboratory give our school the cutting edge advantage in
                  terms of infrastructure.Sporting facilities include spacious
                  playground for volley ball court, Badminton court, shuttle
                  court, Basket ball court, Skating Zone, Cricket stadium,
                  Athletic Track, well planned swimming pool.Our garden campus
                  is imaginative and includes safe play areas for the young
                  pupils and a number of presentation and performance spaces
                  within each phase of the school.An in house clinic under the
                  supervision of a trained nurse and doctor provides
                  preventive and emergency medical care to the children.
                </Paragraph>
              </>
            ),
          },
          {
            label: "Hostel",
            content: (
              <>
                <Heading>Our Hostel</Heading>
                <ul className="space-y-2">
                  <ChevronListItem>Homely atmosphere</ChevronListItem>
                  <ChevronListItem>Full –time hostel Matrons</ChevronListItem>
                  <ChevronListItem>Dedicated housekeepers</ChevronListItem>
                  <ChevronListItem>Nutritious &amp; balanced diet</ChevronListItem>
                  <ChevronListItem>Regular counseling by professionals</ChevronListItem>
                  <ChevronListItem>
                    In – house dispensaries with 24x7 medical attentions
                  </ChevronListItem>
                  <ChevronListItem>
                    In – house water purification plant
                  </ChevronListItem>
                  <ChevronListItem>
                    Fully Air conditioned Girls Hostel with 4 students in a
                    room with facilities of attached bathrooms, study table for
                    individual learning
                  </ChevronListItem>
                  <ChevronListItem>
                    Fully Air conditioned Boys Hostel with 4 students in a
                    room with facilities of attached bathrooms, study table for
                    individual learning
                  </ChevronListItem>
                </ul>
              </>
            ),
          },
        ]}
      />
    </main>
  );
}
