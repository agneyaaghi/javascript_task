let inp="hello123";
let arr=inp.split("");
let vow=["a","e","i","o","u","A","E","I","O","U"];
let v=0;
let d=0;
let c=0;
for(let i=0;i<arr.length;i++){
     if(arr.includes(vow[i])){
          arr.splice(i,1);
          v++;  
          i--;       
     } 
     else if(!isNaN(arr[i])){
          arr.splice(i,1);
          d++;
          i--;
     }             
}
c=arr.length;
console.log('consonant:',c);
console.log('vowels:',v);
console.log('digits:',d);
