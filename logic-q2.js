let num=[3, 3, 4, 2, 4, 4, 2, 4, 4];
let element=0;
let count=0;
for (let i=0;i<num.length;i++){
    if(count===0){
        element=num[i];
    }
    count+=(element===num[i])?1:-1;
}
let a=0;
for (let i=0;i<num.length;i++){
    if (num[i]===element) {
        a++;
    }
}
if (a>num.length/2){
    console.log("majority element is :",element);
} else {
    console.log('No Majority Element');
}