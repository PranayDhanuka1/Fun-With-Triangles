var base = document.querySelector("#base");
var height = document.querySelector("#height");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-Box")
submitBtn.addEventListener('click', calculateAreaOfTriangle)

function calculateAreaOfTriangle(){
    var area = areaOfTriangle(base,height);
    outputBox.innerText = "The area of triangle is " + area;
    
}

function areaOfTriangle(base,height){
    var base = Number (base.value);
    var height =  Number(height.value); 
    var porduct = base*height;
    var area = porduct/2;
    return area;
}
