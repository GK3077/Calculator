let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let resultEl = document.getElementById("result-el")

function add() {
    let result = num1 + num2
    resultEl.textContent = "Result: " + result
}

function subtract() {
    let result = num1 - num2
    resultEl.textContent = "Result: " + result
}

function divide() {
    let result = num1 / num2
    resultEl.textContent = "Result: " + result
}

function multiply() {
    let result = num1 * num2
    resultEl.textContent = "Result: " + result
}




