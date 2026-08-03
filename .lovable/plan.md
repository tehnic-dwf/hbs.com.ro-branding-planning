# Plan: Website de prezentare HBS.com.ro

## Obiectiv
Relansăm site-ul HBS (Hydro Business Systems) ca website de prezentare modern, rapid, mobile-first, păstrând identitatea vizuală actuală și migrând conținutul existent.

## Ce se construiește
- Website de prezentare în limba română, 6-8 pagini principale.
- Două formulare de lead: **Contact** și **Cere o ofertă**.
- SEO de bază (titluri, descrieri, structură semantică) pentru fiecare pagină.

## Pagini și secțiuni propuse
| Pagină | Rol |
| --- | --- |
| Home | Hero cu categorii de servicii, prezentare companie, servicii, testimoniale, CTA. |
| Despre noi | Istoric, certificări ISO, echipă. |
| Servicii | Hidroizolații acoperișuri/terase, pardoseli, balcoane, fundații, reparații. |
| Proiecte | Portofoliu de lucrări realizate. |
| Parteneri / Resurse | Branduri și materiale informative. |
| Blog | Articole tehnice (opțional, preluate din WordPress). |
| Contact / Cere ofertă | Formulare lead. |

## Design
- **Identitate:** păstrăm logo-ul actual și culorile HBS (portocaliu/roșu `#E04622` / `#E1431B`, fundal alb, text gri `#666666`).
- **Fonturi:** Open Sans pentru body și heading, conform site-ului actual.
- **Stil:** layout mai curat, spacing consistent, componente moderne (cards, butoane rotunjite), păstrând tonul profesional și industrial.

## Conținut
- Se preiau textele și imaginile de pe site-ul actual WordPress.
- Se face un inventar al paginilor și articolelor existente.
- Se decid paginile care se migrează 1:1, cele care se unesc sau se renunță.

## Tehnologie
- **Frontend:** TanStack Start + React + Tailwind CSS + shadcn/ui.
- **Backend:** Lovable Cloud (Supabase) pentru stocarea trimiterilor formularelor de lead.
- **Opțional:** conector WordPress pentru import automat al paginilor/blogului.

## Formulare lead
- Validare client și server cu Zod.
- Se salvează în baza de date și se trimite notificare către echipa HBS.
- Protecție anti-spam (reCAPTCHA sau honeypot).

## Pași de implementare
1. Inventar complet al conținutului site-ului existent (pagini, imagini, articole).
2. Setup proiect și activare Lovable Cloud pentru lead-uri.
3. Definire design system (culori, tipografie, componente comune).
4. Dezvoltare pagini și componente.
5. Implementare formulare lead și stocare.
6. Testare responsive, performanță, SEO.
7. Publicare și configurare domeniu.

## Decizii de luat împreună
1. Domeniu: se înlocuiește `hbs.com.ro` sau se folosește mai întâi un subdomeniu de test?
2. Migrare conținut: manual sau prin conector WordPress?
3. Blog: se include în noua versiune sau se renunță temporar?
4. Notificări lead: către ce adresă de email ajung cererile?
