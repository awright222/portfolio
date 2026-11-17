import { nav, site } from "../data/site";
import { Container } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="border-t border-ivory/15">
        <Container className="flex flex-col gap-4 py-6 text-sm text-ivory/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="focus-ring-dark block py-2 transition-colors duration-200 hover:text-ivory"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
