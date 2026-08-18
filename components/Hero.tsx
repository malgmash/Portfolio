import { profile } from "@/lib/content";
import ProfilePhoto from "./ProfilePhoto";
import { GitHubIcon, LinkedInIcon, MailIcon, ChevronDownIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] scroll-mt-24 items-center border-b border-border pt-16"
      aria-label="Introduction"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 sm:grid-cols-[1fr_auto] sm:py-24">
        <div>
          <p className="font-display text-sm font-medium uppercase tracking-[0.25em] text-accent">
            {profile.eyebrow}
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-text sm:text-6xl md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-text-muted sm:text-xl">{profile.positioning}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-strong"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              <MailIcon className="h-4 w-4" />
              Contact
            </a>
          </div>
        </div>

        <div className="justify-self-start sm:justify-self-end">
          <ProfilePhoto />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-text-muted transition-colors hover:text-text sm:flex"
        aria-label="Scroll to About section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDownIcon className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
