import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, ShieldCheck, Star } from "lucide-react";

import { faqAnxietati } from "@/lib/faq";
import { Faq } from "@/components/Faq";
import { GuideBanner } from "@/components/GuideBanner";
import { PreevaluareForm } from "@/components/PreevaluareForm";
import { Bullet, InfoCard, InlineCta, Section, SectionTitle } from "@/components/sections";
import { contact, images, proof, showPriceFigures, whatsappMessages } from "@/lib/site";

const title = "Hidroizolații terase circulabile București | HBS";
const description =
  "Terasă circulabilă cu infiltrații sau gresie care sună a gol? Sistem poliuretanic continuu, fără îmbinări. Trimite poze pentru o preevaluare în aceeași zi.";

export const Route = createFileRoute("/hidroizolatii-terase-circulabile")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TeraseCirculabile,
});

function TeraseCirculabile() {
  return (
    <>
      <section className="relative">
        <img
          src={images.teraseHero}
          alt="Hidroizolație pe terasă circulabilă executată de HBS"
          className="h-52 w-full object-cover"
          width={1029}
          height={658}
        />
        <div className="bg-ink px-4 py-8 text-white">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Terase circulabile
            </p>
            <h1 className="mt-2 text-[26px] font-bold leading-tight">
              Terasa se calcă zilnic — de aceea hidroizolația cedează prima
            </h1>
            <p className="mt-3 text-base leading-relaxed text-white/80">
              O terasă circulabilă are trafic, mobilier, dilatări și un placaj peste hidroizolație.
              Orice îmbinare din sistemul de dedesubt devine, în timp, un punct de intrare.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/70">
              <li className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-primary text-primary" aria-hidden />
                {proof.rating} · {proof.reviews}
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
                Garanție pe sistem
              </li>
            </ul>
            <a
              href="#preevaluare"
              className="mt-6 flex h-14 items-center justify-center gap-2 rounded-md bg-primary text-base font-bold text-primary-foreground"
            >
              <Camera className="h-5 w-5" aria-hidden />
              Trimite poze pentru o preevaluare
            </a>
            <p className="mt-2 text-center text-xs text-white/60">
              Răspuns în aceeași zi lucrătoare, fără deplasare în prima fază.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <SectionTitle kicker="Simptome specifice" title="Cum arată o terasă circulabilă cu probleme" />
        <div className="grid gap-3">
          <InfoCard title="Gresia sună a gol sau s-a ridicat">
            Apa a ajuns în stratul de adeziv și lucrează la fiecare ciclu de îngheț-dezgheț.
          </InfoCard>
          <InfoCard title="Rosturi crăpate sau lipsă">
            Rostul e prima barieră. Când cedează, apa intră direct în șapă și circulă lateral.
          </InfoCard>
          <InfoCard title="Bălți care rămân după ploaie">
            Panta a fost pierdută la o intervenție anterioară sau scurgerea e sub nivelul apei.
          </InfoCard>
          <InfoCard title="Pete pe tavanul de dedesubt">
            De obicei apar la câțiva metri de locul real al infiltrației.
          </InfoCard>
          <InfoCard title="Atic umflat sau cu tencuiala căzută">
            Racordul terasă–atic e locul unde se pierd cele mai multe lucrări.
          </InfoCard>
        </div>
        <InlineCta
          label="Recunoști una dintre situații? Trimite o poză."
          whatsappMessage={whatsappMessages.terase}
        />
      </Section>

      <Section tone="soft">
        <SectionTitle kicker="Soluția tehnică" title="Sistem poliuretanic continuu, fără îmbinări" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          Membrana se aplică lichidă și polimerizează într-un strat unic, care urcă pe atic, în
          jurul scurgerilor și la pragurile de ușă. Nu are suprapuneri, deci nu are unde ceda.
        </p>
        <ul className="mt-3">
          <Bullet>Elastic — urmează mișcările structurii fără să fisureze</Bullet>
          <Bullet>Aderă pe tot suportul, deci apa nu poate circula pe dedesubt</Bullet>
          <Bullet>Se racordează etanș la detalii, exact acolo unde cedează membranele</Bullet>
          <Bullet>Peste el se poate monta gresie, deck sau strat de uzură circulabil</Bullet>
        </ul>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <figure>
            <img
              src={images.terase1}
              alt="Terasă circulabilă în timpul execuției hidroizolației"
              className="h-36 w-full rounded-lg object-cover"
              loading="lazy"
              width={1400}
              height={775}
            />
            <figcaption className="mt-1.5 text-xs text-muted-foreground">
              Suport pregătit, înainte de aplicare
            </figcaption>
          </figure>
          <figure>
            <img
              src={images.terase2}
              alt="Terasă circulabilă finalizată"
              className="h-36 w-full rounded-lg object-cover"
              loading="lazy"
              width={1400}
              height={775}
            />
            <figcaption className="mt-1.5 text-xs text-muted-foreground">
              Terasa finalizată, gata de folosit
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section>
        <SectionTitle kicker="Caz real" title="Proiect Griviţa — a treia intervenție la aceeași terasă" />
        <img
          src={images.teraseGrivita}
          alt="Proiect terasă circulabilă Griviţa, executat de HBS"
          className="h-52 w-full rounded-lg object-cover"
          loading="lazy"
          width={1600}
          height={1200}
        />
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Problema:</strong> infiltrație în apartamentul de
          dedesubt, după două reparații făcute de alte firme.{" "}
          <strong className="text-foreground">Diagnostic:</strong> membrană petrecută cu îmbinări
          desfăcute la atic și șapă cu umiditate ridicată.{" "}
          <strong className="text-foreground">Intervenție:</strong> decopertare completă, uscarea
          suportului, corectarea pantei, sistem poliuretanic continuu pe suprafață și pe atic.{" "}
          <strong className="text-foreground">Rezultat:</strong> terasa e din nou circulabilă, fără
          reveniri, cu garanție pe sistem.
        </p>
        <InlineCta
          label="Ai o situație asemănătoare?"
          whatsappMessage={whatsappMessages.terase}
        />
      </Section>

      <Section tone="soft">
        <SectionTitle kicker="Transparență" title="Ce include prețul unei terase circulabile" />
        <div className="grid gap-3">
          <InfoCard title="Costuri fixe">
            Mobilizare, protejarea zonelor adiacente, decopertarea placajului și a straturilor
            compromise, uscarea suportului, pregătirea aticului și a scurgerilor, evacuarea
            molozului.
          </InfoCard>
          <InfoCard title="Costuri variabile">
            Primer, membrană poliuretanică, strat de uzură sau placaj nou, manoperă calificată — toate
            proporționale cu suprafața.
          </InfoCard>
          <InfoCard title="De ce terasele mici par scumpe pe metru pătrat">
            Partea fixă e identică la 10 mp și la 30 mp. Se împarte însă la mai puțini metri, deci
            prețul unitar crește, chiar dacă lucrarea totală costă mai puțin.
          </InfoCard>
        </div>
        {showPriceFigures ? null : (
          <p className="mt-4 rounded-md border border-border bg-background p-3 text-sm leading-relaxed">
            Nu afișăm un preț pe metru pătrat fără să vedem terasa. Din poze îți dăm însă un
            interval orientativ, înainte de orice deplasare.
          </p>
        )}
      </Section>

      <Section>
        <SectionTitle kicker="Întrebări frecvente" title="Ce ne întreabă oamenii cel mai des" />
        <div className="flex flex-col gap-3">
          {[
            [
              "Se poate aplica peste gresia existentă?",
              "Uneori da, dacă placajul e bine aderent, uscat și fără plăci desprinse. Dar dacă gresia sună a gol, înseamnă că apa e deja dedesubt — atunci acoperirea ei doar ascunde problema.",
            ],
            [
              "Cum știu dacă apa e în șapă?",
              "Din poze nu se poate confirma. Se verifică pe teren cu aparat de umiditate. Un indiciu puternic: pata de pe tavan nu se usucă niciodată complet, nici după săptămâni fără ploaie.",
            ],
            [
              "Cât durează lucrarea?",
              "În general 3–7 zile pentru o terasă obișnuită. Cel mai mult durează uscarea suportului, iar asta depinde de vreme, nu de noi.",
            ],
            [
              "Se poate lucra iarna?",
              "Depinde de temperatură și de umiditate. Îți spunem sincer dacă e mai bine să amânăm — un sistem aplicat în condiții greșite cedează, indiferent cine îl pune.",
            ],
            [
              "Trebuie să eliberez terasa?",
              "Da, mobilierul și ghivecele trebuie mutate. Restul protejării o facem noi, inclusiv ferestrele și zonele adiacente.",
            ],
          ].map(([q, a]) => (
            <details key={q} className="rounded-lg border border-border bg-card p-4">
              <summary className="cursor-pointer font-display text-base font-bold">{q}</summary>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
        <p className="mb-3 mt-6 font-display text-base font-bold">
          Despre deranj, mizerie și cine răspunde
        </p>
        <Faq items={faqAnxietati} />
        <GuideBanner />
        <InlineCta
          label="Ai altă întrebare? Scrie-ne pe WhatsApp."
          whatsappMessage={whatsappMessages.terase}
        />
      </Section>

      <Section id="preevaluare" tone="soft">
        <SectionTitle kicker="Ultimul pas" title="Trimite poze cu terasa ta" />
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          Trei întrebări scurte, apoi trimiți pozele pe WhatsApp: o poză de ansamblu, una pe zona
          cu problema și una pe atic sau pe scurgere. Sau sună direct la{" "}
          <a href={contact.phoneHref} className="font-semibold text-foreground underline">
            {contact.phoneDisplay}
          </a>
        </p>
        <PreevaluareForm contextLabel="terasă circulabilă" />
        <Link
          to="/"
          className="mt-5 flex h-12 items-center justify-center rounded-md border-2 border-border bg-background text-sm font-semibold"
        >
          Vezi și celelalte situații pe care le rezolvăm
        </Link>
      </Section>
    </>
  );
}
