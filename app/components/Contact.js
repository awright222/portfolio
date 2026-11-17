import { ArrowUpRight } from "lucide-react";
import { contact } from "../data/site";
import { Section } from "./ui";

export default function Contact() {
  return (
    <Section id="contact" labelledBy="contact-heading" tone="dark">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow-dark">Contact</p>
          <h2
            id="contact-heading"
            className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl"
          >
            {contact.heading}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory/75">
            {contact.intro}
          </p>
        </div>

        <ul className="lg:col-span-7">
          {contact.links.map((link) => (
            <li key={link.label} className="border-t border-ivory/15 last:border-b">
              <a
                href={link.href}
                className="focus-ring-dark group flex items-center justify-between gap-4 py-5"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-sage">
                    {link.label}
                  </span>
                  <span className="mt-1 block break-all text-lg sm:break-normal">
                    {link.value}
                  </span>
                  {link.external && (
                    <span className="sr-only"> (opens in a new tab)</span>
                  )}
                </span>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-ivory/50 transition-colors duration-200 group-hover:text-ivory"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
