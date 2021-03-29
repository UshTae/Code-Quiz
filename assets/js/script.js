// dom elements 
var startButton = document.getElementById("start-Button");
var titleScreen = document.querySelector(".title-screen");
var questionsScreen = document.querySelector(".questions-screen");
var timeEl = document.getElementById("time");
var questionTitle = document.getElementById("title");
var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");

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
    answer:"2",
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
    answer:"3",
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
    answer:"2",
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
    answer:"4",
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
    answer:"3",
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
	
function currentQuest() {
   // get current question object from array
    var i = 0;
    var currentQuestion = questions[i].title;
    // update title with current question
    questionTitle.textContent = currentQuestion;

    // create new button for each choice
   var btn1 = questions[i].choices[0];
   var btn2 = questions[i].choices[1];
   var btn3 = questions[i].choices[2];
   var btn4 = questions[i].choices[3];

    button1.textContent = btn1;
    button2.textContent = btn2;
    button3.textContent = btn3;
    button4.textContent = btn4;

    // attach click event listener to each choice
    button1.addEventListener("click",validate(this));
    button2.addEventListener("click",validate(this));
    button3.addEventListener("click",validate(this));
    button4.addEventListener("click",validate(this));

    function validate(element) {

        var answerTrue = questions[i].answer;

        if (answerTrue = element.id) {
            console.log("yes");
        }else {
            console.log("damnit");
        }
    
   
    };
    // if (answerTrue = the user answer, increase i by 1 else increase i
    // and run notAnswer()

};


// clear out any old question choices
// loop over choices


// display on the page

// if answer wrong time is taken away 
function notAnswer() {
    secondsLeft -=10;
    questionChange();
};