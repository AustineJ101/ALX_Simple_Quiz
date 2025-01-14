function checkAnswer(){
  let correctAnswer = "4";

  let selectedBtn =  document.querySelector("[name = 'quiz']:checked");
  let userAnswer =selectedBtn.value;

  const feedback = document.querySelector("#feedback");

  if(userAnswer === correctAnswer){
    feedback.textContent = "Correct! Well done.";
  }else{
    feedback.textContent = "That's incorrect. Try again!";
  }

}

const submitAnswer = document.querySelector("#submit-answer");

submitAnswer.addEventListener("click", checkAnswer);
