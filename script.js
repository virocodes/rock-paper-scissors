function computerPlay() {
    const plays = ['rock', 'paper', 'scissors'];
    let play = plays[Math.floor(Math.random() * plays.length)];
    return play;
}