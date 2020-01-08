// I had trouble of getting rid of answer buttons that were cowding the screen after each question. 
// Also i have trouble with recording a score. I think I can figure these issues out if I have more time.


var startEl = document.getElementById("startQuiz");
var questionEl = document.getElementById("question");
// answerbuttonEl = document.getElementById("answerbutton");
var buttonEl = document.getElementById("answerbutton");
var timerDisplay = document.getElementById("timer");
var endgameDiv = document.getElementById("endgame");


var timerValue = 75;
var currQuestionIdx = 0;
var currTimer;
var currScore = 0;


var startGame = function(){
    displayQuestion();
    runTimer();
}

var endGame = function(){
    clearInterval(currTimer);
    var endinput = document.createElement("INPUT");
    endinput.setAttribute("type", "text");
    endinput.setAttribute("value","Your Initials");
    endgameDiv.appendChild(endinput);
    submit();
    console.log(endGame)
}

var submit = function(){
   var sbmt = document.createElement("button");
    sbmt.innerHTML = "Submit";
    sbmt.classList.add("record");
    document.body.appendChild(sbmt);
}

var updateScore = function(){
    currScore = currScore + timerValue;
    localStorage.setItem("currScore", score);
}

var runTimer = function(){
    currTimer = setInterval(function(){
        timerValue--;
        timerDisplay.textContent = timerValue;
        if( timerValue === 0){
            endGame();
        }
    }, 1000);
}

var displayQuestion = function(){
    
    if( currQuestionIdx < questions.length ){
        var currQuestion = questions[currQuestionIdx];
        questionEl.textContent = currQuestion.title;
        for(var i=0; i<currQuestion.choices.length; i++){
            var choice = currQuestion.choices[i];
            console.log(choice);
            var btn = document.createElement("button");
            btn.textContent = choice;
            btn.classList.add("answer-btn");
            buttonEl.appendChild(btn);
        }
    } else {
        endGame();
    }
}

// add listener to start quiz button//
var startBtn = document.getElementById("startQuiz");
startBtn.addEventListener("click", function(event){
    event.preventDefault();
    startGame();
});






    

document.addEventListener("click", function(event){
    event.preventDefault();
  
   if( event.target.matches("button") && event.target.classList.contains("answer-btn") ){
       console.log(event.target.textContent);
       if( event.target.textContent === questions[currQuestionIdx].answer ){
           
           updateScore();

           
       }
       
       currQuestionIdx++;
       displayQuestion();
   }
});



       
      


