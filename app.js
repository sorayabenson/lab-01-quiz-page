// import functions and grab DOM elements
import { countsAsAYes } from './counts-as-a-yes.js'

const quizButton = document.getElementById('take-the-quiz');
const quizResults = document.getElementById('secret-results');

// initialize state
quizButton.addEventListener('click', () => {
    console.log('sweet birthday baby!');
})

// set event listeners to update state and DOM