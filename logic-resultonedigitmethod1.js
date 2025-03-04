function addDigits(num){
 while(num>=10){
 num=num.toString().split('').reduce((sum,digit)=>sum+ +digit,0);
 }
 return num;
 }
console.log(addDigits(38)); 
console.log(addDigits(0));  