const inputs = document.querySelectorAll(".side-input");
const submitBtn = document.querySelector("#hypotenuse-btn");
const outputBox = document.querySelector("#output-Box");


function calculateSumOfSquare(a,b){
    const sumOfSquare = (a*a)+ (b*b);
    return sumOfSquare;   
}

function calculateHypotenuse(){
    const sumOfSquare = calculateSumOfSquare(Number(inputs[0].value),Number(inputs[1].value));
    const hypotenuse = Math.sqrt(sumOfSquare);  
    outputBox.innerText = "The length of hypotenuse is "+ hypotenuse;
}


submitBtn.addEventListener('click', calculateHypotenuse);