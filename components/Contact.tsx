import fs from "node:fs";
import path from "node:path";
import Section from "./Section";
import EmailReveal from "./EmailReveal";
import { profile } from "@/lib/content";
import { GitHubIcon, LinkedInIcon, FileIcon, ExternalLinkIcon } from "./icons";

function resumeExists(): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", "resume.pdf"));
}

export default function Contact() {
  const hasResume = resumeExists();

  const links = [
    {
      label: "GitHub",
      href: profile.github,
      icon: GitHubIcon,
      available: true,
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      icon: LinkedInIcon,
      available: true,
    },
    {
      label: "Resume (PDF)",
      href: hasResume ? "/resume.pdf" : undefined,
      icon: FileIcon,
      available: hasResume,
    },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <p className="max-w-2xl leading-relaxed text-text-muted">
        The fastest way to reach me is email. Click below to reveal it and copy it to your clipboard.
      </p>

      <div className="mt-6">
        <EmailReveal />
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {links.map((link) => (
          <li key={link.label}>
            {link.available ? (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
              >
                <span className="flex items-center gap-3 font-semibold text-text">
                  <link.icon className="h-5 w-5 text-accent" />
                  {link.label}
                </span>
                <ExternalLinkIcon className="h-4 w-4 text-text-muted" />
              </a>
            ) : (
              <div className="flex items-center justify-between rounded-xl border border-dashed border-border p-5">
                <span className="flex items-center gap-3 font-semibold text-text-muted">
                  <link.icon className="h-5 w-5" />
                  {link.label}
                </span>
                <span className="text-xs font-medium uppercase tracking-wide text-accent">TODO</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
