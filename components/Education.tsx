import Section from "./Section";
import { education, continuingEducation } from "@/lib/content";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education">
      <div className="space-y-6">
        {education.map((entry) => (
          <div key={entry.institution} className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
              <h3 className="text-xl font-semibold text-text">{entry.institution}</h3>
              <p className="text-sm font-medium text-text-muted">{entry.dates}</p>
            </div>
            <p className="mt-1 text-text-muted">
              {entry.credential} &middot; {entry.location}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {entry.honors.map((honor) => (
                <li
                  key={honor}
                  className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-text"
                >
                  {honor}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="rounded-xl border border-border/70 border-dashed p-6 sm:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">Continuing Education</h3>
          <p className="mt-2 text-text">{continuingEducation.title}</p>
          <p className="text-sm text-text-muted">{continuingEducation.provider}</p>
        </div>
      </div>
    </Section>
  );
}
