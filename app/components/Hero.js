import Image from "next/image";
import { hero, site } from "../data/site";
import { Button, Container } from "./ui";

// Keep each phrase of the subheading whole, so it only ever wraps between phrases.
const phrases = hero.subheading.split(". ").map((p, i, all) =>
  i < all.length - 1 ? `${p}.` : p,
);

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="pb-12 pt-8 lg:py-14"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[22rem_1fr] lg:items-center lg:gap-16">
          {/* A smaller sage panel sits offset behind the portrait as a backing. */}
          <div className="relative w-40 sm:w-52 lg:w-full">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-sage-tint lg:translate-x-4 lg:translate-y-4"
            />
            {/* The source photo is 3:4, so the frame matches and nothing is cropped. */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone ring-1 ring-charcoal/10">
              <Image
                src="/AlexWright.png"
                alt="Portrait of Alex Wright, smiling, in a tan jacket outdoors at sunset."
                fill
                priority
                sizes="(min-width: 1024px) 22rem, (min-width: 640px) 13rem, 10rem"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h1
              id="hero-heading"
              className="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.25rem]"
            >
              {hero.name}
            </h1>
            <p className="mt-4 max-w-lg font-display text-2xl leading-snug text-slate-deep sm:text-[1.75rem]">
              {phrases.map((phrase, i) => (
                <span key={phrase}>
                  {i > 0 && " "}
                  <span className="whitespace-nowrap">{phrase}</span>
                </span>
              ))}
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              {hero.intro}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#work">View My Work</Button>
              <Button href={site.links.linkedin} variant="secondary" external>
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
