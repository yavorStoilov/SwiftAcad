var calculator = document.calculator;
var flag = false;

function getResult() {
    calculator.display.value = eval(calculator.display.value);
    flag = true;
}

function clearResult() {
    calculator.display.value = '';
    flag = false;
}

function addNumber(val) {
    if (flag) clearResult();
    calculator.display.value += val;
}

function addSymbol(val) {
    if (flag) flag = false;
    calculator.display.value += val;
}
