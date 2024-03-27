const programOptions = ["rock", "paper", "scissor"];

function getProgramChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let randomChoice = programOptions[randomNumber];
  return randomChoice;
}
