import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, MessageCircle, Star } from "lucide-react";
import { useEffect, useState } from "react";

import { contact, images, nav, proof, whatsappLink, whatsappMessages } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-border bg-background">

      <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2.5">
        <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
          <img
            src={images.logo}
            alt="HBS – Hydro Business Systems, hidroizolații"
            className="h-9 w-auto"
            width={163}
            height={92}
          />
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={contact.phoneHref}
            aria-label={`Sună la ${contact.phoneDisplay}`}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-3 text-sm font-semibold text-primary-foreground"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="hidden xs:inline sm:inline">Sună</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 bottom-0 top-[57px] z-50 overflow-y-auto bg-background px-4 pb-10 pt-6">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-display text-lg font-bold text-foreground"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#preevaluare"
              onClick={() => setOpen(false)}
              className="flex h-14 items-center justify-center rounded-md bg-primary px-4 text-base font-bold text-primary-foreground"
            >
              Trimite poze pentru o preevaluare
            </a>
            <a
              href={whatsappLink(whatsappMessages.menu)}
              target="_blank"
              rel="noreferrer"
              className="flex h-14 items-center justify-center gap-2 rounded-md border-2 border-border px-4 text-base font-semibold text-foreground"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Scrie pe WhatsApp
            </a>
            <a
              href={contact.phoneHref}
              className="flex h-14 items-center justify-center gap-2 rounded-md border-2 border-border px-4 text-base font-semibold text-foreground"
            >
              <Phone className="h-5 w-5" aria-hidden />
              {contact.phoneDisplay}
            </a>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-primary text-primary" aria-hidden />
            {proof.rating} · {proof.reviews}
          </p>
        </div>
      ) : null}
    </header>
  );
}
