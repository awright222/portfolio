import Image from "next/image";
import { hero, site } from "../data/site";
import { Button, Container } from "./ui";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="pb-20 pt-12 md:pb-28 md:pt-20"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h1
              id="hero-heading"
              className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              {hero.name}
            </h1>
            <p className="mt-5 max-w-xl font-display text-2xl leading-snug text-slate-deep sm:text-3xl">
              {hero.subheading}
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {hero.intro}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#work">View My Work</Button>
              <Button href={site.links.linkedin} variant="secondary" external>
                LinkedIn
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-sage/30"
              />
              {/* The source photo is 3:4, so the frame matches and nothing is cropped. */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone ring-1 ring-charcoal/10">
                <Image
                  src="/AlexWright.png"
                  alt="Portrait of Alex Wright, smiling, in a tan jacket outdoors at sunset."
                  fill
                  priority
                  sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
