// let text="hii hello";
// let char=text.length;
// console.log(char);
// let chara=text.charAt(0);
// console.log(chara);
// let numbers=[4,7,8,3,10];
// function Even(numbers)
// { 
// return numbers.filter(num=>num%2===0);        
// }
// console.log(Even(numbers));
// let number=5;
// function factorial(number) 
// { 
// if(number === 0 || number === 1) {
// return 1;  
// }
// return number * factorial(number - 1);  
// }                 
// console.log(factorial(number));
function prime(num){
 for(let i=2;i<num;i++){
    if(num%i==0){
       return console.log("not prime");
       }             
 }
 return console.log("it is prime")
}
console.log(prime(8));
