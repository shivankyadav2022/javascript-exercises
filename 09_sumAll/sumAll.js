const sumAll = function(a,b) {
  let sum =0;
  let counterInitiator =0;
  let counterLimit = 10;

  if((typeof a != "number") || (typeof b != "number") || (a<0)||(b<0)|| !(Number.isInteger(a)) || !(Number.isInteger(b)))
    return 'ERROR';
    if(b>a){
      counterInitiator=a;
      counterLimit=b;
      }
    else if(b<a){
      counterInitiator=b;
      counterLimit=a;
    }
    else
      return "There are no numbers in between ";
  for(i=counterInitiator;i<=counterLimit;i++){
    sum=sum+i;

  }
  return sum;

};


// Do not edit below this line
module.exports = sumAll;
