let savedNum = null;
let newNum = 0;
let display ="0";
let recentPress = null;
let recentOperator = null;
const operatorsString = "+-*/";
const numbersString = "0123456789";

const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

function operate(operator,num1,num2) {
    let operation;
    if (operator === "+") operation = add;
    else if (operator == "-") operation = subtract;
    else if (operator == "*") operation = multiply;
    else if (operator == "/") operation = divide;
    return operation(num1,num2);
}

// update num variables and display
function appendValue(value) {

}

function updateDisplay() {
    document.querySelector(".display").textContent = newNum;
}

function resetCalculator() {
    savedNum = null;
    newNum = 0;
    display ="0";
    recentPress = null;
    recentOperator = null;

    updateDisplay();
}

function buttonEvent(button) {

    if (operatorsString.includes(button)) {



    }
    
    else if (numbersString.includes(button)) {

        appendValue(button);

    }
    
    else if (button == "=") {
        


    }

    else if (button == "C") {
        resetCalculator();
    }

}

document.querySelector(".buttons-container").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const buttonChoice = e.target.textContent;
        buttonEvent(buttonChoice);
    }
});

updateDisplay();