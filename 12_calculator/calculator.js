const add = function(a,b) {
  let sum =0;
  sum=a+b;
  return sum;
	
};

const subtract = function(a,b) {
  let subtraction =0;
  subtraction = a-b;
  return subtraction;

	
};

const sum = function(arr) {
  return arr.reduce((sum,item)=>{
    sum += item;
    return sum;
  },0)
	
};

const multiply = function(arr) {
  return arr.reduce((mult,item)=>{
    mult *= item;
    return mult;
  },1)

};

const power = function(a,b) {
  let power = a**b;
  return power;
	
};

const factorial = function(n) {
  let fact=1;
  if(n!=0 && n!=1){
  for(let i=n;i>1;i--){
    fact*=i;
  };

  };
  return fact;
	
};


console.log(sum([1,2,3]));
console.log(multiply([1,2,3]));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
