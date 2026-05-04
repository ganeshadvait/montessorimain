"use client";
//File :- src/app/new-home-page/_components/quick-enquiry.tsx
import { useState, FormEvent } from "react";
import {
  ArrowRight,
  UserRound,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function QuickEnquiry() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    // Hook into your real backend here.
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
    }, 3500);
  };

  return (
    <section
      className="relative w-full py-20 md:py-28 px-4 md:px-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f1f5fb 0%, #f7f0ec 100%)",
      }}
    >
      {/* Decorative palette blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-20 h-[360px] w-[360px] rounded-full blur-3xl opacity-40"
        style={{ background: "var(--palette-magenta)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-20 h-[400px] w-[400px] rounded-full blur-3xl opacity-30"
        style={{ background: "var(--palette-teal)" }}
      />

      <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT — copy + contact ways */}
        <div className="lg:col-span-6">
          <span
            className="text-[12px] font-bold uppercase tracking-[0.28em]"
            style={{ color: "var(--palette-sun)" }}
          >
            Quick Enquiry
          </span>

          <h2
            className="mt-5 text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-tight"
            style={{ color: "var(--palette-ink)" }}
          >
            Get in{" "}
            <span
              className="italic"
              style={{
                fontFamily: "ui-serif, Georgia, serif",
                color: "var(--palette-magenta)",
              }}
            >
              touch
            </span>
            .
          </h2>

          <p
            className="mt-5 max-w-[480px] text-[15px] md:text-[16px] leading-[1.7]"
            style={{ color: "var(--palette-muted)" }}
          >
            Have a question about admissions, curriculum, or campus life? Drop
            your details and our team will reach out within one working day.
          </p>

          {/* Contact ways */}
          <ul className="mt-9 space-y-4">
            {[
              {
                Icon: Phone,
                label: "Call us",
                value: "+91 00000 00000",
                href: "tel:+910000000000",
                accent: "var(--palette-magenta)",
              },
              {
                Icon: Mail,
                label: "Email",
                value: "admissions@montessoriprime.in",
                href: "mailto:admissions@montessoriprime.in",
                accent: "var(--palette-teal)",
              },
              {
                Icon: MapPin,
                label: "Visit",
                value: "MPS — Yellapur, Hanamkonda, Telangana",
                href: "#location",
                accent: "var(--palette-coral)",
              },
            ].map(({ Icon, label, value, href, accent }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl bg-white/70 backdrop-blur px-4 py-3 border transition-all hover:bg-white"
                  style={{ borderColor: "rgba(0,0,0,0.06)" }}
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `color-mix(in oklab, ${accent} 14%, transparent)`,
                      color: accent,
                    }}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <div className="flex-1">
                    <div
                      className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                      style={{ color: "var(--palette-muted)" }}
                    >
                      {label}
                    </div>
                    <div
                      className="text-[14px] md:text-[15px] font-semibold"
                      style={{ color: "var(--palette-ink)" }}
                    >
                      {value}
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    strokeWidth={2.2}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: accent }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — enquiry form */}
        <div className="lg:col-span-6">
          <div
            className="relative rounded-3xl bg-white p-7 md:p-10"
            style={{
              boxShadow:
                "0 1px 0 rgba(255,255,255,0.6) inset, 0 30px 70px -30px rgba(29,29,31,0.25)",
              border: "1px solid rgba(0,0,0,0.04)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-x-8 top-0 h-[3px] rounded-b-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--palette-magenta), var(--palette-coral), var(--palette-sun))",
              }}
            />

            <div
              className="text-[12px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--palette-magenta)" }}
            >
              Send us a quick note
            </div>
            <h3
              className="mt-2 text-[24px] md:text-[28px] font-bold leading-tight tracking-tight"
              style={{ color: "var(--palette-ink)" }}
            >
              Two fields. We&rsquo;ll do the rest.
            </h3>

            <form onSubmit={onSubmit} className="mt-7 space-y-4">
              {/* Name */}
              <label className="block">
                <span
                  className="text-[12px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: "var(--palette-muted)" }}
                >
                  Your Name
                </span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="mt-1.5 w-full rounded-xl border bg-[#fafafa] px-5 py-3.5 text-[15px] outline-none transition-colors focus:bg-white focus:border-[var(--palette-magenta)]"
                  style={{
                    borderColor: "rgba(0,0,0,0.08)",
                    color: "var(--palette-ink)",
                  }}
                />
              </label>

              {/* Phone */}
              <label className="block">
                <span
                  className="text-[12px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: "var(--palette-muted)" }}
                >
                  Mobile Number
                </span>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 00000 00000"
                  className="mt-1.5 w-full rounded-xl border bg-[#fafafa] px-5 py-3.5 text-[15px] outline-none transition-colors focus:bg-white focus:border-[var(--palette-magenta)]"
                  style={{
                    borderColor: "rgba(0,0,0,0.08)",
                    color: "var(--palette-ink)",
                  }}
                />
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitted}
                className="mt-3 inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-4 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-80"
                style={{
                  background: submitted
                    ? "var(--palette-teal)"
                    : "var(--palette-magenta)",
                  boxShadow: submitted
                    ? "0 12px 30px -10px rgba(32,184,184,0.5)"
                    : "0 12px 30px -10px rgba(215,53,114,0.5)",
                }}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={18} strokeWidth={2.4} />
                    SENT — WE&rsquo;LL CALL SOON
                  </>
                ) : (
                  <>
                    <UserRound size={16} strokeWidth={2.4} />
                    GET IN TOUCH
                    <ArrowRight size={16} strokeWidth={2.4} />
                  </>
                )}
              </button>

              <p
                className="text-center text-[11px]"
                style={{ color: "var(--palette-muted)" }}
              >
                By submitting you agree to be contacted by Montessori Prime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
