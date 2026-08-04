import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MessageCircle, Phone, Printer } from "lucide-react";
import { useState } from "react";

import { Section, SectionTitle } from "@/components/sections";
import { ghidPuncte } from "@/lib/faq";
import { contact, proof, whatsappLink, whatsappMessages } from "@/lib/site";

const title = "Ghidul proprietarului de terasă: 7 verificări | HBS";
const description =
  "7 lucruri de verificat înainte să lași o firmă să-ți repare terasa: diagnoză cu măsurători, prag de ușă, protecția finisajelor, garanție unitară, raport tehnic.";

export const Route = createFileRoute("/ghid-proprietar-terasa")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GhidPage,
});

const FREE_POINTS = 2;

function GhidPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [prenume, setPrenume] = useState("");
  const [email, setEmail] = useState("");
  const [eroare, setEroare] = useState("");

  const vizibile = unlocked ? ghidPuncte : ghidPuncte.slice(0, FREE_POINTS);

  function deblocheaza() {
    if (!prenume.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setEroare("Avem nevoie de prenume și de o adresă de e-mail validă.");
      return;
    }
    setEroare("");
    setUnlocked(true);
  }

  return (
    <>
      <section className="bg-ink px-4 py-8 text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">
            Ghid gratuit · 1 minut
          </p>
          <h1 className="mt-2 text-[26px] font-bold leading-tight">
            Ghidul proprietarului de terasă
          </h1>
          <p className="mt-3 text-base leading-relaxed text-white/80">
            7 lucruri obligatorii de verificat înainte să lași o firmă să-ți spargă sau să-ți repare
            terasa. Folosește-le ca listă de întrebări la orice ofertă, inclusiv la a noastră.
          </p>
        </div>
      </section>

      <Section>
        <ol className="flex flex-col gap-3">
          {vizibile.map((punct, i) => (
            <li key={punct.title} className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <h2 className="font-display text-base font-bold leading-snug">{punct.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">Verifică:</strong> {punct.check}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {!unlocked ? (
          <div className="mt-4 rounded-lg border-2 border-primary bg-accent p-4">
            <h2 className="font-display text-lg font-bold">
              Mai sunt {ghidPuncte.length - FREE_POINTS} puncte
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground">
              Lasă prenumele și e-mailul și vezi ghidul complet, cu tot ce ține de protecția
              finisajelor, ploaia neprevăzută, garanția unitară și raportul tehnic.
            </p>
            <label className="mt-4 block text-sm font-medium" htmlFor="prenume">
              Prenume
            </label>
            <input
              id="prenume"
              value={prenume}
              onChange={(e) => setPrenume(e.target.value)}
              autoComplete="given-name"
              className="mb-3 mt-1 h-12 w-full rounded-md border-2 border-border bg-background px-3 text-base outline-none focus:border-primary"
            />
            <label className="block text-sm font-medium" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              inputMode="email"
              autoComplete="email"
              className="mt-1 h-12 w-full rounded-md border-2 border-border bg-background px-3 text-base outline-none focus:border-primary"
            />
            {eroare ? <p className="mt-2 text-sm font-medium text-destructive">{eroare}</p> : null}
            <button
              type="button"
              onClick={deblocheaza}
              className="mt-4 flex h-14 w-full items-center justify-center rounded-md bg-primary text-base font-bold text-primary-foreground"
            >
              Vezi ghidul complet
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Fără abonare la newsletter și fără apeluri repetate. Doar ghidul.
            </p>
          </div>
        ) : (
          <div className="mt-5 rounded-lg border border-border bg-secondary p-4">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <Check className="h-4 w-4 text-primary" aria-hidden />
              Gata, {prenume}. Ai ghidul complet mai sus.
            </p>
            <button
              type="button"
              onClick={() => window.print()}
              className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-md border-2 border-border bg-background text-sm font-semibold"
            >
              <Printer className="h-4 w-4" aria-hidden />
              Salvează sau printează ghidul
            </button>
          </div>
        )}
      </Section>

      <Section tone="soft">
        <SectionTitle
          kicker={`${proof.rating} · ${proof.reviews}`}
          title="Ai deja o problemă, nu doar întrebări?"
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          Trimite 3–4 poze și îți spunem ce se poate confirma din ele și ce nu. Răspundem în aceeași
          zi lucrătoare.
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <Link
            to="/"
            hash="preevaluare"
            className="flex h-12 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground"
          >
            Trimite poze pentru o preevaluare
          </Link>
          <div className="grid grid-cols-2 gap-2">
            <a
              href={whatsappLink(whatsappMessages.ghid)}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-md border-2 border-border bg-background text-sm font-semibold"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
            <a
              href={contact.phoneHref}
              className="flex h-12 items-center justify-center gap-2 rounded-md border-2 border-border bg-background text-sm font-semibold"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Sună
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
