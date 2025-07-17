const reverseString = function(string) {
    let stringToArray= string.split('');
    const arrayLength = stringToArray.length;
    let reverseStringArray=[];
    //reverse string one character at a time
      for(let i=arrayLength;i>=0;i--){
         //start iterating the array in reverse and store the elements in new array
        reverseStringArray.push(stringToArray[i]);
    }
   
    // change the array to string
    const finalString= reverseStringArray.join('');
    //return the string
    return finalString;


};

// Do not edit below this line
module.exports = reverseString;
