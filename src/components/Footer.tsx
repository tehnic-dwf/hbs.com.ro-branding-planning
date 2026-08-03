import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

import { contact, images, proof, whatsappLink, whatsappMessages } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary px-4 pb-28 pt-10">
      <div className="mx-auto max-w-5xl">
        <img
          src={images.logo}
          alt="HBS – Hydro Business Systems"
          className="h-10 w-auto"
          width={163}
          height={92}
        />
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Hidroizolații cu sisteme poliuretanice continue. {proof.repairShare} lucrări pe care
          le facem sunt reparații după alte firme.
        </p>

        <div className="mt-6 flex flex-col gap-3 text-sm">
          <a href={contact.phoneHref} className="flex items-center gap-2 font-semibold">
            <Phone className="h-4 w-4 text-primary" aria-hidden />
            {contact.phoneDisplay}
          </a>
          <a
            href={whatsappLink(whatsappMessages.menu)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-semibold"
          >
            <MessageCircle className="h-4 w-4 text-primary" aria-hidden />
            WhatsApp
          </a>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" aria-hidden />
            {contact.email}
          </a>
          <p className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" aria-hidden />
            {contact.city} și zona limitrofă
          </p>
        </div>

        <div className="mt-8 border-t border-border pt-5 text-xs text-muted-foreground">
          <p>
            {contact.company} · CUI {contact.cui}
          </p>
          <p className="mt-1">
            Sisteme Hahne (Germania) · ISO 9001 · {proof.rating} din {proof.reviews}
          </p>
        </div>
      </div>
    </footer>
  );
}
