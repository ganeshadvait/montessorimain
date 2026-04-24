//File :- components/daily-life.tsx
import { Sunrise, BookOpen, Leaf, Apple, Palette, Sunset } from "lucide-react";

const moments = [
  {
    time: "8:15",
    icon: Sunrise,
    title: "Arrival & greeting",
    body: "Children hang their coats, change into indoor shoes, and choose their first work of the day.",
    accent: "var(--palette-sun)",
  },
  {
    time: "8:45",
    icon: BookOpen,
    title: "First work cycle",
    body: "Three uninterrupted hours where concentration deepens. Guides observe, present new lessons, and step back.",
    accent: "var(--palette-magenta)",
  },
  {
    time: "11:30",
    icon: Leaf,
    title: "Outdoor time",
    body: "Garden work, climbing, running, or simply watching clouds. Every day, in every season.",
    accent: "var(--palette-teal)",
  },
  {
    time: "12:15",
    icon: Apple,
    title: "Lunch together",
    body: "Children set tables, serve themselves, converse, and clean up — practical life in its fullest form.",
    accent: "var(--palette-coral)",
  },
  {
    time: "13:30",
    icon: Palette,
    title: "Second work cycle",
    body: "Creative projects, music, group lessons, or continued individual work — a quieter, focused afternoon.",
    accent: "var(--palette-magenta)",
  },
  {
    time: "15:15",
    icon: Sunset,
    title: "Reflection & farewell",
    body: "A shared story, a song, goodbyes — closing the day with calm and gratitude.",
    accent: "var(--palette-teal)",
  },
];

export default function DailyLife() {
  return (
    <section
      id="day"
      className="relative w-full bg-[var(--palette-ink)] text-white py-24 md:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-20"
        style={{ background: "var(--palette-magenta)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--palette-sun)]">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--palette-sun)" }}
            />
            A Day at School
          </span>
          <h2 className="mt-4 text-[36px] md:text-[52px] font-semibold leading-[1.05] tracking-tight">
            What an ordinary Tuesday{" "}
            <span
              className="italic"
              style={{
                fontFamily: "ui-serif, Georgia, serif",
                color: "var(--palette-sun)",
              }}
            >
              looks like
            </span>
            .
          </h2>
          <p className="mt-6 text-[17px] text-white/75 max-w-xl">
            Routine creates freedom. When the rhythm is predictable, children
            don’t spend energy wondering what’s next — they spend
            it on what fascinates them now.
          </p>
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {moments.map(({ time, icon: Icon, title, body, accent }, idx) => (
            <li
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ background: `${accent}`, color: "#111" }}
                >
                  <Icon size={20} />
                </span>
                <span className="text-[28px] font-semibold tabular-nums text-white/40">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-6 flex items-baseline gap-3">
                <span
                  className="text-[13px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: accent }}
                >
                  {time}
                </span>
              </div>
              <h3 className="mt-2 text-[20px] font-semibold leading-snug">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                {body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
