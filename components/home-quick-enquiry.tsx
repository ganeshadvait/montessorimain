"use client";
//File :- components/home-quick-enquiry.tsx
import { useState, useEffect, FormEvent } from "react";
import { UserRound } from "lucide-react";

const PINK = "#E91E63";
const ORANGE = "#F4831C";
const INK = "#231a3d";
const MUTED = "#5e5e6e";

const SHAPE_LEFT = "/home/sketboard pink.png";
const SHAPE_RIGHT = "/home/bulb thread paper rocket.png";

const ENQUIRY_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzrvkIEA0DdyqmAF7VnL49MPjBboYCz-qGooNhqyT_nogBAPqQCSJ1XECLsJ6AUnuLs/exec";

function getTrackingFields() {
  if (typeof window === "undefined") return {};
  const sp = new URLSearchParams(window.location.search);
  const keys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "fbclid",
  ];
  const out: Record<string, string> = {};
  for (const k of keys) {
    const v = sp.get(k);
    if (v) out[k] = v;
  }
  out.page_url = window.location.href;
  out.referrer = document.referrer || "";
  return out;
}

export default function HomeQuickEnquiry() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "success"; message: string }
    | { kind: "error"; message: string }
  >({ kind: "idle" });

  useEffect(() => {
    if (status.kind === "idle") return;
    const t = setTimeout(() => setStatus({ kind: "idle" }), 4000);
    return () => clearTimeout(t);
  }, [status]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    if (!name.trim() || !mobile.trim()) return;

    setSubmitting(true);
    setStatus({ kind: "idle" });

    try {
      const response = await fetch(ENQUIRY_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({ name, mobile, ...getTrackingFields() }),
      });
      const result = await response.json().catch(() => ({}));
      const success = result?.success === true;

      if (success) {
        setStatus({
          kind: "success",
          message: result?.message || "Form Submitted Successfully",
        });
        setName("");
        setMobile("");
      } else {
        setStatus({
          kind: "error",
          message: result?.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        kind: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className="relative w-full py-16 md:py-20 overflow-hidden"
      style={{ background: "#E9EAF3" }}
    >
      <style>{`
        @keyframes enquiry-skateboard-slide {
          0%, 100% { transform: translateX(-0.4cm); }
          50% { transform: translateX(0.4cm); }
        }
        .enquiry-skateboard {
          animation: enquiry-skateboard-slide 10s ease-in-out infinite;
        }
      `}</style>

      {/* Floating decorative — skateboard top-left */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SHAPE_LEFT}
        alt=""
        aria-hidden
        className="enquiry-skateboard pointer-events-none absolute left-4 md:left-12 top-4 md:top-8 w-[110px] md:w-[150px] select-none"
      />

      {/* Floating decorative — paper plane right */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SHAPE_RIGHT}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-[200px] md:w-[600px] select-none"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT — copy */}
        <div>
          <span
            className="text-[13px] font-bold uppercase tracking-[0.18em]"
            style={{ color: ORANGE }}
          >
            QUICK ENQUIRY
          </span>
          <h2
            className="mt-3 text-[28px] md:text-[34px] lg:text-[36px] font-bold tracking-tight"
            style={{ color: INK }}
          >
            Get In Touch
          </h2>
          <p
            className="mt-4 max-w-[420px] text-[14px] md:text-[15px] leading-[1.75]"
            style={{ color: MUTED }}
          >
            Montessori Prime School aims primarily at the education of young
            children without distinction of imparting education to school.
          </p>
        </div>

        {/* RIGHT — form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-3 w-full">
          <input
            type="text"
            required
            minLength={2}
            maxLength={60}
            autoComplete="name"
            disabled={submitting}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            title="Please enter your name (at least 2 characters)"
            className="w-full bg-white px-5 py-4 text-[15px] outline-none border border-transparent focus:border-[#E91E63] transition-colors disabled:opacity-60"
            style={{ color: INK }}
          />
          <input
            type="tel"
            required
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            inputMode="numeric"
            autoComplete="tel"
            disabled={submitting}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter 10-digit Mobile Number"
            title="Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9"
            className="w-full bg-white px-5 py-4 text-[15px] outline-none border border-transparent focus:border-[#E91E63] transition-colors disabled:opacity-60"
            style={{ color: INK }}
          />
          <button
            type="submit"
            disabled={submitting}
            className="mt-2 inline-flex items-center gap-2 w-fit px-5 py-2.5 text-[14px] font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ background: PINK }}
          >
            <UserRound size={16} strokeWidth={2.4} />
            {submitting ? "Sending…" : "Get In Touch"}
          </button>

          {status.kind !== "idle" && (
            <p
              role="status"
              className="mt-1 text-[13px] font-medium"
              style={{
                color: status.kind === "success" ? "#1b5e20" : "#b71c1c",
              }}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
