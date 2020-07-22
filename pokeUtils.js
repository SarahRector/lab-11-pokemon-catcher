
export function getRandomPokemon(pokemonArray) {
    const randomIndex = Math.floor(Math.random() * pokemonArray.length);

    return pokemonArray[randomIndex];
}

export function findById(pokemonData, id) {
    console.log(pokemonData, id);
    for (let i = 0; i < pokemonData.length; i++) {
        const pokeData = pokemonData[i];

        if (pokeData.pokemon === id) {
            return pokeData;
        /*} else {
            return null;*/
        }
    }
}

export function getJournal() {
    const rawJournal = localStorage.getItem('JOURNAL');
    const journal = JSON.parse(rawJournal) || [];
    return journal;
}

export function encounteredPokemon(pokemonEncountered, id) {
    let encountered = findById(pokemonEncountered, id);

    if (encountered) {
        encountered.encounters++;

    } else {
        const newEncounter = {
            pokemon: id,
            encounters: 1,
            caught: 0
        };
        pokemonEncountered.push(newEncounter);
    }
}

export function chosenPokemon(pokemonEncountered, id) {
    let caught = findById(pokemonEncountered, id);

    if (caught) {
        caught.caught++;

    } else {
        const newCaught = {
            id: id,
            encounters: 1,
            caught: 1
        };
        pokemonEncountered.push(newCaught);
    }
}