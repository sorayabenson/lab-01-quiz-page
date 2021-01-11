// import functions and grab DOM elements
import { countsAsAYes } from './counts-as-a-yes.js'

const quizButton = document.getElementById('take-the-quiz');
const quizResults = document.getElementById('secret-results');

// initialize state
quizButton.addEventListener('click', () => {

    const areYouReady = confirm('Are you ready for the quiz?');

    if (!areYouReady) return;

    const firstName = prompt('Your first name, please.');

    const lastName = prompt('and your last name, thank you.')

    console.log(firstName, lastName);

})

// set event listeners to update state and DOM