const removeFromArray = function(array,...arg) {

  for(i in arg){
  let selectedArgument = arg[i];
  for(j=0;j<array.length;j++){
    if(selectedArgument === array[j]){
      array.splice(j,1);
      j=0;
    }
  }
}
 return array;
};

// Do not edit below this line
module.exports = removeFromArray;
