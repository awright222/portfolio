import { capabilities } from "../data/site";
import { Section } from "./ui";

function Item({ title, body, source, skills }) {
  return (
    <div className="border-t border-charcoal/15 pt-6">
      <h3 className="font-display text-2xl tracking-tight">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted">{body}</p>
      <p className="mt-4 text-xs uppercase tracking-[0.14em] text-slate-deep">
        {source}
      </p>
      {skills && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-charcoal/20 px-3 py-1 text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Capabilities() {
  return (
    <Section id="capabilities" labelledBy="capabilities-heading" tone="stone">
      <p className="eyebrow">Capabilities</p>
      <h2
        id="capabilities-heading"
        className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl"
      >
        {capabilities.heading}
      </h2>

      <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {capabilities.items.map((item) => (
          <Item key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
