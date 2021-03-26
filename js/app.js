// console.log('Freddy, everything is working allrighty!');

const candidates = [{
        name: 'Annelotte',
        correct: 17,
        speed: 104,
        mole: false
    },
    {
        name: 'Dami',
        correct: 20,
        speed: 204,
        mole: false
    },
    {
        name: 'Jasmien',
        correct: 7,
        speed: 60,
        mole: false
    },
    {
        name: 'Jens',
        correct: 7,
        speed: 50,
        mole: false
    },
    {
        name: 'Katrien',
        correct: 10,
        speed: 104,
        mole: false
    },
    {
        name: 'Kevin',
        correct: 14,
        speed: 104,
        mole: false
    },
    {
        name: 'Lennart',
        correct: 12,
        speed: 104,
        mole: false
    },
    {
        name: 'Noah',
        correct: 12,
        speed: 104,
        mole: false
    },
    {
        name: 'Philip',
        correct: 13,
        speed: 104,
        mole: false
    },
    {
        name: 'Samina',
        correct: 0,
        speed: 200,
        mole: true
    },
    {
        name: 'Sven',
        correct: 15,
        speed: 120,
        mole: false
    },
];

// lijst van kandidaten
const candidateNames = candidates.map((candidate) => { return candidate.name.toLowerCase(); });

// initieel is de eerste kandidaat de verliezer
let loser = candidates[0];

// itereren over elke kandidaat
for(const candidate of candidates) {
    // indien kandidaat de mol is, deze iteratie beëindigen
    if(candidate.mole) continue;
    
    // indien de huidige kandidaat 
    // -- minder vragen correct dan de voorlopige verliezer
    // DAN --> is de nieuwe verliezer
    if(candidate.correct < loser.correct) { loser = candidate;} 
    else if(
        candidate.correct === loser.correct && 
        candidate.speed > loser.speed    
    ) { loser = candidate }
}

// selecteren van dom elementen
const candidateField = document.querySelector('#kandidaat');
const overlayRed = document.querySelector('#red');
const overlayGreen = document.querySelector('#green');

// luisteren naar een enter event
candidateField.addEventListener('keypress', (event) => {
    console.log('Key was pressed');
    if(event.key == 'Enter') {
        // naam ophalen en controleren als verloren :o
        const name = candidateField.value.toLowerCase();
        candidateField.value = "";
        if( !candidateNames.includes(name) ) {
            alert('Beste Gilles, je hebt je mistypt');
        } else {
            const lost = checkIfLost(name);
            showOverlay(lost);
            setTimeout(hideOverlay, 5000); // na 5s hideOverlay aanroepen
        }
    }
});

const checkIfLost = (givenName) => {
    // als gegeven naam gelijk is aan de verliezer haar/zijn naam, 
    // dan true retourneren; want verloren
    if(givenName == loser.name.toLowerCase()) {
        return true;
    } else {
        return false;
    }
} 

const showOverlay = (lost) => {
    if(lost) {
        overlayRed.classList.remove('hide');
    } else {
        overlayGreen.classList.remove('hide');
    }
}

const hideOverlay = (lost) => {
    overlayRed.classList.add('hide');
    overlayGreen.classList.add('hide');
}