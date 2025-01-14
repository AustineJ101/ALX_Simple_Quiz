function checkAnswer(){
  let correctAnswer = "4";

  let userAnswer = document.querySelector("[name = 'quiz']:checked").value;

  const feedback = document.querySelector("#feedback");

  if(userAnswer === correctAnswer){
    feedback.textContent = "Correct! Well done.";
  }else{
    feedback.textContent = "That's incorrect. Try again!";
  }

}

const submitAnswer = document.querySelector("#submit-answer");

submitAnswer.addEventListener("click", checkAnswer);
