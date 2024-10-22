function maximum(arr){
                    let max=arr[0];
                    for (let i=1;i<arr.length;i++) {
                        if(arr[i]>max) {
                            max=arr[i];
                        }
                    }
                    return max;
                }
                let num=[2,8,6,9,3];
                console.log(maximum(num));