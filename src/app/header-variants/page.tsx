//File :- src/app/header-variants/page.tsx
import {
  HeaderVariantA,
  HeaderVariantB,
  HeaderVariantC,
} from "../../../components/header-variants";

const variants = [
  {
    label: "Variant A — Single Row",
    note: "Logo left · nav center · Application + Virtual Tour inline on the right.",
    node: <HeaderVariantA />,
  },
  {
    label: "Variant B — Two-Tier (top utility bar)",
    note: "Dark top strip with phone/email + quick links, full nav row below.",
    node: <HeaderVariantB />,
  },
  {
    label: "Variant C — Centered Logo",
    note: "Logo centered with CTAs pinned right, nav centered underneath.",
    node: <HeaderVariantC />,
  },
];

export default function HeaderVariantsPage() {
  return (
    <main className="min-h-screen bg-neutral-100 py-10">
      <div className="mx-auto max-w-[1480px] px-6">
        <h1 className="text-2xl font-bold text-neutral-800 mb-1">Header Variants</h1>
        <p className="text-neutral-500 mb-8 text-sm">
          Same design language as the current header — different layouts. Pick one.
        </p>

        <div className="space-y-12">
          {variants.map((v) => (
            <section key={v.label}>
              <div className="mb-2">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
                  {v.label}
                </h2>
                <p className="text-xs text-neutral-500">{v.note}</p>
              </div>
              <div className="overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5">
                {v.node}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
