function computerPlay() {
    const plays = ['rock', 'paper', 'scissors'];
    let play = plays[Math.floor(Math.random() * plays.length)];
    return play;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection == 'rock') {
            return 'It\'s a tie! Rock and Rock';
        } else if (computerSelection == 'paper') {
            return 'You Lose! Paper beats Rock';
        } else if (computerSelection == 'scissors') {
            return 'You Win! Rock beats Scissors';
        }
    } else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection == 'rock') {
            return 'You Win! Paper beats Rock';
        } else if (computerSelection == 'paper') {
            return 'It\'s a tie! Paper and Paper';
        } else if (computerSelection == 'scissors') {
            return 'You Lose! Scissors beats paper';
        }
    } else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection == 'rock') {
            return 'You Lose! Rock beats Scissors';
        } else if (computerSelection == 'paper') {
            return 'You Win! Scissors beats Paper';
        } else if (computerSelection == 'scissors') {
            return 'It\'s a tie! Scissors and Scissors';
        }
    }
}

function game() {
    let compWins = 0;
    let playWins = 0;
    for(let i = 0; i < 5; i++) {
        let playerPromt = prompt('Rock, Paper, or Scissors?');
        let compPrompt = computerPlay();
        let round = playRound(playerPromt, compPrompt);
        console.log(round);
        switch (round.charAt(4)) {
            case 'W':
                playWins++;
                break;
            case 'L':
                compWins++;
                break;
        }
        console.log(`You have ${playWins} win(s) and Computer has ${compWins} win(s)`);
    }
    if (compWins > playWins) {
        console.log('You lose :(');
    } else if(playWins > compWins) {
        console.log('You win :)');
    } else {
        console.log('Tie!');
    }
}

game();