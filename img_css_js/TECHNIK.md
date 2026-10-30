# Barhama – Homepage und Landingpage Vortragsabend

**Version:** 1.0.12 (Stand 2026-10-30)

## Zweck
Genau zwei Seiten für den externen Partner Barhama Späti (Uni-Café & Späti, Heilbronn): Homepage (Inhalte nur aus den beiden Flyern) und Landingpage für einen Vortragsabend. Kein interner Standard-Kopf (Kundenseite). Nichts veröffentlicht.

## Struktur
- `index.html` Homepage, `ki_software_hardware_info.html` Landingpage (gegenseitig verlinkt). Impressum und Datenschutz sind Abschnitte (`#impressum`, `#datenschutz`) am Seitenende jeder Datei, Platzhalter "Text folgt vom Betreiber"
- `img_css_js/` alle Abhängigkeiten: alle Dateien flach in diesem Ordner ohne Unterordner (`custom.css`, `form.js`, Bilder, `bootstrap.min.css`, `bootstrap-icons.min.css`, Icon-Schriften)
- `sitemap.xml`, `robots.txt`, `.nojekyll`, `quellen_bilder/` (Originale, unverändert)
- Alle Pfade relativ; absolute URLs nur in canonical, og:url, og:image, sitemap, robots. Basis: https://nosz.github.io/ki-software-hardware/ (GitHub-Pages-Unterpfad), Landingpage unter .../ki_software_hardware_info.html

## Technik
- Bootstrap **5.3.3** (CSS, lokal, MIT), Bootstrap Icons **1.11.3** (lokal, MIT). Das JS-Bundle ist nicht enthalten und nicht nötig (kein Menü-Umbruch, keine Komponenten mit JS).
- Kein CDN, keine Fremdanfragen, keine Cookies, keine Einbettungen. Schrift: Systemschriften (Arial Black / Segoe UI Black).
- Nur Deutsch. Ein EN-Umschalter wurde nicht gebaut (Mehraufwand durch zwei Textstände).
- Formular: `ki_software_hardware_info.html`, `<form id="anmeldeformular" data-aktiv="false">` mit `<fieldset disabled>`, kein action, kein Versand. **Aktivierung:** `data-aktiv="true"` setzen, Hinweis-Alert entfernen, Versandziel festlegen (siehe Kommentar in `img_css_js/form.js`).

## Bilder und Quellen
Quelle: zwei Fotos von Barhama-Flyern (`quellen_bilder/barhama_1.jpg`, `barhama_2.jpg`, vom Auftraggeber geliefert). Das Bildmaterial der Flyer gehört Barhama; Nutzungsrecht für die Webseite durch Barhama/Norbert bestätigen lassen. `img_css_js/`: gedrehte, verkleinerte Fassungen und Ausschnitte (flyer-1, flyer-2, logo, terrasse, pizza-kaffee), Vorschaubilder og-home.jpg und og-vortrag.jpg (1200x630), Favicon/Apple-Touch-Icon aus dem Kronen-Motiv.

## Offene Punkte / Fragen
- Termin des Vortragsabends (steht "Termin folgt")
- Nachname von Rudi (bewusst nicht genannt)
- Dauer: "1 Stunde" – gilt sie je Vortrag oder für den ganzen Abend? Text sagt neutral "Vortragsabend, Dauer 1 Stunde"
- Telefonnummer 07131 3998455 aus Flyer 2 gelesen (Foto, geknittert): Ziffern bitte gegenprüfen
- Impressum- und Datenschutz-Texte vom Betreiber/Management
- Rechte an den Flyer-Bildern; Hosting-Freigabe (Garry), Sicherheits-Header sind bei GitHub Pages nicht einstellbar
- Versandweg und Datenschutz des Anmeldeformulars vor Aktivierung klären

## Änderungsverlauf
- 1.0.2 (2026-10-30): Landingpage ausgebaut: Organisator-Block (oben und im Ortsbereich), Abschnitt 'Für wen ist das interessant?', Kein-Fachchinesisch-Badge und -Band, Neugier-Fragen, Ablauf des Abends (ohne Uhrzeiten), Nutzen-Aussagen in den Vortragskarten, Preisbadge, sanfte Animationen (prefers-reduced-motion beachtet)
- 1.0.1 (2026-10-30): Rollenzeilen der Speaker-Karten ('Speaker (Software-Trainer)', 'Speaker (Hardware-Experte)'), Wort 'Redner' entfernt
- 1.0.0 (2026-10-30): Erstversion Homepage, Landingpage, Platzhalterseiten, Vorschaubilder, Sitemap
- 1.0.3 (2026-10-30): Organisator-Block (Julian) steht als eigener Abschnitt direkt über dem Programm statt im Ortsbereich
- 1.0.4 (2026-10-30): Menüpunkt heißt jetzt 'Vortragsabend (KI-Software-Hardware)' (beide Seiten, Fußzeile Startseite)
- 1.0.5 (2026-10-30): Nutzen-Satz Vortrag 1 erweitert (nach dem Vortrag, auch ohne Vorkenntnisse)
- 1.0.6 (2026-10-30): Formular fragt nur noch Name und E-Mail ab (plus Datenschutz-Checkbox); Felder Firma und Interesse entfernt
- 1.0.7 (2026-10-30): README im Marketing-Stil neu geschrieben; diese technische Fassung liegt jetzt hier als TECHNIK.md
- 1.0.8 (2026-10-30): img_css_js ohne Unterordner, alle Dateien flach; Pfade in HTML, custom.css und bootstrap-icons.min.css angepasst
- 1.0.9 (2026-10-30): Teilen-Abschnitt (#teilen) auf beiden Seiten: Geräte-Teilen, WhatsApp, LinkedIn, Facebook, X, E-Mail, Link kopieren (share.js, reine Links, keine Fremdskripte, Klick öffnet erst den Dienst); og:image:type ergänzt; Event-Strukturdaten (JSON-LD) entfernt, solange kein Termin (startDate) feststeht, bis dahin wären sie ungültig
- 1.0.10 (2026-10-30): Teilen-Symbol im Menü oben (beide Seiten), springt zu #teilen
- 1.0.11 (2026-10-30): Teilen-Texte je Kanal ausformuliert (WhatsApp persönlich, E-Mail mit Betreff und Text, X/Teilen-Menü kurz)
- 1.0.12 (2026-10-30): LinkedIn und X aus den Teilen-Buttons entfernt (bleiben: Geräte-Teilen, WhatsApp, Facebook, E-Mail, Link kopieren)
