import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, ShieldCheck, Star, Camera, Clock, FileText } from "lucide-react";

import { PreevaluareForm } from "@/components/PreevaluareForm";
import { Bullet, InfoCard, InlineCta, Section, SectionTitle } from "@/components/sections";
import { contact, images, proof, showPriceFigures, whatsappMessages } from "@/lib/site";

const title = "Hidroizolații terase și balcoane București | HBS";
const description =
  "Ai reparat terasa și infiltrația a reapărut? HBS repară hidroizolații făcute greșit de alte firme. Trimite poze, primești o preevaluare în aceeași zi.";

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
  { t: "Pete pe tavan sau pe perete", d: "Apar la câteva zile după ploaie, apoi se usucă și revin." },
  { t: "Gresia sună a gol sau s-a ridicat", d: "Apa a ajuns sub placaj și lucrează la fiecare îngheț." },
  { t: "Rosturi crăpate, silicon desprins", d: "Semnul clasic al unei hidroizolații cu îmbinări." },
  { t: "Bălți care nu se scurg", d: "Panta sau scurgerea nu funcționează, iar apa stă zile întregi." },
  { t: "Miros de umezeală, mucegai", d: "Umiditatea e deja în structură, nu doar la suprafață." },
];

function Index() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative">
        <img
          src={images.reparatii}
          alt="Echipa HBS reparând o hidroizolație executată greșit"
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
              {proof.repairShare} lucrări pe care le facem sunt reparații după alte firme. Găsim
              cauza reală, nu doar pata de pe tavan — și o rezolvăm cu un sistem poliuretanic
              continuu, fără îmbinări.
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
            <p className="mt-2 text-center text-xs text-white/60">
              Fără vizită pe teren în prima fază. Răspuns în aceeași zi lucrătoare.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SIMPTOME */}
      <Section>
        <SectionTitle kicker="Recunoști situația?" title="Ce vezi tu acum" />
        <div className="flex flex-col gap-3">
          {simptome.map((s) => (
            <InfoCard key={s.t} title={s.t}>
              {s.d}
            </InfoCard>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Toate cele de mai sus sunt simptome. Niciunul nu îți spune unde intră apa — de aceea
          reparațiile „pe pată” nu țin.
        </p>
        <InlineCta
          id="cta-gate"
          label="Nu ești sigur ce ai? Trimite o poză și îți spunem."
          whatsappMessage={whatsappMessages.home}
        />
      </Section>

      {/* 3. DE CE REAPARE */}
      <Section tone="soft">
        <SectionTitle kicker="Cauza, nu simptomul" title="De ce reapare după ce a fost reparată" />
        <div className="grid gap-3">
          <InfoCard title="Îmbinările cedează primele">
            Membranele lipite sau sudate au rosturi. Fiecare rost e un punct de intrare care se
            deschide la dilatare-contractare, an după an.
          </InfoCard>
          <InfoCard title="Apa nu iese unde a intrat">
            Intră la un atic sau la o scurgere și apare la 3 metri distanță. Se repară pata, sursa
            rămâne.
          </InfoCard>
          <InfoCard title="Suportul era deja umed">
            Dacă șapa are apă în ea și se hidroizolează peste, umezeala rămâne captivă și împinge
            stratul nou.
          </InfoCard>
          <InfoCard title="Detaliile au fost sărite">
            Racordurile la atic, guri de scurgere, praguri de ușă — acolo se pierd majoritatea
            lucrărilor, nu în câmp.
          </InfoCard>
        </div>
      </Section>

      {/* 4. CUM DIAGNOSTICĂM */}
      <Section>
        <SectionTitle kicker="Diagnostic" title="Ce putem confirma din poze — și ce nu" />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border-2 border-primary/25 bg-accent p-4">
            <p className="font-display font-bold">Din poze vedem</p>
            <ul className="mt-1">
              <Bullet>Tipul de finisaj și de sistem existent</Bullet>
              <Bullet>Starea rosturilor, aticului și a scurgerilor</Bullet>
              <Bullet>Dacă problema e locală sau generalizată</Bullet>
              <Bullet>Un interval realist de intervenție</Bullet>
            </ul>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="flex items-center gap-2 font-display font-bold">
              <AlertTriangle className="h-4 w-4 text-primary" aria-hidden />
              Nu putem confirma din poze
            </p>
            <ul className="mt-1">
              <Bullet>Cât de umedă e șapa în profunzime</Bullet>
              <Bullet>Dacă termoizolația de dedesubt e compromisă</Bullet>
              <Bullet>Prețul final, la leu</Bullet>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Pentru cele trei de mai sus venim pe teren. Dar în majoritatea cazurilor pozele sunt
          suficiente ca să știi dacă vorbim de o intervenție locală sau de o refacere.
        </p>
        <InlineCta
          label="Trimite 3–4 poze și îți spunem în ce categorie ești."
          whatsappMessage={whatsappMessages.home}
        />
      </Section>

      {/* 5. CAZURI SIMILARE */}
      <Section tone="soft">
        <SectionTitle kicker="Cazuri reale" title="Problemă → diagnostic → rezultat" />
        <article className="overflow-hidden rounded-lg border border-border bg-card">
          <img
            src={images.terase1}
            alt="Terasă circulabilă refăcută complet de HBS"
            className="h-48 w-full object-cover"
            loading="lazy"
            width={1400}
            height={775}
          />
          <div className="p-4">
            <h3 className="font-display text-lg font-bold">Terasă circulabilă, infiltrație în dormitor</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Problema:</strong> pată pe tavan după fiecare
              ploaie, deși terasa fusese reparată de două ori.{" "}
              <strong className="text-foreground">Diagnostic:</strong> membrană cu îmbinări cedate
              la racordul cu aticul, apă captivă în șapă.{" "}
              <strong className="text-foreground">Intervenție:</strong> decopertare, uscare,
              sistem poliuretanic continuu peste toată suprafața și pe atic.{" "}
              <strong className="text-foreground">Rezultat:</strong> fără reveniri, cu garanție pe
              sistemul întreg.
            </p>
          </div>
        </article>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <img
            src={images.balcon}
            alt="Hidroizolație balcon executată de HBS"
            className="h-32 w-full rounded-lg object-cover"
            loading="lazy"
            width={1800}
            height={1350}
          />
          <img
            src={images.fundatie}
            alt="Hidroizolație fundație bloc executată de HBS"
            className="h-32 w-full rounded-lg object-cover"
            loading="lazy"
            width={1900}
            height={700}
          />
        </div>

        <Link
          to="/hidroizolatii-terase-circulabile"
          className="mt-4 flex h-12 items-center justify-center rounded-md border-2 border-border bg-background text-sm font-semibold"
        >
          Vezi cum lucrăm terasele circulabile
        </Link>
      </Section>

      {/* 6. LOCAL VS COMPLET */}
      <Section>
        <SectionTitle kicker="Ce e corect în cazul tău" title="Intervenție locală sau refacere completă" />
        <div className="grid gap-3">
          <InfoCard title="Intervenție locală — când e suficientă">
            Problema e clar delimitată, restul suprafeței e sănătos, suportul e uscat, iar sistemul
            existent e compatibil. Costă mai puțin și se face în 1–2 zile.
          </InfoCard>
          <InfoCard title="Refacere completă — când e singura variantă corectă">
            S-a intervenit deja de mai multe ori, apa e în șapă sau în termoizolație, ori sistemul
            existent are îmbinări pe toată suprafața. O reparație locală aici înseamnă bani
            aruncați.
          </InfoCard>
        </div>
        <p className="mt-4 rounded-md border-l-4 border-primary bg-accent p-3 text-sm leading-relaxed">
          Dacă în cazul tău e suficientă o intervenție locală, îți spunem asta — chiar dacă
          înseamnă o lucrare mai mică pentru noi.
        </p>
      </Section>

      {/* 7. CUM DECURGE LUCRAREA */}
      <Section tone="soft">
        <SectionTitle kicker="Ce se întâmplă concret" title="Cum decurge lucrarea" />
        <ol className="flex flex-col gap-3">
          {[
            ["Preevaluare din poze", "Trimiți pozele, primești în aceeași zi lucrătoare direcția de intervenție."],
            ["Verificare pe teren", "Măsurători, verificarea umidității suportului, deviz pe cazul tău."],
            ["Decopertare și pregătire", "Se îndepărtează straturile compromise, se usucă și se corectează panta."],
            ["Aplicarea sistemului", "Primer + membrană poliuretanică continuă, inclusiv pe atic și racorduri."],
            ["Finisaj și predare", "Strat de uzură, curățenie completă, documentația lucrării și garanția."],
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

      {/* 8. CE INCLUDE PREȚUL */}
      <Section>
        <SectionTitle kicker="Transparență" title="Ce include prețul" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          Cei mai mulți oameni se sperie de deviz pentru că nimeni nu le explică din ce e făcut.
          Iată structura, înainte să vezi vreo cifră.
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
          <InfoCard title="De ce 10 mp nu costă jumătate din 20 mp">
            Pentru că partea fixă e aceeași. La suprafețe mici, costul fix se împarte la mai puțini
            metri, deci prețul pe metru pătrat pare mare — deși lucrarea în sine e mai ieftină.
          </InfoCard>
        </div>
        {showPriceFigures ? null : (
          <p className="mt-4 rounded-md border border-border bg-secondary p-3 text-sm leading-relaxed">
            Nu publicăm un preț pe metru pătrat, pentru că fără poze ar fi o cifră inventată. Ce
            putem face: din poze îți dăm un interval orientativ înainte să vină cineva la tine.
          </p>
        )}
        <InlineCta
          label="Vrei un reper de cost pentru cazul tău?"
          whatsappMessage={whatsappMessages.home}
        />
      </Section>

      {/* 9. GARANȚIE */}
      <Section tone="soft">
        <SectionTitle kicker="Cine răspunde" title="Garanție și documentație" />
        <ul>
          <Bullet>
            Garanție pe <strong>sistemul întreg</strong> — nu doar pe material, nu doar pe manoperă.
          </Bullet>
          <Bullet>Documentația lucrării: materiale folosite, etape, fotografii de execuție.</Bullet>
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

      {/* 10. RECENZII */}
      <Section>
        <SectionTitle kicker={`${proof.rating} · ${proof.reviews}`} title="Ce spun oamenii după lucrare" />
        <div className="flex flex-col gap-3">
          {[
            ["Seriozitate", "Au venit când au spus, au lucrat cât au spus și au lăsat curat. Sună banal până când treci prin contrariul."],
            ["Comunicare", "Am primit poze pe parcursul lucrării. Nu a trebuit să merg să verific nimic."],
            ["Rezolvarea reală", "A treia firmă la aceeași terasă. Prima care mi-a explicat de unde intra apa."],
          ].map(([tema, text]) => (
            <blockquote key={tema} className="rounded-lg border border-border bg-card p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">{tema}</p>
              <p className="mt-2 text-sm leading-relaxed">„{text}”</p>
            </blockquote>
          ))}
        </div>
      </Section>

      {/* 11. CTA FINAL */}
      <Section id="preevaluare" tone="soft">
        <SectionTitle
          kicker="Ultimul pas"
          title="Trimite poze și primești o preevaluare"
        />
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          Trei întrebări scurte, apoi trimiți pozele pe WhatsApp. Îți răspundem în aceeași zi
          lucrătoare. Dacă preferi să vorbești direct:{" "}
          <a href={contact.phoneHref} className="font-semibold text-foreground underline">
            {contact.phoneDisplay}
          </a>
        </p>
        <PreevaluareForm contextLabel="pagina principală" />
      </Section>
    </>
  );
}
