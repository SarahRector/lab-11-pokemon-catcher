/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const pokemonCount = document.getElementById('pokemon-count');

const journal = JSON.parse(localStorage.getItem('JOURNAL'));
pokemonCount.innerText = journal.captured;

/*const journal2 = JSON.parse(localStorage.getItem('POKEMONENCOUNTERED'));
pokemonCount.innerText = journal2.encountered;*/

function mungeNames(journalArray) {
    let names = [];
    for (let i = 0; i < journalArray.length; i++) {
        const pokemon = journalArray[i];
        names.push(pokemon.pokemon);
    }
    return names;
}

function mungeCaught(journalArray) {
    let caught = [];
    for (let i = 0; i < journalArray.length; i++) {
        const pokemonCaught = journalArray[i];
        caught.push(pokemonCaught.caught);
    }
    return caught;
}

function mungeEncountered(journalArray) {
    let encountered = [];
    for (let i = 0; i < journalArray.length; i++) {
        const pokemonEncountered = journalArray[i];
        encountered.push(pokemonEncountered.encounters);
    }
    return encountered;
}


var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, { 
    type: 'bar',
    data: {
        labels: mungeNames(journal),
        datasets: [{
            label: 'Pokemon Caught',
            data: mungeCaught(journal),
            backgroundColor: 
                'green'
            ,
            borderColor: [
                'black'
            ],
            borderWidth: 1
        },
        {
            label: 'Pokemon Encountered',
            data: mungeEncountered(journal),
            backgroundColor: 
                'purple',
            borderColor: [
                'black'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
