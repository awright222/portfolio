import { ArrowUpRight } from "lucide-react";

export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

const tones = {
  light: "bg-ivory text-charcoal",
  stone: "bg-stone/60 text-charcoal",
  dark: "bg-charcoal text-ivory",
};

export function Section({
  id,
  labelledBy,
  tone = "light",
  className = "",
  children,
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${tones[tone]} py-20 md:py-28 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const buttonVariants = {
  primary:
    "bg-charcoal text-ivory hover:bg-slate-deep focus-visible:outline-slate",
  secondary:
    "border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-stone focus-visible:outline-slate",
  primaryDark:
    "bg-ivory text-charcoal hover:bg-stone focus-visible:outline-sage",
  secondaryDark:
    "border border-ivory/30 text-ivory hover:border-ivory hover:bg-ivory/10 focus-visible:outline-sage",
};

export function Button({
  href,
  variant = "primary",
  external = false,
  className = "",
  children,
}) {
  return (
    <a
      href={href}
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external && (
        <>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </>
      )}
    </a>
  );
}

export function ExternalLink({ href, className = "", children, ...rest }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
