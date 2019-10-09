

var startButton;



let quizContainer = document.getElementById("quiz");
let resultsContainer = document.getElementById("results");
let submitButton = document.getElementById("submit");

$("#submit").hide();

//load page & hide button after start button clicked
$("#startButton").on("click", function () {
    $("#startButton").hide();
    $("#submit").show();
    quiz();
})

// quiz function 
function quiz() {
    var time = 60;                                                                           //timer
    setInterval(function () {
        time--;
        $("#countDown").html("You have a minute- GO!  :" + time + "sec");
        if (time === 0) {
            window.alert("Sorry, time's up! Start over?");
            location.reload();
        }
    }, 1000)

    var output = [];                                                                 // container for html output

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
                //made each question a form
                `<form name="${questionNumber}">
                <div class="question" id="${questionNumber}"> ${currentQuestion.question}  </div>
                <div class="answers"> ${answers.join("")} </div></form> <br>`
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
    var userAnswers;
    var numbersCorrect = 0;
    var numbersIncorrect = 0;

    for (var i = 0; i < questions.length; i++) {

 // *** Changed the userAnswers = line to jquery
        // userAnswers = document.querySelectorAll(`input[name="question${i}"]:checked`)
        userAnswers = $(`input[name="question${i}"]:checked`).val()
        console.log(`Question ${i}: ${userAnswers}`);
        if (userAnswers === questions[i].correctAnswer) {
            numbersCorrect++;
        } else {
            numbersIncorrect++
        }

        // *** Added correct and incorrect string to the html parameters
        $("#results").html("<h4>Correct:  </h4>" +  numbersCorrect);  
         $("#results").append("<h4>Incorrect: </h4>" + numbersIncorrect);
        
    }
}

$("#submit").on("click", showResults);
//original event handler userAnswers = (resulsContainer[i].querySelector(`input['name = question'+i+]:checked`) || {}).value;