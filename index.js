const choices = ['SCISSORS', 'ROCK', 'PAPER']
let compChoice;
let pwins = 0; let cwins = 0;
let playerChoice;

function getComputerChoice () {
    compChoice = Math.floor(Math.random() * choices.length);
    compChoice = choices[compChoice];
    console.log(compChoice);

}

function getPlayerChoice () {
    playerChoice = prompt('Choose');
    playerChoice = playerChoice.toUpperCase();
}

function playRound (pChoice, cChoice) {
    if (pChoice == cChoice){
            console.log('Tie');
            return pwins += 1, cwins += 1;
    } else if (pChoice == 'ROCK') {
        if (cChoice == 'PAPER') {
            console.log('You Lost! Paper beats Rock');
            return cwins += 1;
        } else if (cChoice == 'SCISSORS'){
            console.log('You Won! Rock beats Scissors');
            return pwins += 1;
        }
    } else if (pChoice == 'PAPER') {
        if (cChoice == 'SCISSORS') {
            console.log('You Lost! Scissors bets Paper');
            return cwins += 1;
        } else if (cChoice == 'ROCK'){
            console.log('You Won! Paper bets Rocks');
            return pwins += 1;
        }
    } else if (pChoice == 'SCISSORS') {
        if (cChoice == 'ROCK') {
            console.log('You Lost! Rock beats Scissors');
            return cwins += 1;
            } else if (cChoice == 'PAPER'){
            console.log('You Won! Scissors beats Paper');
            return pwins += 1;
            }
        }
}

function game() {
    for (let i = 0; i < 5; i++){
        getPlayerChoice();
        getComputerChoice();
        playRound( playerChoice , compChoice);
    }
    if (pwins > cwins) {
        console.log('You Won!');
    } else {
        console.log('You Lost!');
    }
}

game();

stop();