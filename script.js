const questions = [
{
  question: "Which anime features a notebook that can kill anyone whose name is written in it?",
  choices: ["Bleach", "Death Note", "Attack on Titan", "Demon Slayer"],
  answer: "Death Note"
},  
{
  question: "In One Piece, what is Luffy's dream?",
  choices: ["Become a pirate hunter", "Find the strongest sword", "Become the Pirate King", "Rule the seas"],
  answer: "Become the Pirate King"
},
{
  question: "In Attack on Titan, what are the giant human-eating creatures called?",
  choices: ["Hollows", "Devils", "Titans", "Demons"],
  answer: "Titans"
},
{
  question: "What is the name of the alchemy equivalent exchange rule in Fullmetal Alchemist?",
  choices: ["Gain without loss", "Something for nothing", "Equivalent Exchange", "Power for price"],
  answer: "Equivalent Exchange"
},
{
  question: "In My Hero Academia, what is Deku's real name?",
  choices: ["Katsuki Bakugo", "Shoto Todoroki", "Izuku Midoriya", "Tenya Iida"],
  answer: "Izuku Midoriya"
}
];

let currentNumber = 0;
let scoreNumber =  0;

const quizScreen = document.getElementById("quiz-screen");
const questionText = document.getElementById("question-text");
const choiceButtons = document.getElementById("choice-buttons");
const choiceBtns = document.querySelectorAll('.choice-btn');
const resultScreen = document.getElementById("result-screen");
const finalScore = document.getElementById("final-score");
const restartButton = document.querySelector('.restart-button');

restartButton.addEventListener("click", handleRestart);

function renderQuestion() {
  choiceBtns.forEach((choiceBtn) => {
    choiceBtn.disabled = false;
  });

  let currentQuestion = questions[currentNumber];
  questionText.textContent = currentQuestion.question;

  choiceBtns.forEach((choiceBtn, index) => {
    choiceBtn.textContent = currentQuestion.choices[index];
  });
}

function handleChoiceClick() {
  choiceBtns.forEach((choiceBtn) => {
    choiceBtn.addEventListener("click", () => {
      let currentQuestion = questions[currentNumber];
      let choiceBtnText = choiceBtn.textContent;
      if (choiceBtnText == currentQuestion.answer) {
        scoreNumber += 1;
      }
      choiceBtns.forEach((choiceBtn) => {
        choiceBtn.disabled = true;
      });
      handleNext();
    });
  });
}

function handleNext() {
  if (currentNumber >= questions.length - 1) {
    resultScreen.classList.remove("hidden");
    quizScreen.classList.add("hidden");
    finalScore.textContent = `You scored ${scoreNumber} out of ${questions.length}!`;
  } else {
    currentNumber += 1;
    renderQuestion();
  }
}

function handleRestart() {
  currentNumber = 0;
  scoreNumber = 0;

  quizScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");

  renderQuestion();
}

renderQuestion();
handleChoiceClick();
