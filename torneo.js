function addOutput(message) {
    console.log(message);
    const outputDiv = document.getElementById('output');
    outputDiv.textContent += message + '\n';
}
function startTournament() {
    document.getElementById('output').textContent = '';

    const fighters = [
        { name: 'Goku', power: 15000 },
        { name: 'Ghoan', power: 12000 },
        { name: 'Vegeta', power: 13500 },
        { name: 'Piccolo', power: 8000 },
        { name: 'Krillin', power: 4000 },
        { name: 'MajinBu', power: 9500 },
        { name: 'MrSatan', power: 500 },
        { name: 'Ghoten', power: 6500 },
        { name: 'Trunks', power: 6500 },
        { name: 'GoldFrezeer', power: 11500 }
    ]
    const weapons = ["Sword", "Axe", "Bow", "Staff", "Spear", "Dagger", "Sword Z", "Power Pole", "Dimension Sword", "Demon Fork"]


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
        addOutput(`${fighter.name}ha scelto ${weapon}.`)
        return { ...fighter, weapon };

    });
    addOutput("Risultato Fase 1:" + JSON.stringify(fightersWithWeapons, null, 2));


    // Fase 2 - Allenamento

    addOutput("\nInizio Fase 2: Allenamento. Ogni combattente moltiplica la potenza per un fattore casuale tra 1 e 100.")
    let trainedFighters = fightersWithWeapons.map(fighter => {
        const multiplier = Math.floor(Math.random() * 100) + 1;
        const newPower = fighter.power * multiplier;
        addOutput(`${fighter.name} si allena: potenza originale ${fighter.power}, fattore ${multiplier}, nuova potenza ${newPower}.`)
        return { ...fighter, power: newPower };

    })
    addOutput("Risultato Fase 2: " + JSON.stringify(trainedFighters, null, 2));

}