// import functions and grab DOM elements
import { pokemonData } from './data.js';
import { getRandomPokemon } from './pokeUtils.js';

const nextButton = document.querySelector('button');


// initialize state
const pokemon = pokemonData.slice();
let tries = 0;
let totalTries = tries >= 10;

// set event listeners to update state and DOM
function setPage() {
    if (totalTries <= 10) {
        alert('show results');
    }

    const randomPokemon1 = getRandomPokemon(pokemon);
    let randomPokemon2 = getRandomPokemon(pokemon);
    let randomPokemon3 = getRandomPokemon(pokemon);

    while (randomPokemon1 === randomPokemon2 || randomPokemon2 === randomPokemon3 || randomPokemon3 === randomPokemon1) {
        randomPokemon2 = getRandomPokemon(pokemon);
        randomPokemon3 = getRandomPokemon(pokemon);
    }
    console.log(randomPokemon3);
    console.log(randomPokemon2);
    console.log(randomPokemon1);


    const labels = document.querySelectorAll('label');

    const pokemonLabel1 = labels[0];
    const pokemonInput1 = pokemonLabel1.children[1];
    const pokemonImg1 = pokemonLabel1.children[2];
    const pokemonName1 = pokemonLabel1.children[0];

    pokemonInput1.value = randomPokemon1.id;
    pokemonImg1.src = randomPokemon1.url_image;
    pokemonName1.textContent = randomPokemon1.pokemon;

    const pokemonLabel2 = labels[0];
    const pokemonInput2 = pokemonLabel2.children[1];
    const pokemonImg2 = pokemonLabel2.children[2];
    const pokemonName2 = pokemonLabel2.children[0];

    pokemonInput2.value = randomPokemon2.id;
    pokemonImg2.src = randomPokemon2.url_image;
    pokemonName2.textContent = randomPokemon2.pokemon;

    const pokemonLabel3 = labels[0];
    const pokemonInput3 = pokemonLabel3.children[1];
    const pokemonImg3 = pokemonLabel3.children[2];
    const pokemonName3 = pokemonLabel3.children[0];

    pokemonInput3.value = randomPokemon3.id;
    pokemonImg3.src = randomPokemon3.url_image;
    pokemonName3.textContent = randomPokemon3.pokemon;

}

setPage();