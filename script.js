let num1;
let num2;
let operator;

function operate(num1, num2, operator){
  if (operator === "+") add(num1, num2);
  else if (operator === "-") substract(num1, num2);
  else if (operator === "*") multiply(num1, num2);
  else if (operator === "/") divide(num1, num2);
}

function add(x, y){
  return x+ y;
}

function substract(x , y){
  return x - y;
}

function multiply(x, y){
  return x * y;
}

function divide(x, y){
  return x / y;
}