import logoAsset from "@/assets/hbs-logo-small.png.asset.json";
import hahneAsset from "@/assets/logo-hahne.png.asset.json";
import teraseHeroAsset from "@/assets/19hidroizolatie-terase-circulabile-e1713777681295.jpg.asset.json";
import teraseGrivitaAsset from "@/assets/3terasa-circulabila-proiect-grivita.jpg.asset.json";
import terase1Asset from "@/assets/terase-circulabile-1.jpg.asset.json";
import terase2Asset from "@/assets/terase-circulabile-2.jpg.asset.json";
import balconAsset from "@/assets/hidroizolatie-balcoane-poza-3.jpg.asset.json";
import reparatiiAsset from "@/assets/reparatii-home-1.jpg.asset.json";
import fundatieAsset from "@/assets/hidroizolatie-fundatie-bloc-001.jpg.asset.json";

type AssetPointer = { url: string };

const url = (asset: unknown) => (asset as AssetPointer).url;

export const images = {
  logo: url(logoAsset),
  hahne: url(hahneAsset),
  teraseHero: url(teraseHeroAsset),
  teraseGrivita: url(teraseGrivitaAsset),
  terase1: url(terase1Asset),
  terase2: url(terase2Asset),
  balcon: url(balconAsset),
  reparatii: url(reparatiiAsset),
  fundatie: url(fundatieAsset),
};

export const contact = {
  phoneDisplay: "0722 750 380",
  phoneHref: "tel:+40722750380",
  whatsappNumber: "40722750380",
  email: "office@hbs.com.ro",
  company: "SC Hydro Business Systems SRL",
  cui: "RO37187820",
  city: "București",
};

/** Link WhatsApp cu mesaj precompletat, diferit pe fiecare pagină. */
export function whatsappLink(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  home: "Bună ziua! Am o infiltrație și aș vrea o preevaluare. Trimit poze.",
  terase:
    "Bună ziua! Am o problemă la o terasă circulabilă și aș vrea o preevaluare. Trimit poze.",
  menu: "Bună ziua! Aș vrea să discutăm despre o problemă de infiltrații.",
};

/**
 * Reperele de preț NU se afișează public până la validarea cu clientul.
 * Când se aprobă, se pune true și cifrele apar în secțiunea „Ce include prețul”.
 */
export const showPriceFigures = false;

export const proof = {
  rating: "4,8/5",
  reviews: "87 de recenzii Google",
  repairShare: "8 din 10",
  years: "din 2017",
};

export const nav = [
  { to: "/", label: "Acasă" },
  { to: "/hidroizolatii-terase-circulabile", label: "Terase circulabile" },
] as const;
