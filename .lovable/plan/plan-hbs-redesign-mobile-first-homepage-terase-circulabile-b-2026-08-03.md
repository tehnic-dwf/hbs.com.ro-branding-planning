# Plan: HBS – redesign mobile-first (homepage + terase circulabile + burger menu)

## Da, am înțeles documentele

Cele trei documente sunt suficiente pentru a construi cele trei livrabile. Ce am extras:

- **Brand Foundations** – poziționarea reală: „firma pe care o chemi după ce altcineva a stricat treaba". 80–90% din lucrări sunt refaceri. Emoția vândută: eliberarea de anxietatea de a verifica munca altcuiva. Ton: direct, tehnic-accesibil, fără superlative. Dovezi: 4,8/5 din 87 recenzii, sisteme Hahne Germania, ISO 9001, garanție pe sistem, acces direct la Mihai Drăgușin.
- **ICP/CRO** – structura completă a homepage-ului (11 secțiuni), headline-ul recomandat, matricea temerilor, CTA-urile pe nivel de intenție, formularul progresiv în 3 pași, regulile de preț și lista de mesaje interzise.
- **OSINT** – date de firmă verificabile pentru footer și secțiunea de credibilitate.

**Decizia strategică cheie din documente:** CTA-ul principal **nu** este „Cere ofertă", ci **„Trimite poze pentru o preevaluare"**. Iar problema #1 de business este șocul de preț, deci ancorarea costului intră pe homepage, înainte de formular.

## Livrabile (mobile-first)

### 1. Homepage `/`
Urmează exact structura din secțiunea 6 a documentului CRO:

1. Hero – „Ai reparat terasa, dar infiltrația a reapărut?" + subheadline + bară de dovadă + CTA preevaluare + microcopy
2. Simptome – carduri: pete pe tavan, gresie ridicată / sunet gol, rosturi crăpate, apă după ploaie, mucegai
3. De ce reapare – simptom vs. cauză, explicat simplu
4. Cum diagnosticăm – ce se poate și ce nu se poate confirma din poze
5. Cazuri similare – problemă → diagnostic → intervenție → rezultat
6. Intervenție locală vs. refacere completă – criterii, anti-upsell
7. Cum decurge lucrarea – etape, durată, protecție, curățenie
8. Ce include prețul – costuri fixe vs. variabile, „de ce 10 mp nu costă jumătate din 20 mp", interval orientativ
9. Garanție și documentație – ce acoperă, cine răspunde, în cât timp
10. Recenzii relevante – selectate pe temele reale: seriozitate, comunicare, curățenie
11. CTA final – formular de preevaluare + termen de răspuns

### 2. Pagina `/hidroizolatii-terase-circulabile`
Aceeași logică, aplicată pe serviciu: simptome specifice teraselor circulabile, procesul tehnic (poliuretan continuu, fără îmbinări), galerie pe etape, secțiune preț pentru terase, FAQ („se poate face peste gresie?", „cum știu dacă apa e în șapă?"), CTA-uri repetate după fiecare secțiune.

### 3. Burger menu (mobil)
Panou full-screen cu: navigație, telefon, WhatsApp, CTA preevaluare, plus reasigurare scurtă (4,8/5 · 87 recenzii).

## Sistemul de conversie (scurtarea distanței până la contact)

| Element | Comportament |
| --- | --- |
| **Bară sticky jos (mobil)** | `Sună` · `WhatsApp` · `Trimite poze` — permanent, fără să acopere conținut |
| **CTA hero** | Vizibil fără scroll |
| **WhatsApp cu mesaj precompletat** | Diferit pe fiecare pagină, în linie cu procesul real de vânzare (clientul trimite poze pe WhatsApp) |
| **CTA-uri intermediare** | După fiecare secțiune, formulate pe nivel de intenție, nu generic |
| **Formular progresiv 3 pași** | Situația → Context → Contact & poze, cu microcopy, opțiune „Nu știu", validare inline, confirmare cu termen de răspuns |

Toate mesajele respectă lista „de evitat": fără „premium", fără „cele mai bune materiale", fără „rezolvăm definitiv orice infiltrație", fără „Cere ofertă" / „Contactează-ne".

## Design
- Mobile-first: totul proiectat la 375px, apoi extins.
- Zone de tap mari, contrast puternic (citit afară, pe telefon, în soare).
- Fără carusele care ascund informație critică.
- Fotografii reale de șantier (nu stock), etichetate „simptom" / „cauză".

## GitHub Pages – da, se poate
Site static, prerender din TanStack Start, fără cod de server:
- prerender pentru cele două rute, output `dist/client`
- `base` path setat după numele repository-ului
- workflow GitHub Actions care face build și publică pe Pages
- formularul trimite către un serviciu extern (Formspree / Web3Forms), deci funcționează fără backend

## Structură tehnică
```text
src/routes/
  __root.tsx                              -> header, footer, sticky bar, WhatsApp
  index.tsx                               -> homepage
  hidroizolatii-terase-circulabile.tsx    -> pagina de serviciu

src/components/
  Header.tsx / MobileMenu.tsx             -> burger menu
  StickyContactBar.tsx                    -> sună / WhatsApp / trimite poze
  PreevaluareForm.tsx                     -> formular progresiv 3 pași
  SymptomCards.tsx  CauseExplainer.tsx
  CaseStudy.tsx     ProcessTimeline.tsx
  PriceBreakdown.tsx WarrantySection.tsx
  Reviews.tsx       FAQ.tsx  Footer.tsx
```

## Decizii confirmate

1. **Logo** – îl extrag de pe hbs.com.ro și îl folosesc în header, burger menu și favicon.
2. **Culori și font** – păstrez identitatea actuală: portocaliu/roșu HBS (#E1431B) pe fundal alb, gri închis pentru text, Open Sans / Roboto ca familie tipografică.
3. **Fotografii** – preiau imaginile publice de pe site (galerii terase circulabile, șantiere, echipă) și le mapez pe secțiunile „simptom" / „cauză" / „rezultat". Unde nu există foto potrivită, folosesc o ilustrație tehnică simplă, nu stock.
4. **Cifra de poziționare** – folosesc **80%** peste tot: e mijlocul intervalului real din documente (80–90% din lucrări sunt refaceri), e conservatoare deci ușor de apărat, și e formulată ca „8 din 10 lucrări pe care le facem sunt reparații după alte firme".
5. **Preț** – **nu afișăm cifre**. Secțiunea „Ce include prețul" explică doar structura de cost: ce e cost fix indiferent de suprafață (mobilizare, decopertare, uscare, primer, manoperă calificată), ce variază cu suprafața, și de ce 10 mp nu costă jumătate din 20 mp. Se termină cu „Îți trimitem un deviz pe cazul tău, după poze." Cifrele rămân pregătite pentru validarea cu clientul, într-un singur loc în cod, ușor de activat.
6. **WhatsApp / telefon** – `0722 750 380`, cu mesaj precompletat diferit pe fiecare pagină.

## Despre repo-ul GitHub

Nu pot crea eu repository-ul – conectarea la GitHub se face din interfața Lovable (meniul `+` → GitHub → Connect project), pentru că necesită autorizarea ta pe contul GitHub. Propun ordinea:

1. Construim prima iterație aici (homepage, pagina de serviciu, burger menu).
2. O verifici în preview pe mobil.
3. Conectezi GitHub din meniul `+` – se creează automat repo-ul cu tot codul.
4. Adaug atunci workflow-ul GitHub Actions și setez `base` path-ul după numele exact al repo-ului.

Pregătesc configurația de prerender din start, ca pasul 4 să fie doar o ajustare, nu o rescriere.

