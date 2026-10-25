const packungspreisFeld = document.getElementById("packungspreis");
const stueckzahlFeld = document.getElementById("stueckzahl");
const stueckpreisAusgabe = document.getElementById("stueckpreis");
const preis100Ausgabe = document.getElementById("preis100");
const hinweis = document.getElementById("hinweis");

// Stückpreise können sehr klein sein, daher bis zu 4 Nachkommastellen
const formatStueck = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 4,
});

const formatPreis = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

// Akzeptiert deutsche Schreibweise ("1.234,56") und Punkt als Dezimaltrenner ("12.99")
function zahlLesen(text) {
  let s = text.trim().replace(/\s|€/g, "");
  if (s === "") return null;
  if (s.includes(",")) {
    s = s.replace(/\./g, "").replace(",", ".");
  }
  if (!/^\d*\.?\d+$/.test(s)) return NaN;
  return Number(s);
}

function berechnen() {
  const preis = zahlLesen(packungspreisFeld.value);
  const stueck = zahlLesen(stueckzahlFeld.value);
  let fehler = "";

  const preisOk = preis !== null && !Number.isNaN(preis);
  const stueckOk = stueck !== null && !Number.isNaN(stueck) && stueck > 0;

  if (preis !== null && !preisOk) fehler = "Bitte einen gültigen Packungspreis eingeben.";
  else if (stueck !== null && !stueckOk) fehler = "Die Stückzahl muss größer als 0 sein.";

  packungspreisFeld.classList.toggle("ungueltig", preis !== null && !preisOk);
  stueckzahlFeld.classList.toggle("ungueltig", stueck !== null && !stueckOk);
  hinweis.textContent = fehler;

  if (preisOk && stueckOk) {
    const stueckpreis = preis / stueck;
    stueckpreisAusgabe.textContent = formatStueck.format(stueckpreis);
    preis100Ausgabe.textContent = formatPreis.format(stueckpreis * 100);
  } else {
    stueckpreisAusgabe.textContent = "–";
    preis100Ausgabe.textContent = "–";
  }
}

packungspreisFeld.addEventListener("input", berechnen);
stueckzahlFeld.addEventListener("input", berechnen);
packungspreisFeld.focus();
