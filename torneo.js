function addOutput(message) {
    console.log(message);
    const outputDiv = document.getElementById('output');
    outputDiv.textContent += message + '\n';
}
function startTournament() {
    document.getElementById('output').textContent = '';

    const fighters = [
        { name: 'Goku', power: 9001 },
        { name: '', power: '' },
        { name: '', power: '' },
        { name: '', power: '' },
        { name: '', power: '' },
        { name: '', power: '' },
        { name: '', power: '' },
        { name: '', power: '' },
        { name: '', power: '' },
        { name: '', power: '' }
    ]

}