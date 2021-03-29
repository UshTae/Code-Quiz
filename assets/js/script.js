// dom elements 
var startButton = document.querySelector("#start-Button");
var titleScreen = document.querySelector(".title-screen");
var questionsScreen = document.querySelector(".questions-screen");
var timeEl = document.querySelector(".time")


//variables to keep track of quiz state
var secondsLeft = 90;

// list of first set of questions, choices, and answers.
// Others to be appended after

// listener event to start game when start button clicked
startButton.addEventListener("click", startGame);

//submit score listener

// hide questions section by default 
questionsScreen.style.display = "block";
questionsScreen.style.display = "none";

// function to dictate what happens when button pressed 
function startGame() {
    //hide start screen
        titleScreen.style.display = "block";
        titleScreen.style.display = "none"; 
    
    //unhide questions section
        questionsScreen.style.display = "block";

    //start timer
    setTime()

    //show starting time
};

function setTime() {
    // sets interval in variable
    var timerInterval = setInterval(function(){
        secondsLeft --;
        
        // display time on screen 
        // timeEl.textContent = "Time: " + secondsLeft; 

        if (secondsLeft === 0) {
            // stops timer at end
            clearInterval(timerInterval);

            return;
        }
    },1000)
    
}