import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import SiteHeader from "./components/SiteHeader";
import { site } from "./data/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}/AlexWright.png`,
  sameAs: [site.links.linkedin, site.links.github],
  worksFor: {
    "@type": "Organization",
    name: "Meadowlark Labs",
    url: site.links.meadowlark,
  },
};

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-charcoal focus:px-4 focus:py-2 focus:text-sm focus:text-ivory"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <SelectedWork />
        <Experience />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
