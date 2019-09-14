

var startButton;



const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

//set timeout
$("#startButton").on("click", function () {
    $("#startButton").hide();
    quiz();
})



// quiz function 
function quiz() {
    var time = 60;                                                                           //timer
    setInterval(function () {
        time--;
        setTimeout($("#countDown").show(), 10000);
        $("#countDown").html("You have a minute-- GO!  :" + time + "sec");
        if (time === 0) {
            location.reload();
        }
    }, 1000)
    const output = [];                                                                 // container for html output

    questions.forEach(                                                                 //for each question
        (currentQuestion, questionNumber) => {
            let answers = [];

            for (letter in currentQuestion.answers) {                                 //for each available answer
                answers.push(                                                         //add radio button
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(                                                               //add question and answers to output
                `<div class="question"> ${currentQuestion.question}  </div>
                    <div class="answers"> ${answers.join("")} </div> <br>`
            );
            $("#quiz").html(output.join(""));
        }
    );
}

const questions = [
    {
        question: " 'When the Levee Breaks' covered by Zepparella was originally written and recorded by?",
        answers: {
            a: "Kansas Joe McCoy and Memphis Minnie",
            b: "James 'Iron Head' Baker",
            c: "Lead Belly",
            d: "John Lee Hooker",
        },
        correctAnswer: "a"
    },

    {
        question: " 'Where Did You Sleep Last Night' sung by Nirvana (1994) was originally made popular by?",
        answers: {
            a: "Lead Belly",
            b: "Willie Dixon",
            c: "Robert Johnson",
            d: "Muddy Waters",
        },
        correctAnswer: "a"
    },

    {
        question: " 'They're Red Hot' sung by Red Hot Chili Peppers was first recorded by?",
        answers: {
            a: "Muddy Waters",
            b: "Robert Johnson",
            c: "Blind Willie McTell",
            d: "Willie Dixon",
        },
        correctAnswer: "b"
    },

    {
        question: "Eric Clapton's rendering of 'Groaning the Blues' was an original by?",
        answers: {
            a: "Howlin' Wolf",
            b: "Muddy Waters",
            c: "Willie Dixon",
            d: "John Lee Hooker",
        },
        correctAnswer: "c"
    },

    {
        question: " 'Black Betty' sung by Larkin Poe was first recorded by?",
        answers: {
            a: "Robert Johnson",
            b: "James 'Iron Head' Baker",
            c: "Lead Belly",
            d: "John Lee Hooker",
        },
        correctAnswer: "b"
    },

    {
        question: " 'Catfish Blues' performed by Jimi Hendrix Experience was first recorded by?",
        answers: {
            a: "Robert Petway",
            b: "James 'Iron Head' Baker",
            c: "John Lee Hooker",
            d: "Muddy Waters",
        },
        correctAnswer: "a"
    },

    {
        question: " 'Prodigal Son' sung by The Rolling Stones was originally written/recorded by?",
        answers: {
            a: "Robert Petway",
            b: "Robert Johnson",
            c: "Willie Dixon",
            d: "Robert Wilkins",
        },
        correctAnswer: "d"
    },
];

//     if else statements   if correct answer is selected, the    

// if, else if, else   correct incorrect & not answered 
// .checked to see what radio buttons are checked




function showResults() {
    let answerContainer = quizContainer.querySelectorAll(".answers");                         //container for answers          
    let numbersCorrect = 0;
    let numbersIncorrect = 0;
    var userAnswers = results.children("input:checked");
    for (let i = 0; i < questions.length; i++) {                                                         //variable for answers
        // questions.forEach((currentQuestion, questionNumber) => {                                 //for each question get the selected answer
        let answerContainer = answerContainer[questionNumber];
        let selector = `input[name=question${questionNumber}]:checked`;
        let userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer[i] === questions[i].correctAnswer) {
            numbersCorrect++;                                                                   //add correct and incorrect answers to score
        }
        else
            numbersIncorrect++
    }
    console.log(userAnswer);
    $("#results").html(numbersIncorrect);
    $("#results").html(numbersCorrect);
}


$("#submitButton").on("click", showResults()
)
