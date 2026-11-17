import { about, credentials } from "../data/site";
import { Section } from "./ui";

function Group({ label, items }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <ul className="mt-3 space-y-4">
        {items.map((item) => (
          <li key={item.name}>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-muted">{item.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" labelledBy="about-heading">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="eyebrow">About</p>
          <h2
            id="about-heading"
            className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl"
          >
            {about.heading}
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside
          aria-labelledby="credentials-heading"
          className="self-start rounded-2xl border border-charcoal/10 bg-stone/50 p-6 sm:p-8 lg:col-span-5"
        >
          <h3
            id="credentials-heading"
            className="font-display text-2xl tracking-tight"
          >
            {credentials.heading}
          </h3>

          <div className="mt-6">
            <Group label="Education" items={credentials.education} />
          </div>
          <div className="mt-8 border-t border-charcoal/10 pt-6">
            <Group label="Training" items={credentials.training} />
          </div>
        </aside>
      </div>
    </Section>
  );
}
