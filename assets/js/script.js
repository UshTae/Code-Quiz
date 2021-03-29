// dom elements 
var startButton = document.querySelector("#start-Button");
var titleScreen = document.querySelector(".title-screen");


//variables to keep track of quiz state

// list of first set of questions, choices, and answers.
// Others to be appended after

// listener event to start game when start button clicked
startButton.addEventListener("click", startGame)

//submit score listener

// function to dictate what happens when button pressed 
function startGame() {
    //hide start screen
    var state = titleScreen.getAttribute("data-state");
    

    //unhide questions section
    //start timer 
    //show starting time
};

