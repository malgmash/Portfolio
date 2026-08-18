import Section from "./Section";
import { recognitionStats, awards } from "@/lib/content";

export default function Recognition() {
  return (
    <Section id="recognition" eyebrow="Recognition" title="Awards and Recognition">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,320px)_1fr]">
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {recognitionStats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-surface p-5">
              <dt className="text-sm text-text-muted">{stat.label}</dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-accent">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="space-y-4">
          {awards.map((award) => (
            <li key={award.title} className="border-b border-border pb-4 last:border-none last:pb-0">
              <p className="font-semibold text-text">{award.title}</p>
              <p className="text-sm text-text-muted">{award.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
