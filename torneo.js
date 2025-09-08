function addOutput(message) {
    console.log(message);
    const outputDiv = document.getElementById('output');
    outputDiv.textContent += message + '\n';
}
function startTournament() {
    document.getElementById('output').textContent = '';

    const fighters = [
        { name: 'Freezer', power: 8000 },
        { name: 'Vegeta', power: 8500 },
        { name: 'Crilin', power: 500 },
        { name: 'Mr Satan', power: 50 },
        { name: 'Junior', power: 6000 },
        { name: 'Goku', power: 9001 },
        { name: 'Tensing', power: 450 },
        { name: 'Videl', power: 300 },
        { name: 'Bulma', power: 20 },
        { name: 'C-18', power: 7800 },
        { name: 'Gohan', power: 8900 },
        { name: 'Trunks', power: 1250 }
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


    //Fase 1 - scelta dell'arma

    addOutput("Inizio Fase 1: Scelta dell'Arma. ogni combattente sceglie un'arma casualmente, rimuovendola dalla lista disponibile ");
    let availabeWeapons = [...weapons];
    let fightersWithWeapons = fighters.map(fighter => {
        addOutput(`Combattente ${fighter.name}sta sciegliendo un arma...`);
        if (availabeWeapons.length === 0) {
            addOutput(`Nessuna arma disponibile per ${fighter.name}.Assegna null.`);
            return { ...fighter, weapons: null };

        }
        const index = Math.floor(Math.random() * availabeWeapons.length);
        const weapon = availabeWeapons[index];
        addOutput(`${fighter.name}ha scelto ${weapon.name}(potenza arma : ${weapon.power}).`)
        return { ...fighter, weapon: weapon.name, weaponPower: weapon.power };

    });
    addOutput("Risultato Fase 1:" + JSON.stringify(fightersWithWeapons, null, 2));


    // Fase 2 - Allenamento

    addOutput("\nInizio Fase 2: Allenamento. Ogni combattente moltiplica la potenza per un fattore casuale tra 1 e 100.")
    let trainedFighters = fightersWithWeapons.map(fighter => {
        const totalPower = fighter.power + (fighter.weaponPower || 0);
        const multiplier = Math.floor(Math.random() * 100) + 1;
        const newPower = totalPower * multiplier;
        addOutput(`${fighter.name} si allena: potenza totale originale ${totalPower} (base ${fighter.power} + arma ${fighter.weaponPower || 0}), fattore ${multiplier}, nuova potenza ${newPower}.`);
        return { ...fighter, power: newPower };

    })
    addOutput("Risultato Fase 2: " + JSON.stringify(trainedFighters, null, 2));

}