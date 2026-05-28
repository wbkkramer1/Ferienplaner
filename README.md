# Ferien-Finder Deutschland 2026 ☀️🗓️

Ein interaktives, hochperformantes Web-Dashboard im eleganten, cleanen Minimalismus-Stil zur Live-Visualisierung und Analyse von Schulferien, gesetzlichen Feiertagen und der daraus resultierenden prognostizierten Auslastung der Top-Freizeitparks in Deutschland für das Jahr 2026.

Das Tool hilft Familien, Freizeitpark-Enthusiasten und Reiseplanern dabei, besucherstarke Tage (Ferienüberschneidungen/Feiertage) strategisch zu umgehen und leere Tage („Geheimtipps“) ausfindig zu machen.

## 🚀 Live-Demo
Das Projekt ist über GitHub Pages direkt im Browser verfügbar:
👉 **[Ferien-Finder 2026 Live ausprobieren](https://wbkkramer1.github.io/Ferienplaner/index.html)**

---

## 🚀 Key Features (Hauptfunktionen)

* **Interaktiver 12-Monats-Kalender:** Ein kompakter, voll funktionsfähiger Jahreskalender für 2026. Jeder Tag ist anklickbar und synchronisiert das gesamte Dashboard in Echtzeit. Wochenenden und Feiertage sind visuell dezent markiert.
* **Duales Live-Karten-System (SVG):**
  * *Ferien-Karte:* Zeigt alle 16 Bundesländer als Pins. Sie leuchten grün (Schule/reguläre Zeit) oder rot (aktuell Ferien oder Feiertag).
  * *Park-Karte:* Zeigt die Top-Freizeitparks in Deutschland an ihrer exakten geografischen Position. Pins leuchten dynamisch nach Auslastung: Grün (Ruhig), Gelb (Belebt) oder Rot (Trubel).
* **Intelligente Auslastungsprognose (Der Algorithmus):** Berechnet die Park-Auslastung nicht nur stumpf nach dem eigenen Bundesland, sondern bezieht die Ferien der umliegenden Nachbarländer sowie Wochenenden und Feiertage mit ein.
* **Smarte Tooltips mit automatischer Namenserkennung:** Beim Überfahren der Karten-Pins mit der Maus öffnet sich ein blur-unterstützter Tooltip. Das Skript erkennt anhand des Datums automatisch den korrekten Namen der Ferien (z.B. „Pfingstferien“, „Osterferien“), selbst wenn diese in den Rohdaten nicht explizit benannt sind.
* **„Ganze Woche prüfen“-Modus:** Per Switch-Umschalter lässt sich der Prüfzeitraum von einem einzelnen Tag auf eine 7-Tage-Spanne erweitern – ideal für die Wochenend- oder Kurzurlaubsplanung.
* **Responsives Flat-Design-Layout:** Minimalistische Ästhetik, edle Graustufen, dezente Schatten, seidenweiche Hover-Effekte und native System-Schriftarten machen die Nutzung extrem flüssig. Dank striktem CSS-Bounding und raumoptimiertem Spalten-Layout bleibt die Benutzeroberfläche auf allen Displays garantiert scrollbalkenfrei.

---

## 🧠 Der Auslastungs-Algorithmus (Logik)

Die Auslastung eines Freizeitparks für ein gewähltes Datum (oder eine Woche) wird in drei Stufen unterteilt:

* **TRUBEL (Rot):**
  * Es ist ein gesetzlicher Feiertag im Bundesland des Parks.
  * *ODER:* Das Bundesland des Parks hat aktuell Schulferien.
  * *ODER:* Mindestens ein direkt zugeordnetes Nachbarland laut Skizze hat Ferien und gleichzeitig fällt der Tag auf ein Wochenende (Samstag/Sonntag).
* **BELEBT (Gelb):**
  * Mindestens ein direkt zugeordnetes Nachbarland laut Skizze hat Ferien (unter der Woche).
  * *ODER:* Es ist ein reguläres Wochenende ohne Ferienbetrieb.
* **RUHIG (Grün):**
  * Es sind keine Ferien (weder im eigenen Bundesland noch in den zugeordneten Nachbarländern).
  * Es ist unter der Woche (Mo–Fr) und kein gesetzlicher Feiertag.

---

## 📂 Projektstruktur

Das Projekt besteht aus vier schlanken, sauber getrennten Dateien (Pure Vanilla JavaScript, HTML5 und CSS3) – komplett ohne schwere Frameworks oder externe Abhängigkeiten:
* `index.html` -> Struktur des Dashboards, SVG-Karten-Definitionen und Pin-Overlays
* `style.css` -> Minimalistisches Layout, Animationen, responsive, scrollbalkenfreie Karten- & Listen-Begrenzung
* `script.js` -> Kern-Logik, Kalender-Generierung, Tooltips & Auslastungsberechnung
* `daten.js` -> Rohdaten: FERIEN_DATEN, FEIERTAGE_2026, TOP_PARKS & NACHBAR_MAP
* `README.md` -> Projektdokumentation (Diese Datei)

---

## 🛠️ Technische Details & Fixes

Im Laufe der Entwicklung wurden kritische Optimierungen vorgenommen, die eine hohe Robustheit garantieren:
* **Feiertags-Namenserkennung:** Das System zeigt in der Bundesländer-Liste bei einem Feiertag nun nicht mehr nur stumpf den Status an, sondern hakt dynamisch den exakten Namen des Feiertags (z. B. *Fronleichnam*) in Klammern hinter das Land.
* **Elastische CSS-Overflow-Bremse:** Die rechten Tabellenspalten nutzen ein intelligentes `flex-shrink`-Verhältnis in Kombination mit `height: auto !important`. Das verhindert unschöne Scrollbalken und sorgt dafür, dass sich die Boxen bei langen Textzusätzen flexibel anpassen, ohne das Layout zu sprengen.
* **Fehlerfreie Event-Verarbeitung:** Ein zuvor vorhandener Laufzeitfehler (`blackout is not defined` in der Infobox-Prüfung) wurde restlos eliminiert.
* **Fallback-Ferienbenennung:** Falls in der Datenstruktur ein Zeitraum nur mit Start- und Enddatum hinterlegt ist, ermittelt JavaScript über den Startmonat semantisch korrekt die Bezeichnung (Jan/Feb = Winterferien, Mär/Apr = Osterferien, Mai/Jun = Pfingstferien, Jul/Aug = Sommerferien, Okt = Herbstferien, Dez = Weihnachtsferien).

---

## 💻 Installation & Lokaler Start

Da das Projekt vollständig auf clientseitigem HTML5/JavaScript basiert, ist keine Installation von Node.js, Webpack oder Server-Umgebungen notwendig.

1. **Option A (Sofort):** Nutze einfach die offizielle [Live-Demo](https://wbkkramer1.github.io/Ferienplaner/index.html).
2. **Option B (Lokal):** Repository klonen oder Dateien in einen Ordner herunterladen.
3. **Starten:** Doppelklicke einfach auf die `index.html`, um das Dashboard direkt in einem beliebigen modernen Browser (Safari, Chrome, Firefox, Edge) zu öffnen.
4. *Tipp für Entwickler:* Wenn du Änderungen vornimmst, nutze am besten die Erweiterung „Live Server“ in VS Code, damit die Seite bei Code-Änderungen automatisch neu lädt.

---

## 📊 Datenbasis 2026

* **Ferien & Feiertage:** Basierend auf den offiziellen Beschlüssen der Kultusministerkonferenz für das Urlaubsjahr 2026 in allen 16 Bundesländern sowie den realen Ferienterminen aller direkt angrenzenden EU-Nachbarländer.
* **Integrierte Freizeitparks:**
  * Heide Park Resort (Niedersachsen)
  * Europa-Park (Baden-Württemberg)
  * Phantasialand (Nordrhein-Westfalen)
  * Hansa-Park (Schleswig-Holstein)
  * Allgäu Skyline Park (Bayern)
  * Holiday Park (Rheinland-Pfalz)
  * Belantis (Sachsen)
  * Erlebnispark Tripsdrill (Baden-Württemberg)
  * Serengeti-Park (Niedersachsen)
  * Fort Fun Abenteuerland (Nordrhein-Westfalen)
  * Rasti-Land (Niedersachsen)
  * Karls Erlebnis-Dorf Rövershagen (Mecklenburg-Vorpommern)
  * *(und viele weitere...)*

---

## ⚠️ Wichtige Hinweise & Haftungsausschluss

* **Entwicklung:** Der gesamte Programmcode dieses Dashboards (HTML, CSS und JavaScript-Logik) wurde zu 100 % von einer KI (Gemini) im Rahmen einer interaktiven Zusammenarbeit generiert.
* **Keine Garantie auf Richtigkeit:** Die Berechnungen der Auslastungen basieren auf einem theoretischen Algorithmus und dienen rein zur Orientierung. Es wird keinerlei Garantie, Gewährleistung oder Haftung für die absolute Richtigkeit, Aktualität oder Vollständigkeit der hinterlegten Ferientermine, Feiertage oder Parkdaten übernommen. Eine Haftung für verpasste Urlaubstage, Fehlplanungen oder lange Wartezeiten vor Ort ist ausgeschlossen. Bitte gleichen Sie wichtige Termine im Zweifel immer mit den offiziellen Webseiten der jeweiligen Ministerien oder Freizeitparks ab.
