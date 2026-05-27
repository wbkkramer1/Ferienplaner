// Globale Zustände
let aktuellesDatum = new Date(2026, 4, 27); // 27. Mai 2026
let ausgewaehltesBundesland = "Mecklenburg-Vorpommern";
let ganzeWochePruefen = false;
let apiLiveDaten = null; 

const MONATS_NAMEN = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
const WOCHEN_TAGE = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

const NACHBAR_MAP = {
    "Baden-Württemberg": ["Bayern", "Hessen", "Rheinland-Pfalz"],
    "Bayern": ["Baden-Württemberg", "Hessen", "Thüringen", "Sachsen"],
    "Berlin": ["Brandenburg"],
    "Brandenburg": ["Berlin", "Mecklenburg-Vorpommern", "Sachsen", "Sachsen-Anhalt", "Niedersachsen"],
    "Bremen": ["Niedersachsen"],
    "Hamburg": ["Schleswig-Holstein", "Niedersachsen"],
    "Hessen": ["Nordrhein-Westfalen", "Rheinland-Pfalz", "Baden-Württemberg", "Bayern", "Thüringen", "Niedersachsen"],
    "Mecklenburg-Vorpommern": ["Schleswig-Holstein", "Niedersachsen", "Brandenburg"],
    "Niedersachsen": ["Schleswig-Holstein", "Hamburg", "Bremen", "Mecklenburg-Vorpommern", "Brandenburg", "Sachsen-Anhalt", "Thüringen", "Hessen", "Nordrhein-Westfalen"],
    "Nordrhein-Westfalen": ["Niedersachsen", "Hessen", "Rheinland-Pfalz"],
    "Rheinland-Pfalz": ["Nordrhein-Westfalen", "Hessen", "Baden-Württemberg", "Saarland"],
    "Saarland": ["Rheinland-Pfalz"],
    "Sachsen": ["Brandenburg", "Sachsen-Anhalt", "Thüringen", "Bayern"],
    "Sachsen-Anhalt": ["Niedersachsen", "Brandenburg", "Sachsen", "Thüringen"],
    "Schleswig-Holstein": ["Hamburg", "Niedersachsen", "Mecklenburg-Vorpommern"],
    "Thüringen": ["Niedersachsen", "Hessen", "Bayern", "Sachsen", "Sachsen-Anhalt"]
};

function zuLokalemIsoString(datum) {
    const j = datum.getFullYear();
    const m = String(datum.getMonth() + 1).padStart(2, '0');
    const t = String(datum.getDate()).padStart(2, '0');
    return `${j}-${m}-${t}`;
}

function istInFerien(bundesland, datum) {
    if (!FERIEN_DATEN[bundesland]) return false;
    let d = new Date(datum.getFullYear(), datum.getMonth(), datum.getDate()).getTime();
    return FERIEN_DATEN[bundesland].some(zeitraum => {
        let s = new Date(zeitraum.start.getFullYear(), zeitraum.start.getMonth(), zeitraum.start.getDate()).getTime();
        let e = new Date(zeitraum.ende).setHours(23,59,59,999);
        return d >= s && d <= e;
    });
}

function holeAktuellenFerienZeitraum(bundesland, datum) {
    if (!FERIEN_DATEN[bundesland]) return null;
    let d = new Date(datum.getFullYear(), datum.getMonth(), datum.getDate()).getTime();
    return FERIEN_DATEN[bundesland].find(zeitraum => {
        let s = new Date(zeitraum.start.getFullYear(), zeitraum.start.getMonth(), zeitraum.start.getDate()).getTime();
        let e = new Date(zeitraum.ende).setHours(23,59,59,999);
        return d >= s && d <= e;
    }) || null;
}

function holeFeiertagsNameFuerLand(datum, bundesland) {
    const schluessel = zuLokalemIsoString(datum);
    const feiertag = FEIERTAGE_2026[schluessel];
    if (!feiertag) return null;
    if (feiertag.all) return feiertag.name;
    if (feiertag.laender && feiertag.laender.includes(bundesland)) return feiertag.name;
    return null;
}

function formatiereDatum(datum) {
    return `${datum.getDate()}. ${MONATS_NAMEN[datum.getMonth()]} ${datum.getFullYear()}`;
}
function formatiereDatumKurz(datum) {
    return `${datum.getDate()}.${datum.getMonth() + 1}.${datum.getFullYear()}`;
}

function formatiereSpanne(datum) {
    const t = String(datum.getDate()).padStart(2, '0');
    const m = String(datum.getMonth() + 1).padStart(2, '0');
    return `${t}.${m}.`;
}

async function ladeLiveCrowdDaten() {
    try {
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://api.wartezeiten.app/v1/crowdlevel'));
        if (response.ok) {
            const dataWrapper = await response.json();
            if (dataWrapper.contents) {
                apiLiveDaten = JSON.parse(dataWrapper.contents);
                console.log("Live-Daten geladen:", apiLiveDaten);
                updateDashboard();
            }
        }
    } catch (fehler) {
        console.error("API-Abruf fehlgeschlagen.", fehler);
    }
}

// FIX: Erzwingt den Live-Abgleich für den ausgewählten 27. Mai im Kalender
function holeLiveProzentwert(parkApiId) {
    if (!apiLiveDaten || !parkApiId) return null;
    
    // Wir prüfen rein auf Tag und Monat (27. Mai), um Jahr-Konflikte der PC-Uhr auszuschließen
    if (aktuellesDatum.getDate() === 27 && aktuellesDatum.getMonth() === 4) {
        const livePark = apiLiveDaten.find(p => p.id === parkApiId);
        if (livePark && livePark.crowdlevel !== undefined && livePark.crowdlevel !== null) {
            return livePark.crowdlevel;
        }
    }
    return null;
}

function berechneParkAuslastung(park, testTage) {
    const prozent = holeLiveProzentwert(park.apiId);
    if (prozent !== null) {
        if (prozent >= 65) return "voll";
        if (prozent >= 35) return "maessig";
        return "leer";
    }

    const hatFeiertag = testTage.some(tt => holeFeiertagsNameFuerLand(tt, park.bundesland) !== null);
    if (hatFeiertag) return "voll";

    const hatEigenFerien = testTage.some(tt => istInFerien(park.bundesland, tt));
    if (hatEigenFerien) return "voll"; 

    const nachbarn = NACHBAR_MAP[park.bundesland] || [];
    const hatNachbarFerien = nachbarn.some(nbl => testTage.some(tt => istInFerien(nbl, tt)));
    const hatWochenende = testTage.some(tt => tt.getDay() === 0 || tt.getDay() === 6);

    if (hatNachbarFerien && hatWochenende) {
        return "voll"; 
    } else if (hatNachbarFerien || hatWochenende) {
        return "maessig"; 
    }

    return "leer"; 
}

window.addEventListener('DOMContentLoaded', () => {
    initDropdown();
    baueKalender();
    initMapHover(); 
    
    updateDashboard();
    ladeLiveCrowdDaten();

    document.getElementById('state-select').addEventListener('change', (e) => {
        ausgewaehltesBundesland = e.target.value;
        updateDashboard();
    });

    document.getElementById('week-check').addEventListener('change', (e) => {
        ganzeWochePruefen = e.target.checked;
        updateDashboard();
    });
});

/* Die restlichen Funktionen bleiben exakt identisch */
function initDropdown() {
    const select = document.getElementById('state-select');
    if (!select) return;
    select.innerHTML = '';
    Object.keys(FERIEN_DATEN).sort().forEach(bl => {
        const opt = document.createElement('option');
        opt.value = bl;
        opt.textContent = bl;
        if (bl === ausgewaehltesBundesland) opt.selected = true;
        select.appendChild(opt);
    });
}

function baueKalender() {
    const container = document.getElementById('calendar-container');
    if (!container) return;
    container.innerHTML = '';
    for (let monat = 0; monat < 12; monat++) {
        const monatsBox = document.createElement('div');
        monatsBox.className = 'month-box';
        const titel = document.createElement('div');
        titel.className = 'month-title';
        titel.textContent = MONATS_NAMEN[monat];
        monatsBox.appendChild(titel);
        const grid = document.createElement('div');
        grid.className = 'days-grid';
        WOCHEN_TAGE.forEach(tag => {
            const h = document.createElement('div');
            h.className = 'day-header';
            h.textContent = tag;
            grid.appendChild(h);
        });
        const ersterTag = new Date(2026, monat, 1);
        let startSpalte = ersterTag.getDay() - 1; 
        if (startSpalte === -1) startSpalte = 6;
        for (let i = 0; i < startSpalte; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'day-cell empty';
            grid.appendChild(emptyCell);
        }
        const tageImMonat = new Date(2026, monat + 1, 0).getDate();
        for (let tag = 1; tag <= tageImMonat; tag++) {
            const zelle = document.createElement('div');
            zelle.className = 'day-cell';
            zelle.textContent = tag;
            zelle.dataset.dateString = `2026-${String(monat + 1).padStart(2,'0')}-${String(tag).padStart(2,'0')}`;
            zelle.addEventListener('click', () => {
                const parts = zelle.dataset.dateString.split('-');
                aktuellesDatum = new Date(parts[0], parts[1] - 1, parts[2]);
                updateDashboard();
            });
            grid.appendChild(zelle);
        }
        monatsBox.appendChild(grid);
        container.appendChild(monatsBox);
    }
}

function initMapHover() {
    document.querySelectorAll('.ferien-pin').forEach(pin => {
        const blName = pin.getAttribute('data-land');
        pin.addEventListener('mouseenter', () => {
            const feiertagName = holeFeiertagsNameFuerLand(aktuellesDatum, blName);
            if (feiertagName) {
                document.getElementById('info-box').textContent = `${blName}: 🗓️ Gesetzlicher Feiertag (${feiertagName})`;
            } else {
                const hatFerien = [aktuellesDatum].some(tt => istInFerien(blName, tt));
                document.getElementById('info-box').textContent = `${blName}: ${hatFerien ? 'Ferienbetrieb (Voll)' : 'Reguläre Schulzeit (Frei)'}`;
            }
        });
        pin.addEventListener('mouseleave', () => { pruefeInfoboxText(); });
    });
    document.querySelectorAll('.park-pin').forEach(pin => {
        const parkName = pin.getAttribute('data-park');
        pin.addEventListener('mouseenter', () => {
            const parkGefunden = TOP_PARKS.find(p => p.name === parkName);
            if (parkGefunden) {
                const status = berechneParkAuslastung(parkGefunden, [aktuellesDatum]);
                const liveProzent = holeLiveProzentwert(parkGefunden.apiId);
                let statusText = "";
                if (liveProzent !== null) {
                    statusText = `LIVE: ${liveProzent}% Auslastung`;
                } else {
                    if (status === "voll") {
                        const feiertagName = holeFeiertagsNameFuerLand(aktuellesDatum, parkGefunden.bundesland);
                        statusText = feiertagName ? `Voll (Feiertag: ${feiertagName})` : `Voll (Ferien in ${parkGefunden.bundesland})`;
                    }
                    if (status === "maessig") {
                        statusText = (aktuellesDatum.getDay() === 0 || aktuellesDatum.getDay() === 6) ? `Mäßig (Wochenend-Andrang)` : `Mäßig (Nachbarferien)`;
                    }
                    if (status === "leer") statusText = `Leer (Freie Fahrt!)`;
                }
                document.getElementById('info-box').textContent = `${parkGefunden.name} (${parkGefunden.ort}) • ${statusText} • [Klicken für Website]`;
            }
        });
        pin.addEventListener('mouseleave', () => { pruefeInfoboxText(); });
        pin.addEventListener('click', () => {
            const parkGefunden = TOP_PARKS.find(p => p.name === parkName);
            if (parkGefunden && parkGefunden.url) { window.open(parkGefunden.url, '_blank'); }
        });
    });
}

function pruefeInfoboxText() {
    if (aktuellesDatum.getDate() === 27 && aktuellesDatum.getMonth() === 4) {
        if (apiLiveDaten) {
            document.getElementById('info-box').textContent = `⚡ Live-Modus aktiv: Unterstützte Parks zeigen die prozentuale Echtzeit-Auslastung der API.`;
        } else {
            document.getElementById('info-box').textContent = `🔮 Prognose-Modus: Verbinde über GitHub-Bypass mit Wartezeiten-Server...`;
        }
        return;
    }
    const feiertagName = holeFeiertagsNameFuerLand(aktuellesDatum, ausgewaehltesBundesland);
    if (feiertagName && !ganzeWochePruefen) {
        document.getElementById('info-box').textContent = `🗓️ Gesetzlicher Feiertag in ${ausgewaehltesBundesland}: ${feiertagName}`;
        return;
    }
    if ((aktuellesDatum.getDay() === 0 || aktuellesDatum.getDay() === 6) && !ganzeWochePruefen) {
        document.getElementById('info-box').textContent = `Wochenende am ${formatiereDatumKurz(aktuellesDatum)} • Erhöhtes Basisaufkommen in allen Freizeitparks.`;
        return;
    }
    let testTage = [aktuellesDatum];
    if (ganzeWochePruefen) {
        testTage = [];
        for (let i = 0; i < 7; i++) {
            let d = new Date(aktuellesDatum); d.setDate(d.getDate() + i); testTage.push(d);
        }
    }
    let ferienZaehler = 0;
    Object.keys(FERIEN_DATEN).forEach(bl => { if (testTage.some(tt => istInFerien(bl, tt))) ferienZaehler++; });
    document.getElementById('info-box').textContent = ganzeWochePruefen 
        ? `In der Woche vom ${formatiereDatumKurz(aktuellesDatum)} bis ${formatiereDatumKurz(testTage[6])} haben ${ferienZaehler} von 16 Bundesländern Ferien.`
        : `Am ${formatiereDatumKurz(aktuellesDatum)} haben ${ferienZaehler} von 16 Bundesländern Ferien.`;
}

function updateDashboard() {
    document.getElementById('selected-date-display').textContent = formatiereDatum(aktuellesDatum);
    let testTage = [aktuellesDatum];
    if (ganzeWochePruefen) {
        testTage = [];
        for (let i = 0; i < 7; i++) {
            let d = new Date(aktuellesDatum); d.setDate(d.getDate() + i); testTage.push(d);
        }
    }
    const heuteStr = formatiereDatumKurz(new Date());
    
    // Raster-Aktualisierung
    document.querySelectorAll('.day-cell:not(.empty)').forEach(zelle => {
        const parts = zelle.dataset.dateString.split('-');
        const d = new Date(parts[0], parts[1] - 1, parts[2]);
        zelle.className = 'day-cell'; 
        if (formatiereDatumKurz(d) === heuteStr) zelle.classList.add('today-highlight');
        if (zelle.dataset.dateString === zuLokalemIsoString(aktuellesDatum)) zelle.classList.add('active');
        if (istInFerien(ausgewaehltesBundesland, d)) zelle.classList.add('ferien-highlight');
        if (holeFeiertagsNameFuerLand(d, ausgewaehltesBundesland) !== null) zelle.classList.add('feiertag-highlight');
    });

    const laenderListe = document.getElementById('laender-liste');
    laenderListe.innerHTML = '';
    Object.keys(FERIEN_DATEN).sort().forEach(bl => {
        const hatFerienInSpanne = testTage.some(tt => istInFerien(bl, tt));
        const hatFeiertagHeute = testTage.some(tt => holeFeiertagsNameFuerLand(tt, bl) !== null);
        const zeitraum = holeAktuellenFerienZeitraum(bl, aktuellesDatum);
        let datumsText = "";
        if (zeitraum) {
            datumsText = `<span class="park-ort" style="display:block; margin-top:2px;">${formatiereSpanne(zeitraum.start)} – ${formatiereSpanne(zeitraum.ende)}</span>`;
        }
        const item = document.createElement('div');
        item.className = `land-item ${hatFerienInSpanne || hatFeiertagHeute ? 'ferien' : ''}`;
        item.innerHTML = `
            <div class="park-info">
                <span class="park-name">${bl}</span>
                ${datumsText}
            </div>
            <span class="status-badge">${hatFeiertagHeute ? 'Feiertag' : (hatFerienInSpanne ? 'Ferien' : 'Schule')}</span>
        `;
        laenderListe.appendChild(item);
        document.querySelectorAll('.ferien-pin').forEach(pin => {
            if (pin.getAttribute('data-land') === bl) {
                pin.className = "ferien-pin";
                if (!hatFerienInSpanne && !hatFeiertagHeute) pin.classList.add('leuchtet-gruen');    
            }
        });
    });

    pruefeInfoboxText();

    const parksListe = document.getElementById('parks-liste');
    parksListe.innerHTML = '';
    TOP_PARKS.forEach(park => {
        const auslastung = berechneParkAuslastung(park, testTage);
        const liveProzent = holeLiveProzentwert(park.apiId);
        const parkItem = document.createElement('div');
        parkItem.className = `park-item ${auslastung === 'voll' ? 'ferien' : (auslastung === 'maessig' ? 'maessig' : '')}`;
        
        let badgeText = "Leer";
        if (auslastung === "voll") badgeText = "Voll";
        if (auslastung === "maessig") badgeText = "Mäßig";
        if (liveProzent !== null) badgeText = `${liveProzent}%`;

        const istLive = (aktuellesDatum.getDate() === 27 && aktuellesDatum.getMonth() === 4 && apiLiveDaten && park.apiId);
        parkItem.innerHTML = `
            <div class="park-info">
                <span class="park-name">${park.name}${istLive ? ' ⚡' : ''}</span>
                <span class="park-ort">${park.ort} (${park.bundesland})</span>
            </div>
            <span class="park-status-badge state-${auslastung}">${badgeText}</span>
        `;
        parksListe.appendChild(parkItem);

        parkItem.addEventListener('click', () => {
            document.getElementById('state-select').value = park.bundesland;
            ausgewaehltesBundesland = park.bundesland;
            updateDashboard();
        });

        document.querySelectorAll('.park-pin').forEach(pin => {
            if (pin.getAttribute('data-park') === park.name) {
                pin.className = "park-pin"; 
                if (auslastung === "leer") pin.classList.add('leuchtet-gruen');
                if (auslastung === "maessig") pin.classList.add('leuchtet-gelb');
                if (auslastung === "voll") pin.classList.add('leuchtet-rot');
            }
        });
    });
}
