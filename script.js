let nums = [];
let operations = [];
let operator;
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let display = document.querySelector(".display");
let equal = document.getElementById("equal");
let num = "";
let result = 0;
let ac = document.getElementById("ac");

equal.addEventListener("click", function(){
  nums.push(parseInt(num));
  num = "";
});

equal.addEventListener("click", function() {
  operate();
  num = display.innerHTML;
  nums = [];
});

function operate() {
  for(let i = 0; i < operations.length; i++){
    if(operations[i] === "x"){
      multiply(i);
      operations.splice(i, 1);
      operate();
    }
    if(operations[i] === "÷"){
      divide(i);
      operations.splice(i, 1);
      operate();
    }
  }
  for (let j = 0; j < operations.length; j++) {
    if(operations[j] === "+"){
      add(j);
      operations.splice(j, 1);
      console.log(operations);
      operate();
    }
    if(operations[j] === "-"){
      substract(j);
      operations.splice(j, 1);
      console.log(operations);
      operate();
    }
  }
  display.innerHTML = result;
  console.log(result);
}

numbers.forEach(number => {
  number.addEventListener('click', function() {
    let current = display.innerHTML;
    display.innerHTML = current + number.innerHTML;
  });
  number.addEventListener("click", function(){
    num += number.innerHTML;
  });
});

operators.forEach(operator => {
  operator.addEventListener("click", function(){
    let current = display.innerHTML;
    display.innerHTML = `${current} ${operator.id} `;
  })
  operator.addEventListener("click", function(){
    nums.push(parseFloat(num));
    operations.push(operator.id);
    num = "";
  });
});

ac.addEventListener("click", function() {
  display.innerHTML = "";
  nums = [];
  num = "";
  operations = [];
  result = 0;
});

function add(j){
  result = (nums[j] + nums[j + 1]);
  nums.splice(j, 2, nums[j] + nums[j + 1]);
}

function substract(j){
  result = (nums[j] - nums[j + 1]);
  nums.splice(j, 2, nums[j] - nums[j + 1]);
}

function multiply(i){
  result = (nums[i] * nums[i + 1]);
  nums.splice(i, 2, nums[i] * nums[i + 1]);
}

function divide(i){
  result = (nums[i] / nums[i + 1]);
  nums.splice(i, 2, nums[i] / nums[i + 1]);
}