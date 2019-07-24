const calculator = {
  displayValue: '0', //represents the input or the result of an operation
  leftoperand: null,
  secundoperand: false,
  operation: null, //the operator for an expression
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
    console.log('operator', target.value);
    return;
  }
  if (target.classList.contains('dote')) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }
  if (target.classList.contains('clear')) {
    console.log('clear', target.value);
    return;
  }
  inputDigit(target.value);
  updatedisplay();

});

function inputDigit(digit) {
  const {
    displayValue
  } = calculator;
  calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;

}

function inputDot(dot) {
  if (!calculator.displayValue.include(dot)) {
    calculator.displayValue += dot;
  }
}