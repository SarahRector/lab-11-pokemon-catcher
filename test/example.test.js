// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById } from '../pokeUtils.js';

const test = QUnit.test;

let pokemonStats = [
    {
        pokemon: 'bulbasaur',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'venusaur-mega',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'ivysaur',
        encountered: 0,
        captured: 0,
    },
];

test('find pokemon by id', (assert) => {
    //Arrange
    // Set up your arguments and expectations
    const itemId1 = 'ivysaur';
    const itemId2 = 'charmander';
    const expectedId1 = pokemonStats[2];
    const expectedId2 = pokemonStats[3];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = findById(pokemonStats, itemId1);
    const actual2 = findById(pokemonStats, itemId2);

    //Expect
    // Make assertions about what is expected versus the actual result
    assert.equal(actual1, expectedId1);
    assert.equal(actual2, expectedId2);

});
