startEl = document.getElementById("startQuiz");
questionEl = document.getElementById("question");
// answerbuttonEl = document.getElementById("answerbutton");
buttonEl = 

// timer function///////////


  

 

// add listener to start quiz button//

startEl.addEventListener("click", function(){
    
 
    
    loadquestion();

    // startEl.innerHTML = "";
   
})


// start===================start===========//

var loadquestion = function(){
    for (var i=0; i < questions.length-1; i++){
        console.log(questions[i].title);
        let currentQuestion = questions[i].title
        if (currentQuestion < questions.length){
            questionEl.textContent = "";
            questionEl.textContent = currentQuestion;

            var btn = document.createElement("button");

            
        }
        // else{ alert('Game is over!')};
       

    };
    



// var secondsleft = 75;

// var timerfunc = setInterval (function(){
    
//     secondsleft--;          
//     timeEl.textContent = secondsleft;
 
// console.log(timerfunc);
//     if(secondsleft===0){
//         clearInterval(timerfunc);

//     }
//   } ,1000);


// checking for accuracy////////////


}



       

  
       
      


