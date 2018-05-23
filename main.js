let addBtn = document.getElementById("add");

let subtractBtn = document.getElementById("subtract");

let multiplyBtn = document.getElementById("multiply");

let divideBtn = document.getElementById("divide");

const acceptInput = () => {
    let inputOne = parseInt(document.getElementById("input-one").value);

    let inputTwo = parseInt(document.getElementById("input-two").value);

    return [inputOne, inputTwo];
}

// addBtn.addEventListener("click", function(){
//     let inputOne = parseInt(document.getElementById("input-one").value);

//     let inputTwo = parseInt(document.getElementById("input-two").value);

//     console.log(inputOne + inputTwo);      
// })

// subtractBtn.addEventListener("click", function(){
//     let inputOne = parseInt(document.getElementById("input-one").value);

//     let inputTwo = parseInt(document.getElementById("input-two").value);

//     console.log(inputOne - inputTwo);      
// })

// multiplyBtn.addEventListener("click", function(){
//     let inputOne = parseInt(document.getElementById("input-one").value);

//     let inputTwo = parseInt(document.getElementById("input-two").value);

//     console.log(inputOne * inputTwo);      
// })

// divideBtn.addEventListener("click", function(){
//     let inputOne = parseInt(document.getElementById("input-one").value);

//     let inputTwo = parseInt(document.getElementById("input-two").value);

//     console.log(inputOne / inputTwo);      
// })


addBtn.addEventListener("click", function(){
        acceptInput();
        console.log(acceptInput()[0] + acceptInput()[1]);         
})

subtractBtn.addEventListener("click", function(){
    acceptInput();
    console.log(acceptInput()[0] - acceptInput()[1]);         
})

multiplyBtn.addEventListener("click", function(){
    acceptInput();
    console.log(acceptInput()[0] * acceptInput()[1]);         
})

divideBtn.addEventListener("click", function(){
    acceptInput();
    console.log(acceptInput()[0] / acceptInput()[1]);         
})






