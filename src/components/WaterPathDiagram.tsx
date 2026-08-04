import { ArrowDown } from "lucide-react";

const steps = [
  {
    label: "Punct de intrare",
    detail: "Un prag, o gură de scurgere, un racord la atic sau o fisură în finisaj.",
  },
  {
    label: "Traseu prin straturi",
    detail: "Apa circulă lateral prin șapă, adeziv sau termoizolație, uneori câțiva metri.",
  },
  {
    label: "Pata vizibilă",
    detail: "Apare acolo unde apa găsește prima ieșire — rar deasupra locului prin care a intrat.",
  },
];

/** Diagramă simplă „punct de intrare → traseu în straturi → pată vizibilă”, lizibilă pe mobil. */
export function WaterPathDiagram() {
  return (
    <ol className="flex flex-col gap-2" aria-label="Traseul apei prin straturile terasei">
      {steps.map((step, i) => (
        <li key={step.label}>
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              {i + 1}. {step.label}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
          </div>
          {i < steps.length - 1 ? (
            <div className="flex justify-center py-1" aria-hidden>
              <ArrowDown className="h-5 w-5 text-primary" />
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
