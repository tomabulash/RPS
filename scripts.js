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

function stopGame() {
    Array.from(document.getElementsByClassName('game')).forEach(occurance => {
        occurance.removeEventListener('click', getPlayerChoice)
    });
}

function updateScore() {
    youCurrent.textContent = playerTotal;
    computerCurrent.textContent = computerTotal;
}

function checkWinner() {
    if (playerTotal == 5) {
        winner.textContent = 'You win! You are the first to get 5 point!';
        stopGame();
        
    } else if (computerTotal == 5) {
        winner.textContent = 'You lose! Computer got to 5 points first!';
        stopGame();
    };
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

function playRound() {

    const player = youChose.textContent.toLowerCase();
    const computer = computerChose.textContent.toLowerCase();

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

function getPlayerChoice(e) {

    youChose.textContent = e.target.id;

            //computer's choice is updated
            computerChose.textContent = getComputerChoice();
            
            //the round's result is determined
            result.textContent = playRound();

            //player and computer's score is updated
            updateScore();

            //check to see if there is a winner
            checkWinner();
            
            //round count is updated
            roundCount++;
            round.textContent = roundCount;

}

function game() { 
    
    //pre game settings
    round.textContent = roundCount;
    updateScore();
       
    //player's choice is updated via eventListener
    //document.querySelectorAll('button').forEach(occurance => { 
      //  occurance.addEventListener('click', getPlayerChoice)          
        //});

    Array.from(document.getElementsByClassName('game')).forEach(occurance => {
        occurance.addEventListener('click', getPlayerChoice)
    });

}

game();


//https://stackoverflow.com/questions/3871547/iterating-over-result-of-getelementsbyclassname-using-array-foreach
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
//https://softauthor.com/e-target-in-javascript/
//https://makersaid.com/id-of-clicked-dom-element-javascript/
//things to do:
////event listeners in while loop instead of checkWinner;
////understand the game function;
////seperate main game code into functions (not arrow functions)
////instead of event listeners for all buttns, listen to just buttons with game class
//if i just want a function to get player's choice?