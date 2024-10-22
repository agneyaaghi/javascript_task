function sum(numbers) {
                    return numbers.reduce((accumulator, current) => accumulator + current, 0);
                }
                let Array=[2,4,6,8,10];
                let total=sum(Array);
                console.log(total);