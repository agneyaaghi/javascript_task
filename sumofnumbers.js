function sum(numbers) {
    let total=0; 
    for (let i=0;i<numbers.length;i++) {
        total+=numbers[i];
    }
    return total; 
}
let array=[1,8,5,3,9,3];
let total=sum(array);
console.log(total);