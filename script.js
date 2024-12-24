let savedNum = null;
let currentNum = 0;
let recentOperator = null;
let recentPress = null;
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
function appendValue(num) {
    if (currentNum === 0) currentNum = +num;
    else currentNum = +(`${currentNum}` + num);
}

function updateDisplay() {
    document.querySelector(".display").textContent = currentNum;
}

function resetCalculator() {
    savedNum = null;
    currentNum = 0;
    recentPress = null;
    recentOperator = null;
}

function buttonEvent(button) {

    if (operatorsString.includes(button)) {

        if (savedNum) {
            currentNum = operate(recentOperator,savedNum,currentNum);
        }

        recentOperator = button;
    }
    
    else if (numbersString.includes(button)) {

        // selected an operator and just pressed it
        if (recentOperator && operatorsString.includes(recentPress)) {
            savedNum = currentNum;
            currentNum = 0;
        }

        // don't do anything if display is 0 and 0 pressed
        if (!(button==="0" && currentNum===0)) appendValue(button);

    }
    
    else if (button === "=") {
        
        if (recentOperator && savedNum) {
            currentNum = operate(recentOperator,savedNum,currentNum);
            savedNum = null;
            recentOperator = null;
        }

    }

    else if (button === "C") {
        resetCalculator();
    }

    
    if (button !== "C") recentPress = button;
    updateDisplay();

}

document.querySelector(".buttons-container").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const buttonChoice = e.target.textContent;
        buttonEvent(buttonChoice);
    }
});

updateDisplay();