    const palindromes = function (string) {
    // convert the string to small case 
    let inStr = string.toLowerCase();

    //convert the string to array 
    let fullStringArray = inStr.split("");

    //delete spaces and commas 
    let filteredArray = fullStringArray.filter(char=>/[a-z0-9]/.test(char));

    const halfArrayLength = filteredArray.length/2;

    //check if the array has odd no of elements or even 
    if(filteredArray.length%2 ===0)
        return splitTwoAndCheck(filteredArray);
    else{
       let midLetterIndex = Math.floor(filteredArray.length/2);
       filteredArray.splice(midLetterIndex,1);
       return splitTwoAndCheck(filteredArray);
    }
        
    function splitTwoAndCheck(filteredArray){
    // split it into two halves 
    let firstHalf = filteredArray.slice(0,halfArrayLength);
    console.log(`First Half : ${firstHalf}`);
    let secondHalf = filteredArray.slice(halfArrayLength);
    console.log(`Second Half:${secondHalf}`);

    //reverse one half of the array 

    let arrayReversed = secondHalf.reverse();

    //compare if they are equal 
    for(i=0;i<halfArrayLength;i++){
        if(arrayReversed[i]!==firstHalf[i])
            return false;
    }
    return true;
    }
    // return true or false based on this comparison
    

};
// Do not edit below this line
module.exports = palindromes;
