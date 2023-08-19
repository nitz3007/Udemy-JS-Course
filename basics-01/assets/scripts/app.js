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

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    createAndWriteLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    createAndWriteLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    createAndWriteLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    createAndWriteLog('DIVIDE', initialResult, enteredNumber, currentResult);
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);