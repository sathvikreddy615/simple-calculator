let addBtn = document.getElementById("add");

let subtractBtn = document.getElementById("subtract");

let multiplyBtn = document.getElementById("multiply");

let divideBtn = document.getElementById("divide");

const acceptInput = () => {
    let inputOne = parseInt(document.getElementById("input-one").value);

    let inputTwo = parseInt(document.getElementById("input-two").value);
}

addBtn.addEventListener("click", function(){
    let inputOne = parseInt(document.getElementById("input-one").value);

    let inputTwo = parseInt(document.getElementById("input-two").value);

    console.log(inputOne + inputTwo);      
})

subtractBtn.addEventListener("click", function(){
    let inputOne = parseInt(document.getElementById("input-one").value);

    let inputTwo = parseInt(document.getElementById("input-two").value);

    console.log(inputOne - inputTwo);      
})

multiplyBtn.addEventListener("click", function(){
    let inputOne = parseInt(document.getElementById("input-one").value);

    let inputTwo = parseInt(document.getElementById("input-two").value);

    console.log(inputOne * inputTwo);      
})

divideBtn.addEventListener("click", function(){
    let inputOne = parseInt(document.getElementById("input-one").value);

    let inputTwo = parseInt(document.getElementById("input-two").value);

    console.log(inputOne / inputTwo);      
})


// addBtn.addEventListener("click", function(){
//         acceptInput();
//         return inputOne + inputTwo;      
// })





