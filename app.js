// import functions and grab DOM elements
import { countsAsAYes } from './counts-as-a-yes.js'

const quizButton = document.getElementById('take-the-quiz');
const quizResults = document.getElementById('secret-results');

let correctAnswers = 0;

// initialize state
quizButton.addEventListener('click', () => {

    const areYouReady = confirm('Are you ready for the quiz?');

    if (!areYouReady) return;

    const firstName = prompt('Your first name, please.');

    const lastName = prompt('and your last name, thank you.');

    const firstQuestion = prompt('While carving do you keep your free hand behind the tool?');

    if (countsAsAYes(firstQuestion)) correctAnswers++;

    const secondQuestion = prompt('Should the rolled out ink texture be like an orange peel?');

    if (countsAsAYes(secondQuestion)) correctAnswers++;


    console.log('woohoo!');

})

// set event listeners to update state and DOM