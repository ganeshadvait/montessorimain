// src/lib/whatsapp.ts
// Shared helper: after a form is submitted, open WhatsApp on the visitor's
// device with the lead details pre-filled, addressed to the school number.
//
// This is ADDITIVE — it never replaces a form's existing submission (Google
// Sheet / API POST). Call sendLeadToWhatsApp() synchronously inside the submit
// handler (before the first `await`) so it runs within the click/submit user
// gesture and pop-up blockers allow the new tab. If WhatsApp is unavailable the
// original flow is unaffected.

// School WhatsApp number in international format (India +91, no leading 0).
// Source number: 08065064810
export const SCHOOL_WHATSAPP_NUMBER = "918065064810";

type Field = [label: string, value: string | undefined | null];

/** Build a wa.me URL with a pre-filled, human-readable message. */
export function buildWhatsAppUrl(title: string, fields: Field[]): string {
  const lines = [
    `*New ${title}*`,
    ...fields
      .filter(([, v]) => v != null && String(v).trim() !== "")
      .map(([label, v]) => `${label}: ${String(v).trim()}`),
  ];
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${SCHOOL_WHATSAPP_NUMBER}?text=${text}`;
}

/**
 * Open WhatsApp in a new tab with the given lead pre-filled. No-op on the
 * server. Must be called within a user gesture (inside the submit handler,
 * before any `await`) to avoid pop-up blocking.
 */
export function sendLeadToWhatsApp(title: string, fields: Field[]): void {
  if (typeof window === "undefined") return;
  window.open(buildWhatsAppUrl(title, fields), "_blank", "noopener,noreferrer");
}
