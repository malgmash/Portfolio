import Section from "./Section";
import { about } from "@/lib/content";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="How I work">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-text">Who I Am</h3>
          <p className="mt-3 leading-relaxed text-text-muted">{about.whoIAm}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text">What I Build</h3>
          <p className="mt-3 leading-relaxed text-text-muted">{about.whatIBuild}</p>
        </div>
      </div>
    </Section>
  );
}
