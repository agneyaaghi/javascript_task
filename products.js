let products=[{pid:100,pname:'apple',band:'5kg',price:120000,display:'led'},
              {pid:101,pname:'samsung',band:'5kg',price:45000,display:'led'},
              {pid:102,pname:'blackberry',band:'4kg',price:50000,display:'led'},
              {pid:103,pname:'nokia',band:'3kg',price:1200,display:'lcd'},
              {pid:104,pname:'motorola',band:'4kg',price:10000,display:'lcd'}];
let names=products.map(product=>product.pname)
console.log(names);
let lcd=products.filter(product=>product.display==='lcd')
console.log(lcd);
let product5g=products.filter(product=>product.band==='5kg').map(product=>product.pname);
console.log(product5g);
let affordable=products.filter(product=>product.price<50000);
console.log(affordable);
let highestPrice=products.reduce((max,product)=>product.price>max.price?product:max,products[0]);
console.log(highestPrice);
let lowestPrice=products.reduce((min,product)=>product.price<min.price?product:min,products[0]);
console.log(lowestPrice);
