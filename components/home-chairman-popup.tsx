"use client";
//File :- components/home-chairman-popup.tsx
import { useEffect, useState, FormEvent } from "react";
import { X, Send } from "lucide-react";
import { sendLeadToWhatsApp } from "@/lib/whatsapp";

const PINK = "#E91E63";
const INK = "#231a3d";

const CONTACT_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbz0Tsjqpe4UHV3sKs4AnpYp0iLGgrhHYLKrbCEUcwbiL-rvFYXnC7eVm5iSf36w7aAd8A/exec";

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
  return out;
}

const initialState = { name: "", email: "", mobile: "" };

export default function HomeChairmanPopup() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "success"; message: string }
    | { kind: "error"; message: string }
  >({ kind: "idle" });

  useEffect(() => {
    // Intentional: defer opening the popup until after first paint so it
    // animates in rather than being present on initial render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const update =
    (key: keyof typeof initialState) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setData((d) => ({ ...d, [key]: e.target.value }));
    };

  useEffect(() => {
    if (status.kind === "idle") return;
    const t = setTimeout(() => setStatus({ kind: "idle" }), 4000);
    return () => clearTimeout(t);
  }, [status]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    // Additive: open WhatsApp with the lead pre-filled (runs within the submit
    // gesture). The CONTACT_ENDPOINT POST below is unchanged.
    sendLeadToWhatsApp("Enquiry", [
      ["Name", data.name],
      ["Email", data.email],
      ["Mobile", data.mobile],
    ]);

    setSubmitting(true);
    setStatus({ kind: "idle" });

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({ ...data, ...getTrackingFields() }),
      });
      const result = await response.json().catch(() => ({}));
      const success = result?.success === true;

      if (success) {
        setStatus({
          kind: "success",
          message: result?.message || "Form Submitted Successfully",
        });
        setData(initialState);
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

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-popup-title"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpen(false)}
        className="absolute inset-0 w-full h-full bg-black/60 backdrop-blur-[3px] cursor-default"
      />

      {/* Dialog */}
      <div className="relative w-full max-w-[480px] max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
        {/* Top accent strip */}
        <div
          className="h-1.5 w-full"
          style={{
            background: `linear-gradient(90deg, ${PINK} 0%, #F4831C 100%)`,
          }}
        />

        {/* Close button */}
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
        >
          <X size={20} strokeWidth={2.2} />
        </button>

        <div className="px-7 md:px-10 pt-8 pb-8 md:pb-10">
          {/* Header */}
          <div>
            <h2
              id="contact-popup-title"
              className="text-[24px] md:text-[28px] font-bold tracking-tight"
              style={{ color: INK }}
            >
              Get in Touch
            </h2>
            <p className="mt-2 text-[14px] text-gray-500 leading-relaxed">
              Have a question? Send us a message and we&rsquo;ll get back to you
              shortly.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="mt-7 space-y-4">
            <Field
              label="Full Name"
              type="text"
              required
              minLength={2}
              maxLength={60}
              autoComplete="name"
              disabled={submitting}
              value={data.name}
              onChange={update("name")}
              placeholder="Your name"
              title="Please enter your name (at least 2 characters)"
            />
            <Field
              label="Email"
              type="email"
              required
              maxLength={120}
              autoComplete="email"
              disabled={submitting}
              value={data.email}
              onChange={update("email")}
              placeholder="name@example.com"
              title="Please enter a valid email address"
            />
            <Field
              label="Mobile"
              type="tel"
              required
              pattern="[6-9][0-9]{9}"
              maxLength={10}
              inputMode="numeric"
              autoComplete="tel"
              disabled={submitting}
              value={data.mobile}
              onChange={update("mobile")}
              placeholder="10-digit mobile (e.g. 9876543210)"
              title="Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9"
            />

            {status.kind !== "idle" && (
              <div
                role="status"
                className="px-4 py-3 text-[13px] font-medium rounded-lg"
                style={{
                  background:
                    status.kind === "success"
                      ? "rgba(34,197,94,0.12)"
                      : "rgba(239,68,68,0.12)",
                  color: status.kind === "success" ? "#15803d" : "#b91c1c",
                  border: `1px solid ${
                    status.kind === "success"
                      ? "rgba(34,197,94,0.3)"
                      : "rgba(239,68,68,0.3)"
                  }`,
                }}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="group w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold text-white rounded-lg hover:opacity-95 hover:shadow-lg active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none"
              style={{
                background: `linear-gradient(135deg, ${PINK} 0%, #c2185b 100%)`,
                boxShadow: "0 4px 14px rgba(233,30,99,0.35)",
              }}
            >
              {submitting ? (
                "Sending…"
              ) : (
                <>
                  Send Message
                  <Send
                    size={16}
                    strokeWidth={2.4}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

type FieldProps = {
  label: string;
  type: string;
  required?: boolean;
  disabled?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  inputMode?: "text" | "numeric" | "tel" | "email" | "url" | "search" | "decimal" | "none";
  autoComplete?: string;
  title?: string;
};

function Field({ label, type, ...rest }: FieldProps) {
  return (
    <div>
      <label
        className="block text-[13px] font-semibold mb-1.5"
        style={{ color: INK }}
      >
        {label}
      </label>
      <input
        type={type}
        {...rest}
        className="w-full px-4 py-3 text-[14px] bg-gray-50 border border-gray-200 rounded-lg outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:border-[var(--pink)] focus:ring-2 focus:ring-[var(--pink-soft)] disabled:opacity-60"
        style={
          {
            color: INK,
            ["--pink" as string]: PINK,
            ["--pink-soft" as string]: "rgba(233,30,99,0.15)",
          } as React.CSSProperties
        }
      />
    </div>
  );
}
