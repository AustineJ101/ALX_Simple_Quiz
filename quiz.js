function checkAnswer(){
  const correctAnswer = "4";

  const selectedInput = document.querySelector("[name = 'quiz']:checked");


  let userAnswer = selectedInput.value || null;

  const feedback = document.querySelector("#feedback");
  if(userAnswer){
    if (userAnswer === correctAnswer){
      feedback.textContent = "Correct! Well done.";
    } else{
      feedback.textContent = "That's incorrect. Try again!";
    }
  }
    
}

const submitAnswer = document.getElementById("submit-answer");

submitAnswer.addEventListener("click", checkAnswer);
