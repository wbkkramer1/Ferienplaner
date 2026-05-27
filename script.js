// ==========================================================================
    // PARKS LISTE RENDERN (KORRIGIERTE VERSION FÜR PROZENT-ANZEIGE)
    // ==========================================================================
    const parksListe = document.getElementById('parks-liste');
    parksListe.innerHTML = '';
    
    TOP_PARKS.forEach(park => {
        const auslastung = berechneParkAuslastung(park, testTage);
        
        // HIER WAR DER FEHLER: Wir rufen die korrekte Funktion auf!
        const liveProzent = holeLiveProzentwert(park.apiId); 
        
        const parkItem = document.createElement('div');
        parkItem.className = `park-item ${auslastung === 'voll' ? 'ferien' : (auslastung === 'maessig' ? 'maessig' : '')}`;
        
        let badgeText = "Leer";
        if (auslastung === "voll") badgeText = "Voll";
        if (auslastung === "maessig") badgeText = "Mäßig";
        
        // Wenn ein Prozentwert da ist, überschreiben wir das Text-Badge
        if (liveProzent !== null) {
            badgeText = `${liveProzent}%`;
        }

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
