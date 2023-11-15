if (score === null) {
  score = {
    win: 0,
    tie: 0,
    losses: 0,
  };
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
