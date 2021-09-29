const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const correctAns = ["90°", " right angled"]  ;

function calculateScore() {
    var index = 0;
    var score = 0;
    var formResult = new FormData(quizform);
    for (let value of formResult.values()) {
        if (value === correctAns[index]) {
            score = score + 1;
            
        }
        index = index + 1;
    }
    output.innerText = "Your Score is " + score;
}
submitBtn.addEventListener('click', calculateScore)