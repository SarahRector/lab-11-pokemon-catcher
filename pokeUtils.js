
export function getRandomPokemon(pokemonArray) {
    const randomIndex = Math.floor(Math.random() * pokemonArray.length);

    return pokemonArray[randomIndex];
}

export function findById(pokemonData, id) {
    for (let i = 0; i < pokemonData.length; i++) {
        const pokeData = pokemonData[i];

        if (pokeData.id === id) {
            return pokeData;
        }
    }
    return null;
}

export function getJournal() {
    const rawJournal = localStorage.getItem('JOURNAL');
    const journal = JSON.parse(rawJournal) || [];
    return journal;
}