function factorial(n){
                    if(n<0){
                        return 0;
                    }
                    if(n===0){
                        return 1;
                    }
                    if(n>0){
                    return n*factorial(n-1);
                    }
                    }
                    let num=4;
                    let result=factorial(num);
                    console.log(result);