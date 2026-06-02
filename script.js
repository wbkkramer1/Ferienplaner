// Globale Zustände - Startet sauber mit dem aktuellen Datum
let aktuellesDatum = new Date(); 
let ausgewaehltesBundesland = "Mecklenburg-Vorpommern";
let ganzeWochePruefen = false;

const MONATS_NAMEN = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
const WOCHEN_TAGE = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

// Zuordnung der ausländischen EU-Nachbarländer laut deiner Skizze
const EURO_NACHBAR_MAP = {
    "Schleswig-Holstein": ["Dänemark"],
    "Hamburg": ["Dänemark"],
    "Mecklenburg-Vorpommern": ["Dänemark", "Polen"],
    "Bremen": ["Niederlande"],
    "Niedersachsen": ["Niederlande"],
    "Nordrhein-Westfalen": ["Niederlande", "Belgien"],
    "Rheinland-Pfalz": ["Belgien", "Luxemburg"],
    "Saarland": ["Luxemburg", "Frankreich"],
    "Baden-Württemberg": ["Frankreich", "Schweiz"],
    "Bayern": ["Schweiz", "Österreich"],
    "Hessen": ["Luxemburg"],
    "Thüringen": [], 
    "Sachsen-Anhalt": [],
    "Berlin": [],
    "Brandenburg": ["Polen"],
    "Sachsen": ["Polen", "Tschechien"]
};

// Zuordnung der deutschen Nachbarbundesländer für den lückenlosen Inlands-Check
const DE_NACHBAR_MAP = {
    "Baden-Württemberg": ["Bayern", "Hessen", "Rheinland-Pfalz"],
    "Bayern": ["Baden-Württemberg", "Hessen", "Thüringen", "Sachsen"],
    "Berlin": ["Brandenburg"],
    "Brandenburg": ["Berlin", "Mecklenburg-Vorpommern", "Sachsen", "Sachsen-Anhalt", "Niedersachsen"],
    "Bremen": ["Niedersachsen"],
    "Hamburg": ["Schleswig-Holstein", "Niedersachsen"],
    "Hessen": ["Nordrhein-Westfalen", "Rheinland-Pfalz", "Baden-Württemberg", "Bayern", "Thüringen", "Niedersachsen"],
    "Mecklenburg-Vorpommern": ["Schleswig-Holstein", "Niedersachsen", "Brandenburg"],
    "Niedersachsen": ["Bremen", "Hamburg", "Schleswig-Holstein", "Mecklenburg-Vorpommern", "Brandenburg", "Sachsen-Anhalt", "Thüringen", "Hessen", "Nordrhein-Westfalen"],
    "Nordrhein-Westfalen": ["Niedersachsen", "Hessen", "Rheinland-Pfalz"],
    "Rheinland-Pfalz": ["Nordrhein-Westfalen", "Hessen", "Baden-Württemberg", "Saarland"],
    "Saarland": ["Rheinland-Pfalz"],
    "Sachsen": ["Brandenburg", "Sachsen-Anhalt", "Thüringen", "Bayern"],
    "Sachsen-Anhalt": ["Niedersachsen", "Brandenburg", "Sachsen", "Thüringen"],
    "Schleswig-Holstein": ["Hamburg", "Niedersachsen", "Mecklenburg-Vorpommern"],
    "Thüringen": ["Hessen", "Bayern", "Sachsen", "Sachsen-Anhalt", "Niedersachsen"]
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

function istNachbarlandInFerien(landName, datum) {
    if (!NACHBARLAND_FERIEN[landName]) return false;
    let d = new Date(datum.getFullYear(), datum.getMonth(), datum.getDate()).getTime();
    return NACHBARLAND_FERIEN[landName].some(zeitraum => {
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

function holeEuroFerienZeitraum(landName, datum) {
    if (!NACHBARLAND_FERIEN[landName]) return null;
    let d = new Date(datum.getFullYear(), datum.getMonth(), datum.getDate()).getTime();
    return NACHBARLAND_FERIEN[landName].find(zeitraum => {
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

function berechneParkAuslastung(park, testTage) {
    const hatFeiertag = testTage.some(tt => holeFeiertagsNameFuerLand(tt, park.bundesland) !== null);
    if (hatFeiertag) return "voll";

    const hatEigenFerien = testTage.some(tt => istInFerien(park.bundesland, tt));
    if (hatEigenFerien) return "voll"; 

    const zugewieseneEuroNachbarn = EURO_NACHBAR_MAP[park.bundesland] || [];
    const hatSkizzenNachbarFerien = zugewieseneEuroNachbarn.some(land => testTage.some(tt => istNachbarlandInFerien(land, tt)));
    
    const zugewieseneDeNachbarn = DE_NACHBAR_MAP[park.bundesland] || [];
    const hatDeNachbarFerienOderFeiertag = zugewieseneDeNachbarn.some(bl => 
        testTage.some(tt => istInFerien(bl, tt) || holeFeiertagsNameFuerLand(tt, bl) !== null)
    );

    const hatWochenende = testTage.some(tt => tt.getDay() === 0 || tt.getDay() === 6);

    if ((hatSkizzenNachbarFerien || hatDeNachbarFerienOderFeiertag) && hatWochenende) {
        return "voll"; 
    } 
    else if (hatSkizzenNachbarFerien || hatDeNachbarFerienOderFeiertag || hatWochenende) {
        return "maessig"; 
    }

    return "leer"; 
}

window.addEventListener('DOMContentLoaded', () => {
    initDropdown();
    baueKalender();
    initMapHover(); 
    updateDashboard();

    document.getElementById('state-select').addEventListener('change', (e) => {
        ausgewaehltesBundesland = e.target.value;
        updateDashboard();
    });

    document.getElementById('week-check').addEventListener('change', (e) => {
        ganzeWochePruefen = e.target.checked;
        updateDashboard();
    });
});

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
    const tooltip = document.getElementById('map-tooltip');

    document.querySelectorAll('.ferien-pin').forEach(pin => {
        const blName = pin.getAttribute('data-land');
        
        pin.addEventListener('mouseenter', (e) => {
            const feiertagName = holeFeiertagsNameFuerLand(aktuellesDatum, blName);
            const zeitraum = holeAktuellenFerienZeitraum(blName, aktuellesDatum);
            let text = "";
            
            if (feiertagName) {
                text = `${blName}: 🗓️ Feiertag (${feiertagName})`;
            } else if (zeitraum) {
                let name = zeitraum.name || "Schulferien";
                const vonStr = formatiereDatumKurz(zeitraum.start);
                const bisStr = formatiereDatumKurz(zeitraum.ende);
                text = `${blName}: ☀️ ${name} (${vonStr} – ${bisStr})`;
            } else {
                text = `${blName}: Reguläre Schulzeit`;
            }

            tooltip.textContent = text;
            tooltip.style.display = 'block';
        });

        pin.addEventListener('mousemove', (e) => {
            tooltip.style.top = (e.clientY + 15) + 'px';
            tooltip.style.left = (e.clientX + 15) + 'px';
        });
        
        pin.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });

    document.querySelectorAll('.country-box').forEach(box => {
        const landName = box.getAttribute('data-euro-land');
        
        box.addEventListener('mouseenter', () => {
            const zeitraum = holeEuroFerienZeitraum(landName, aktuellesDatum);
            if (zeitraum) {
                const vonStr = formatiereDatumKurz(zeitraum.start);
                const bisStr = formatiereDatumKurz(zeitraum.ende);
                tooltip.textContent = `${landName}: ☀️ ${zeitraum.name} (${vonStr} – ${bisStr})`;
            } else {
                tooltip.textContent = `${landName}: Reguläre Schulzeit`;
            }
            tooltip.style.display = 'block';
        });

        box.addEventListener('mousemove', (e) => {
            tooltip.style.top = (e.clientY + 15) + 'px';
            tooltip.style.left = (e.clientX + 15) + 'px';
        });
        
        box.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });

    document.querySelectorAll('.park-pin').forEach(pin => {
        const parkName = pin.getAttribute('data-park');
        
        pin.addEventListener('mouseenter', (e) => {
            const parkGefunden = TOP_PARKS.find(p => p.name === parkName);
            if (parkGefunden) {
                const status = berechneParkAuslastung(parkGefunden, [aktuellesDatum]);
                let statusText = "";
                
                if (status === "voll") statusText = `🔴 Trubel`;
                if (status === "maessig") statusText = `🟡 Belebt`;
                if (status === "leer") statusText = `🟢 Ruhig`;
                
                tooltip.textContent = `${parkGefunden.name}: ${statusText}`;
                tooltip.style.display = 'block';
            }
        });

        pin.addEventListener('mousemove', (e) => {
            tooltip.style.top = (e.clientY + 15) + 'px';
            tooltip.style.left = (e.clientX + 15) + 'px';
        });
        
        pin.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });

        pin.addEventListener('click', () => {
            const parkGefunden = TOP_PARKS.find(p => p.name === parkName);
            if (parkGefunden && parkGefunden.url) {
                window.open(parkGefunden.url, '_blank');
            }
        });
    });
}

function pruefeInfoboxText() {
    let testTage = [aktuellesDatum];
    if (ganzeWochePruefen) {
        testTage = [];
        for (let i = 0; i < 7; i++) {
            let d = new Date(aktuellesDatum);
            d.setDate(d.getDate() + i);
            testTage.push(d);
        }
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

    let ferienZaehler = 0;
    Object.keys(FERIEN_DATEN).forEach(bl => {
        if (testTage.some(tt => istInFerien(bl, tt))) ferienZaehler++;
    });

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
            let d = new Date(aktuellesDatum);
            d.setDate(d.getDate() + i);
            testTage.push(d);
        }
    }

    const heuteStr = formatiereDatumKurz(new Date());
    const aktStr = zuLokalemIsoString(aktuellesDatum);

    document.querySelectorAll('.day-cell:not(.empty)').forEach(zelle => {
        const parts = zelle.dataset.dateString.split('-');
        const d = new Date(parts[0], parts[1] - 1, parts[2]);
        const zelleStr = zelle.dataset.dateString;
        
        zelle.className = 'day-cell'; 

        if (formatiereDatumKurz(d) === heuteStr) zelle.classList.add('today-highlight');
        if (zelleStr === aktStr) zelle.classList.add('active');
        
        if (istInFerien(ausgewaehltesBundesland, d)) {
            zelle.classList.add('ferien-highlight');
        }
        if (holeFeiertagsNameFuerLand(d, ausgewaehltesBundesland) !== null) {
            zelle.classList.add('feiertag-highlight');
        }
    });

    document.querySelectorAll('.country-box').forEach(box => {
        box.classList.remove('aktiviert');
        box.style.display = 'block';
        box.style.position = 'absolute';

        const istGedreht = box.classList.contains('cbox-west-1') || box.classList.contains('cbox-west-2') || 
                           box.classList.contains('cbox-west-3') || box.classList.contains('cbox-west-4') ||
                           box.classList.contains('cbox-east-1') || box.classList.contains('cbox-east-2');

        if (istGedreht) {
            box.style.padding = '22px 5px 8px 5px'; 
        } else {
            box.style.padding = '5px 8px 5px 20px'; 
        }

        const dot = box.querySelector('.indicator-dot');
        if (dot) {
            dot.style.display = 'block';
            dot.style.position = 'absolute';
            dot.style.width = '7px';
            dot.style.height = '7px';
            dot.style.borderRadius = '50%';
            dot.style.backgroundColor = '#34c759'; 
            dot.style.boxShadow = '0 1px 4px rgba(52, 199, 89, 0.3)';
            
            if (istGedreht) {
                dot.style.top = '7px';
                dot.style.left = '50%';
                dot.style.transform = 'translateX(-50%)';
                dot.style.marginLeft = '0px';
                dot.style.marginTop = '0px';
            } else {
                dot.style.top = '50%';
                dot.style.left = '7px';
                dot.style.transform = 'translateY(-50%)';
                dot.style.marginLeft = '0px';
                dot.style.marginTop = '0px';
            }
        }
    });

    Object.keys(NACHBARLAND_FERIEN).forEach(land => {
        const hatFerien = testTage.some(tt => istNachbarlandInFerien(land, tt));
        const boxElement = document.getElementById(`cbox-${land}`);
        if (hatFerien && boxElement) {
            boxElement.classList.add('aktiviert');
            const dot = boxElement.querySelector('.indicator-dot');
            if (dot) {
                dot.style.backgroundColor = '#ff3b30'; 
                dot.style.boxShadow = '0 1px 4px rgba(255, 59, 48, 0.3)';
            }
        }
    });

    const laenderListe = document.getElementById('laender-liste');
    laenderListe.innerHTML = '';

    Object.keys(FERIEN_DATEN).sort().forEach(bl => {
        const hatFerienInSpanne = testTage.some(tt => istInFerien(bl, tt));
        
        let gefundenerFeiertagsName = null;
        for (let tt of testTage) {
            const name = holeFeiertagsNameFuerLand(tt, bl);
            if (name) {
                gefundenerFeiertagsName = name;
                break;
            }
        }

        const zeitraum = holeAktuellenFerienZeitraum(bl, aktuellesDatum);
        let datumsText = "";
        let nameZusatz = "";

        if (gefundenerFeiertagsName) {
            nameZusatz = ` (${gefundenerFeiertagsName})`;
        } else if (zeitraum) {
            let name = zeitraum.name || "Ferien";
            datumsText = `<span class="park-ort" style="display:block; margin-top:2px;">${formatiereSpanne(zeitraum.start)} – ${formatiereSpanne(zeitraum.ende)}</span>`;
            nameZusatz = ` (${name})`;
        }

        const item = document.createElement('div');
        item.className = `land-item ${hatFerienInSpanne || gefundenerFeiertagsName !== null ? 'ferien' : ''}`;

        item.innerHTML = `
            <div class="park-info">
                <span class="park-name">${bl}${nameZusatz}</span>
                ${datumsText}
            </div>
            <span class="status-badge">${gefundenerFeiertagsName !== null ? 'Feiertag' : (hatFerienInSpanne ? 'Ferien' : 'Schule')}</span>
        `;
        laenderListe.appendChild(item);

        document.querySelectorAll('.ferien-pin').forEach(pin => {
            if (pin.getAttribute('data-land') === bl) {
                pin.className = "ferien-pin";
                if (!hatFerienInSpanne && gefundenerFeiertagsName === null) pin.classList.add('leuchtet-gruen');    
            }
        });
    });

    const euroLaenderListe = document.getElementById('euro-laender-liste');
    if (euroLaenderListe) {
        euroLaenderListe.innerHTML = '';
        Object.keys(NACHBARLAND_FERIEN).sort().forEach(land => {
            const hatFerienInSpanne = testTage.some(tt => istNachbarlandInFerien(land, tt));
            const zeitraum = holeEuroFerienZeitraum(land, aktuellesDatum);
            let datumsText = "";
            let ferienNameZusatz = "";

            if (zeitraum) {
                datumsText = `<span class="park-ort" style="display:block; margin-top:2px;">${formatiereSpanne(zeitraum.start)} – ${formatiereSpanne(zeitraum.ende)}</span>`;
                ferienNameZusatz = ` (${zeitraum.name})`;
            }

            const item = document.createElement('div');
            item.className = `land-item ${hatFerienInSpanne ? 'ferien' : ''}`;
            item.innerHTML = `
                <div class="park-info">
                    <span class="park-name">${land}${ferienNameZusatz}</span>
                    ${datumsText}
                </div>
                <span class="status-badge">${hatFerienInSpanne ? 'Ferien' : 'Schule'}</span>
            `;
            euroLaenderListe.appendChild(item);
        });
    }

    pruefeInfoboxText();

    const parksListe = document.getElementById('parks-liste');
    parksListe.innerHTML = '';

    TOP_PARKS.forEach(park => {
        const auslastung = berechneParkAuslastung(park, testTage);
        
        const parkItem = document.createElement('div');
        parkItem.className = `park-item ${auslastung === 'voll' ? 'ferien' : (auslastung === 'maessig' ? 'maessig' : '')}`;
        
        let badgeText = "Ruhig";
        if (auslastung === "voll") badgeText = "Trubel";
        if (auslastung === "maessig") badgeText = "Belebt";

        parkItem.innerHTML = `
            <div class="park-info">
                <span class="park-name">${park.name}</span>
                <span class="park-ort">${park.ort} (${park.bundesland})</span>
            </div>
            <span class="park-status-badge state-${auslastung}">${badgeText}</span>
        `;
        
        parksListe.appendChild(parkItem);

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