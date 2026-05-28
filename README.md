# Ferien-Finder Deutschland 2026 ☀️🗓️

Ein interaktives, hochperformantes Web-Dashboard im eleganten, cleanen Minimalismus-Stil zur Live-Visualisierung und Analyse von Schulferien, gesetzlichen Feiertagen und der daraus resultierenden prognostizierten Auslastung der Top-Freizeitparks in Deutschland für das Jahr 2026.

Das Tool hilft Familien, Freizeitpark-Enthusiasten und Reiseplanern dabei, besucherstarke Tage (Ferienüberschneidungen/Feiertage) strategisch zu umgehen und leere Tage („Geheimtipps“) ausfindig zu machen.

---

## 🚀 Key Features (Hauptfunktionen)

- **Interaktiver 12-Monats-Kalender:** Ein kompakter, voll funktionsfähiger Jahreskalender für 2026. Jeder Tag ist anklickbar und synchronisiert das gesamte Dashboard in Echtzeit. Wochenenden sind visuell dezent markiert.
- **Duales Live-Karten-System (SVG):**
  - **Ferien-Karte:** Zeigt alle 16 Bundesländer als Pins. Sie leuchten grün (Schule/reguläre Zeit) oder rot (aktuell Ferien oder Feiertag).
  - **Park-Karte:** Zeigt die Top-Freizeitparks in Deutschland an ihrer exakten geografischen Position. Pins leuchten dynamisch nach Auslastung: Grün (Leer), Gelb (Mäßig) oder Rot (Voll).
- **Intelligente Auslastungsprognose (Der Algorithmus):** Berechnet die Park-Auslastung nicht nur stumpf nach dem eigenen Bundesland, sondern bezieht die Ferien der umliegenden Nachbarländer sowie Wochenenden und Feiertage mit ein.
- **Smarte Tooltips mit automatischer Namenserkennung:** Beim Überfahren der Karten-Pins mit der Maus öffnet sich ein blur-unterstützter Tooltip. Das Skript erkennt anhand des Datums automatisch den korrekten Namen der Ferien (z.B. „Pfingstferien“, „Osterferien“), selbst wenn diese in den Rohdaten nicht explizit benannt sind.
- **„Ganze Woche prüfen“-Modus:** Per Switch-Umschalter lässt sich der Prüfzeitraum von einem einzelnen Tag auf eine 7-Tage-Spanne erweitern – ideal für die Wochenend- oder Kurzurlaubsplanung.
- **Responsives Flat-Design-Layout:** Minimalistische Ästhetik, edle Graustufen, dezente Schatten, seidenweiche Hover-Effekte und native System-Schriftarten machen die Nutzung extrem flüssig. Dank striktem CSS-Bounding bleibt die Karte auch auf kleineren Screens exakt im zugewiesenen Modul.

---

## 🧠 Der Auslastungs-Algorithmus (Logik)

Die Auslastung eines Freizeitparks für ein gewähltes Datum (oder eine Woche) wird in drei Stufen (leer, maessig, voll) unterteilt:

1. VOLL (Rot):
   - Es ist ein gesetzlicher Feiertag im Bundesland des Parks.
   - ODER: Das Bundesland des Parks hat aktuell Schulferien.
   - ODER: Mindestens ein direktes Nachbarland hat Ferien und gleichzeitig fällt der Tag auf ein Wochenende (Samstag/Sonntag).
2. MÄSSIG (Gelb):
   - Mindestens ein direktes Nachbarland hat Ferien (unter der Woche).
   - ODER: Es ist ein reguläres Wochenende ohne Ferienbetrieb.
3. LEER (Grün):
   - Es sind keine Ferien (weder im eigenen Bundesland noch in den Nachbarländern).
   - Es ist unter der Woche (Mo–Fr) und kein Feiertag.

---

## 📂 Projektstruktur

Das Projekt besteht aus vier schlanken, sauber getrennten Dateien (Pure Vanilla JavaScript, HTML5 und CSS3) – komplett ohne schwere Frameworks oder externe Abhängigkeiten:

- index.html       -> Struktur des Dashboards, SVG-Karten-Definitionen und Pin-Overlays
- style.css        -> Minimalistisches Layout, Animationen, responsive Karten-Begrenzung
- script.js        -> Kern-Logik, Kalender-Generierung, Tooltips & Auslastungsberechnung
- daten.js         -> Rohdaten: FERIEN_DATEN, FEIERTAGE_2026, TOP_PARKS & NACHBAR_MAP
- README.md        -> Projektdokumentation (Diese Datei)

---

## 🛠️ Technische Details & Fixes

Im Laufe der Entwicklung wurden kritische Optimierungen vorgenommen, die eine hohe Robustheit garantieren:
- Fehlerfreie Event-Verarbeitung: Ein zuvor vorhandener Laufzeitfehler (blackout is not defined in der Infobox-Prüfung) wurde restlos eliminiert.
- CSS-Overflow-Bremse: Die Karten-Container nutzen nun max-width: 100%, object-fit: contain und overflow: hidden. Das verhindert zuverlässig, dass die Deutschlandkarte auf kleineren Displays nach rechts ausbricht und andere Listen überlagert.
- Fallback-Ferienbenennung: Falls in der Datenstruktur ein Zeitraum nur mit Start- und Enddatum hinterlegt ist, ermittelt JavaScript über den Startmonat semantisch korrekt die Bezeichnung (Jan/Feb = Winterferien, Mär/Apr = Osterferien, Mai/Jun = Pfingstferien, Jul/Aug = Sommerferien, Okt = Herbstferien, Dez = Weihnachtsferien).

---

## 💻 Installation & Lokaler Start

Da das Projekt vollständig auf clientseitigem HTML5/JavaScript basiert, ist keine Installation von Node.js, Webpack oder Server-Umgebungen notwendig.

1. Repository klonen oder Dateien in einen Ordner herunterladen.
2. Starten: Doppelklicke einfach auf die index.html, um das Dashboard direkt in einem beliebigen modernen Browser (Safari, Chrome, Firefox, Edge) zu öffnen.

Tipp für Entwickler: Wenn du Änderungen vornimmst, nutze am besten die Erweiterung „Live Server“ in VS Code, damit die Seite bei Code-Änderungen automatisch neu lädt.

---

## 📊 Datenbasis 2026

- Ferien & Feiertage: Basierend auf den offiziellen Beschlüssen der Kultusministerkonferenz für das Urlaubsjahr 2026 in allen 16 Bundesländern.
- Integrierte Freizeitparks:
  - Heide Park Resort (Niedersachsen)
  - Europa-Park (Baden-Württemberg)
  - Phantasialand (Nordrhein-Westfalen)
  - Hansa-Park (Schleswig-Holstein)
  - Allgäu Skyline Park (Bayern)
  - Holiday Park (Rheinland-Pfalz)
  - Belantis (Sachsen)
  - Erlebnispark Tripsdrill (Baden-Württemberg)
  - Serengeti-Park (Niedersachsen)
  - Fort Fun Abenteuerland (Nordrhein-Westfalen)
  - Rasti-Land (Niedersachsen)
  - Karls Erlebnis-Dorf Rövershagen (Mecklenburg-Vorpommern)
  - (und viele weitere...)

---

## ⚠️ Wichtige Hinweise & Haftungsausschluss

- Entwicklung: Der gesamte Programmcode dieses Dashboards (HTML, CSS und JavaScript-Logik) wurde zu 100 % von einer KI (Gemini) im Rahmen einer interaktiven Zusammenarbeit generiert.
- Keine Garantie auf Richtigkeit: Die Berechnungen der Auslastungen basieren auf einem theoretischen Algorithmus und dienen rein zur Orientierung. Es wird keinerlei Garantie, Gewährleistung oder Haftung für die absolute Richtigkeit, Aktualität oder Vollständigkeit der hinterlegten Ferientermine, Feiertage oder Parkdaten übernommen. Eine Haftung für verpasste Urlaubstage, Fehlplanungen oder lange Wartezeiten vor Ort ist ausgeschlossen. Bitte gleichen Sie wichtige Termine im Zweifel immer mit den offiziellen Webseiten der jeweiligen Ministerien oder Freizeitparks ab.
