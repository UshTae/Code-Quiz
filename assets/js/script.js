// dom elements 
var startButton = document.querySelector(".start-Button");


//variables to keep track of quiz state

// list of first set of questions, choices, and answers.
// Others to be appended after
​var questions = 
    {
        title: "What type of language is JavaScript",
        choices: [
            "Assembly-Language",
            "Object-Based",
            "Object-Orientated",
            "High-level",
        ],
        answer:"Object-Based",
    }

// listener event to start game when start button clicked
startButton.addEventListener("click", startGame);

//submit score listener

// function to dictate what happens when button pressed 
function startGame() {
    //hide start screen
    //unhide questions section
    //start timer 
    //show starting time
};

