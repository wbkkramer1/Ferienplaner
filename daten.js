const FERIEN_DATEN = {
    "Baden-Württemberg": [
        { start: new Date(2026, 2, 23), ende: new Date(2026, 2, 27), name: "Ostern" },
        { start: new Date(2026, 4, 26), ende: new Date(2026, 5, 5), name: "Pfingsten" },
        { start: new Date(2026, 6, 30), ende: new Date(2026, 8, 12), name: "Sommer" },
        { start: new Date(2026, 10, 2), ende: new Date(2026, 10, 6), name: "Herbst" },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 9), name: "Weihnachten" }
    ],
    "Bayern": [
        { start: new Date(2026, 1, 16), ende: new Date(2026, 1, 20), name: "Frühjahr" },
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 10), name: "Ostern" },
        { start: new Date(2026, 4, 26), ende: new Date(2026, 5, 5), name: "Pfingsten" },
        { start: new Date(2026, 7, 3), ende: new Date(2026, 9, 14), name: "Sommer" },
        { start: new Date(2026, 10, 2), ende: new Date(2026, 10, 6), name: "Herbst" },
        { start: new Date(2026, 11, 24), ende: new Date(2027, 0, 8), name: "Weihnachten" }
    ],
    "Berlin": [
        { start: new Date(2026, 1, 2), ende: new Date(2026, 1, 7), name: "Winter" },
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 10), name: "Ostern" },
        { start: new Date(2026, 4, 14), ende: new Date(2026, 4, 14), name: "Himmelfahrt" },
        { start: new Date(2026, 4, 26), ende: new Date(2026, 4, 26), name: "Pfingsten" },
        { start: new Date(2026, 6, 9), ende: new Date(2026, 7, 21), name: "Sommer" },
        { start: new Date(2026, 9, 19), ende: new Date(2026, 10, 30), name: "Herbst" },
        { start: new Date(2026, 11, 21), ende: new Date(2027, 0, 2), name: "Weihnachten" }
    ],
    "Brandenburg": [
        { start: new Date(2026, 1, 2), ende: new Date(2026, 1, 7), name: "Winter" },
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 10), name: "Ostern" },
        { start: new Date(2026, 6, 9), ende: new Date(2026, 7, 21), name: "Sommer" },
        { start: new Date(2026, 9, 19), ende: new Date(2026, 10, 30), name: "Herbst" },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 2), name: "Weihnachten" }
    ],
    "Bremen": [
        { start: new Date(2026, 1, 2), ende: new Date(2026, 1, 3), name: "Winter" },
        { start: new Date(2026, 2, 23), ende: new Date(2026, 3, 7), name: "Ostern" },
        { start: new Date(2026, 4, 15), ende: new Date(2026, 4, 15), name: "Himmelfahrt" },
        { start: new Date(2026, 4, 26), ende: new Date(2026, 4, 26), name: "Pfingsten" },
        { start: new Date(2026, 6, 9), ende: new Date(2026, 7, 19), name: "Sommer" },
        { start: new Date(2026, 9, 12), ende: new Date(2026, 9, 24), name: "Herbst" },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 8), name: "Weihnachten" }
    ],
    "Hamburg": [
        { start: new Date(2026, 1, 30), ende: new Date(2026, 1, 30), name: "Winter" },
        { start: new Date(2026, 2, 2), ende: new Date(2026, 2, 13), name: "Frühjahr" },
        { start: new Date(2026, 4, 11), ende: new Date(2026, 4, 15), name: "Pfingsten" },
        { start: new Date(2026, 6, 9), ende: new Date(2026, 7, 19), name: "Sommer" },
        { start: new Date(2026, 9, 12), ende: new Date(2026, 9, 23), name: "Herbst" },
        { start: new Date(2026, 11, 21), ende: new Date(2027, 0, 4), name: "Weihnachten" }
    ],
    "Hessen": [
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 10), name: "Ostern" },
        { start: new Date(2026, 5, 29), ende: new Date(2026, 7, 7), name: "Sommer" },
        { start: new Date(2026, 9, 5), ende: new Date(2026, 9, 17), name: "Herbst" },
        { start: new Date(2026, 11, 21), ende: new Date(2027, 0, 9), name: "Weihnachten" }
    ],
    "Mecklenburg-Vorpommern": [
        { start: new Date(2026, 1, 2), ende: new Date(2026, 1, 13), name: "Winter" },
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 8), name: "Ostern" },
        { start: new Date(2026, 4, 22), ende: new Date(2026, 4, 26), name: "Pfingsten" },
        { start: new Date(2026, 6, 13), ende: new Date(2026, 8, 22), name: "Sommer" },
        { start: new Date(2026, 9, 19), ende: new Date(2026, 10, 30), name: "Herbst" },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 2), name: "Weihnachten" }
    ],
    "Niedersachsen": [
        { start: new Date(2026, 1, 2), ende: new Date(2026, 1, 3), name: "Winter" },
        { start: new Date(2026, 2, 23), ende: new Date(2026, 3, 7), name: "Ostern" },
        { start: new Date(2026, 4, 15), ende: new Date(2026, 4, 15), name: "Himmelfahrt" },
        { start: new Date(2026, 4, 26), ende: new Date(2026, 4, 26), name: "Pfingsten" },
        { start: new Date(2026, 6, 9), ende: new Date(2026, 7, 19), name: "Sommer" },
        { start: new Date(2026, 9, 12), ende: new Date(2026, 9, 24), name: "Herbst" },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 8), name: "Weihnachten" }
    ],
    "Nordrhein-Westfalen": [
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 11), name: "Ostern" },
        { start: new Date(2026, 4, 26), ende: new Date(2026, 4, 26), name: "Pfingsten" },
        { start: new Date(2026, 6, 16), ende: new Date(2026, 7, 28), name: "Sommer" },
        { start: new Date(2026, 9, 12), ende: new Date(2026, 9, 24), name: "Herbst" },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 6), name: "Weihnachten" }
    ],
    "Rheinland-Pfalz": [
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 10), name: "Ostern" },
        { start: new Date(2026, 5, 29), ende: new Date(2026, 7, 7), name: "Sommer" },
        { start: new Date(2026, 9, 5), ende: new Date(2026, 9, 16), name: "Herbst" },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 6), name: "Weihnachten" }
    ],
    "Saarland": [
        { start: new Date(2026, 1, 16), ende: new Date(2026, 1, 20), name: "Winter" },
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 10), name: "Ostern" },
        { start: new Date(2026, 5, 29), ende: new Date(2026, 7, 7), name: "Sommer" },
        { start: new Date(2026, 9, 5), ende: new Date(2026, 9, 16), name: "Herbst" },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 6), name: "Weihnachten" }
    ],
    "Sachsen": [
        { start: new Date(2026, 1, 9), ende: new Date(2026, 1, 20), name: "Winter" },
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 10), name: "Ostern" },
        { start: new Date(2026, 4, 22), ende: new Date(2026, 4, 26), name: "Pfingsten" },
        { start: new Date(2026, 6, 6), ende: new Date(2026, 7, 14), name: "Sommer" },
        { start: new Date(2026, 9, 12), ende: new Date(2026, 9, 24), name: "Herbst" },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 2), name: "Weihnachten" }
    ],
    "Sachsen-Anhalt": [
        { start: new Date(2026, 1, 2), ende: new Date(2026, 1, 6), name: "Winter" },
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 4), name: "Ostern" },
        { start: new Date(2026, 4, 18), ende: new Date(2026, 4, 23), name: "Pfingsten" },
        { start: new Date(2026, 6, 6), ende: new Date(2026, 7, 14), name: "Sommer" },
        { start: new Date(2026, 9, 19), ende: new Date(2026, 10, 30), name: "Herbst" },
        { start: new Date(2026, 11, 21), ende: new Date(2027, 0, 2), name: "Weihnachten" }
    ],
    "Schleswig-Holstein": [
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 11), name: "Ostern" },
        { start: new Date(2026, 4, 22), ende: new Date(2026, 4, 23), name: "Pfingsten" },
        { start: new Date(2026, 6, 13), ende: new Date(2026, 8, 22), name: "Sommer" },
        { start: new Date(2026, 9, 12), ende: new Date(2026, 9, 24), name: "Herbst" },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 6), name: "Weihnachten" }
    ],
    "Thüringen": [
        { start: new Date(2026, 1, 2), ende: new Date(2026, 1, 6), name: "Winter" },
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 10), name: "Ostern" },
        { start: new Date(2026, 4, 22), ende: new Date(2026, 4, 22), name: "Pfingsten" },
        { start: new Date(2026, 6, 6), ende: new Date(2026, 7, 14), name: "Sommer" },
        { start: new Date(2026, 9, 12), ende: new Date(2026, 9, 24), name: "Herbst" },
        { start: new Date(2026, 11, 21), ende: new Date(2027, 0, 2), name: "Weihnachten" }
    ]
};

const FEIERTAGE_2026 = {
    "2026-01-01": { name: "Neujahr", all: true },
    "2026-01-06": { name: "Heilige Drei Könige", all: false, laender: ["Baden-Württemberg", "Bayern", "Sachsen-Anhalt"] },
    "2026-03-08": { name: "Internationaler Frauentag", all: false, laender: ["Berlin", "Mecklenburg-Vorpommern"] },
    "2026-04-03": { name: "Karfreitag", all: true },
    "2026-04-06": { name: "Ostermontag", all: true },
    "2026-05-01": { name: "Tag der Arbeit", all: true },
    "2026-05-14": { name: "Christi Himmelfahrt", all: true },
    "2026-05-25": { name: "Pfingstmontag", all: true },
    "2026-06-04": { name: "Fronleichnam", all: false, laender: ["Baden-Württemberg", "Bayern", "Hessen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland"] },
    "2026-08-15": { name: "Mariä Himmelfahrt", all: false, laender: ["Saarland", "Bayern"] },
    "2026-09-20": { name: "Weltkindertag", all: false, laender: ["Thüringen"] },
    "2026-10-03": { name: "Tag der Deutschen Einheit", all: true },
    "2026-10-31": { name: "Reformationstag", all: false, laender: ["Brandenburg", "Bremen", "Hamburg", "Mecklenburg-Vorpommern", "Niedersachsen", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thüringen"] },
    "2026-11-01": { name: "Allerheiligen", all: false, laender: ["Baden-Württemberg", "Bayern", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland"] },
    "2026-11-18": { name: "Buß- und Bettag", all: false, laender: ["Sachsen"] },
    "2026-12-25": { name: "1. Weihnachtstag", all: true },
    "2026-12-26": { name: "2. Weihnachtstag", all: true }
};

const TOP_PARKS = [
    { name: "Hansa-Park", ort: "Sierksdorf", bundesland: "Schleswig-Holstein", url: "https://www.hansapark.de" },
    { name: "Karls Erlebnis-Dorf", ort: "Rövershagen", bundesland: "Mecklenburg-Vorpommern", url: "https://karls.de" },
    { name: "Heide Park Resort", ort: "Soltau", bundesland: "Niedersachsen", url: "https://www.heide-park.de" },
    { name: "Serengeti-Park", ort: "Hodenhagen", bundesland: "Niedersachsen", url: "https://www.serengeti-park.de" },
    { name: "Rasti-Land", ort: "Salzhemmendorf", bundesland: "Niedersachsen", url: "https://www.rasti-land.de" },
    { name: "Potts Park", ort: "Minden", bundesland: "Nordrhein-Westfalen", url: "https://www.pottspark.de" },
    { name: "Movie Park Germany", ort: "Bottrop", bundesland: "Nordrhein-Westfalen", url: "https://www.movieparkgermany.de" },
    { name: "Phantasialand", ort: "Brühl", bundesland: "Nordrhein-Westfalen", url: "https://www.phantasialand.de" },
    { name: "Fort Fun Abenteuerland", ort: "Bestwig", bundesland: "Nordrhein-Westfalen", url: "https://fortfun.de" },
    { name: "Taunus Wunderland", ort: "Schlangenbad", bundesland: "Hessen", url: "https://taunuswunderland.de" },
    { name: "Erlebnispark Tripsdrill", ort: "Cleebronn", bundesland: "Baden-Württemberg", url: "https://tripsdrill.de" },
    { name: "Schwaben Park", ort: "Kaisersbach", bundesland: "Baden-Württemberg", url: "https://www.schwabenpark.de" },
    { name: "Europa-Park", ort: "Rust", bundesland: "Baden-Württemberg", url: "https://www.europapark.de" },
    { name: "Legoland Deutschland", ort: "Günzburg", bundesland: "Bayern", url: "https://www.legoland.de" },
    { name: "Skyline Park", ort: "Bad Wörishofen", bundesland: "Bayern", url: "https://www.skylinepark.de" },
    { name: "Bayern-Park", ort: "Reisbach", bundesland: "Bayern", url: "https://www.bayern-park.de" },
    { name: "Freizeit-Land Geiselwind", ort: "Geiselwind", bundesland: "Bayern", url: "https://freizeitlandgeiselwind.de" },
    { name: "Belantis", ort: "Leipzig", bundesland: "Sachsen", url: "https://www.belantis.de" },
    { name: "Freizeitpark Plohn", ort: "Lengenfeld", bundesland: "Sachsen", url: "https://www.freizeitpark-plohn.de" },
    { name: "Plopsaland (Holiday Park)", ort: "Haßloch", bundesland: "Rheinland-Pfalz", url: "https://www.holidaypark.de" },
    { name: "Ravensburger Spieleland", ort: "Meckenbeuren", bundesland: "Baden-Württemberg", url: "https://spieleland.de" },
    { name: "Freizeitpark Lochmühle", ort: "Wehrheim", bundesland: "Hessen", url: "https://www.lochmuehle.de" },
    { name: "Jaderpark", ort: "Jade", bundesland: "Niedersachsen", url: "https://www.jaderpark.de" },
    { name: "Tier- und Freizeitpark Thüle", ort: "Friesoythe", bundesland: "Niedersachsen", url: "https://tier-und-freizeitpark-thuele.de" },
    { name: "Churpfalzkreis", ort: "Roding", bundesland: "Bayern", url: "https://www.churpfalzpark.de" },
    { name: "Eifel-Park", ort: "Gondorf", bundesland: "Rheinland-Pfalz", url: "https://www.eifelpark.de" },
    { name: "Erlebnispark Steinau", ort: "Steinau an der Straße", bundesland: "Hessen", url: "https://www.erlebnispark-steinau.de" },
    { name: "Safariland Stukenbrock", ort: "Schloß Holte-Stukenbrock", bundesland: "Nordrhein-Westfalen", url: "https://safariland-stukenbrock.de" }
];
