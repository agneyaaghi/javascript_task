// start=0
// end=100
// cubes=1,8,27,64

let a=1;
let b=100;
for(let i=a;i*i*i<=100;i++){
        let cube=i*i*i;
        if(cube>=a&&cube<=b){
                    console.log(cube);
        }    
}