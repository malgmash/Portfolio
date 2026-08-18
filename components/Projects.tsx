import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Projects">
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
