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
