import { MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { contact, whatsappLink } from "@/lib/site";

export function Section({
  id,
  children,
  tone = "plain",
}: {
  id?: string;
  children: ReactNode;
  tone?: "plain" | "soft" | "ink";
}) {
  const bg =
    tone === "soft" ? "bg-secondary" : tone === "ink" ? "bg-ink text-white" : "bg-background";
  return (
    <section id={id} className={`px-4 py-10 ${bg}`}>
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}

export function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="mb-5">
      {kicker ? (
        <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-primary">{kicker}</p>
      ) : null}
      <h2 className="text-2xl font-bold leading-tight">{title}</h2>
    </div>
  );
}

export function InlineCta({ label, whatsappMessage }: { label: string; whatsappMessage: string }) {
  return (
    <div className="mt-6 rounded-lg border-2 border-primary/25 bg-accent p-4">
      <p className="font-display text-base font-bold text-foreground">{label}</p>
      <div className="mt-3 flex flex-col gap-2">
        <a
          href="#preevaluare"
          className="flex h-12 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground"
        >
          Trimite poze pentru o preevaluare
        </a>
        <div className="grid grid-cols-2 gap-2">
          <a
            href={whatsappLink(whatsappMessage)}
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
    </div>
  );
}

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 py-2 text-sm leading-relaxed">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
      <span>{children}</span>
    </li>
  );
}

export function InfoCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <h3 className="font-display text-base font-bold">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
