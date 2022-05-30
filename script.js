function computerPlay() {
    const plays = ['rock', 'paper', 'scissors'];
    let play = plays[Math.floor(Math.random() * plays.length)];
    return play;
}


function playRound(playerSelection, computerSelection) {
    let thisRound;
    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection == 'rock') {
            thisRound = 'It\'s a tie! Rock and Rock';
        } else if (computerSelection == 'paper') {
            thisRound = 'You Lose! Paper beats Rock';
        } else if (computerSelection == 'scissors') {
            thisRound = 'You Win! Rock beats Scissors';
        }
    } else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection == 'rock') {
            thisRound = 'You Win! Paper beats Rock';
        } else if (computerSelection == 'paper') {
            thisRound = 'It\'s a tie! Paper and Paper';
        } else if (computerSelection == 'scissors') {
            thisRound = 'You Lose! Scissors beats paper';
        }
    } else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection == 'rock') {
            thisRound = 'You Lose! Rock beats Scissors';
        } else if (computerSelection == 'paper') {
            thisRound = 'You Win! Scissors beats Paper';
        } else if (computerSelection == 'scissors') {
            thisRound = 'It\'s a tie! Scissors and Scissors';
        }
    }
    return thisRound;
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('.results');
const totals = document.querySelector('.totals');
const playAgain = document.createElement('button');
playAgain.textContent = 'Play Again!';
playAgain.className = 'play_again';


function buttonClick(button) {
    button.addEventListener('click', () => {
        let round = playRound(button.getAttribute('id'), computerPlay());
        results.textContent = round;

         if (round.charAt(4) == 'W') {
            playWins++;
            totals.textContent = (`You have ${playWins} wins and Computer has ${compWins} wins`);
        } else if (round.charAt(4) == 'L') {
            compWins++;
            totals.textContent = (`You have ${playWins} wins and Computer has ${compWins} wins`);
        } else {
            totals.textContent = (`You have ${playWins} wins and Computer has ${compWins} wins`);
        }

        if (compWins >= 5 || playWins >= 5) {
            results.textContent = (checkWin(compWins, playWins));
            rock.style.display = 'none';
            paper.style.display = 'none';
            scissors.style.display = 'none';
            document.body.querySelector('.buttons').append(playAgain);
        }
    });
}

playAgain.addEventListener('click', () => {
    compWins = 0;
    playWins = 0;
    playAgain.remove();
    rock.style.display = 'inline';
    paper.style.display = 'inline';
    scissors.style.display = 'inline';
    results.textContent = '';
    totals.textContent = '';
});


function checkWin(cWins, pWins) {
    if (cWins > pWins) {
        return 'You lose!';
    } else {
        return 'You win!';
    }
}

let compWins = 0;
let playWins = 0;

function game() {
    buttonClick(rock);
    buttonClick(paper);
    buttonClick(scissors);
    
}

game();