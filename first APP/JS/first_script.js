const calculator = {
  displayValue: '0', //represents the input or the result of an operation
  leftoperand: null,
  secundoperand: false,
  operation: null, //the operator for an expression
};
const performecalculation = {
  '/': (leftoperand, secundoperand) => leftoperand / secundoperand,
  '*': (leftoperand, secundoperand) => leftoperand * secundoperand,
  '+': (leftoperand, secundoperand) => leftoperand + secundoperand,
  '-': (leftoperand, secundoperand) => leftoperand - secundoperand,
  '=': (leftoperand, secundoperand) => secundoperand
};

function updatedisplay() {
  const display = document.querySelector(".screen-Calculator");
  display.value = calculator.displayValue;
}
updatedisplay();

const Keys = document.querySelector('.keys');
Keys.addEventListener('click', (event) => {
  // body...
  const {
    target
  } = event;
  if (!target.matches('button')) {
    return;
  }
  if (target.classList.contains('operator')) {
    Oparator(target.value);
    updatedisplay();
    return;
  }
  if (target.classList.contains('dote')) {
    inputDot(target.value);
    updatedisplay();
    return;
  }
  if (target.classList.contains('clear')) {
    clear(target.value);
    updatedisplay();
    return;
  }
  inputDigit(target.value);
  updatedisplay();

});

function inputDigit(digit) {
  const {
    displayValue,
    secundoperand
  } = calculator;
  if (secundoperand === true) {
    calculator.displayValue = digit;
    calculator.secundoperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }

  console.log(calculator);
}

function inputDot(dot) {
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

function Oparator(nextoparator) {
  const {
    leftoperand,
    displayValue,
    operation
  } = calculator
  const inputValue = parseFloat(displayValue);
  if (operation && calculator.secundoperand) {
    calculator.operation = nextoparator;
    console.log(calculator);
    return;
  }
  if (leftoperand == null) {
    calculator.leftoperand = inputValue;
  } else if (operation) {
    const curentValue = leftoperand || 0;
    const result = performecalculation[operation](leftoperand, inputValue);
    calculator.displayValue = String(result);
    calculator.leftoperand = result;
  }
  calculator.secundoperand = true;
  calculator.operation = nextoparator;
}

function clear() {
  calculator.displayValue = '0';
  calculator.leftoperand = null;
  calculator.secundoperand = false;
  calculator.operation = null;
  console.log(calculator);
}