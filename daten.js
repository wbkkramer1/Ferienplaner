// ==========================================================================
// 1. STATISCHE DATEN: FREIZEITPARKS
// ==========================================================================
const TOP_PARKS = [
    { name: "Europa-Park", ort: "Rust", bundesland: "Baden-Württemberg", url: "https://www.europapark.de" },
    { name: "Phantasialand", ort: "Brühl", bundesland: "Nordrhein-Westfalen", url: "https://www.phantasialand.de" },
    { name: "Heide Park Resort", ort: "Soltau", bundesland: "Niedersachsen", url: "https://www.heide-park.de" },
    { name: "Hansa-Park", ort: "Sierksdorf", bundesland: "Schleswig-Holstein", url: "https://www.hansapark.de" },
    { name: "Erlebnispark Tripsdrill", ort: "Cleebronn", bundesland: "Baden-Württemberg", url: "https://tripsdrill.de" },
    { name: "Legoland Deutschland", ort: "Günzburg", bundesland: "Bayern", url: "https://www.legoland.de" },
    { name: "Movie Park Germany", ort: "Bottrop", bundesland: "Nordrhein-Westfalen", url: "https://www.movieparkgermany.de" },
    { name: "Plopsaland (Holiday Park)", ort: "Haßloch", bundesland: "Rheinland-Pfalz", url: "https://www.holidaypark.de" },
    { name: "Serengeti-Park", ort: "Hodenhagen", bundesland: "Niedersachsen", url: "https://www.serengeti-park.de" },
    { name: "Bayern-Park", ort: "Reisbach", bundesland: "Bayern", url: "https://www.bayern-park.de" },
    { name: "Belantis", ort: "Leipzig", bundesland: "Sachsen", url: "https://www.belantis.de" },
    { name: "Fort Fun Abenteuerland", ort: "Bestwig", bundesland: "Nordrhein-Westfalen", url: "https://fortfun.de" },
    { name: "Freizeitpark Plohn", ort: "Lengenfeld", bundesland: "Sachsen", url: "https://www.freizeitpark-plohn.de" },
    { name: "Karls Erlebnis-Dorf", ort: "Rövershagen", bundesland: "Mecklenburg-Vorpommern", url: "https://karls.de" },
    { name: "Skyline Park", ort: "Rammingen", bundesland: "Bayern", url: "https://www.skylinepark.de" },
    { name: "Rasti-Land", ort: "Salzhemmendorf", bundesland: "Niedersachsen", url: "https://www.rasti-land.de" },
    { name: "Schwaben Park", ort: "Kaisersbach", bundesland: "Baden-Württemberg", url: "https://www.schwabenpark.de" },
    { name: "Taunus Wunderland", ort: "Schlangenbad", bundesland: "Hessen", url: "https://taunuswunderland.de" },
    { name: "Freizeit-Land Geiselwind", ort: "Geiselwind", bundesland: "Bayern", url: "https://freizeit-land.de" },
    { name: "Potts Park", ort: "Minden", bundesland: "Nordrhein-Westfalen", url: "https://www.pottspark.de" },
    { name: "Ravensburger Spieleland", ort: "Meckenbeuren", bundesland: "Baden-Württemberg", url: "https://spieleland.de" },
    { name: "Freizeitpark Lochmühle", ort: "Wehrheim", bundesland: "Hessen", url: "https://www.lochmuehle.de" },
    { name: "Jaderpark", ort: "Jade", bundesland: "Niedersachsen", url: "https://www.jaderpark.de" },
    { name: "Tier- und Freizeitpark Thüle", ort: "Friesoythe", bundesland: "Niedersachsen", url: "https://thuele.de" },
    { name: "Churpfalzkreis", ort: "Roding", bundesland: "Bayern", url: "https://www.churpfalzkreis.de" },
    { name: "Eifel-Park", ort: "Gondorf", bundesland: "Rheinland-Pfalz", url: "https://www.eifelpark.de" },
    { name: "Erlebnispark Steinau", ort: "Steinau an der Straße", bundesland: "Hessen", url: "https://www.erlebnispark-steinau.de" },
    { name: "Safariland Stukenbrock", ort: "Schloß Holte-Stukenbrock", bundesland: "Nordrhein-Westfalen", url: "https://safariland-stukenbrock.de" }
];

// ==========================================================================
// 2. DEUTSCHE BUNDESLÄNDER FERIEN (2026)
// ==========================================================================
const FERIEN_DATEN = {
    "Baden-Württemberg": [
        { name: "Osterferien", start: new Date(2026, 2, 30), ende: new Date(2026, 3, 11) },
        { name: "Pfingstferien", start: new Date(2026, 4, 26), ende: new Date(2026, 5, 5) },
        { name: "Sommerferien", start: new Date(2026, 6, 30), ende: new Date(2026, 8, 12) },
        { name: "Herbstferien", start: new Date(2026, 10, 2), ende: new Date(2026, 10, 6) },
        { name: "Weihnachtsferien", start: new Date(2026, 11, 23), ende: new Date(2027, 0, 9) }
    ],
    "Bayern": [
        { name: "Osterferien", start: new Date(2026, 2, 30), ende: new Date(2026, 3, 11) },
        { name: "Pfingstferien", start: new Date(2026, 4, 26), ende: new Date(2026, 5, 5) },
        { name: "Sommerferien", start: new Date(2026, 7, 3), ende: new Date(2026, 8, 14) },
        { name: "Herbstferien", start: new Date(2026, 10, 2), ende: new Date(2026, 10, 6) },
        { name: "Weihnachtsferien", start: new Date(2026, 11, 23), ende: new Date(2027, 0, 6) }
    ],
    "Berlin": [
        { name: "Osterferien", start: new Date(2026, 2, 30), ende: new Date(2026, 3, 11) },
        { name: "Sommerferien", start: new Date(2026, 6, 9), ende: new Date(2026, 7, 22) },
        { name: "Herbstferien", start: new Date(2026, 9, 19), ende: new Date(2026, 9, 30) },
        { name: "Weihnachtsferien", start: new Date(2026, 11, 21), ende: new Date(2027, 0, 2) }
    ],
    "Brandenburg": [
        { name: "Osterferien", start: new Date(2026, 2, 30), ende: new Date(2026, 3, 11) },
        { name: "Sommerferien", start: new Date(2026, 6, 9), ende: new Date(2026, 7, 22) },
        { name: "Herbstferien", start: new Date(2026, 9, 19), ende: new Date(2026, 9, 30) },
        { name: "Weihnachtsferien", start: new Date(2026, 11, 21), ende: new Date(2027, 0, 2) }
    ],
    "Bremen": [
        { name: "Osterferien", start: new Date(2026, 2, 23), ende: new Date(2026, 3, 7) },
        { name: "Pfingstferien", start: new Date(2026, 4, 12), ende: new Date(2026, 4, 22) },
        { name: "Sommerferien", start: new Date(2026, 6, 2), ende: new Date(2026, 7, 12) },
        { name: "Herbstferien", start: new Date(2026, 9, 12), ende: new Date(2026, 9, 24) },
        { name: "Weihnachtsferien", start: new Date(2026, 11, 23), ende: new Date(2027, 0, 8) }
    ],
    "Hamburg": [
        { name: "Frühjahrsferien", start: new Date(2026, 2, 2), ende: new Date(2026, 2, 13) },
        { name: "Osterferien", start: new Date(2026, 3, 30), ende: new Date(2026, 3, 30) },
        { name: "Sommerferien", start: new Date(2026, 6, 9), ende: new Date(2026, 7, 19) },
        { name: "Herbstferien", start: new Date(2026, 9, 19), ende: new Date(2026, 9, 30) },
        { name: "Weihnachtsferien", start: new Date(2026, 11, 21), ende: new Date(2027, 0, 2) }
    ],
    "Hessen": [
        { name: "Osterferien", start: new Date(2026, 2, 30), ende: new Date(2026, 3, 11) },
        { name: "Sommerferien", start: new Date(2026, 6, 29), ende: new Date(2026, 8, 4) },
        { name: "Herbstferien", start: new Date(2026, 9, 5), ende: new Date(2026, 9, 17) },
        { name: "Weihnachtsferien", start: new Date(2026, 11, 21), ende: new Date(2027, 0, 9) }
    ],
    "Mecklenburg-Vorpommern": [
        { name: "Osterferien", start: new Date(2026, 2, 30), ende: new Date(2026, 3, 8) },
        { name: "Pfingstferien", start: new Date(2026, 4, 22), ende: new Date(2026, 4, 26) },
        { name: "Sommerferien", start: new Date(2026, 6, 13), ende: new Date(2026, 7, 22) },
        { name: "Herbstferien", start: new Date(2026, 9, 19), ende: new Date(2026, 9, 24) },
        { name: "Weihnachtsferien", start: new Date(2026, 11, 23), ende: new Date(2027, 0, 6) }
    ],
    "Niedersachsen": [
        { name: "Osterferien", start: new Date(2026, 2, 23), ende: new Date(2026, 3, 7) },
        { name: "Pfingstferien", start: new Date(2026, 4, 14), ende: new Date(2026, 4, 14) },
        { name: "Sommerferien", start: new Date(2026, 6, 2), ende: new Date(2026, 7, 12) },
        { name: "Herbstferien", start: new Date(2026, 9, 12), ende: new Date(2026, 9, 24) },
        { name: "Weihnachtsferien", start: new Date(2026, 11, 23), ende: new Date(2027, 0, 8) }
    ],
    "Nordrhein-Westfalen": [
        { name: "Osterferien", start: new Date(2026, 2, 30), ende: new Date(2026, 3, 11) },
        { name: "Sommerferien", start: new Date(2026, 6, 20), ende: new Date(2026, 8, 1) },
        { name: "Herbstferien", start: new Date(2026, 9, 12), ende: new Date(2026, 9, 24) },
        { name: "Weihnachtsferien", start: new Date(2026, 11, 23), ende: new Date(2027, 0, 6) }
    ],
    "Rheinland-Pfalz": [
        { name: "Osterferien", start: new Date(2026, 2, 30), ende: new Date(2026, 3, 10) },
        { name: "Sommerferien", start: new Date(2026, 6, 29), ende: new Date(2026, 8, 4) },
        { name: "Herbstferien", start: new Date(2026, 9, 5), ende: new Date(2026, 9, 16) },
        { name: "Weihnachtsferien", start: new Date(2026, 11, 23), ende: new Date(2027, 0, 8) }
    ],
    "Saarland": [
        { name: "Osterferien", start: new Date(2026, 2, 30), ende: new Date(2026, 3, 10) },
        { name: "Sommerferien", start: new Date(2026, 6, 29), ende: new Date(2026, 8, 4) },
        { name: "Herbstferien", start: new Date(2026, 9, 5), ende: new Date(2026, 9, 16) },
        { name: "Weihnachtsferien", start: new Date(2026, 11, 23), ende: new Date(2027, 0, 8) }
    ],
    "Sachsen": [
        { name: "Osterferien", start: new Date(2026, 3, 2), ende: new Date(2026, 3, 11) },
        { name: "Sommerferien", start: new Date(2026, 6, 4), ende: new Date(2026, 7, 14) },
        { name: "Herbstferien", start: new Date(2026, 9, 19), ende: new Date(2026, 9, 30) },
        { name: "Weihnachtsferien", start: new Date(2026, 11, 23), ende: new Date(2027, 0, 2) }
    ],
    "Sachsen-Anhalt": [
        { name: "Osterferien", start: new Date(2026, 2, 23), ende: new Date(2026, 3, 3) },
        { name: "Pfingstferien", start: new Date(2026, 4, 26), ende: new Date(2026, 4, 29) },
        { name: "Sommerferien", start: new Date(2026, 6, 4), ende: new Date(2026, 7, 14) },
        { name: "Herbstferien", start: new Date(2026, 9, 19), ende: new Date(2026, 9, 30) },
        { name: "Weihnachtsferien", start: new Date(2026, 11, 21), ende: new Date(2027, 0, 2) }
    ],
    "Schleswig-Holstein": [
        { name: "Osterferien", start: new Date(2026, 2, 30), ende: new Date(2026, 3, 17) },
        { name: "Sommerferien", start: new Date(2026, 6, 20), ende: new Date(2026, 7, 29) },
        { name: "Herbstferien", start: new Date(2026, 9, 12), ende: new Date(2026, 9, 24) },
        { name: "Weihnachtsferien", start: new Date(2026, 11, 19), ende: new Date(2027, 0, 6) }
    ],
    "Thüringen": [
        { name: "Osterferien", start: new Date(2026, 2, 30), ende: new Date(2026, 3, 11) },
        { name: "Sommerferien", start: new Date(2026, 6, 4), ende: new Date(2026, 7, 14) },
        { name: "Herbstferien", start: new Date(2026, 9, 12), ende: new Date(2026, 9, 24) },
        { name: "Weihnachtsferien", start: new Date(2026, 11, 21), ende: new Date(2027, 0, 2) }
    ]
};

// ==========================================================================
// 3. ECHTE DATEN DER EU-NACHBARLÄNDER
// ==========================================================================
const NACHBARLAND_FERIEN = {
    "Dänemark": [
        { name: "Winterferien", start: new Date(2026, 1, 7), ende: new Date(2026, 1, 15) },
        { name: "Osterferien", start: new Date(2026, 2, 28), ende: new Date(2026, 3, 6) },
        { name: "Sommerferien", start: new Date(2026, 5, 27), ende: new Date(2026, 7, 9) } // REPARIERT! (27. Juni bis 9. August exakt eingestellt)
    ],
    "Polen": [
        { name: "Frühjahrsferien", start: new Date(2026, 3, 2), ende: new Date(2026, 3, 7) },
        { name: "Sommerferien", start: new Date(2026, 5, 27), ende: new Date(2026, 7, 31) }
    ],
    "Tschechien": [
        { name: "Winterferien", start: new Date(2026, 1, 2), ende: new Date(2026, 2, 1) },
        { name: "Osterferien", start: new Date(2026, 3, 2), ende: new Date(2026, 3, 2) },
        { name: "Sommerferien", start: new Date(2026, 6, 1), ende: new Date(2026, 7, 31) }
    ],
    "Österreich": [
        { name: "Semesterferien", start: new Date(2026, 1, 2), ende: new Date(2026, 1, 21) },
        { name: "Osterferien", start: new Date(2026, 2, 28), ende: new Date(2026, 3, 6) },
        { name: "Pfingstferien", start: new Date(2026, 4, 23), ende: new Date(2026, 4, 25) },
        { name: "Sommerferien", start: new Date(2026, 6, 4), ende: new Date(2026, 8, 13) }
    ],
    "Schweiz": [
        { name: "Sportferien", start: new Date(2026, 0, 24), ende: new Date(2026, 2, 1) },
        { name: "Frühlingsferien", start: new Date(2026, 3, 3), ende: new Date(2026, 4, 17) },
        { name: "Sommerferien", start: new Date(2026, 6, 4), ende: new Date(2026, 7, 30) }
    ],
    "Frankreich": [
        { name: "Winterferien", start: new Date(2026, 1, 8), ende: new Date(2026, 2, 8) },
        { name: "Frühlingsferien", start: new Date(2026, 3, 5), ende: new Date(2026, 4, 3) },
        { name: "Sommerferien", start: new Date(2026, 6, 5), ende: new Date(2026, 7, 31) }
    ],
    "Belgien": [
        { name: "Winterferien", start: new Date(2026, 1, 16), ende: new Date(2026, 1, 22) },
        { name: "Osterferien", start: new Date(2026, 3, 6), ende: new Date(2026, 3, 19) },
        { name: "Sommerferien", start: new Date(2026, 6, 1), ende: new Date(2026, 7, 31) }
    ],
    "Niederlande": [
        { name: "Frühlingsferien", start: new Date(2026, 1, 14), ende: new Date(2026, 1, 22) },
        { name: "Maiferien", start: new Date(2026, 4, 25), ende: new Date(2026, 4, 3) },
        { name: "Sommerferien", start: new Date(2026, 6, 4), ende: new Date(2026, 7, 30) }
    ],
    "Luxemburg": [
        { name: "Karnevalsferien", start: new Date(2026, 1, 14), ende: new Date(2026, 1, 22) },
        { name: "Osterferien", start: new Date(2026, 2, 28), ende: new Date(2026, 3, 12) },
        { name: "Pfingstferien", start: new Date(2026, 4, 23), ende: new Date(2026, 4, 31) },
        { name: "Sommerferien", start: new Date(2026, 6, 16), ende: new Date(2026, 8, 14) }
    ]
};

// ==========================================================================
// 4. DEUTSCHE FEIERTAGE (2026)
// ==========================================================================
const FEIERTAGE_2026 = {
    "2026-01-01": { name: "Neujahr", all: true },
    "2026-01-06": { name: "Heilige Drei Könige", laender: ["Baden-Württemberg", "Bayern", "Sachsen-Anhalt"] },
    "2026-03-08": { name: "Internationaler Frauentag", laender: ["Berlin", "Mecklenburg-Vorpommern"] },
    "2026-04-03": { name: "Karfreitag", all: true },
    "2026-04-06": { name: "Ostermontag", all: true },
    "2026-05-01": { name: "Tag der Arbeit", all: true },
    "2026-05-14": { name: "Christi Himmelfahrt", all: true },
    "2026-05-25": { name: "Pfingstmontag", all: true },
    "2026-06-04": { name: "Fronleichnam", laender: ["Baden-Württemberg", "Bayern", "Hessen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland"] },
    "2026-08-15": { name: "Mariä Himmelfahrt", laender: ["Saarland", "Bayern"] },
    "2026-09-20": { name: "Weltkindertag", laender: ["Thüringen"] },
    "2026-10-03": { name: "Tag der Deutschen Einheit", all: true },
    "2026-10-31": { name: "Reformationstag", laender: ["Brandenburg", "Bremen", "Hamburg", "Mecklenburg-Vorpommern", "Niedersachsen", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thüringen"] },
    "2026-11-01": { name: "Allerheiligen", laender: ["Baden-Württemberg", "Bayern", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland"] },
    "2026-11-18": { name: "Buß- und Bettag", laender: ["Sachsen"] },
    "2026-12-25": { name: "1. Weihnachtsfeiertag", all: true },
    "2026-12-26": { name: "2. Weihnachtsfeiertag", all: true }
};