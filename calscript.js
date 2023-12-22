// script.js

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const currentExpression = document.getElementById('display').value;
  document.getElementById('display').value = currentExpression.slice(0, -1);
}

function calculate() {
  const expression = document.getElementById('display').value;
  try {
    const result = eval(expression);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function calculateSquare() {
  const value = parseFloat(document.getElementById('display').value);
  if (!isNaN(value)) {
    document.getElementById('display').value = Math.pow(value, 2);
  } else {
    document.getElementById('display').value = 'Error';
  }
}

function calculateCube() {
  const value = parseFloat(document.getElementById('display').value);
  if (!isNaN(value)) {
    document.getElementById('display').value = Math.pow(value, 3);
  } else {
    document.getElementById('display').value = 'Error';
  }
}

function calculateSquareRoot() {
  const value = parseFloat(document.getElementById('display').value);
  if (!isNaN(value) && value >= 0) {
    document.getElementById('display').value = Math.sqrt(value);
  } else {
    document.getElementById('display').value = 'Error';
  }
}

function calculateCubeRoot() {
  const value = parseFloat(document.getElementById('display').value);
  if (!isNaN(value)) {
    document.getElementById('display').value = Math.cbrt(value);
  } else {
    document.getElementById('display').value = 'Error';
  }
}

function calculateExponentiation() {
  const expression = document.getElementById('display').value;
  try {
    const result = eval(expression);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function calculatePercentage() {
  const expression = document.getElementById('display').value;
  try {
    const result = eval(expression) / 100;
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function calculateFactorial() {
  const value = parseFloat(document.getElementById('display').value);
  if (!isNaN(value) && Number.isInteger(value) && value >= 0) {
    let result = 1;
    for (let i = 2; i <= value; i++) {
      result *= i;
    }
    document.getElementById('display').value = result;
  } else {
    document.getElementById('display').value = 'Error';
  }
}

function addParenthesis(opening) {
  document.getElementById('display').value += opening;
}

function closeParenthesis() {
  const currentExpression = document.getElementById('display').value;
  const openingParenthesesCount = (currentExpression.match(/\(/g) || []).length;
  const closingParenthesesCount = (currentExpression.match(/\)/g) || []).length;

  if (openingParenthesesCount > closingParenthesesCount) {
    document.getElementById('display').value += ')';
  }
}

// Function to speak the result using Web Speech API
function speakResult() {
  
  const displayValue = document.getElementById('display').value;

  // Create a SpeechSynthesisUtterance object
  const utterance = new SpeechSynthesisUtterance(displayValue);

  // Use the SpeechSynthesis API to speak the utterance
  window.speechSynthesis.speak(utterance);
}
