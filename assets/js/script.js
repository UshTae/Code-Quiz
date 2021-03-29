// dom elements 
var startButton = document.querySelector("#start-Button");
var titleScreen = document.querySelector(".title-screen");
var questionsScreen = document.querySelector(".questions-screen");
var timeEl = document.querySelector("#time")

//questions array
var questions = [
    {
    title: "What type of language is JavaScript?",
    choices: [
        "Assembly-Language",
        "Object-Based",
        "Object-Orientated",
        "High-level",
    ],
    answer:"Object-Based",
},
{
    title:" 'Function' and 'Var' are known as: ",
    choices: [
        "Keywords",
        "Data types",
        "Declaration statements",
        "Prototypes",
    ],
    answer:"Declaration statements",
},
{
    title:"Which of the following variables takes precedence over the others if the names are the same?",
    choices: [
        "Global variable",
        "The local element",
        "The two of the above",
        "None of the above",
    ],
    answer:"The local element",
},
{
    title:"What type of statements are IF statements?.",
    choices: [
        "Declaration",
        "Block",
        "Loop",
        "Conditional",
    ],
    answer:"Conditional",
},
{
    title:"Functions must be _ to execute",
    choices: [
        "Deleted",
        "Re-defined",
        "Called",
        "logged",

    ],
    answer:"Called",
}];

//variables to keep track of quiz state
var secondsLeft = 90;

// display initial time on screen 
timeEl.textContent = "Time: " + secondsLeft;

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
};

function setTime() {
    // sets interval in variable
    var timerInterval = setInterval(function(){
        secondsLeft --;
        
        // display changing time on screen 
        timeEl.textContent = "Time: " + secondsLeft;
          console.log(secondsLeft);

        //start function for penalty

        if (secondsLeft === 0) {
            // stops timer at end
            clearInterval(timerInterval);

            //hide questions screen and unhide finish form
            //start form function
            return;
        }
    },1000)
    
}


// get current question object from array
	// update title with current question
	// clear out any old question choices
	// loop over choices
	// create new button for each choice
	// attach click event listener to each choice
	// display on the page