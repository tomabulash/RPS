let round = document.getElementById('round');
const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');
const youChose = document.getElementById('you');
const computerChose = document.getElementById('computer');
const result = document.getElementById('result');
const winner = document.getElementById('winner');

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

    if (player === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock';
    } else if (player === 'rock' && computerSelection === 'rock') {
        return 'Tie! You both picked Rock';
    } else if (player === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (player === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock';
    } else if (player === 'paper' && computerSelection === 'paper') {
        return 'Tie! You both picked Paper';
    } else if (player === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper';
    } else if (player === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors';
    } else if (player === 'scissors' && computerSelection === 'scissors') {
        return 'Tie! You both picked scissors';
    } else if (player === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper';
    }
}

function keepResult(roundResult) {
    let tie = roundResult.slice(0,3);
    let win = roundResult.slice(0,7);
    if (tie === 'Tie') {
        return 1;
    } else if (win === 'You Win') {
        return 2;    
    } else {
        return 0;
    }   
}

function getTotalWinner(playerTotal,computerTotal) {
    if (playerTotal > computerTotal) {
        console.log('You Win after 5 rounds!');
    } else if (playerTotal < computerTotal) {
        console.log('Computer wins after 5 rounds!');
    } else {
        console.log('Tie after 5 rounds!');
    }
}


function game() {
    let playerTotal = 0;
    let computerTotal = 0;
    let playerSelection = '';

    for (let i = 0; i < 5; i++) {
        round.textContent = 'Round ' + (i+1);

        let computerChoice = getComputerChoice();    
        
        
        btnRock.addEventListener('click', )
        

        let roundResult = '';


        computerChose.textContent = 'Computer selected: ' + computerChoice;
        youChose.textContent = 'You selected: ' + playerSelection.toLowerCase();

        roundResult = playRound(playerSelection, computerChoice);
        console.log(roundResult);
        
        if ((keepResult(roundResult)) == 2) {
            playerTotal++;
        } else if((keepResult(roundResult)) == 0) {
            computerTotal++;
        } else {
            computerTotal++;
            playerTotal++;
        }
 
    }

    console.log('Your total score: ' + playerTotal);
    console.log('Computer total score: ' + computerTotal);
    getTotalWinner(playerTotal,computerTotal);

}

game();
