# Ferien-Finder Deutschland 2026 ☀️🗓️

Ein interaktives, hochperformantes Web-Dashboard im eleganten Apple-Design (Light Minimalism) zur Live-Visualisierung und Analyse von Schulferien, gesetzlichen Feiertagen und der daraus resultierenden prognostizierten Auslastung der Top-Freizeitparks in Deutschland für das Jahr 2026.

Das Tool hilft Familien, Freizeitpark-Enthusiasten und Reiseplanern dabei, besucherstarke Tage (Ferienüberschneidungen/Feiertage) strategisch zu umgehen und leere Tage („Geheimtipps“) ausfindig zu machen.

---

## 🚀 Key Features (Hauptfunktionen)

- **Interaktiver 12-Monats-Kalender:** Ein kompakter, voll funktionsfähiger Jahreskalender für 2026. Jeder Tag ist anklickbar und synchronisiert das gesamte Dashboard in Echtzeit. Wochenenden sind visuell dezent markiert.
- **Duales Live-Karten-System (SVG):**
  - **Ferien-Karte:** Zeigt alle 16 Bundesländer als Pins. Sie leuchten grün (Schule/reguläre Zeit) oder rot (aktuell Ferien oder Feiertag).
  - **Park-Karte:** Zeigt die Top-Freizeitparks in Deutschland an ihrer exakten geografischen Position. Pins leuchten dynamisch nach Auslastung: Grün (Leer), Gelb (Mäßig) oder Rot (Voll).
- **Intelligente Auslastungsprognose (Der Algorithmus):** Berechnet die Park-Auslastung nicht nur stumpf nach dem eigenen Bundesland, sondern bezieht die Ferien der umliegenden Nachbarländer sowie Wochenenden und Feiertage mit ein.
- **Smarte Tooltips mit automatischer Namenserkennung:** Beim Überfahren der Karten-Pins mit der Maus öffnet sich ein blur-unterstützter Tooltip. Das Skript erkennt anhand des Datums automatisch den korrekten Namen der Ferien (z.B. „Pfingstferien“, „Osterferien“), selbst wenn diese in den Rohdaten nicht explizit benannt sind.
- **„Ganze Woche prüfen“-Modus:** Per Apple-Switch lässt sich der Prüfzeitraum von einem einzelnen Tag auf eine 7-Tage-Spanne erweitern – ideal für die Wochenend- oder Kurzurlaubsplanung.
- **Responsives Apple-Layout:** Minimalistische Ästhetik, edle Graustufen, dezente Schatten, seidenweiche Hover-Effekte und native System-Schriftarten machen die Nutzung extrem flüssig. Dank striktem CSS-Bounding bleibt die Karte auch auf kleineren Screens exakt im zugewiesenen Modul.

---

## 🧠 Der Auslastungs-Algorithmus (Logik)

Die Auslastung eines Freizeitparks für ein gewähltes Datum (oder eine Woche) wird in drei Stufen (`leer`, `maessig`, `voll`) unterteilt:

1. **🔴 VOLL (Rot):**
   - Es ist ein gesetzlicher Feiertag im Bundesland des Parks.
   - ODER: Das Bundesland des Parks hat aktuell Schulferien.
   - ODER: Mindestens ein direktes **Nachbarland** hat Ferien *und gleichzeitig* fällt der Tag auf ein Wochenende (Samstag/Sonntag).
2. **🟡 MÄSSIG (Gelb):**
   - Mindestens ein direktes Nachbarland hat Ferien (unter der Woche).
   - ODER: Es ist ein reguläres Wochenende ohne Ferienbetrieb.
3. **🟢 LEER (Grün):**
   - Es sind keine Ferien (weder im eigenen Bundesland noch in den Nachbarländern).
   - Es ist unter der Woche (Mo–Fr) und kein Feiertag.

---

## 📂 Projektstruktur

Das Projekt besteht aus vier schlanken, sauber getrennten Dateien (Pure Vanilla JavaScript, HTML5 und CSS3) – komplett ohne schwere Frameworks oder externe Abhängigkeiten:

```text
├── index.html       # Struktur des Dashboards, SVG-Karten-Definitionen und Pin-Overlays
├── style.css        # Apple-Minimalism Layout, Animationen, responsive Karten-Begrenzung
├── script.js        # Kern-Logik, Kalender-Generierung, Tooltips & Auslastungsberechnung
├── daten.js         # Rohdaten: FERIEN_DATEN, FEIERTAGE_2026, TOP_PARKS & NACHBAR_MAP
└── README.md        # Projektdokumentation (Diese Datei)
