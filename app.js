// import functions and grab DOM elements
import { pokemonData } from './data.js';
import { getRandomPokemon, findById, encounteredPokemon } from './pokeUtils.js';

const nextButton = document.querySelector('#next-container');
const triesTally = document.getElementById('tries');

// initialize state
const pokemon = pokemonData.slice();
let tries = 0;



const labels = document.querySelectorAll('label');
/*let totalTries = tries >= 10;*/
// let pokemonType = pokemon;

// set event listeners to update state and DOM
function setPage() {
    if (tries <= 10) {
        triesTally.textContent = tries++;
    } else if (tries >= 10) {
        /*const localStorageData = {
            tries: triesTally,
            pokemonType: pokemonType
        };
        const stringyData = JSON.stringify(localStorageData);

        localStorage.setItem('DATA', stringyData);*/
        window.location = '../results-page/index.html';
    }

    const randomPokemon1 = getRandomPokemon(pokemon);
    let randomPokemon2 = getRandomPokemon(pokemon);
    let randomPokemon3 = getRandomPokemon(pokemon);

    while (randomPokemon1 === randomPokemon2 || randomPokemon2 === randomPokemon3 || randomPokemon3 === randomPokemon1) {
        randomPokemon2 = getRandomPokemon(pokemon);
        randomPokemon3 = getRandomPokemon(pokemon);
    }


    const pokemonLabel1 = labels[0];
    const pokemonInput1 = pokemonLabel1.children[0];
    const pokemonImg1 = pokemonLabel1.children[1];
    const pokemonName1 = pokemonLabel1.children[2];

    pokemonInput1.value = randomPokemon1.id;
    pokemonImg1.src = randomPokemon1.url_image;
    pokemonName1.textContent = randomPokemon1.pokemon;

    const pokemonLabel2 = labels[1];
    const pokemonInput2 = pokemonLabel2.children[0];
    const pokemonImg2 = pokemonLabel2.children[1];
    const pokemonName2 = pokemonLabel2.children[2];

    pokemonInput2.value = randomPokemon2.id;
    pokemonImg2.src = randomPokemon2.url_image;
    pokemonName2.textContent = randomPokemon2.pokemon;

    const pokemonLabel3 = labels[2];
    const pokemonInput3 = pokemonLabel3.children[0];
    const pokemonImg3 = pokemonLabel3.children[1];
    const pokemonName3 = pokemonLabel3.children[2];

    pokemonInput3.value = randomPokemon3.id;
    pokemonImg3.src = randomPokemon3.url_image;
    pokemonName3.textContent = randomPokemon3.pokemon;
    
    let pokemonEncountered = 

    pokemonInput1.addEventListener('click', eventHandler);
    pokemonInput2.addEventListener('click', eventHandler);
    pokemonInput3.addEventListener('click', eventHandler);


    encounteredPokemon(pokemonEncountered, randomPokemon1.id);
    encounteredPokemon(pokemonEncountered, randomPokemon2.id);
    encounteredPokemon(pokemonEncountered, randomPokemon3.id);
    nextButton.classList.add('hidden');
    
}


function eventHandler() {
    nextButton.classList.remove('hidden');
    const localStorageJournal = localStorage.getItem('JOURNAL') || '[]';
    
    const stringyJournal = JSON.stringify(localStorageJournal);
    localStorage.setItem('JOURNAL', stringyJournal);
    const journal = JSON.parse(localStorageJournal);

    let itemInJournal = findById(journal, pokemonData.pokemon);

    if (!itemInJournal) {
        const initializedJournalItem = {
            id: pokemonData.pokemon,
            captured: 1,
            encountered: 1
        };
        journal.push(initializedJournalItem);
    } else {
        itemInJournal.captured++;
        itemInJournal.encountered++;
    }


}

nextButton.addEventListener('click', setPage);

setPage();