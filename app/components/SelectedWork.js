import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { featured, projects, site, work } from "../data/site";
import { Button, ExternalLink, Section } from "./ui";

const hostname = (url) => new URL(url).hostname.replace(/^www\./, "");

function Chip({ children }) {
  return (
    <span className="rounded-full bg-sage px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-charcoal">
      {children}
    </span>
  );
}

// The real screenshot, as a plain figure (never a link): the "Visit" link beside each
// project is its single destination, so nothing is mouse-only. `framed` (DealForge)
// sits on a sage mat inside the slate block; the others get a neutral hairline border
// and soft shadow, with the domain below.
function Plate({
  url,
  image,
  alt,
  width,
  height,
  sizes,
  framed = false,
  className = "",
}) {
  const shot = (
    <Image
      src={image}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={
        framed
          ? "h-auto w-full rounded-lg ring-1 ring-charcoal/10"
          : "h-auto w-full rounded-xl ring-1 ring-charcoal/15 shadow-lg shadow-charcoal/10"
      }
    />
  );

  if (framed) {
    return (
      <figure
        className={`rounded-2xl bg-sage-tint p-3 sm:p-3.5 ${className}`}
      >
        {shot}
        <figcaption className="mt-2.5 px-0.5 text-xs text-charcoal">
          {hostname(url)}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className={className}>
      {shot}
      <figcaption className="mt-3 px-0.5 text-xs text-muted">
        {hostname(url)}
      </figcaption>
    </figure>
  );
}

// DealForge: the lead entry, as a slate-blue block so it is clearly the most prominent.
function FeaturedProject() {
  return (
    <article className="grid gap-6 rounded-2xl bg-slate-deep p-5 text-ivory sm:p-7 lg:grid-cols-[5fr_7fr] lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:p-8">
      <div className="lg:col-start-1 lg:row-start-1">
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="font-display text-4xl leading-none">
            01
          </span>
          <Chip>{featured.category}</Chip>
        </div>
        <h3 className="mt-4 font-display text-4xl tracking-tight">
          {featured.name}
        </h3>
        <p className="mt-2 font-display text-2xl leading-snug text-stone">
          {featured.question}
        </p>
      </div>

      <Plate
        url={featured.url}
        image={featured.image}
        alt={featured.imageAlt}
        width={featured.imageWidth}
        height={featured.imageHeight}
        sizes="(min-width: 1024px) 40rem, 100vw"
        framed
        className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center"
      />

      <div className="lg:col-start-1 lg:row-start-2">
        <p className="leading-relaxed text-stone">{featured.problem}</p>
        <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-stone">
          {featured.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2.5 h-px w-4 shrink-0 bg-stone"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-stone">Built with {featured.stack}.</p>
        <div className="mt-6">
          <Button href={featured.url} variant="primaryDark" external>
            Visit DealForge
          </Button>
        </div>
      </div>
    </article>
  );
}

// Phones: heading, screenshot, then text. From tablet width up: text beside screenshot.
function ProjectEntry({ project, number }) {
  return (
    <article className="grid gap-5 md:grid-cols-[7fr_5fr] md:grid-rows-[auto_1fr] md:gap-x-12 lg:grid-cols-[2fr_1fr]">
      <div className="md:col-start-1 md:row-start-1">
        <div className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="font-display text-4xl leading-none text-slate-deep"
          >
            {number}
          </span>
          <Chip>{project.category}</Chip>
        </div>
        <h3 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-2 font-display text-2xl leading-snug text-slate-deep">
          {project.question}
        </p>
      </div>

      <Plate
        url={project.url}
        image={project.image}
        alt={project.imageAlt}
        width={1440}
        height={900}
        sizes="(min-width: 1024px) 22rem, (min-width: 768px) 20rem, 100vw"
        className="md:col-start-2 md:row-span-2 md:row-start-1 md:self-start"
      />

      <div className="md:col-start-1 md:row-start-2">
        <p className="max-w-xl leading-relaxed text-muted">{project.problem}</p>
        <ExternalLink
          href={project.url}
          className="focus-ring link mt-4 inline-flex items-center gap-1 py-1 text-sm font-medium"
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
    <Section
      id="work"
      labelledBy="work-heading"
      padding="py-16 md:py-20"
    >
      <div className="max-w-3xl">
        <p className="eyebrow">Selected work</p>
        <h2
          id="work-heading"
          className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl"
        >
          {work.heading}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
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

      <ol role="list" className="mt-8">
        <li>
          <FeaturedProject />
        </li>
        {projects.map((project, i) => (
          <li
            key={project.name}
            className="mt-6 border-t-2 border-slate pt-6 last:border-b-2 last:pb-6"
          >
            <ProjectEntry
              project={project}
              number={String(i + 2).padStart(2, "0")}
            />
          </li>
        ))}
      </ol>
    </Section>
  );
}
