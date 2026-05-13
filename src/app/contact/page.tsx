//File :- src/app/contact/page.tsx
import PageHero from "../../../components/page-hero";
import { MapPin, Phone, Clock } from "lucide-react";

const PINK = "#E91E63";
const RED_BG = "#E94454";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title="Contact Us"
      />

      {/* CONTACT DETAILS + FORM */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT — details */}
          <div>
            <span
              className="text-[14px] font-semibold tracking-[0.08em]"
              style={{ color: PINK }}
            >
              CONTACT DETAILS
            </span>
            <h2
              className="mt-2 text-[36px] md:text-[42px] font-bold tracking-tight"
              style={{ color: "#231a3d" }}
            >
              Get in Touch
            </h2>
            <p
              className="mt-5 text-[15px] leading-[1.8] max-w-[560px]"
              style={{ color: "#5e5e6e" }}
            >
              Montessori Prime School aims primarily at the education of young
              children without distinction of caste and creed through the play
              way and other modern methods of imparting education, in order to
              eradicate from their minds the fear of going to school or sitting
              for examinations.
            </p>

            {/* Info blocks */}
            <ul className="mt-10 space-y-7">
              {/* Address */}
              <li className="flex items-start gap-5">
                <span
                  className="flex h-[70px] w-[70px] items-center justify-center flex-shrink-0"
                  style={{ background: "#f2eee7", color: PINK }}
                >
                  <MapPin size={28} strokeWidth={2.2} />
                </span>
                <div>
                  <h3
                    className="text-[20px] font-bold"
                    style={{ color: "#231a3d" }}
                  >
                    Our Address
                  </h3>
                  <p
                    className="mt-1 text-[15px] leading-[1.7]"
                    style={{ color: "#5e5e6e" }}
                  >
                    3FRR+5F3, Bavupet, X Road, Yellapur,
                    <br />
                    Hanmakonda, Telangana 506371
                  </p>
                </div>
              </li>

              {/* Contact */}
              <li className="flex items-start gap-5">
                <span
                  className="flex h-[70px] w-[70px] items-center justify-center flex-shrink-0"
                  style={{ background: "#f2eee7", color: PINK }}
                >
                  <Phone size={28} strokeWidth={2.2} />
                </span>
                <div>
                  <h3
                    className="text-[20px] font-bold"
                    style={{ color: "#231a3d" }}
                  >
                    Contact
                  </h3>
                  <p
                    className="mt-1 text-[15px] leading-[1.7]"
                    style={{ color: "#5e5e6e" }}
                  >
                    <a href="tel:+917700043030">+91 77000 43030</a>,{" "}
                    <a href="tel:+917700053030">+91 77000 53030</a>
                  </p>
                  <p
                    className="mt-1 text-[15px] leading-[1.7]"
                    style={{ color: "#5e5e6e" }}
                  >
                    <a href="mailto:info@montessorijnprime.com">
                      info@montessorijnprime.com
                    </a>
                  </p>
                </div>
              </li>

              {/* Hours */}
              <li className="flex items-start gap-5">
                <span
                  className="flex h-[70px] w-[70px] items-center justify-center flex-shrink-0"
                  style={{ background: "#f2eee7", color: PINK }}
                >
                  <Clock size={28} strokeWidth={2.2} />
                </span>
                <div>
                  <h3
                    className="text-[20px] font-bold"
                    style={{ color: "#231a3d" }}
                  >
                    Hours of Operation
                  </h3>
                  <p
                    className="mt-1 text-[15px] leading-[1.7]"
                    style={{ color: "#5e5e6e" }}
                  >
                    Monday - Saturday: 08:00AM - 05:00PM
                  </p>
                  <p
                    className="mt-1 text-[15px] leading-[1.7]"
                    style={{ color: "#5e5e6e" }}
                  >
                    Sunday : Closed
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT — form */}
          <div
            className="relative overflow-hidden p-8 md:p-10 lg:p-12 bg-no-repeat bg-cover bg-center"
            style={{
              background: RED_BG,
              backgroundImage: "url(/contactimagebgforform.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative">
              <h2 className="text-[32px] md:text-[38px] font-bold text-white leading-tight">
                Have any Queries?
              </h2>
              <p className="mt-2 text-[15px] text-white/95">
                Get in touch with us
              </p>

              <form className="mt-7 space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Enter Your Name *"
                  className="w-full px-5 py-4 text-[15px] text-white placeholder-white/85 outline-none focus:bg-black/10 transition-colors"
                  style={{ background: "rgba(0,0,0,0.08)" }}
                />
                <input
                  type="email"
                  required
                  placeholder="Enter Your Email*"
                  className="w-full px-5 py-4 text-[15px] text-white placeholder-white/85 outline-none focus:bg-black/10 transition-colors"
                  style={{ background: "rgba(0,0,0,0.08)" }}
                />
                <input
                  type="tel"
                  required
                  placeholder="Enter Mobile Number *"
                  className="w-full px-5 py-4 text-[15px] text-white placeholder-white/85 outline-none focus:bg-black/10 transition-colors"
                  style={{ background: "rgba(0,0,0,0.08)" }}
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Write your message...*"
                  className="w-full px-5 py-4 text-[15px] text-white placeholder-white/85 outline-none focus:bg-black/10 transition-colors resize-y"
                  style={{ background: "rgba(0,0,0,0.08)" }}
                />

                <button
                  type="submit"
                  className="mt-2 px-7 py-3.5 text-[15px] font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{ background: "#231a3d" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH MAP */}
      <section className="w-full">
        <iframe
          title="Montessori Prime School — Location"
          src="https://www.google.com/maps?q=Montessori+Prime+School,+Yellapur,+Hanmakonda,+Warangal,+Telangana+506371&output=embed"
          width="100%"
          height="500"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full border-0"
          allowFullScreen
        />
      </section>
    </main>
  );
}
