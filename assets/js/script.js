// dom elements 
var startButton = document.querySelector(".start-Button");



// list of all questions, choices, and answers.

​questions = [
    {
        title: "What type of language is JavaScript",
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
    },
]

// listener event to start game when start button clicked
startButton.addEventListener("click", startGame);

// function to dictate what happens when button pressed 
function startGame() {

}

