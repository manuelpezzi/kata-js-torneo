// Funzione per aggiungere output alla console
function log(message) {
    console.log(message);
}

// Funzione per creare una card per un combattente
function createFighterCard(fighter, qualified) {
    const card = document.createElement('div');
    card.classList.add('fighter-card');
    card.innerHTML = `
    <img src="${fighter.image}" alt="${fighter.name}">
    <h3>${fighter.name}</h3>
    <p>Potenza Base: ${fighter.power}</p>
    <p>Arma: ${fighter.weapon || 'Nessuna'}</p>
    <p>Potenza Arma: ${fighter.weaponPower || 0}</p>
    <p>Potenza Allenata: ${fighter.trainedPower || fighter.power}</p>
    <p>Stato: ${qualified ? 'Qualificato' : 'Escluso'}</p>
  `;
    return card;
}

// Funzione principale del torneo
function startTournament() {
    // Cambia lo sfondo
    document.body.classList.add('active');

    // Nascondi il pulsante Start e mostra il pulsante Reset e i contenitori
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('resetButton').style.display = 'inline-block';
    const fightersContainer = document.getElementById('fightersContainer');
    const podiumContainer = document.getElementById('podiumContainer');
    fightersContainer.style.display = 'grid';
    podiumContainer.style.display = 'block';
    fightersContainer.innerHTML = ''; // Pulisci il contenitore

    // Definizione degli array fighters e weapons
    const fighters = [
        { name: 'Freezer', power: 8000, image: 'https://images.everyeye.it/img-notizie/black-freezer-quando-rivedremo-villain-dragon-ball-super-v3-664179-1200x1200.webp' },
        { name: 'Vegeta', power: 8500, image: 'https://upload.wikimedia.org/wikipedia/it/f/ff/Vegeta_-_Dragon_Ball_Kai.png' },
        { name: 'Crilin', power: 500, image: 'https://www.animeclick.it/immagini/personaggio/Crilin/cover/44834-Crilin-foto.jpg' },
        { name: 'Mr Satan', power: 50, image: 'https://images.everyeye.it/img-notizie/dragon-ball-origini-mr-satan-toriyama-svela-segreto-v3-498265.jpg2' },
        { name: 'Junior', power: 6000, image: 'https://i.pinimg.com/736x/aa/de/fa/aadefab75a59bb35aa75c8ff10ebcbf2.jpg' },
        { name: 'Goku', power: 9001, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBL-0DTkUVqeycTd1bCjyzL1i99bxB8MhRDg&s' },
        { name: 'Tensing', power: 450, image: 'https://i.ytimg.com/vi/Cac8a9ea17M/maxresdefault.jpg' },
        { name: 'Videl', power: 300, image: 'https://multiplayer.net-cdn.it/thumbs/images/2023/05/08/dragon-ball-z-videl-1_jpg_1400x0_q85_jpg_1600x900_crop_q85.jpg' },
        { name: 'Bulma', power: 20, image: 'https://multiplayer.net-cdn.it/thumbs/images/2023/10/11/bulma_cosplay_dragon_ball_jpg_1600x900_crop_q85.jpg' },
        { name: 'C-18', power: 7800, image: 'https://multiplayer.net-cdn.it/thumbs/images/2023/08/05/c18_jpg_1376x774_crop_q85.jpg' },
        { name: 'Gohan', power: 8900, image: 'https://images.everyeye.it/img-notizie/dragon-ball-z-30-anni-gohan-diventava-super-saiyan-2-v3-648277-1280x960.webp' },
        { name: 'Trunks', power: 1250, image: 'https://images.everyeye.it/img-notizie/dragon-ball-cosplay-italiano-trunks-futuro-agile-potente-v3-707372-1200x1200.webp' }
    ];

    const weapons = [
        { name: "Ventaglio della Musa", power: 15 },
        { name: "Scouter", power: 30 },
        { name: "Bastone Roshi", power: 60 },
        { name: "Fagioli Magici", power: 70 },
        { name: "Katana di Yajirobei", power: 85 },
        { name: "Spada del Dragone Azzurro", power: 115 },
        { name: "Armatura Saiyan", power: 145 },
        { name: "Cannone da braccio", power: 170 },
        { name: "Nuvola d'oro", power: 200 },
        { name: "Bastone Nyoi", power: 220 },
        { name: "Spada Z", power: 235 },
        { name: "Orecchini Potara", power: 250 }
    ];

    // Fase 1 - Scelta dell'Arma
    log("Inizio Fase 1: Scelta dell'Arma. Ogni combattente sceglie un'arma casualmente, rimuovendola dalla lista disponibile.");
    let availableWeapons = [...weapons];
    let fightersWithWeapons = fighters.map(fighter => {
        log(`Combattente ${fighter.name} sta scegliendo un'arma...`);
        if (availableWeapons.length === 0) {
            log(`Nessuna arma disponibile per ${fighter.name}. Assegna null.`);
            return { ...fighter, weapon: null, weaponPower: 0 };
        }
        const index = Math.floor(Math.random() * availableWeapons.length);
        const weapon = availableWeapons[index];
        availableWeapons.splice(index, 1);
        log(`${fighter.name} ha scelto ${weapon.name} (potenza arma: ${weapon.power}).`);
        return { ...fighter, weapon: weapon.name, weaponPower: weapon.power };
    });
    log("Risultato Fase 1: " + JSON.stringify(fightersWithWeapons, null, 2));

    // Fase 2 - Allenamento
    log("\nInizio Fase 2: Allenamento. Ogni combattente moltiplica la potenza totale (base + arma) per un fattore casuale tra 1 e 100.");
    let trainedFighters = fightersWithWeapons.map(fighter => {
        const totalPower = fighter.power + (fighter.weaponPower || 0);
        const multiplier = Math.floor(Math.random() * 100) + 1;
        const newPower = totalPower * multiplier;
        log(`${fighter.name} si allena: potenza totale originale ${totalPower} (base ${fighter.power} + arma ${fighter.weaponPower || 0}), fattore ${multiplier}, nuova potenza ${newPower}.`);
        return { ...fighter, trainedPower: newPower };
    });
    log("Risultato Fase 2: " + JSON.stringify(trainedFighters, null, 2));

    // Fase 3 - Qualificazione
    log("\nInizio Fase 3: Qualificazione. Escludi chi ha potenza < 5000.");
    let qualified = trainedFighters.filter(fighter => {
        const qualifies = fighter.trainedPower >= 5000;
        log(`${fighter.name} ha potenza ${fighter.trainedPower}: ${qualifies ? 'qualificato' : 'escluso'}.`);
        return qualifies;
    });
    log("Risultato Fase 3: " + JSON.stringify(qualified, null, 2));

    // Popola le card dei combattenti
    let qualifiedNames = new Set(qualified.map(f => f.name));
    trainedFighters.forEach(fighter => {
        const isQualified = qualifiedNames.has(fighter.name);
        const card = createFighterCard(fighter, isQualified);
        fightersContainer.appendChild(card);
    });

    // Fase 4 - Combattimento
    log("\nInizio Fase 4: Combattimento. Abbina combattenti consecutivi.");
    let combatants = [...qualified];
    if (combatants.length % 2 !== 0) {
        log(`Numero dispari di qualificati (${combatants.length}). Aggiungo Robot con potenza 5000.`);
        combatants.push({ name: "Robot", power: 5000, weapon: null, weaponPower: 0, trainedPower: 5000, image: 'https://placehold.co/200x150?text=Robot' });
    }
    let pairs = [];
    while (combatants.length > 0) {
        const pair = combatants.splice(0, 2);
        log(`Coppia creata: ${pair.map(f => f.name).join(' vs ')}`);
        pairs.push(pair);
    }
    let winners = pairs.map(pair => {
        const [a, b] = pair;
        log(`Scontro: ${a.name} (${a.trainedPower}) vs ${b.name} (${b.trainedPower})`);
        const winner = b.trainedPower > a.trainedPower ? b : a;
        log(`Vincitore: ${winner.name}`);
        return winner;
    });
    log("Risultato Fase 4: " + JSON.stringify(winners, null, 2));

    // Fase 5 - Premiazione
    log("\nInizio Fase 5: Premiazione. Seleziona top 3 vincitori per potenza decrescente.");
    let sortedWinners = [...winners].sort((a, b) => b.trainedPower - a.trainedPower);
    let podium = sortedWinners.slice(0, 3);
    log("Risultato Fase 5: " + JSON.stringify(podium, null, 2));

    // Popola il podio
    document.querySelector('#first p').textContent = podium[0] ? `${podium[0].name} (${podium[0].trainedPower})` : 'N/A';
    document.querySelector('#second p').textContent = podium[1] ? `${podium[1].name} (${podium[1].trainedPower})` : 'N/A';
    document.querySelector('#third p').textContent = podium[2] ? `${podium[2].name} (${podium[2].trainedPower})` : 'N/A';
}

// Funzione per resettare il torneo
function resetTournament() {
    // Ripristina lo sfondo iniziale
    document.body.classList.remove('active');

    // Pulisci i contenitori e mostra il pulsante Start
    document.getElementById('startButton').style.display = 'inline-block';
    document.getElementById('resetButton').style.display = 'none';
    document.getElementById('fightersContainer').style.display = 'none';
    document.getElementById('fightersContainer').innerHTML = '';
    document.getElementById('podiumContainer').style.display = 'none';
    document.querySelector('#first p').textContent = '';
    document.querySelector('#second p').textContent = '';
    document.querySelector('#third p').textContent = '';
}