let quizContainer = document.querySelector("#quiz-container");

let userAnswer = null;

quizContainer.addEventListener("click",  (event) => {
  let target = event.target;

  if(target.name === "quiz"){
    userAnswer = target.value;
  }
});

const feedback = document.querySelector("#feedback");

function checkAnswer(){
  const correctAnswer = "4";

  if(userAnswer){
    if(userAnswer === correctAnswer){
      feedback.textContent = "Correct! Well done.";
    }else{
      feedback.textContent = "That's incorrect. Try again!";
    }
  }
}

const submitAnswer = document.querySelector("#submit-answer");

submitAnswer.addEventListener("click", checkAnswer);
