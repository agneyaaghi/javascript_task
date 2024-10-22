function checking(num) {
                    for(let i=2;i<=num;i++) {
                        if(num%i===0) {
                            return false;
                        }
                    }
                    return true; 
                }
                let num=10;
                console.log(checking(num));