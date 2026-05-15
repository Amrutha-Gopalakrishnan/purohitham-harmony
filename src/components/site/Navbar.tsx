import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-display text-lg sm:text-xl text-maroon font-semibold tracking-tight">
            K. Gopalakrishnan
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-gold">
            Purohitham
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/75 hover:text-maroon transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+919843315323"
          className="hidden lg:inline-flex items-center rounded-full border border-maroon/20 bg-maroon text-primary-foreground px-5 py-2 text-sm font-medium hover:bg-maroon/90 transition"
        >
          Call Now
        </a>

        <button
          className="lg:hidden p-2 -mr-2 text-maroon"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[15px] text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+919843315323"
              className="mt-3 inline-flex justify-center rounded-full bg-maroon text-primary-foreground px-5 py-3 text-sm font-medium"
            >
              Call +91 98433 15323
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
