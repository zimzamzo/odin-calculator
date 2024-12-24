let savedNum = null;
let newNum = 0;
let display ="0";
let recentPress = null;
let recentOperator = null;

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

function buttonEvent(button) {

}

document.querySelector(".buttons-container").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const buttonChoice = e.target.textContent;
        buttonEvent(buttonChoice);
    }
});