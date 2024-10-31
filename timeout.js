function count(){
         for(let i=3;i>=0;i--)
         {
         setTimeout(()=>{
                 if(i>0){
                    console.log(i);
                 }else{
                    console.log("Go!");
                 }},(3-i)*1000);
         }
         }
         console.log(count());


console.log("kk");
setTimeout(()=>{
   console.log("k");
   
},2000)
console.log("kkk");