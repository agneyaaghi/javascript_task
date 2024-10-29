function subtract(num1,num2) {
    try {
        if(typeof(num1&&num2)!=='number'){
            console.log("Invalid input");
        }
        return num1-num2;
        } 
        catch(err){
        console.log(err.message);
       }
}
console.log(subtract(10,7));