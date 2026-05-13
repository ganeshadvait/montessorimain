//File :- src/app/about/testimonials/page.tsx

import PageHero from "../../../../components/page-hero";
import TestimonialCard, {
  type TestimonialCardProps,
} from "../../../../components/about/testimonial-card";

const testimonials: TestimonialCardProps[] = [
  {
    quote:
      "We felt that this is the important decision of my son's career...we enquired in all the aspects about this school...school is the basic foundation of knowledge being imparted to a child especially in academics and non academics too....this is the best school in my vicinity couple of times we visited the campus which is environment friendly....we were impressed by the infrastructure... We got good reviews about the quality maintained in your schools from various places...Finally our family make a consensus to join our son in this institution...",
    name: "Ramu Chanda",
    role: ":",
  },
  {
    quote:
      "I sincerely thank the Management, Principal, and each and every member of the staff at Montessori Prime School for everything that they have done to make my son's time at school enjoyable and productive. I have seen my son's exponential and quick growth while reading the encouraging and thankful things in the messages and in Dairy. My best wishes to Montessori Prime School.",
    name: "Dr. I. Rajasri Reddy",
    role: "Principal, Sumathi Reddy Institute of Technology for Women",
  },
  {
    quote:
      "I am B. S. R. Prasad, father of B. Bhavish who is studying in 6th standard. We decided to join him in hostel as we both are Employees. There are many things that I admire about the school, Friendly and safe environment, brilliant teachers and modern learning. Along with regular academics, IIT & NEET are also being taught by excellent teachers. My son is actively participating in co- curricular activities like cricket ,Music (Drums) and he is doing well in it. I am very much satisfied with the hostel facilities and food. We are happy and fortunate to have chosen Montessori Prime School as our Son's centre of learning. Much Gratitude any many thanks!!!",
    name: "B. S. R. Prasad",
    role: "M. Sc Agriculture, Working as Manager QCFood Corporation of India",
  },
  {
    quote:
      "I am Aparna Suman as a parent we have made the right choice to enroll our Kid Elsy Neorah, Grade -2 in Montessori Prime School. It is a good school with a balance of academics and sports. Transport and canteen facilities are at their best. As a parent, I am happy with the teaching methodology, co-curricular activities, administration of tests and exams as well as discipline in the campus. I must say that the attitude of teaching staff and administrative staff is excellent, they are very caring and helpful.",
    name: "Dr. T. Suman Anaesthetist & Aparna M. Pharm.",
    role: "Parents",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Testimonials" },
        ]}
        title="Testimonials"
      />

      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
