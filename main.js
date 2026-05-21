const display = document.querySelector(".display");
let currentNumber = "";
let previousNumber = "";
let operator = "";

const updateDisplay = (value) => {
    display.innerHTML = value;
    display.style.animation = 'none';
    display.offsetHeight;
    display.style.animation = 'fadeIn 0.2s ease';
};

document.querySelectorAll(".btn-number").forEach((button) => {
  button.addEventListener("click", () => {
    handleNumber(button.innerHTML);
  });
});

document.querySelectorAll(".btn-operator").forEach((button) => {
    button.addEventListener("click", () => {
        if (currentNumber === '' && previousNumber !== '') {
            operator = button.innerHTML;
            return;
        }
        previousNumber = currentNumber;
        currentNumber = "";
        operator = button.innerHTML;
    });
});

const calculate = () => {
  let result = 0;
  switch (operator) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "x":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "÷":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }
  updateDisplay(result);
  currentNumber = result.toString();
  previousNumber = "";
  operator = "";
};

document.querySelector(".btn-equal").addEventListener("click", () => {
  calculate();
});

const handleNumber = (number) => {
  if (currentNumber.length >= 9) return;
  currentNumber += number;
  updateDisplay(currentNumber);
};

document.querySelector(".btn-ac").addEventListener("click", () => {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  updateDisplay(0);
});

const handleSpecial = (type) => {
  if (type === "+/-") {
    currentNumber = (parseFloat(currentNumber) * -1).toString();
    updateDisplay(currentNumber);
  } else if (type === "%") {
    currentNumber = (parseFloat(currentNumber) / 100).toString();
    updateDisplay(currentNumber);
  }
};

document.querySelectorAll('.btn-special').forEach(button => {
    button.addEventListener('click', () => {
        handleSpecial(button.innerHTML);
    });
});

document.querySelector('.btn-zero').addEventListener('click', () => {
    handleNumber('0');
});

