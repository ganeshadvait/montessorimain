//File :- components/home-highlight-cards.tsx
type Card = {
  iconClass: string;
  title: string;
  body: string;
  borderColor: string;
  bgImage?: string;
};

const cards: Card[] = [
  {
    iconClass: "flaticon-brain-process",
    title: "Residential and Day Scholar",
    body:
      "We provide best facilities for students for their overall development. We have air-conditioned Campus and hostel with separate accommodation provided for boys and girls. The meals provided in mess are healthy and tasty keeping balance diet in mind.",
    borderColor: "#E91E63",
    bgImage: "/home/icon-shape.png",
  },
  {
    iconClass: "flaticon-computer",
    title: "Integrated CBSE Curriculum",
    body:
      "Our school follows CBSE curriculum as it renders more knowledge for many competitive exams and prepares students well for their future.",
    borderColor: "#1FBABA",
    bgImage: "/home/icon-shape.png",
  },
];

export default function HomeHighlightCards() {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-[1000px] px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          {cards.map(({ iconClass, title, body, borderColor, bgImage }) => (
            <article
              key={title}
              className="group relative overflow-hidden bg-white px-8 py-12 md:px-12 md:py-14 text-center transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_22px_40px_-14px_var(--card-glow)] cursor-pointer"
              style={{
                border: `1px solid ${borderColor}`,
                borderRadius: 8,
                ["--card-glow" as string]: `${borderColor}66`,
              }}
            >
              <div className="relative">
                {/* Icon with background pattern behind */}
                <div className="relative flex justify-center items-center mb-8 h-[140px]">
                  {bgImage && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[140px] bg-no-repeat bg-center"
                      style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: "contain",
                      }}
                    />
                  )}
                  <i
                    aria-hidden
                    className={`${iconClass} relative`}
                    style={{ fontSize: 70, color: "#1a1a1a", lineHeight: 1 }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-[22px] md:text-[24px] font-bold tracking-tight"
                  style={{ color: "#231a3d" }}
                >
                  {title}
                </h3>

                {/* Body */}
                <p
                  className="mt-5 text-[15px] md:text-[16px] leading-[1.8] max-w-[420px] mx-auto"
                  style={{ color: "#5e5e6e" }}
                >
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
