# Plan: Website de prezentare HBS.com.ro (homepage + servicii + meniu mobil) pentru GitHub Pages

## Răspuns scurt la întrebarea cheie
**Da, TanStack Start + React + Tailwind CSS + shadcn/ui poate randa pe GitHub Pages.** Soluția este să construim site-ul ca site static (SSG/prerender) din TanStack Start. GitHub Pages servește doar fișiere statice, așa că **nu vom folosi server functions** în această fază.

## Obiectiv
Creăm un pachet de design funcțional pentru HBS, cu doar două pagini și un meniu mobil tip burger, gata să fie hostat pe GitHub Pages.

## Ce se construiește (scope redus)
- **Homepage** (`/`) – hero, servicii highlight, testimoniale, CTA.
- **Pagina de servicii** (`/servicii`) – lista completă de hidroizolații.
- **Header + navigare mobilă** – meniu desktop normal și meniu hamburger pe mobil.
- **Footer** – date de contact minimal, copyright.
- **Nu includem** în această fază: blog, pagină "Despre noi" separată, formulare de lead (GitHub Pages nu are backend; se pot adăuga mai târziu printr-un serviciu extern de formular).

## Design
- **Identitate:** păstrăm logo-ul și culorile HBS (portocaliu/roșu `#E1431B`, fundal alb, text gri `#666666`).
- **Font:** Open Sans, conform site-ului actual.
- **Stil:** layout curat, modern, industrial-construcții, spacing consistent, componente shadcn/ui adaptate la brand.

## Conținut
- Preluăm textele și imaginile relevante de pe site-ul actual WordPress pentru homepage și servicii.
- Nu migrăm automat întreg site-ul; doar cele două pagini plus elementele comune (header/footer).

## Tehnologie și adaptare pentru GitHub Pages
- **Stack:** TanStack Start, React, Tailwind CSS v4, shadcn/ui.
- **Build static:** activăm prerender în `vite.config.ts` pentru rutele `/` și `/servicii`. Output-ul va fi generat în `dist/client` ca fișiere HTML statice.
- **Base path:** Vite va fi configurat cu `base` corespunzător numelui repository-ului GitHub (ex: `/hbs-website/` pentru repo `hbs-website`, sau `/` pentru repo `numeutilizator.github.io`).
- **Fără server functions:** toate componentele sunt client-side; formularul de contact nu este inclus în această fază.
- **Rutare:** linkurile folosesc `<Link>` din TanStack Router; la build static, fiecare rută devine un fișier HTML real.

## Structură fișiere propusă
```text
src/routes/
  __root.tsx         -> layout cu header + footer
  index.tsx          -> / (homepage)
  servicii.tsx       -> /servicii (pagina servicii)

src/components/
  Header.tsx         -> header + meniu desktop
  MobileMenu.tsx     -> sheet/dialog cu meniu hamburger
  Footer.tsx         -> footer
  Hero.tsx           -> hero homepage
  ServiceCard.tsx    -> card serviciu
  Testimonials.tsx     -> testimoniale
```

## Pași de implementare
1. Configurare `vite.config.ts` pentru prerender static și base path GitHub Pages.
2. Configurare GitHub sync pentru exportul codului în repository.
3. Adăugare GitHub Actions workflow pentru build static și deploy pe GitHub Pages.
4. Creare componente comune: header, mobile menu, footer.
5. Creare pagina homepage (`/`).
6. Creare pagina servicii (`/servicii`).
7. Test local, build static, verificare output.
8. Publicare pe GitHub Pages.

## Decizie de luat împreună
**Numele repository-ului GitHub:** este repo personal (`numeutilizator.github.io`) sau un repo normal (`numeutilizator/hbs-website`)? De asta depinde `base` path-ul din Vite și URL-ul final de GitHub Pages.
