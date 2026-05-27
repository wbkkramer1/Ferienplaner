const FERIEN_DATEN = {
    "Baden-Württemberg": [
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 11) }, 
        { start: new Date(2026, 4, 26), ende: new Date(2026, 5, 5) },  
        { start: new Date(2026, 6, 30), ende: new Date(2026, 8, 12) }, 
        { start: new Date(2026, 9, 26), ende: new Date(2026, 9, 31) }, 
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 9) }  
    ],
    "Bayern": [
        { start: new Date(2026, 1, 16), ende: new Date(2026, 1, 20) }, 
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 10) }, 
        { start: new Date(2026, 4, 26), ende: new Date(2026, 5, 5) },  
        { start: new Date(2026, 7, 3), ende: new Date(2026, 8, 14) },  
        { start: new Date(2026, 10, 2), ende: new Date(2026, 10, 6) }, 
        { start: new Date(2026, 10, 18), ende: new Date(2026, 10, 18) }, 
        { start: new Date(2026, 11, 24), ende: new Date(2027, 0, 8) }  
    ],
    "Berlin": [
        { start: new Date(2026, 1, 2), ende: new Date(2026, 1, 7) },
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 10) },
        { start: new Date(2026, 4, 15), ende: new Date(2026, 4, 15) }, 
        { start: new Date(2026, 4, 26), ende: new Date(2026, 4, 26) }, 
        { start: new Date(2026, 6, 9), ende: new Date(2026, 7, 22) },
        { start: new Date(2026, 9, 19), ende: new Date(2026, 9, 31) },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 2) }
    ],
    "Brandenburg": [
        { start: new Date(2026, 1, 2), ende: new Date(2026, 1, 7) },
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 10) },
        { start: new Date(2026, 4, 15), ende: new Date(2026, 4, 15) },
        { start: new Date(2026, 4, 26), ende: new Date(2026, 4, 26) },
        { start: new Date(2026, 6, 9), ende: new Date(2026, 7, 22) },
        { start: new Date(2026, 9, 19), ende: new Date(2026, 9, 30) },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 2) }
    ],
    "Bremen": [
        { start: new Date(2026, 1, 2), ende: new Date(2026, 1, 3) },
        { start: new Date(2026, 2, 23), ende: new Date(2026, 3, 7) },
        { start: new Date(2026, 4, 15), ende: new Date(2026, 4, 15) },
        { start: new Date(2026, 4, 26), ende: new Date(2026, 4, 26) },
        { start: new Date(2026, 6, 2), ende: new Date(2026, 7, 12) },
        { start: new Date(2026, 9, 12), ende: new Date(2026, 9, 24) },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 9) }
    ],
    "Hamburg": [
        { start: new Date(2026, 0, 30), ende: new Date(2026, 0, 30) },
        { start: new Date(2026, 2, 2), ende: new Date(2026, 2, 13) },
        { start: new Date(2026, 4, 11), ende: new Date(2026, 4, 15) }, 
        { start: new Date(2026, 6, 9), ende: new Date(2026, 7, 19) },
        { start: new Date(2026, 9, 19), ende: new Date(2026, 9, 30) },
        { start: new Date(2026, 11, 21), ende: new Date(2027, 0, 1) }
    ],
    "Hessen": [
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 10) },
        { start: new Date(2026, 5, 29), ende: new Date(2026, 7, 7) },
        { start: new Date(2026, 9, 5), ende: new Date(2026, 9, 17) },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 12) }
    ],
    "Mecklenburg-Vorpommern": [
        { start: new Date(2026, 1, 9), ende: new Date(2026, 1, 20) },
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 8) },
        { start: new Date(2026, 4, 15), ende: new Date(2026, 4, 15) },
        { start: new Date(2026, 4, 22), ende: new Date(2026, 4, 26) }, 
        { start: new Date(2026, 6, 13), ende: new Date(2026, 7, 22) },
        { start: new Date(2026, 9, 15), ende: new Date(2026, 9, 24) },
        { start: new Date(2026, 11, 21), ende: new Date(2027, 0, 2) }
    ],
    "Niedersachsen": [
        { start: new Date(2026, 1, 2), ende: new Date(2026, 1, 3) },
        { start: new Date(2026, 2, 23), ende: new Date(2026, 3, 7) },
        { start: new Date(2026, 4, 15), ende: new Date(2026, 4, 15) },
        { start: new Date(2026, 4, 26), ende: new Date(2026, 4, 26) },
        { start: new Date(2026, 6, 2), ende: new Date(2026, 7, 12) },
        { start: new Date(2026, 9, 12), ende: new Date(2026, 9, 24) },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 9) }
    ],
    "Nordrhein-Westfalen": [
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 11) },
        { start: new Date(2026, 4, 26), ende: new Date(2026, 4, 26) },
        { start: new Date(2026, 6, 20), ende: new Date(2026, 8, 1) },
        { start: new Date(2026, 9, 17), ende: new Date(2026, 9, 31) },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 6) }
    ],
    "Rheinland-Pfalz": [
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 10) },
        { start: new Date(2026, 5, 29), ende: new Date(2026, 7, 7) },
        { start: new Date(2026, 9, 5), ende: new Date(2026, 9, 16) },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 8) }
    ],
    "Saarland": [
        { start: new Date(2026, 1, 16), ende: new Date(2026, 1, 20) },
        { start: new Date(2026, 3, 7), ende: new Date(2026, 3, 17) },
        { start: new Date(2026, 5, 29), ende: new Date(2026, 7, 7) },
        { start: new Date(2026, 9, 5), ende: new Date(2026, 9, 16) },
        { start: new Date(2026, 11, 21), ende: new Date(2026, 11, 31) }
    ],
    "Sachsen": [
        { start: new Date(2026, 1, 9), ende: new Date(2026, 1, 21) },
        { start: new Date(2026, 3, 3), ende: new Date(2026, 3, 10) },
        { start: new Date(2026, 4, 15), ende: new Date(2026, 4, 15) },
        { start: new Date(2026, 6, 4), ende: new Date(2026, 7, 14) },
        { start: new Date(2026, 9, 12), ende: new Date(2026, 9, 24) },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 2) }
    ],
    "Sachsen-Anhalt": [
        { start: new Date(2026, 0, 31), ende: new Date(2026, 1, 6) },
        { start: new Date(2026, 2, 30), ende: new Date(2026, 3, 4) },
        { start: new Date(2026, 4, 26), ende: new Date(2026, 4, 29) },
        { start: new Date(2026, 6, 4), ende: new Date(2026, 7, 14) },
        { start: new Date(2026, 9, 19), ende: new Date(2026, 9, 30) },
        { start: new Date(2026, 11, 21), ende: new Date(2027, 0, 2) }
    ],
    "Schleswig-Holstein": [
        { start: new Date(2026, 1, 2), ende: new Date(2026, 1, 3) },
        { start: new Date(2026, 3, 26), ende: new Date(2026, 3, 10) },
        { start: new Date(2026, 4, 15), ende: new Date(2026, 4, 15) },
        { start: new Date(2026, 6, 4), ende: new Date(2026, 7, 15) },
        { start: new Date(2026, 9, 12), ende: new Date(2026, 9, 24) },
        { start: new Date(2026, 11, 21), ende: new Date(2027, 0, 6) }
    ],
    "Thüringen": [
        { start: new Date(2026, 1, 16), ende: new Date(2026, 1, 21) },
        { start: new Date(2026, 3, 7), ende: new Date(2026, 3, 17) },
        { start: new Date(2026, 4, 15), ende: new Date(2026, 4, 15) },
        { start: new Date(2026, 6, 4), ende: new Date(2026, 7, 14) },
        { start: new Date(2026, 9, 12), ende: new Date(2026, 9, 24) },
        { start: new Date(2026, 11, 23), ende: new Date(2027, 0, 2) }
    ]
};

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
    { name: "Karls Erlebnis-Dorf", ort: "Rövershagen", bundesland: "Mecklenburg-Vorpommern", url: "https://karls.de/roevershagen" },
    { name: "Skyline Park", ort: "Rammingen", bundesland: "Bayern", url: "https://www.skylinepark.de" },
    { name: "Rasti-Land", ort: "Salzhemmendorf", bundesland: "Niedersachsen", url: "https://www.rasti-land.de" },
    { name: "Schwaben Park", ort: "Kaisersbach", bundesland: "Baden-Württemberg", url: "https://www.schwabenpark.de" },
    { name: "Taunus Wunderland", ort: "Schlangenbad", bundesland: "Hessen", url: "https://taunuswunderland.de" },
    { name: "Freizeit-Land Geiselwind", ort: "Geiselwind", bundesland: "Bayern", url: "https://freizeitland-geiselwind.de" },
    { name: "Potts Park", ort: "Minden", bundesland: "Nordrhein-Westfalen", url: "https://www.pottspark.de" }
];

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
    "2026-11-18": { name: "Buß- und Bettag", laender: ["Sachsen", "Bayern"] },
    "2026-12-25": { name: "1. Weihnachtstag", all: true },
    "2026-12-26": { name: "2. Weihnachtstag", all: true }
};
