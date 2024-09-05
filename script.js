//querySelector
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', (e) => {
        handleNumberClick(e.target.value);
    });
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', (e) => {
        handleOperatorClick(e.target.value);
    });
});

document.querySelector('.equals').addEventListener('click', handleEqualsClick);

document.querySelector('.clear').addEventListener('click', clearDisplay);

//function to populate display

let displayValue = '';
let currentOperator = null;
let firstOperand = null;
let secondOperand = null;

const display = document.getElementById('display');

// Function to update the display
function updateDisplay(value) {
    display.innerText = value;
}

// Function to handle number button clicks
function handleNumberClick(value) {
    displayValue += value;
    updateDisplay(displayValue);
}

// Function to handle operator button clicks
function handleOperatorClick(op) {
    firstOperand = parseFloat(displayValue);
    currentOperator = op;
    displayValue = '';
}

// Function to handle equals button click
function handleEqualsClick() {
    secondOperand = parseFloat(displayValue);
    const result = operate(currentOperator, firstOperand, secondOperand);
    updateDisplay(result);
    displayValue = result;
}

// Clear the display
function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    updateDisplay('0');
}

// basic function math

function Add (a,b) {
    return a+b;
}

function Subtract (a,b) {
    return a-b;
}

function Multiply (a,b) {
    return a*b;
}

function Divide (a,b) {
    return a/b;
}

const first_Operand = 0;
const second_Operand = 0;
const operator_Sign = '';

function operate (first_Number, operator, second_Number) {
    switch (operator) {
        case '+':
            Add(first_Number, second_Number);
            break;
        case '-':
            Subtract(first_Number, second_Number);
            break;
        case '*':
            Multiply(first_Number, second_Number);
            break;
        case '/':
            Divide(first_Number, second_Number);
            break; 
        default:
            console.log(">.<");
    }
}
