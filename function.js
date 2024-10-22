// function fun(){
//                 let a=50; 
//                 let b=20;
//                 let sum=a+b;
//                 let sub=a-b;
//                 console.log(sum);
//                 console.log(sub);
// }
// console.log(fun());

// function sum(num1,num2){
//    return add=num1+num2                 
// }
// console.log(sum(3,4));

function greatest(num1,num2,num3){
      if(num1>num2&&num1>num3){
              return "num1 is greatest";    
      }else if(num2>num3){
              return "num2 is greatest";
      }
      else{
              return "num3 is greatest";
      }
}
console.log(greatest(5,3,7));



