import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { featured, projects, site, work } from "../data/site";
import { Button, ExternalLink, Section } from "./ui";

// The screenshots link to the same place as the text link beside them. They stay
// clickable for mouse and touch users, but are skipped by keyboard and screen
// readers so each project has one link, not two.
const duplicateLinkProps = { tabIndex: -1, "aria-hidden": true };

function FeaturedProject() {
  return (
    <article className="grid gap-8 rounded-2xl border border-charcoal/10 bg-stone/50 p-5 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
      <ExternalLink
        href={featured.url}
        className="group block self-start overflow-hidden rounded-xl ring-1 ring-charcoal/10 lg:col-span-7 lg:self-center"
        {...duplicateLinkProps}
      >
        <Image
          src={featured.image}
          alt={featured.imageAlt}
          width={featured.imageWidth}
          height={featured.imageHeight}
          sizes="(min-width: 1024px) 40rem, 100vw"
          className="h-auto w-full transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
        />
      </ExternalLink>

      <div className="lg:col-span-5">
        <p className="eyebrow">Featured · {featured.category}</p>
        <h3 className="mt-3 font-display text-4xl tracking-tight">
          {featured.name}
        </h3>
        <p className="mt-4 leading-relaxed text-muted">{featured.problem}</p>
        <ul className="mt-5 space-y-2.5 text-sm leading-relaxed">
          {featured.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-px w-4 shrink-0 bg-slate"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs text-muted">Built with {featured.stack}.</p>
        <div className="mt-7">
          <Button href={featured.url} external>
            Visit DealForge
          </Button>
        </div>
      </div>
    </article>
  );
}

// Phones: image above text. Tablets (md): image beside text, one project per row,
// so cards are never squeezed into three narrow columns. Desktop (lg): three columns.
function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col md:grid md:grid-cols-5 md:items-start md:gap-8 lg:flex lg:gap-0">
      <ExternalLink
        href={project.url}
        className="block overflow-hidden rounded-xl ring-1 ring-charcoal/10 md:col-span-2 lg:col-span-1"
        {...duplicateLinkProps}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1440}
          height={900}
          sizes="(min-width: 1024px) 22rem, (min-width: 768px) 20rem, 100vw"
          className="h-auto w-full transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
        />
      </ExternalLink>

      <div className="mt-6 md:col-span-3 md:mt-0 lg:col-span-1 lg:mt-6">
        <p className="eyebrow">{project.category}</p>
        <h3 className="mt-2 font-display text-2xl tracking-tight">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.problem}
        </p>
        {project.note && (
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {project.note}
          </p>
        )}
        <ExternalLink
          href={project.url}
          className="focus-ring link mt-3 inline-flex items-center gap-1 py-1 text-sm font-medium"
        >
          Visit {project.name}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </ExternalLink>
      </div>
    </article>
  );
}

export default function SelectedWork() {
  return (
    <Section id="work" labelledBy="work-heading">
      <div className="max-w-3xl">
        <p className="eyebrow">Selected work</p>
        <h2
          id="work-heading"
          className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl"
        >
          {work.heading}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          {work.introBefore}
          <ExternalLink
            href={site.links.meadowlark}
            className="focus-ring link text-charcoal"
          >
            Meadowlark Labs
          </ExternalLink>
          {work.introAfter}
        </p>
      </div>

      <div className="mt-14">
        <FeaturedProject />
      </div>

      <div className="mt-14 grid gap-12 md:gap-14 lg:grid-cols-3 lg:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
