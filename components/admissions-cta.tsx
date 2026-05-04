//File :- components/admissions-cta.tsx
import { ArrowRight, Calendar, Phone, Mail } from "lucide-react";

export default function AdmissionsCTA() {
  return (
    <section id="apply" className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div
          className="relative overflow-hidden rounded-[40px] md:rounded-[56px] px-8 py-16 md:px-16 md:py-24 text-white"
          style={{
            background:
              "linear-gradient(135deg, var(--palette-magenta) 0%, var(--palette-coral) 55%, var(--palette-sun) 125%)",
          }}
        >
          {/* Decorative circles */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-[380px] w-[380px] rounded-full bg-white/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-20 h-[340px] w-[340px] rounded-full bg-black/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-[18%] right-[22%] h-3 w-3 rounded-full bg-white/70"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[28%] left-[18%] h-2 w-2 rounded-full bg-white/60"
          />

          <div className="relative grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.18em]">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Admissions open for 2026–27
              </span>
              <h2 className="mt-6 text-[42px] md:text-[68px] font-semibold leading-[0.98] tracking-tight">
                Come see it{" "}
                <span
                  className="italic"
                  style={{ fontFamily: "ui-serif, Georgia, serif" }}
                >
                  in person
                </span>
                .
              </h2>
              <p className="mt-6 max-w-xl text-[17px] md:text-[19px] text-white/90 leading-relaxed">
                Words only go so far. Spend an hour in a classroom, watch
                children at work, meet our guides. Tours run twice a week, and
                we’d love to host you.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#book-tour"
                  className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[14px] font-semibold transition-transform hover:-translate-y-0.5"
                  style={{ background: "#dff58a", color: "#0d2622" }}
                >
                  BOOK A SCHOOL TOUR
                  <ArrowRight size={16} strokeWidth={2.2} />
                </a>
                <a
                  href="#request-info"
                  className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-xl px-7 py-3.5 text-[14px] font-semibold text-white hover:bg-white/20 transition-colors"
                >
                  REQUEST A PROSPECTUS
                  <ArrowRight size={16} strokeWidth={2.2} />
                </a>
              </div>
            </div>

            <div className="md:col-span-5 md:pl-8 md:border-l md:border-white/25">
              <div className="text-[13px] uppercase tracking-[0.2em] text-white/70">
                Or talk to us
              </div>
              <ul className="mt-5 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                    <Phone size={16} />
                  </span>
                  <div>
                    <div className="text-[13px] text-white/70">Call us</div>
                    <a
                      href="tel:+910000000000"
                      className="text-[17px] font-semibold"
                    >
                      +91 00000 00000
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                    <Mail size={16} />
                  </span>
                  <div>
                    <div className="text-[13px] text-white/70">Email</div>
                    <a
                      href="mailto:admissions@montessori.example"
                      className="text-[17px] font-semibold"
                    >
                      admissions@montessori.example
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                    <Calendar size={16} />
                  </span>
                  <div>
                    <div className="text-[13px] text-white/70">
                      Tour schedule
                    </div>
                    <div className="text-[15px] font-semibold leading-snug">
                      Tuesdays 10am · Thursdays 2pm
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
