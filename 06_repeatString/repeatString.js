const repeatString = function(string,num) {
    if (num<0)
        return "ERROR";
    let concatedString = '';
    for(i=0;i<num;i++){
        concatedString = concatedString+string;

    }
    return concatedString;

};

// Do not edit below this line
module.exports = repeatString;
