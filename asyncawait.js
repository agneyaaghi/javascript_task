function one(){
return new Promise((resolve,reject)=>{
       console.log("how are you!");
       setTimeout(()=>{resolve({name:"anu",age:20})},1000);            
});
}
async function two(){
try{
      console.log("hii hello");
      let word=await one();
      console.log(word); 
}catch (error){
      console.log("error");              
}
}
two();