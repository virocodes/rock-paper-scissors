function computerPlay() {
    const plays = ['rock', 'paper', 'scissors'];
    let play = plays[Math.floor(Math.random() * plays.length)];
    return play;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() == 'rock') {
        if(computerSelection == 'rock') {
            return 'It\'s a tie! Rock and Rock';
        } else if(computerSelection == 'paper') {
            return 'You Lose! Paper beats Rock';
        } else if(computerSelection == 'scissors') {
            return 'You Win! Rock beats Scissors';
        }
    } else if(playerSelection.toLowerCase() == 'paper') {
        if(computerSelection == 'rock') {
            return 'You Win! Paper beats Rock';
        } else if(computerSelection == 'paper') {
            return 'It\'s a tie! Paper and Paper';
        } else if(computerSelection == 'scissors') {
            return 'You Lose! Scissors beats paper';
        }
    } else if(playerSelection.toLowerCase() == 'scissors') {
        if(computerSelection == 'rock') {
            return 'You Lose! Rock beats Scissors';
        } else if(computerSelection == 'paper') {
            return 'You Win! Scissors beats Paper';
        } else if(computerSelection == 'scissors') {
            return 'It\'s a tie! Scissors and Scissors';
        }
    }
}