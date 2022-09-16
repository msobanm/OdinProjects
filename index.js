const choices = ['SCISSORS', 'ROCK', 'PAPER']
let compChoice;
function getComputerChoice () {
    compChoice = Math.floor(Math.random() * choices.length);
    compChoice = choices[compChoice];
    console.log(compChoice);

}

function playRound (pChoice, cChoice) {
    if (pChoice == cChoice){
            console.log('Tie');
    } else if (pChoice == 'ROCK') {
        if (cChoice == 'PAPER') {
            console.log('You Lost! Paper beats Rock')
        } else if (cChoice == 'SCISSORS'){
            console.log('You Won! Rock beats Scissors');
        }
    } else if (pChoice == 'PAPER') {
        if (cChoice == 'SCISSORS') {
            console.log('You Lost! Scissors bets Paper')
        } else if (cChoice == 'ROCK'){
            console.log('You Won! Paper bets Rocks');
        }
    } else if (pChoice == 'SCISSORS') {
        if (cChoice == 'ROCK') {
            console.log('You Lost! Rock beats Scissors')
            } else if (cChoice == 'PAPER'){
            console.log('You Won! Scissors beats Paper');
            }
        }
}

getComputerChoice();
playRound('ROCK', compChoice);