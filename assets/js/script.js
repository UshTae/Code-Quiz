// dom elements 
var startButton = document.getElementById("start-Button");
var titleScreen = document.querySelector(".title-screen");
var questionsScreen = document.querySelector(".questions-screen");
var timeEl = document.getElementById("time");
var questionTitle = document.getElementById("title");

//questions array
var questions = [
    {
        // question 1
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
        //q2
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
        //q3
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
        //q4
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
        //q5
    title:"Functions must be _ to execute",
    choices: [
        "Deleted",
        "Re-defined",
        "Called",
        "logged",

    ],
    answer:"Called",
}];


// hide questions section by default 
questionsScreen.style.display = "block";
questionsScreen.style.display = "none";


//variables to keep track of quiz state
var secondsLeft = 90;


// display initial time on screen 
timeEl.textContent = "Time: " + secondsLeft;

// list of first set of questions, choices, and answers.
// Others to be appended after

// listener event to start game when start button clicked
startButton.addEventListener("click", startGame);

//submit score listener


// function to dictate what happens when button pressed 
function startGame() {
    //hide start screen
        titleScreen.style.display = "block";
        titleScreen.style.display = "none"; 
    
    //unhide questions section
        questionsScreen.style.display = "block";

    //start timer
    setTime();

    //first question appears
    currentQuest();
};

//setting timer function
function setTime() {
    // sets interval in variable
    var timerInterval = setInterval(function(){
        secondsLeft --;
        
        // display changing time on screen 
        timeEl.textContent = "Time: " + secondsLeft;
        //   console.log(secondsLeft);

        //start function for penalty

        if (secondsLeft === 0) {
            // stops timer at end
            clearInterval(timerInterval);

            //hide questions screen and unhide finish form
            //start form function
            return;
        }
    },1000)
    
};

//GETTING QUESTIONS
	// get current question object from array
function currentQuest() {
    for (var i = 0; i< 4; i++){
        var currentQuestion = questions[i].title;
        questionTitle.textContent = currentQuestion;
    };
  
};

	// update title with current question
	// clear out any old question choices
	// loop over choices
	// create new button for each choice
	// attach click event listener to each choice
	// display on the page


// if answer wrong time is taken away 
function notAnswer() {
    secondsLeft -=10;
    questionChange();
};