const choices = ['SCISSORS', 'ROCK', 'PAPER']
const playerScore = document.querySelector('.playerScore');
const compScore = document.querySelector('.compScore');
let pwins = 0; let cwins = 0;
let compChoice;
let playerChoice;
let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorsBtn = document.querySelector('.scissors');

function getComputerChoice () {
    compChoice = Math.floor(Math.random() * choices.length);
    compChoice = choices[compChoice];
    document.querySelector('.compChoice').innerHTML = compChoice;

}

function winner() {
    if (pwins == 5) {
        document.querySelector('.winner').innerHTML = 'Player is winner';
        document.querySelector('.compChoice').innerHTML = '';
        console.clear();
        pwins = 0;
        cwins = 0;
        playerScore.innerHTML = pwins;
        compScore.innerHTML = cwins;
    } else if (cwins == 5) {
        document.querySelector('.winner').innerHTML = 'Computer is winner';
        document.querySelector('.compChoice').innerHTML = '';
        console.clear();
        pwins = 0;
        cwins = 0;
        playerScore.innerHTML = pwins;
        compScore.innerHTML = cwins;
    }
}

function playRound (pChoice, cChoice) {
    if (pChoice == cChoice){
            console.log('Tie');
            playerScore.innerHTML = pwins;
            compScore.innerHTML = cwins;
    } else if (pChoice == 'ROCK') {
        if (cChoice == 'PAPER') {
            console.log('You Lost! Paper beats Rock');
            cwins += 1;
            compScore.innerHTML = cwins;
        } else if (cChoice == 'SCISSORS'){
            console.log('You Won! Rock beats Scissors');
            pwins += 1;
            playerScore.innerHTML = pwins;
        }
    } else if (pChoice == 'PAPER') {
        if (cChoice == 'SCISSORS') {
            console.log('You Lost! Scissors bets Paper');
            cwins += 1;
            compScore.innerHTML = cwins;
        } else if (cChoice == 'ROCK'){
            console.log('You Won! Paper bets Rocks');
            pwins += 1;
            playerScore.innerHTML = pwins;
        }
    } else if (pChoice == 'SCISSORS') {
        if (cChoice == 'ROCK') {
            console.log('You Lost! Rock beats Scissors');
            cwins += 1;
            compScore.innerHTML = cwins;
            } else if (cChoice == 'PAPER'){
            console.log('You Won! Scissors beats Paper');
            pwins += 1;
            playerScore.innerHTML = pwins;
            }
        }
    
    document.querySelector('.winner').innerHTML = '';
}
