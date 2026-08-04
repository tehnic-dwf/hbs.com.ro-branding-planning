import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, ShieldCheck, Star, Camera, Clock, FileText } from "lucide-react";

import { Faq } from "@/components/Faq";
import { GuideBanner } from "@/components/GuideBanner";
import { PreevaluareForm } from "@/components/PreevaluareForm";
import { WaterPathDiagram } from "@/components/WaterPathDiagram";
import { Bullet, InfoCard, InlineCta, Section, SectionTitle } from "@/components/sections";
import { faqAnxietati } from "@/lib/faq";
import { contact, images, proof, showPriceFigures, whatsappMessages } from "@/lib/site";

const title = "Hidroizolații terase și balcoane București | HBS";
const description =
  "Ai reparat terasa și infiltrația a reapărut? HBS identifică de ce a cedat sistemul existent și îți explică ce trebuie verificat înainte să îți propună lucrarea.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

const simptome = [
  {
    t: "Pata apare pe tavan sau pe peretele de sub terasă după ploaie",
    d: "Se usucă parțial între ploi, apoi revine în același loc.",
  },
  {
    t: "Gresia sună gol, s-a ridicat sau s-a desprins după iarnă",
    d: "Apa a ajuns sub placaj și lucrează la fiecare ciclu de îngheț-dezgheț.",
  },
  {
    t: "Rosturile se crapă, se înnegresc sau rămân umede",
    d: "Rostul e prima barieră vizibilă. Când cedează, apa are deja drum spre suport.",
  },
  {
    t: "Ai refăcut local rosturile sau ai aplicat o soluție peste finisaj, dar apa a revenit",
    d: "Semnul că intervenția a acoperit simptomul, nu punctul prin care intră apa.",
  },
  {
    t: "Bălți care rămân zile întregi după ploaie",
    d: "Panta sau gura de scurgere nu mai funcționează așa cum ar trebui.",
  },
  {
    t: "Miros de umezeală sau mucegai în camera de dedesubt",
    d: "Umiditatea e deja în straturi, nu doar la suprafața finisajului.",
  },
];

const inainteDeIncepere = [
  {
    t: "Protejarea proprietății și a finisajelor",
    d: "Traseul de acces, ușile, balustrada și zonele adiacente se protejează înainte de a se deschide primul material. Starea inițială se documentează foto.",
  },
  {
    t: "Vremea și terasa deschisă",
    d: "Etapele se planifică în funcție de prognoză, iar suprafața decopertată se protejează temporar. Dacă vremea nu permite aplicarea corectă, îți spunem și amânăm etapa.",
  },
  {
    t: "Praguri, cote și deschiderea ușilor",
    d: "Înainte de execuție se măsoară cota pragului, panta și nivelul scurgerilor, ca să știi dinainte cum se comportă ușa după refacere.",
  },
  {
    t: "Durata, accesul, mizeria și evacuarea",
    d: "Planul de lucru include zilele efective, timpii de uscare, dependențele meteo, evacuarea molozului și curățenia finală.",
  },
  {
    t: "Estetică și utilizarea terasei",
    d: "Finisajul se alege împreună cu soluția tehnică: aspect, întreținere, comportament la îngheț, alunecare, greutate și acces ulterior la hidroizolație.",
  },
];

function Index() {
  return (
    <>
      {/* 8.1 HERO */}
      <section className="relative">
        <img
          src={images.reparatii}
          alt="Specialist HBS analizând o terasă rezidențială cu infiltrații"
          className="h-56 w-full object-cover"
          width={1900}
          height={693}
        />
        <div className="bg-ink px-4 py-8 text-white">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-[28px] font-bold leading-tight">
              Ai reparat terasa, dar infiltrația a reapărut?
            </h1>
            <p className="mt-3 text-base leading-relaxed text-white/80">
              HBS identifică de ce a cedat sistemul existent și îți explică ce trebuie verificat
              înainte să îți propună lucrarea.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {proof.repairShare} proiecte executate de HBS sunt refaceri ale unor sisteme
              existente.
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
              <li className="flex items-center gap-1.5">
                <FileText className="h-4 w-4 text-primary" aria-hidden />
                ISO 9001 · sisteme Hahne
              </li>
            </ul>

            <a
              href="#preevaluare"
              className="mt-6 flex h-14 items-center justify-center gap-2 rounded-md bg-primary text-base font-bold text-primary-foreground"
            >
              <Camera className="h-5 w-5" aria-hidden />
              Trimite poze pentru o preevaluare
            </a>
            <a
              href="#cazuri"
              className="mt-2 flex h-12 items-center justify-center rounded-md border-2 border-white/25 text-sm font-semibold text-white"
            >
              Vezi cazuri similare
            </a>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Nu trebuie să știi ce sistem a fost folosit. Fotografiile ne ajută să înțelegem
              situația inițială; cauza și soluția finală se confirmă după verificarea la fața
              locului.
            </p>
          </div>
        </div>
      </section>

      {/* 8.2 RECUNOAȘTEREA SIMPTOMELOR */}
      <Section>
        <SectionTitle kicker="Recunoști situația?" title="Recunoști una dintre aceste situații?" />
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          Semnul vizibil nu arată întotdeauna cauza, dar ne ajută să înțelegem de unde trebuie
          începută verificarea.
        </p>
        <div className="flex flex-col gap-3">
          {simptome.map((s) => (
            <InfoCard key={s.t} title={s.t}>
              {s.d}
            </InfoCard>
          ))}
        </div>
        <InlineCta
          id="cta-gate"
          label="Nu ești sigur ce ai? Trimite o poză și îți spunem."
          whatsappMessage={whatsappMessages.home}
        />
      </Section>

      {/* 8.3 SIMPTOMUL NU E CAUZA */}
      <Section tone="soft">
        <SectionTitle
          kicker="Cauza, nu simptomul"
          title="Pata de pe tavan nu arată întotdeauna locul prin care intră apa."
        />
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          Apa poate pătrunde la un prag, o scurgere, un racord sau o fisură și poate circula prin
          straturile terasei înainte să devină vizibilă în interior.
        </p>
        <WaterPathDiagram />
        <p className="mt-5 rounded-md border-l-4 border-primary bg-accent p-3 text-sm font-semibold leading-relaxed">
          De aceea verificăm traseul probabil al apei, nu doar zona în care apare pata.
        </p>
        <GuideBanner />
      </Section>

      {/* 8.4 PREEVALUARE ȘI DIAGNOSTIC */}
      <Section>
        <SectionTitle
          kicker="Diagnostic"
          title="Ce putem vedea din poze și ce trebuie verificat la fața locului"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border-2 border-primary/25 bg-accent p-4">
            <p className="font-display font-bold">Din poze</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Putem observa tipul finisajului, simptomele vizibile, accesul și dimensiunea
              aproximativă.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="flex items-center gap-2 font-display font-bold">
              <AlertTriangle className="h-4 w-4 text-primary" aria-hidden />
              La fața locului
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Verificăm pantele, scurgerile, racordurile, starea suportului și dacă apa a ajuns în
              straturile terasei.
            </p>
          </div>
        </div>

        <ol className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {["Poze", "Clarificări", "Vizită", "Ofertă finală"].map((pas, i) => (
            <li
              key={pas}
              className="rounded-md border border-border bg-card px-3 py-2 text-sm font-semibold"
            >
              <span className="mr-1.5 text-primary">{i + 1}</span>
              {pas}
            </li>
          ))}
        </ol>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Primești o recomandare bazată pe ceea ce poate fi confirmat, nu o promisiune construită
          pe presupuneri. Estimarea din poze, evaluarea la fața locului și oferta finală sunt trei
          lucruri diferite și ți le spunem ca atare.
        </p>
        <InlineCta
          label="Trimite fotografiile situației tale"
          whatsappMessage={whatsappMessages.home}
        />
      </Section>

      {/* 8.5 LOCAL VS COMPLET */}
      <Section tone="soft">
        <SectionTitle
          kicker="Ce e corect în cazul tău"
          title="Nu orice infiltrație cere refacerea completă. Dar nu orice problemă poate fi rezolvată printr-o peticire."
        />
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          Recomandăm o intervenție locală atunci când defectul este local, suportul este stabil și
          apa nu a compromis straturile din jur. Când gresia este desprinsă pe suprafețe extinse,
          apa stagnează în șapă, pantele sunt greșite sau racordurile au cedat, o reparație
          punctuală poate ascunde temporar simptomul fără să elimine cauza.
        </p>
        <Faq
          items={[
            {
              q: "Când poate fi suficientă o intervenție locală?",
              a: "Când defectul este delimitat clar, restul suprafeței este integru, suportul este uscat, iar sistemul existent este compatibil cu materialul de reparație. În aceste condiții intervenția este mai scurtă și mai ieftină.",
            },
            {
              q: "Când refacerea completă devine justificată?",
              a: "Când s-a intervenit deja de mai multe ori, apa a ajuns în șapă sau în termoizolație, pantele sunt greșite ori sistemul existent are îmbinări cedate pe toată suprafața. Într-o astfel de situație o reparație locală amână problema, nu o rezolvă.",
            },
          ]}
        />
        <p className="mt-4 rounded-md border-l-4 border-primary bg-accent p-3 text-sm leading-relaxed">
          Dacă în cazul tău e suficientă o intervenție locală, îți spunem asta — chiar dacă
          înseamnă o lucrare mai mică pentru noi. Decizia finală se ia însă după verificarea la
          fața locului.
        </p>
      </Section>

      {/* 8.6 CAZURI SIMILARE */}
      <Section id="cazuri">
        <SectionTitle
          kicker="Cazuri reale"
          title="Proiecte în care infiltrația a reapărut după o lucrare anterioară"
        />
        <article className="overflow-hidden rounded-lg border border-border bg-card">
          <img
            src={images.terase1}
            alt="Terasă circulabilă refăcută complet de HBS după două intervenții anterioare"
            className="h-48 w-full object-cover"
            loading="lazy"
            width={1400}
            height={775}
          />
          <div className="p-4">
            <h3 className="font-display text-lg font-bold">
              Terasă circulabilă, infiltrație în dormitor
            </h3>
            <dl className="mt-3 flex flex-col gap-2 text-sm leading-relaxed">
              <div>
                <dt className="font-bold">Problema</dt>
                <dd className="text-muted-foreground">
                  Pată pe tavan după fiecare ploaie, deși terasa fusese reparată de două ori.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Ce am găsit</dt>
                <dd className="text-muted-foreground">
                  Membrană cu îmbinări cedate la racordul cu aticul și apă captivă în șapă.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Ce am refăcut</dt>
                <dd className="text-muted-foreground">
                  Decopertare, uscarea suportului, corectarea pantei și sistem poliuretanic
                  continuu pe suprafață și pe atic.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Cum am documentat</dt>
                <dd className="text-muted-foreground">
                  Fotografii pe etape, materialele folosite și procesul-verbal de recepție.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Rezultat</dt>
                <dd className="text-muted-foreground">
                  Terasa e din nou utilizabilă, fără reveniri, cu garanție pe sistemul executat.
                </dd>
              </div>
            </dl>
          </div>
        </article>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <figure>
            <img
              src={images.balcon}
              alt="Balcon cu hidroizolație refăcută de HBS"
              className="h-32 w-full rounded-lg object-cover"
              loading="lazy"
              width={1800}
              height={1350}
            />
            <figcaption className="mt-1.5 text-xs text-muted-foreground">
              Balcon — refacere după desprinderea placajului
            </figcaption>
          </figure>
          <figure>
            <img
              src={images.fundatie}
              alt="Hidroizolație de fundație executată de HBS la un bloc"
              className="h-32 w-full rounded-lg object-cover"
              loading="lazy"
              width={1900}
              height={700}
            />
            <figcaption className="mt-1.5 text-xs text-muted-foreground">
              Fundație — infiltrații la demisol
            </figcaption>
          </figure>
        </div>

        <Link
          to="/hidroizolatii-terase-circulabile"
          className="mt-4 flex h-12 items-center justify-center rounded-md border-2 border-border bg-background text-sm font-semibold"
        >
          Vezi cazul complet pe terase circulabile
        </Link>
      </Section>

      {/* 8.7 GARANȚIE */}
      <Section tone="soft">
        <SectionTitle kicker="Cine răspunde" title="O singură echipă răspunde pentru sistemul executat." />
        <p className="text-sm leading-relaxed text-muted-foreground">
          HBS documentează etapele lucrării, materialele folosite și recepția. Condițiile de
          garanție trebuie explicate înainte de semnare, nu descoperite după apariția unei
          probleme.
        </p>
        <p className="mb-1 mt-5 font-display text-base font-bold">
          Ce trebuie să afli înainte de lucrare
        </p>
        <ul>
          <Bullet>Ce acoperă garanția și ce nu acoperă.</Bullet>
          <Bullet>Cine face constatarea și în cât timp se răspunde.</Bullet>
          <Bullet>Ce întreținere este necesară pentru a menține garanția.</Bullet>
          <Bullet>Ce intervenții ulterioare pot afecta garanția.</Bullet>
          <Bullet>
            Acces direct la directorul executiv, nu la un call-center. Dacă apare o problemă, știi
            pe cine suni.
          </Bullet>
          <Bullet>Sisteme Hahne (Germania), companie certificată ISO 9001.</Bullet>
        </ul>
        <img
          src={images.hahne}
          alt="Partener Hahne Germania"
          className="mt-5 h-12 w-auto"
          loading="lazy"
          width={357}
          height={170}
        />
      </Section>

      {/* 8.8 TRANSPARENȚA COSTULUI */}
      <Section>
        <SectionTitle
          kicker="Transparență"
          title="De ce o terasă de 10 mp nu costă jumătate față de una de 20 mp"
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          O parte din cost este fixă și nu scade odată cu suprafața. De aceea compararea ofertelor
          strict la lei pe metru pătrat duce aproape întotdeauna la o concluzie greșită.
        </p>
        <div className="mt-4 grid gap-3">
          <InfoCard title="Costuri fixe — nu scad cu suprafața">
            Mobilizarea echipei și a utilajelor, protejarea zonelor adiacente, decopertarea,
            uscarea suportului, pregătirea detaliilor (atic, scurgeri, praguri), transport și
            evacuarea molozului.
          </InfoCard>
          <InfoCard title="Costuri variabile — cresc cu suprafața">
            Cantitatea de primer și de membrană poliuretanică, stratul de uzură, finisajul și orele
            de manoperă calificată.
          </InfoCard>
          <InfoCard title="Ce poate schimba devizul după decopertare">
            Umiditatea rămasă în șapă, termoizolația compromisă sau pantele greșite. Îți spunem
            dinainte care sunt aceste situații și cum se stabilește costul dacă apar.
          </InfoCard>
        </div>
        {showPriceFigures ? null : (
          <p className="mt-4 rounded-md border border-border bg-secondary p-3 text-sm leading-relaxed">
            Nu publicăm un preț pe metru pătrat, pentru că fără poze ar fi o cifră inventată. Din
            poze îți dăm însă structura costului pentru cazul tău, înainte de orice deplasare.
          </p>
        )}
        <InlineCta
          label="Vrei un reper de cost pentru cazul tău?"
          whatsappMessage={whatsappMessages.home}
        />
        <GuideBanner
          title="Compari mai multe oferte?"
          text="Ghidul în 7 puncte îți dă criteriile obiective cu care compari o ofertă ieftină cu una făcută ca la carte."
        />
      </Section>

      {/* 9. CUM DECURGE LUCRAREA */}
      <Section tone="soft">
        <SectionTitle kicker="Ce se întâmplă concret" title="Cum decurge lucrarea" />
        <ol className="flex flex-col gap-3">
          {[
            [
              "Preevaluare din poze",
              "Trimiți pozele și primești direcția probabilă de intervenție, plus ce informații mai sunt necesare.",
            ],
            [
              "Verificare pe teren",
              "Măsurători, verificarea umidității suportului și a cotelor, apoi deviz pe cazul tău.",
            ],
            [
              "Decopertare și pregătire",
              "Se îndepărtează straturile compromise, se usucă suportul și se corectează panta.",
            ],
            [
              "Aplicarea sistemului",
              "Primer și membrană poliuretanică continuă, inclusiv pe atic și la racorduri.",
            ],
            [
              "Finisaj și predare",
              "Strat de uzură, curățenie completă, documentația lucrării și garanția.",
            ],
          ].map(([t, d], i) => (
            <li key={t} className="flex gap-3 rounded-lg border border-border bg-card p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="font-display font-bold">{t}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 shrink-0 text-primary" aria-hidden />
          O terasă obișnuită înseamnă 3–7 zile de lucru, în funcție de uscare și de vreme.
        </p>
      </Section>

      {/* 9.1–9.5 ÎNAINTE DE ÎNCEPERE */}
      <Section>
        <SectionTitle
          kicker="Înainte de prima zi de șantier"
          title="Ce stabilim înainte să se deschidă primul material"
        />
        <div className="grid gap-3">
          {inainteDeIncepere.map((item) => (
            <InfoCard key={item.t} title={item.t}>
              {item.d}
            </InfoCard>
          ))}
        </div>
      </Section>

      {/* 10. ÎNTREBĂRI FRECVENTE */}
      <Section tone="soft">
        <SectionTitle kicker="Întrebări frecvente" title="Ce se întâmplă concret la tine acasă" />
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          Cele mai multe temeri nu sunt despre hidroizolație, ci despre deranj, mizerie și cine
          răspunde dacă iese prost. Iată răspunsurile, înainte să întrebi.
        </p>
        <Faq items={faqAnxietati} />
      </Section>

      {/* RECENZII */}
      <Section>
        <SectionTitle
          kicker={`${proof.rating} · ${proof.reviews}`}
          title="Ce spun oamenii după lucrare"
        />
        <div className="flex flex-col gap-3">
          {[
            [
              "Seriozitate",
              "Au venit când au spus, au lucrat cât au spus și au lăsat curat. Sună banal până când treci prin contrariul.",
            ],
            [
              "Comunicare",
              "Am primit poze pe parcursul lucrării. Nu a trebuit să merg să verific nimic.",
            ],
            [
              "Rezolvarea reală",
              "A treia firmă la aceeași terasă. Prima care mi-a explicat de unde intra apa.",
            ],
          ].map(([tema, text]) => (
            <blockquote key={tema} className="rounded-lg border border-border bg-card p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">{tema}</p>
              <p className="mt-2 text-sm leading-relaxed">„{text}”</p>
            </blockquote>
          ))}
        </div>
      </Section>

      {/* 8.9 CTA FINAL */}
      <Section id="preevaluare" tone="soft">
        <SectionTitle
          kicker="Ultimul pas"
          title="Vrei să afli ce poate fi observat din pozele terasei tale?"
        />
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          Trimite câteva fotografii și o descriere scurtă. Îți spunem ce informații mai sunt
          necesare și care este următorul pas. Dacă preferi să vorbești direct:{" "}
          <a href={contact.phoneHref} className="font-semibold text-foreground underline">
            {contact.phoneDisplay}
          </a>
        </p>
        <PreevaluareForm contextLabel="pagina principală" />
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Trimiterea solicitării nu te obligă să accepți o lucrare. Estimarea inițială se confirmă
          după verificările necesare.
        </p>
      </Section>
    </>
  );
}
