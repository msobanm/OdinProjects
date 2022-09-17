const choices = ['SCISSORS', 'ROCK', 'PAPER']
let compChoice;
let pwins = 0; let cwins = 0;
let playerChoice;
let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorsBtn = document.querySelector('.scissors');

function getComputerChoice () {
    compChoice = Math.floor(Math.random() * choices.length);
    compChoice = choices[compChoice];
    console.log(compChoice);

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

rockBtn.addEventListener('click', getComputerChoice);
rockBtn.addEventListener('click', function () {playRound('ROCK', compChoice)});

paperBtn.addEventListener('click', getComputerChoice);
paperBtn.addEventListener('click', function () {playRound('PAPER', compChoice)});

scissorsBtn.addEventListener('click', getComputerChoice);
scissorsBtn.addEventListener('click', function () {playRound('SCISSORS', compChoice)});