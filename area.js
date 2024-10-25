
// ldet calculateArea =  function (radius) {
//                     const output = [];
//                     for(let i = 0; i< radius.length; i++){
//                     output.push(Math.PI * radius[i] * radius[i]);
//                     }
//                     return output;
//                 }

//                 let radius = [1, 2, 3];
//                 console.log(calculateArea(radius));
                
let area = function(radius){
                    return Math.PI * radius * radius;
                }
let diameter = function(radius){
                    return 2 * radius;
                }
let calculate = function(radius, logic){ 
                    const output = [];
                    for(let i = 0; i < radius.length; i++){
                        output.push(logic(radius[i]))
                    }
                    return output;
                }
const radius = [2, 4, 6];
console.log(calculate(radius, area));
console.log(calculate(radius, diameter));