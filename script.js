let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  const choices = ["stone", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const result = determineWinner(userChoice, computerChoice);
  updateResult(userChoice, computerChoice, result);
}

function determineWinner(user, computer) {
  if (user === computer) return "draw";

  if (
    (user === "stone" && computer === "scissors") ||
    (user === "paper" && computer === "stone") ||
    (user === "scissors" && computer === "paper")
  ) {
    userScore++;
    return "win";
  } else {
    computerScore++;
    return "lose";
  }
}

function updateResult(userChoice, computerChoice, result) {
  const resultText = document.getElementById("result-text");
  const userScoreSpan = document.getElementById("user-score");
  const computerScoreSpan = document.getElementById("computer-score");

  if (result === "win") {
    resultText.textContent = `You chose ${userChoice}, computer chose ${computerChoice} — You Win! 🎉`;
  } else if (result === "lose") {
    resultText.textContent = `You chose ${userChoice}, computer chose ${computerChoice} — You Lose 😢`;
  } else {
    resultText.textContent = `You both chose ${userChoice} — It's a Draw 🤝`;
  }

  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
}
