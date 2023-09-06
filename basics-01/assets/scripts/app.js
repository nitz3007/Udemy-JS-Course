const defaultValue = 0;
let currentResult = defaultValue;
const logEntries = [];


//Gets input value frrominput field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

//Generates and write calculation logs
function createAndWriteOutput (operator, initialResult, enteredNumber) {
    const calcDescription = `${initialResult} ${operator} ${enteredNumber}`
    outputResult(currentResult, calcDescription); //from vendor file
}

function createAndWriteLog(operation, prevResult, operationNumber, result) {
    const logEntry = {
        operation: operation,
        prevResult: prevResult,
        number: operationNumber,
        result: result
    };
    logEntries.push(logEntry);
    console.log(logEntries);
} 

function calculate (operation) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let operator;
    if(operation === 'ADD') {
        currentResult = currentResult + enteredNumber;
        operator = '+';
    } else if ( operation === 'SUBTRACT') {
        currentResult = currentResult - enteredNumber;
        operator = '-';
    } else if (operation === 'MULTIPLY') {
        currentResult = currentResult * enteredNumber;
        operator = '*';
    } else if (operation === 'DIVIDE'){
        currentResult = currentResult / enteredNumber;
        operator = '/';
    }
    createAndWriteOutput(operator, initialResult, enteredNumber);
    createAndWriteLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));