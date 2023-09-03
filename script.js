let operand1;
let operand2;
let operator;

function operate(operand1, operator, operand2) {
    if (operator === "+") {
        add(operand1, operand2);
    } else if (operator === "-") {
        substract(operand1, operand2);
    } else if (operator === "*") {
        multiply(operand1, operand2)
    } else if (operator === "/") {
        divide(operand1, operand2)
    } else if (operator === "**") {
        exponentiation(operand1, operand2)
    } else if (operator === "%") {
        modulus(operand1, operand2)
    }
}


function add(...a) {
    
    let result = a.reduce((operand1, operand2) => operand1 + operand2);
    console.log(result)
    return result;
}

function substract(...a) {
    let result = a.reduce((operand1, operand2) => operand1 - operand2);
    return result;
}

function multiply(...a) {
    let result = a.reduce((operand1, operand2) => operand1 * operand2);
    return result;
}

function divide(...a) {
    let result = a.reduce((operand1, operand2) => operand1 / operand2);
    return result;
}

function exponentiation(...a) {
    let result = a.reduce((operand1, operand2) => operand1 ** operand2);
    return result;
}

function modulus (...a) {
    let result = a.reduce((operand1, operand2) => operand1 % operand2);
    return result;
}