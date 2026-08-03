# Plan: HBS.com.ro – homepage, pagină serviciu și conversie rapidă (GitHub Pages)

## Răspuns la întrebarea despre GitHub Pages
**Da, se poate.** Construim site-ul ca site static (prerender/SSG din TanStack Start). GitHub Pages servește doar fișiere statice, deci **nu folosim server functions** — toate elementele de conversie vor fi legături directe (tel:, WhatsApp) sau un formular către un serviciu extern.

## Obiectiv
Un pachet de design funcțional, orientat pe **lead generation**: distanță minimă între aterizarea userului și acțiunea de contact (formular, telefon, WhatsApp).

## Pagini incluse
1. **Homepage** (`/`) – hero cu CTA imediat, servicii, dovezi sociale, contact.
2. **Hidroizolație terasă circulabilă** (`/hidroizolatii-terase-circulabile`) – pagină de serviciu, replicând conținutul actual: descriere, galerie proiecte, proces de hidroizolare, CTA-uri repetate.
3. **Burger menu** – navigare mobilă completă cu acțiuni de contact în interior.

## Strategie de conversie (lead generation)
Elemente prezente pe ambele pagini:

| Element | Comportament |
| --- | --- |
| **Bara sticky mobil** | Bară fixă jos, mereu vizibilă: `Sună`, `WhatsApp`, `Cere ofertă`. Distanță = un singur tap din orice punct al paginii. |
| **CTA în hero** | Buton principal `Cere o ofertă` + buton secundar `Sună acum` vizibile fără scroll. |
| **Telefon în header** | Număr clicabil `tel:+40722750380`, mereu vizibil pe desktop; în burger menu pe mobil. |
| **Buton flotant WhatsApp** | Deschide direct conversația cu mesaj pre-completat legat de serviciul din pagină. |
| **CTA-uri intermediare** | Se repetă după fiecare secțiune majoră de conținut, ca pe pagina actuală. |
| **Formular scurt** | 3 câmpuri (nume, telefon, tip lucrare) — cerem minimum de date pentru a nu pierde userul. |

Formularul, fiind pe GitHub Pages, va fi conectat la un serviciu extern de formulare (ex. Formspree sau Web3Forms) — trimite direct pe email, fără backend.

## Design
- **Identitate:** logo actual, portocaliu/roșu `#E1431B`, fundal alb, text gri `#666666`.
- **Font:** Open Sans.
- **Stil:** curat, industrial-construcții, ierarhie clară, CTA-uri cu contrast puternic.

## Conținut
- Preluat de pe site-ul actual: texte hero, descrieri servicii, testimoniale, conținutul complet al paginii de terase circulabile, imaginile galeriei.

## Tehnologie și adaptare GitHub Pages
- **Stack:** TanStack Start, React, Tailwind CSS v4, shadcn/ui.
- **Build static:** activăm `prerender` în `vite.config.ts` pentru cele două rute; output în `dist/client`.
- **Base path:** `base` din Vite configurat după numele repository-ului GitHub.
- **Deploy:** GitHub Actions workflow care rulează build-ul și publică `dist/client` pe GitHub Pages.

## Structură fișiere propusă
```text
src/routes/
  __root.tsx                              -> header, footer, bara sticky, buton WhatsApp
  index.tsx                               -> homepage
  hidroizolatii-terase-circulabile.tsx    -> pagina de serviciu

src/components/
  Header.tsx           -> logo, nav desktop, telefon
  MobileMenu.tsx       -> burger menu cu acțiuni de contact
  StickyContactBar.tsx -> bara fixă mobil: sună / WhatsApp / ofertă
  WhatsAppButton.tsx   -> buton flotant
  Hero.tsx             -> hero cu CTA dublu
  LeadForm.tsx         -> formular scurt de 3 câmpuri
  ServiceCard.tsx      -> card serviciu
  Testimonials.tsx     -> testimoniale
  Gallery.tsx          -> galerie proiecte
  Footer.tsx
```

## Pași de implementare
1. Configurare Vite: prerender static + base path GitHub Pages.
2. Design system: culori HBS, tipografie Open Sans, variante de buton.
3. Componente de conversie: sticky bar, WhatsApp, burger menu, lead form.
4. Header și footer.
5. Homepage.
6. Pagina hidroizolații terase circulabile.
7. Conectare formular la serviciu extern.
8. GitHub sync + workflow de deploy pe Pages.
9. Testare mobil, verificare build static.

## Decizii de luat împreună
1. **Numele repository-ului GitHub** – repo personal (`user.github.io`) sau repo normal? Determină `base` path-ul.
2. **Numărul de WhatsApp** – același cu `0722 750 380` sau altul?
3. **Adresa de email** pentru primirea lead-urilor din formular.
