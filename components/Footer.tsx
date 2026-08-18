import { profile, currentYear, interests } from "@/lib/content";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="max-w-2xl text-sm leading-relaxed text-text-muted">
          <span className="font-semibold text-text">Beyond the code: </span>
          {interests}
        </p>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-sm text-text-muted">
            &copy; {currentYear} {profile.name}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-text-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-text-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
