let operand1;
let operand2;
let operator;
let result;
let saved;
let pressed;

const p = document.querySelector("p");
const button = document.querySelectorAll("button")
console.log(button)
button.forEach(addEventListener("click", (e) => {
    if (e.target.className === "back") {
        p.textContent = p.textContent.slice(0, -1);
    }


    if (e.target.className === "clear") {
        p.textContent = "";
        operand1 = "";
        operand2 = "";
        operator = "";
        result = "";
    }
    if (e.target.className === "equals") {
        if (operand1 && operand2 && operator) {
            operate(operand1, operator, operand2);
        } return
    }
    
    if (e.target.className === "number") {
        if (result) {
            
            operand1 = result;
            result = "";
            operand2 = "";
            p.textContent = "";
            
            
        }
        p.textContent += e.target.textContent;
        if (!operator) {
            operand1 = p.textContent;
        } else {
            operand2 = p.textContent;
        }
    }
    
    if (e.target.className === "operator") {
        if (result) {
            operator = e.target.textContent;
            return
        }
        
        if (e.target.textContent === operator) {
            if (operand1 && operand2) {
            operate(operand1, operator, operand2);
            }
        } else {
            if (operand1 && operand2) {
                operate(operand1, operator, operand2);
                operator = e.target.textContent;
            } else {
                operator = e.target.textContent;
                p.textContent = "";
            }
            
            
        } 
        

    }
}))




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
    
     result = a.reduce((operand1, operand2) => Number(operand1) + Number(operand2));
     p.textContent = result;
    return result;
}

function substract(...a) {
     result = a.reduce((operand1, operand2) => Number(operand1) - Number(operand2));
     p.textContent = result;
    return result;
}

function multiply(...a) {
     result = a.reduce((operand1, operand2) => Number(operand1) * Number(operand2));
     p.textContent = result;
    return result;
}

function divide(...a) {
     result = a.reduce((operand1, operand2) => Number(operand1) / Number(operand2));
     p.textContent = result;
    return result;
}

function exponentiation(...a) {
     result = a.reduce((operand1, operand2) => Number(operand1) ** Number(operand2));
     p.textContent = result;
    return result;
}

function modulus (...a) {
     result = a.reduce((operand1, operand2) => Number(operand1) % Number(operand2));
     p.textContent = result;
    return result;
}