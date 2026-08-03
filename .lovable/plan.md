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

## Ce îmi mai trebuie de la tine

1. **Logo HBS** – fișier, sau îl preiau de pe hbs.com.ro?
2. **Culori și font** – documentele nu conțin identitate vizuală. Păstrăm paleta actuală de pe site (portocaliu/roșu pe alb) sau vrei o direcție nouă?
3. **Fotografii reale** – documentul cere explicit foto de șantier pe etape, cu simptom vs. cauză. Am acces doar la imaginile publice de pe site. Ai un set mai bun?
4. **Cifra de poziționare** – documentul semnalează inconsistența 60% / 75% / 80% / 90%. Ce cifră unică folosim peste tot?
5. **Intervalul de preț de publicat** – documentele conțin ~425 EUR/mp la 10 mp și ~360 EUR/mp la 20 mp. Le afișăm public sau doar structura de cost fără cifre?
6. **Numărul de WhatsApp** – același `0722 750 380`?
7. **Numele repo-ului GitHub** – determină `base` path-ul pentru Pages.

Pot începe și fără 1–3 (folosesc ce e public pe site și marchez ce trebuie înlocuit), dar 4, 5 și 6 sunt decizii de conținut pe care nu le pot lua eu.
