type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  headingLevel?: "h2" | "h3";
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, headingLevel = "h2", children, className }: SectionProps) {
  const Heading = headingLevel;
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className ?? ""}`} aria-labelledby={`${id}-heading`}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 sm:mb-14">
          {eyebrow ? (
            <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          ) : null}
          <Heading id={`${id}-heading`} className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            {title}
          </Heading>
        </div>
        {children}
      </div>
    </section>
  );
}
