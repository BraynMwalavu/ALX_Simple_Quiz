// Arithmetic functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

// Event binding helper
function handleOperation(operationFunc) {
  const num1 = parseFloat(document.getElementById("number1").value) || 0;
  const num2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = operationFunc(num1, num2);
  document.getElementById("calculation-result").textContent = result;
}

// Event listeners
document.getElementById("add").addEventListener("click", function () {
  handleOperation(add);
});

document.getElementById("subtract").addEventListener("click", function () {
  handleOperation(subtract);
});

document.getElementById("multiply").addEventListener("click", function () {
  handleOperation(multiply);
});

document.getElementById("divide").addEventListener("click", function () {
  handleOperation(divide);
});
