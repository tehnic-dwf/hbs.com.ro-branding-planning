import { Link } from "@tanstack/react-router";
import { FileDown } from "lucide-react";

/**
 * Lead magnet: banner către ghidul în 7 puncte.
 * Se plasează după secțiunea de cauze (Locația A) și după cea de preț (Locația B).
 */
export function GuideBanner({
  title = "Nu ești încă pregătit pentru o preevaluare?",
  text = "Descarcă gratuit Ghidul în 7 puncte: ce să întrebi orice firmă înainte să-ți atingă terasa.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <div className="mt-6 rounded-lg border border-l-4 border-border border-l-primary bg-card p-4 shadow-sm">
      <p className="font-display text-base font-bold text-foreground">{title}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
      <Link
        to="/ghid-proprietar-terasa"
        className="mt-3 flex h-12 items-center justify-center gap-2 rounded-md bg-primary text-sm font-bold text-primary-foreground"
      >
        <FileDown className="h-4 w-4" aria-hidden />
        Vezi ghidul (1 min)
      </Link>
    </div>
  );
}
