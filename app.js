function appendValue(value) {
  const display = document.getElementById("display");
  display.value += value;
  highlightButton(value);
}

function appendFunc(func) {
  const display = document.getElementById("display");
  switch (func) {
    // case 'sqrt':
    //     display.value += 'Math.sqrt(';
    //     break;
    case "pow":
      display.value += "**";
      break;
    // case 'log':
    //     display.value += 'Math.log10(';
    //     break;
    // case 'sin':
    //     display.value += 'Math.sin(';
    //     break;
    // case 'cos':
    //     display.value += 'Math.cos(';
    //     break;
    // case 'tan':
    //     display.value += 'Math.tan(';
    //     break;
    default:
      console.error(`Unknown function: ${func}`);
      break;
  }
  // Highlight the clicked button
  highlightButton(func);
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");
  let expression = display.value;

  // Handle closing parentheses
  expression = expression.replace(/\s*\)\s*$/, "");

  try {
    // Evaluate the expression in the display
    display.value = eval(expression);
  } catch (error) {
    // Handle any errors that occur during evaluation
    display.value = "Error";
  }
}
