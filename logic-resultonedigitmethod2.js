function addDigits(num) {
return num===0?0:(num-1)%9+1;
}
console.log(addDigits(38));
console.log(addDigits(0));   