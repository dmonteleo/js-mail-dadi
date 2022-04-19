const player = [];
const computer = [];

const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');

let playerNumber;
let computerNumber;

let playerScore = 0;
let computerScore = 0;

// 1 ROUND

btn1.addEventListener("click", function() {
  player[0] = Math.floor(Math.random() * 6) + 1;
  computer[0] = Math.floor(Math.random() * 6) +1;
  console.log('player: ', player[0], 'computer: ', computer[0]);
  if ( player[0] > computer[0] ) {
    console.log('hai vinto il primo round!');
    playerScore = playerScore + 1;
  }
  else if ( player[0] < computer[0] ) {
    console.log(' hai perso il primo round!');
    computerScore = computerScore + 1;
  }
  else {
    console.log('hai pareggiato il primo round!');
  }
});

// 2 ROUND

btn2.addEventListener("click", function() {
  player[1] = Math.floor(Math.random() * 6) + 1;
  computer[1] = Math.floor(Math.random() * 6) +1;
  console.log('player: ', player[1], 'computer: ', computer[1]);
  if ( player[1] > computer[1] ) {
    console.log('hai vinto il secondo round!');
    playerScore = playerScore + 1;
  }
  else if ( player[1] < computer[1] ) {
    console.log('hai perso il secondo round!');
    computerScore = computerScore + 1;
  }
  else {
    console.log('hai pareggiato il secondo round!');
  }
});

// 3 ROUND

btn3.addEventListener("click", function() {
  player[2] = Math.floor(Math.random() * 6) + 1;
  computer[2] = Math.floor(Math.random() * 6) +1;
  console.log('player: ', player[2], 'computer: ', computer[2]);
  if ( player[2] > computer[2] ) {
    console.log('hai vinto il terzo round!');
    playerScore = playerScore + 1;
  }
  else if ( player[2] < computer[2] ) {
    console.log('hai perso il terzo round!');
    computerScore = computerScore + 1;
  }
  else {
    console.log('hai pareggiato il terzo round!');
  }
});

// 4 ROUND

btn4.addEventListener("click", function() {
  player[3] = Math.floor(Math.random() * 6) + 1;
  computer[3] = Math.floor(Math.random() * 6) +1;
  console.log('player: ', player[3], 'computer: ', computer[3]);
  if ( player[3] > computer[3] ) {
    console.log('hai vinto il quarto round!');
    playerScore = playerScore + 1;
  }
  else if ( player[3] < computer[3] ) {
    console.log('hai perso il quarto round!');
    computerScore = computerScore + 1;
  }
  else {
    console.log('hai pareggiato il quarto round!');
  }
});

// 5 ROUND

btn5.addEventListener("click", function() {
  player[4] = Math.floor(Math.random() * 6) + 1;
  computer[4] = Math.floor(Math.random() * 6) +1;
  console.log('player: ', player[4], 'computer: ', computer[4]);
  if ( player[4] > computer[4] ) {
    console.log('hai vinto il quinto round!');
    playerScore = playerScore + 1;
  }
  else if ( player[4] < computer[4] ) {
    console.log('hai perso il quinto round!');
    computerScore = computerScore + 1;
  }
  else {
    console.log('hai pareggiato il quinto round!');
  }
});

// 6 ROUND

btn6.addEventListener("click", function() {
  player[5] = Math.floor(Math.random() * 6) + 1;
  computer[5] = Math.floor(Math.random() * 6) +1;
  console.log('player: ', player[5], 'computer: ', computer[5]);
  if ( player[5] > computer[5] ) {
    console.log('hai vinto il sesto round!');
    playerScore = playerScore + 1;
  }
  else if ( player[5] < computer[5] ) {
    console.log('hai perso il sesto round!');
    computerScore = computerScore + 1;
  }
  else {
    console.log('hai pareggiato il sesto round!');
  }
  console.log( 'player: ', player, playerScore);
  console.log('computer: ', computer, computerScore);

  if (playerScore > computerScore) {
    console.log(`hai vinto la partita ${playerScore} a ${computerScore}!`);
  }
  else if (playerScore === computerScore) {
    console.log(`hai pareggiato la partita ${playerScore} a ${computerScore}!`);
  }
  else {
    console.log(`hai perso la partita ${playerScore} a ${computerScore}!`);
  }

});

console.log( 'player: ', player, 'punteggio: ', playerScore);
console.log('computer: ', computer, 'punteggio: ', computerScore);



