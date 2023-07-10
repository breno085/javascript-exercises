const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((mult, item) => mult*item, 1);
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(numb) {
  let fac = numb;
  if (fac === 0)
  return 1;
  else {
  for (i = 1; i < numb; i++){
    fac = fac*(numb - i);
    }
  }
  return fac;
};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
