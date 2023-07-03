const quizData = [
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        options: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Language", "Helicopters Terminals Motorboats Lamborginis"],
        correct: "a",
    },
    {
        question: "In which year JavaScript was launched?",
        options: ["1996", "1995", "1994", "none of the above"],
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerRadios = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const submitBtn = document.getElementById('submit')
const options = document.getElementById('options')

let currentQuiz = 0
let score = 0

loadQuetion()

function loadQuetion() {
    removeSelectAnswers()
    
    questionEl.innerText = quizData[currentQuiz].question

    for (let i = 0; i < quizData[currentQuiz].options.length; i++) {
        const option = quizData[currentQuiz].options[i];
        options.children[i].lastElementChild.innerText = option;
    }
}

function removeSelectAnswers() {
    answerRadios.forEach(answerRadios => answerRadios.checked = false)
}

function getAnsOfUser() {
    let answer
    answerRadios.forEach(answerRadio => {
        if(answerRadio.checked) {
            answer = answerRadio.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getAnsOfUser()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuetion()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})