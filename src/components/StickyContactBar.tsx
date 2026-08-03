import { Phone, MessageCircle, Camera } from "lucide-react";
import { useEffect, useState } from "react";

import { contact, whatsappLink } from "@/lib/site";

const GATE_ID = "cta-gate";

export function StickyContactBar({ whatsappMessage }: { whatsappMessage: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const gate = document.getElementById(GATE_ID);
    if (!gate) {
      setVisible(true);
      return;
    }

    setVisible(false);
    const update = () => {
      const rect = gate.getBoundingClientRect();
      // show only once the gate CTA has scrolled above the viewport
      setVisible(rect.bottom <= 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [whatsappMessage]);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/98 pb-[env(safe-area-inset-bottom)] backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-2 px-3 py-2">
        <a
          href={contact.phoneHref}
          className="flex h-12 flex-col items-center justify-center rounded-md border border-border text-xs font-semibold text-foreground"
        >
          <Phone className="mb-0.5 h-4 w-4" aria-hidden />
          Sună
        </a>
        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 flex-col items-center justify-center rounded-md border border-border text-xs font-semibold text-foreground"
        >
          <MessageCircle className="mb-0.5 h-4 w-4" aria-hidden />
          WhatsApp
        </a>
        <a
          href="#preevaluare"
          className="flex h-12 flex-col items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground"
        >
          <Camera className="mb-0.5 h-4 w-4" aria-hidden />
          Trimite poze
        </a>
      </div>
    </div>
  );
}
