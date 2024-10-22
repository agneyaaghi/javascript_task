function remove(array){
                    const unique=[]; 
                    for(let i=0;i<array.length;i++) {
                        if(!unique.includes(array[i])) {
                            unique.push(array[i]); 
                        }
                    }
                    return unique;
                }
                const arrayduplicate=[1,1,4,8,6,9,9,3];
                const unique=remove(arrayduplicate);
                console.log(unique);