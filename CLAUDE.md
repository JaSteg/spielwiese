# VPE-Rechner

Einfache Web-App zur Berechnung von Stückpreisen aus Verpackungseinheiten (VPE).
Eingabe: Packungspreis und Stückzahl. Ausgabe: Stückpreis und Preis pro 100 Stück.

## Aufbau

- `index.html` – Struktur der Seite
- `style.css` – Design (schlicht, modern, mit Dark Mode)
- `script.js` – Berechnung und Eingabeprüfung

Reines HTML, CSS und JavaScript – keine Abhängigkeiten, kein Build-Schritt.
Die App wird per Doppelklick auf `index.html` im Browser geöffnet und muss
deshalb ohne Server (über `file://`) funktionieren.

## Regeln

- Sprache: Deutsch – für Oberfläche, Code-Kommentare, Commit-Messages und Antworten.
- Zahlen im deutschen Format anzeigen (Komma als Dezimaltrenner, €).
- Keine externen Bibliotheken oder CDNs einbinden.
- Nach jeder Änderung committen (aussagekräftige Commit-Message auf Deutsch).
