function divide(num1,num2) {
                    try {
                        if(num2===0){
                              console.log("Division by zero is not allowed");
                        } else {
                            return num1/num2;
                        }
                    } 
                    catch(err){
                        console.log(err.message);
                    }
                }
console.log(divide(20,0));