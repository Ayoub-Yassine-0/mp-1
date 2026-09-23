let firstInput = document.getElementById("first-input");
let secondInput = document.getElementById("second-input");
let output = document.getElementById("output");

function showResult(result) {
    output.innerHTML = String(result);

    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function addition() {
    let first = Number(firstInput.value);
    let second = Number(secondInput.value);
    let result = first + second;
    showResult(result);
}

function subtraction() {
    let first = Number(firstInput.value);
    let second = Number(secondInput.value);
    let result = first - second;
    showResult(result);
}

function multiplication() {
    let first = Number(firstInput.value);
    let second = Number(secondInput.value);
    let result = first * second;
    showResult(result);
}

js
function division() {
    let first = Number(firstInput.value);
    let second = Number(secondInput.value);

    if (second === 0) {
        output.innerHTML = "Cannot divide by zero";
        output.style.color = "red";
    } else {
        let result = first / second;
        showResult(result);
    }
}

function power() {
    let first = Number(firstInput.value);
    let second = Number(secondInput.value);
    let result = 1;

    for (let i = 0; i < second; i = i + 1) {
        result = result * first;
    }

    showResult(result);
}

function clearCalculator() {
    firstInput.value = "";
    secondInput.value = "";
    output.innerHTML = "";
    output.style.color = "black";
}