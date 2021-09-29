var inputs = document.querySelectorAll(".angle-input");
var checkBtn = document.querySelector("#is-triangle-btn");
var outputBox = document.querySelector("#output-box");


checkBtn.addEventListener('click', isTriangle);

function calculateSumOfAngles(angle1, angle2, angle3){
    var sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle(){
    var sum = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value) );
    if(sum === 180){
        showMessage("This angles from a triangle!")
    }else{
        showMessage("This is not a triangle!")
    }
}

function showMessage(message){
    outputBox.innerText = message
}

