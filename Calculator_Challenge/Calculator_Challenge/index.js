let num1 = 8
let num2 = 2

let result = null;
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sum_el = document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

let addBtn = document.getElementById("add")
let subtractBtn = document.getElementById("subtract")
let divideBtn = document.getElementById("divide")
let multiplyBtn = document.getElementById("multiply")


let add = ()=>{
    result = num1 + num2;
    sum_el.textContent = "Sum: "+result
    console.log("Triggered Result "+result)
}


let subtract = ()=>{
    result = num1 - num2;
    sum_el.textContent = "Subtraction: "+result

}


let divide = ()=>{
    result = num1 / num2;
    sum_el.textContent = "Division: "+result
}


let multiply = ()=>{
    result = num1 * num2;
    sum_el.textContent = "Product: "+result
}


addBtn.addEventListener("click", add)
subtractBtn.addEventListener("click", subtract)
divideBtn.addEventListener("click", divide)
multiplyBtn.addEventListener("click", multiply)