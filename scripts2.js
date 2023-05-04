const round = document.getElementById('round');
const youChose = document.getElementById('you');
const computerChose = document.getElementById('computer');
const result = document.getElementById('result');
const winner = document.getElementById('winner');
const youCurrent = document.getElementById('youCurrent');
const computerCurrent = document.getElementById('computerCurrent');
let playerTotal = 0;
let computerTotal = 0;
let roundCount = 1;

function checkWinner() {
    if (playerTotal == 5) {
        winner.textContent = 'You win! You are the first to get 5 point!';
    } else if (computerTotal == 5)
        winner.textContent = 'You lose! Computer got to 5 points first!';
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {

    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === 'rock' && computer === 'paper') {
        computerTotal++;
        return 'You Lose! Paper beats Rock';
    } else if (player === 'rock' && computer === 'rock') {
        return 'Tie! You both picked Rock';
    } else if (player === 'rock' && computer === 'scissors') {
        playerTotal++;
        return 'You Win! Rock beats Scissors';
    } else if (player === 'paper' && computer === 'rock') {
        playerTotal++;
        return 'You Win! Paper beats Rock';
    } else if (player === 'paper' && computer === 'paper') {
        return 'Tie! You both picked Paper';
    } else if (player === 'paper' && computer === 'scissors') {
        computerTotal++;
        return 'You Lose! Scissors beats Paper';
    } else if (player === 'scissors' && computer === 'rock') {
        computerTotal++;
        return 'You Lose! Rock beats Scissors';
    } else if (player === 'scissors' && computer === 'scissors') {
        return 'Tie! You both picked scissors';
    } else if (player === 'scissors' && computer === 'paper') {
        playerTotal++;
        return 'You Win! Scissors beats Paper';
    }
}

// https://makersaid.com/id-of-clicked-dom-element-javascript/
function game() { 
    round.textContent = roundCount;

    youCurrent.textContent = playerTotal;
    computerCurrent.textContent = computerTotal;

        document.querySelectorAll('button').forEach(occurance => {
            occurance.addEventListener('click', (e) => {
                youChose.textContent = e.target.id;
                computerChose.textContent = getComputerChoice();
                roundCount++;
                round.textContent = roundCount;
                
                result.textContent = playRound(
                    youChose.textContent, computerChose.textContent);
                
                youCurrent.textContent = playerTotal;
                computerCurrent.textContent = computerTotal;

                checkWinner();
            });
        });
}

game();

//things to do:
//event listeners in while loop instead of checkWinner;
//understand the game function;
//seperate main game code into functions (not arrow functions)
//instead of event listeners for all buttns, listen to just buttons with game class