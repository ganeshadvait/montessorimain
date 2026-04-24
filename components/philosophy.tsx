//File :- components/philosophy.tsx

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative w-full bg-[var(--palette-surface)] text-[var(--palette-ink)] py-24 md:py-36 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[320px] w-[320px] rounded-full blur-3xl opacity-30"
        style={{ background: "var(--palette-sun)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-[300px] w-[300px] rounded-full blur-3xl opacity-25"
        style={{ background: "var(--palette-teal)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <span
          className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--palette-magenta)]"
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--palette-magenta)" }}
          />
          Our Philosophy
        </span>

        <div className="mt-10 grid gap-16 md:grid-cols-12 md:gap-20 items-start">
          {/* Left — pull quote */}
          <figure className="md:col-span-6 relative">
            <span
              aria-hidden
              className="absolute -top-8 -left-4 text-[180px] leading-none font-semibold opacity-15 select-none"
              style={{ color: "var(--palette-magenta)" }}
            >
              “
            </span>
            <blockquote className="relative text-[28px] md:text-[40px] leading-[1.15] font-semibold tracking-tight">
              The goal of early childhood education should be to{" "}
              <span style={{ color: "var(--palette-magenta)" }}>
                activate the child’s own natural desire to learn
              </span>
              .
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 text-[14px] text-[var(--palette-muted)]">
              <span className="h-px w-10 bg-[var(--palette-ink)]/30" />
              Dr. Maria Montessori
            </figcaption>
          </figure>

          {/* Right — narrative */}
          <div className="md:col-span-6 md:pl-8 md:border-l md:border-[var(--palette-line)]">
            <h2 className="text-[28px] md:text-[34px] font-semibold leading-tight tracking-tight">
              We don’t teach at children.{" "}
              <span style={{ color: "var(--palette-teal)" }}>
                We learn alongside them.
              </span>
            </h2>
            <div className="mt-6 space-y-5 text-[16px] md:text-[17px] leading-relaxed text-[var(--palette-ink)]/80">
              <p>
                A Montessori classroom isn’t quiet because the rules say
                so. It’s quiet because children are genuinely absorbed in
                work they’ve chosen themselves — pouring, sorting,
                reading, building, wondering.
              </p>
              <p>
                Our guides watch, prepare, and step back. The environment does
                the teaching: every object at child height, every material
                self-correcting, every choice an opportunity for independence.
              </p>
              <p>
                The result is a child who doesn’t just know things — but
                knows how to know things. For life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
