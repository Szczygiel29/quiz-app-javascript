const quizData = [
    {
        question: "What is the capital city of France?",
        a: "Paris",
        b: "Madrid",
        c: "Berlin",
        d: "Rome",
        correct: "a"
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Jupiter",
        b: "Saturn",
        c: "Mars",
        d: "Earth",
        correct: "a"
    },
    {
        question: "What is the highest mountain in the world?",
        a: "Mount Everest",
        b: "K2",
        c: "Kilimanjaro",
        d: "Mount Fuji",
        correct: "a"
    },
    {
        question: "What is the largest ocean in the world?",
        a: "Pacific Ocean",
        b: "Atlantic Ocean",
        c: "Indian Ocean",
        d: "Arctic Ocean",
        correct: "a"
    },
    {
        question: "What is the smallest country in the world?",
        a: "Vatican City",
        b: "Monaco",
        c: "San Marino",
        d: "Liechtenstein",
        correct: "a"
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Leonardo da Vinci",
        b: "Vincent van Gogh",
        c: "Pablo Picasso",
        d: "Rembrandt",
        correct: "a"
    },
    {
        question: "Who is the current President of the United States?",
        a: "Joe Biden",
        b: "Donald Trump",
        c: "Barack Obama",
        d: "George W. Bush",
        correct: "a"
    },
    {
        question: "What is the highest grossing film of all time?",
        a: "Avatar",
        b: "Avengers: Endgame",
        c: "Titanic",
        d: "Star Wars: The Force Awakens",
        correct: "b"
    },
    {
        question: "Who wrote the Harry Potter book series?",
        a: "J.K. Rowling",
        b: "Stephen King",
        c: "Dan Brown",
        d: "Suzanne Collins",
        correct: "a"
    },
    {
        question: "What is the largest country in the world by land area?",
        a: "Russia",
        b: "Canada",
        c: "China",
        d: "United States",
        correct: "a"
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});