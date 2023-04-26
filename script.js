let nums = [];
let operations = [];
let operator;
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let display = document.querySelector(".display");
let equal = document.getElementById("equal");
let num = "";

equal.addEventListener("click", function(){
  nums.push(parseInt(num));
  num = "";
});

equal.addEventListener("click", operate);

function operate() {
  for(let i = 0; i < operations.length; i++){
    if(operations[i] === "x"){
      multiply(i);
      operations.splice(i, 1);
      console.log(operations);
      operate();
    }
    if(operations[i] === "/"){
      divide(i);
      operations.splice(i, 1);
      console.log(operations);
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
}

numbers.forEach(number => {
  number.addEventListener('click', function() {
    let current = display.innerHTML;
    display.innerHTML = current + number.innerHTML;
  });
  number.addEventListener("click", function(){
    num += number.innerHTML;
    console.log(num);
  });
});

operators.forEach(operator => {
  operator.addEventListener("click", function(){
    let current = display.innerHTML;
    display.innerHTML = `${current} ${operator.innerHTML}`;
  })
  operator.addEventListener("click", function(){
    nums.push(parseInt(num));
    operations.push(operator.id);
    console.log(operations);
    num = "";
  });
});

function add(j){
  console.log(nums[j] + nums[j + 1]);
  nums.splice(j, 2, nums[j] + nums[j + 1]);
  console.log(nums);
}

function substract(j){
  console.log(nums[j] - nums[j + 1]);
  nums.splice(j, 2, nums[j] - nums[j + 1]);
  console.log(nums);
}

function multiply(i){
  console.log(nums[i] * nums[i + 1]);
  nums.splice(i, 2, nums[i] * nums[i + 1]);
  console.log(nums);
}

function divide(i){
  console.log(nums[i] / nums[i + 1]);
  nums.splice(i, 2, nums[i] / nums[i + 1]);
  console.log(nums);
}