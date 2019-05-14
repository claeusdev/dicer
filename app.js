var scores, roundScore, activePlayer, rollCount, maxRollCount, playerWins;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
rollCount = 0;
maxRollCount = 5;
playerWins = [0, 0];

// Algo

// Roll dice up to 10x for each player
// if players total score is greater than the other player wins

document.querySelector('.total-player-0').textContent = '0';
document.querySelector('.total-player-1').textContent = '0';

document.querySelector('.current-player-0').textContent = '0';
document.querySelector('.current-player-1').textContent = '0';

document.querySelector('.dice').style.display = 'none';

document.querySelector('.roll-dice').addEventListener('click', () => {
  // Generate random number
  const dice = Math.floor(Math.random() * 6) + 1;
  rollCount += 1;
  // display dice
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.innerHTML = `Rolled: ${dice}`;

  // update player score with number played

  if (rollCount < maxRollCount) {
    roundScore += dice;
    document.querySelector(
      '.current-player-' + activePlayer,
    ).textContent = roundScore;
  } else if ((rollCount = maxRollCount)) {
    scores[activePlayer] += roundScore;
    console.log(scores);

    nextPlayer();
  }
});

function nextPlayer() {
  const dice = 0;
  let diceDom = document.querySelector('.dice');
  diceDom.innerHTML = dice;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  rollCount = 0;
  roundScore = 0;

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  var playerOne = document.querySelector('.current-player-0').textContent;
  var playerTwo = document.querySelector('.current-player-1').textContent;

  // console.log(scores[activePlayer]);

  if (scores[1] !== 0) {
    if (playerOne > playerTwo) {
      playerWins[0] += 1;
      document.querySelector('.total-player-0').textContent = playerWins[0];
      alert('Player 1 Wins');
    } else {
      playerWins[1] += 1;
      document.querySelector('.total-player-1').textContent = playerWins[1];
      alert('Player 2 Wins');
    }
  }

  scores = [0, 0];
}
