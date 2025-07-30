let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const clickSound = new Audio("sound/click.mp3");
const winSound = new Audio("sound/win.mp3");
const loseSound = new Audio("sound/lose.wav");
const drawSound = new Audio("sound/draw.mp3");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
  drawSound.play();
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    winSound.play();
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lost. ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    loseSound.play();
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  clickSound.play();
  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  msg.innerText = "Play your move";
  msg.style.backgroundColor = "#081b31";
});
