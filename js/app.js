const candidates = [
    {
        name: 'Annelotte',
        amountQuestionsCorrect: 8,
        speedAnswers: 60,
        mole: false
    },
    {
        name: 'Dami',
        amountQuestionsCorrect: 5,
        speedAnswers: 78,
        mole: false
    },
    {
        name: 'Jasmien',
        amountQuestionsCorrect: 4,
        speedAnswers: 60,
        mole: false
    },
    {
        name: 'Jens',
        amountQuestionsCorrect: 4,
        speedAnswers: 120,
        mole: false
    },
    {
        name: 'Katrien',
        amountQuestionsCorrect: 10,
        speedAnswers: 70,
        mole: false
    },
    {
        name: 'Kevin',
        amountQuestionsCorrect: 7,
        speedAnswers: 90,
        mole: false
    },
    {
        name: 'Lennart',
        amountQuestionsCorrect: 5,
        speedAnswers: 60,
        mole: false
    },
    {
        name: 'Noah',
        amountQuestionsCorrect: 0,
        speedAnswers: 200,
        mole: true
    },
    {
        name: 'Philip',
        amountQuestionsCorrect: 6,
        speedAnswers: 80,
        mole: false
    },
    {
        name: 'Samina',
        amountQuestionsCorrect: 7,
        speedAnswers: 63,
        mole: false
    },
    {
        name: 'Sven',
        amountQuestionsCorrect: 6,
        speedAnswers: 74,
        mole: false
    }
];

// een lijst van namen met alleen maar kleine lettertjes
let allNames = [];

// verliezer = eerste kandidaat
let loser = candidates[0];

// bepalen wie de verliezer is
for(const candidate of candidates) {
    allNames.push(candidate.name.toLowerCase());

    // een mol komt niet in aanmerking
    if(candidate.mole === true) continue;

    // een verliezer heeft de minste vragen correct én heeft een langere antwoordtijd bij execo
    if(
        candidate.amountQuestionsCorrect <= loser.amountQuestionsCorrect && 
        candidate.speedAnswers > loser.speedAnswers
    ) {
        loser = candidate;
    }
}

// elementen selecteren uit de DOM
const candidateField = document.querySelector('#kandidaat');
const overlayRed = document.querySelector('#red');
const overlayGreen = document.querySelector('#green');

candidateField.addEventListener('keypress', (event) => {
    console.log('De mollenjager heeft een toets ingedrukt.');
    if(event.keyCode === 13) {
        
        // naam uitlezen en veld leegmaken
        const name = candidateField.value;
        candidateField.value = '';

        // voer de naam acties uit
        nameAction(name);
    } 
});

const nameAction = (name) => {
    if(name.toLowerCase() == loser.name.toLowerCase()) {
        // deze kandidaat heeft verloren
        overlayRed.classList.remove('hide');
    } else if(!nameExists(name.toLowerCase())) {
        alert('Beste Gilles, je hebt je mistypt');
    } else {
        // deze kandidaat gaat naar de volgende ronde
        overlayGreen.classList.remove('hide');
    }

    // laat overlays verdwijnen na 5 seconden
    setTimeout(hideOverlays, 5000); // 5000ms

}

const nameExists = (name) => {
    if(allNames.includes(name)) {
        return true;
    } else {
        return false;
    }
}

const hideOverlays = () => {
    overlayGreen.classList.add('hide');
    overlayRed.classList.add('hide');
}