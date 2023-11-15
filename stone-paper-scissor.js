let score;
score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  tie: 0,
  losses: 0,
};
function sps() {
  const randomNum = Math.random();
  if (randomNum >= 0 && randomNum < 1 / 3) {
    return "Rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    return "Paper";
  } else if (randomNum >= 2 / 3 && randomNum <= 1) {
    return "Scissors";
  }
}
function onclickRock() {
    r1 = sps()
    if (r1 === 'Paper') {
      score.losses = score.losses + 1;
      console.log(score);
      alert(`You picked Rock and Computer picked ${r1}. You lost!`);
    } else if (r1 === 'Rock') {
      score.tie = score.tie + 1;
      console.log(score);
      alert(`You picked Rock and Computer picked ${r1}. Tie!`);
    } else if (r1 === 'Scissors') {
      score.win = score.win + 1;
      console.log(score);
      alert(`You picked Rock and Computer picked ${r1}. You won!`);
    }
    localStorage.setItem('score', JSON.stringify(score));
}
function onclickPaper() {
    r1 = sps();
    if (r1 === 'Scissors') {
      score.losses = score.losses + 1;
      console.log(score);
      alert(`You picked Paper and Computer picked ${r1}. You lost!`);
    } else if (r1 === 'Paper') {
      score.tie = score.tie + 1;
      console.log(score);
      alert(`You picked Paper and Computer picked ${r1}. Tie!`);
    } else if (r1 === 'Rock') {
      score.win = score.win + 1;
      console.log(score);
      alert(`You picked Paper and Computer picked ${r1}. You won!`);
    }
    localStorage.setItem('score', JSON.stringify(score));
}
function onclickScissor() {
    r1 = sps()
    if (r1 === 'Rock') {
      score.losses = score.losses + 1;
      console.log(score);
      alert(`You picked Scissors and Computer picked ${r1}. You lost!`);
    } else if (r1 === 'Scissors') {
      score.tie = score.tie + 1;
      console.log(score);
      alert(`You picked Scissors and Computer picked ${r1}. Tie!`);
    } else if (r1 === 'Paper') {
      score.win = score.win + 1;
      console.log(score);
      alert(`You picked Scissors and Computer picked ${r1}. You won!`);
    }
    localStorage.setItem('score', JSON.stringify(score));
}
function onclickResetScore() {
      score.win = 0;
      score.tie = 0;
      score.losses = 0;
      console.clear();
      console.log('Score was reset.');
      console.log(score);
      localStorage.removeItem('score');
}
function onclickShowScore() {
      console.clear();
      console.log(score);
}