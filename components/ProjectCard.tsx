import type { Project } from "@/lib/content";
import { GitHubIcon, ExternalLinkIcon, ChevronDownIcon } from "./icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-6 sm:p-10">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
        <h3 className="text-2xl font-semibold tracking-tight text-text">{project.title}</h3>
      </div>
      <p className="mt-1 text-sm font-medium text-accent">{project.subtitle}</p>

      <p className="mt-5 leading-relaxed text-text-muted">{project.description}</p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-text"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-4">
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-text underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            <GitHubIcon className="h-4 w-4" />
            Repository
          </a>
        ) : null}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-text underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            <ExternalLinkIcon className="h-4 w-4" />
            Link
          </a>
        ) : null}
      </div>

      {project.details.length > 0 ? (
        <details className="group mt-6 border-t border-border pt-5">
          <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-text marker:content-none">
            <ChevronDownIcon className="h-4 w-4 transition-transform group-open:rotate-180" />
            Technical detail
          </summary>
          <ul className="mt-4 space-y-3">
            {project.details.map((detail) => (
              <li key={detail} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {detail}
              </li>
            ))}
          </ul>
        </details>
      ) : null}
    </article>
  );
}
