import Image from "next/image";
import Section from "./Section";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Experience and Programs">
      <ol className="relative space-y-8 border-l border-border pl-8">
        {experience.map((entry) => (
          <li key={entry.title} className="relative">
            <span
              className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-lg font-semibold text-text">{entry.title}</h3>
              {entry.dateLine ? (
                <p className="text-sm font-medium text-text-muted">{entry.dateLine}</p>
              ) : null}
            </div>
            <p className="text-sm font-medium text-accent">{entry.org}</p>
            <ul className="mt-3 space-y-2">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-muted" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
            {entry.stack && entry.stack.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {entry.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-text"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            ) : null}
            {entry.image ? (
              <div className="mt-4 max-w-xs overflow-hidden rounded-xl border border-border">
                <Image
                  src={entry.image.src}
                  alt={entry.image.alt}
                  width={entry.image.width}
                  height={entry.image.height}
                  className="h-auto w-full"
                />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
