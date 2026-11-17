import { experience } from "../data/site";
import { ExternalLink, Section } from "./ui";

export default function Experience() {
  return (
    <Section id="experience" labelledBy="experience-heading" tone="dark">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow-dark">Experience</p>
            <h2
              id="experience-heading"
              className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl"
            >
              {experience.heading}
            </h2>
            <p className="mt-6 leading-relaxed text-ivory/70">
              {experience.intro}
            </p>
          </div>
        </div>

        <ol className="lg:col-span-8">
          {experience.entries.map((entry) => (
            <li
              key={entry.role + entry.dates}
              className="grid gap-3 border-t border-ivory/15 py-8 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr] sm:gap-8 lg:first:pt-1"
            >
              <p className="text-sm text-sage">{entry.dates}</p>
              <div>
                <h3 className="font-display text-2xl tracking-tight">
                  {entry.role}
                </h3>
                <p className="mt-1 text-ivory/70">
                  {entry.orgUrl ? (
                    <ExternalLink
                      href={entry.orgUrl}
                      className="focus-ring-dark link"
                    >
                      {entry.org}
                    </ExternalLink>
                  ) : (
                    entry.org
                  )}
                </p>
                <ul className="mt-5 space-y-3 leading-relaxed text-ivory/85">
                  {entry.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-3 h-px w-4 shrink-0 bg-sage"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {entry.closing && (
                  <p className="mt-5 border-l border-sage/60 pl-4 text-sm leading-relaxed text-ivory/70">
                    {entry.closing}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
