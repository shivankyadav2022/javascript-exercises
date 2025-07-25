const fibonacci = function(num) {
    if(typeof num === "string")
        num = +num;
    if(num < 0)
        return "OOPS";
    if(num === 1)
        return 1;
    if(num===0)
        return 0;
    let a=0;
    let b=1;
    for(let i=0;i<num;i++){
        sum=a+b;
        a=b;
        b=sum;
        
    }
    return a;

};
// Do not edit below this line
module.exports = fibonacci;
