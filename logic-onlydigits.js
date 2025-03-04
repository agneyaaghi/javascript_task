function onlynumbers (num){
     let result='';
     for(let i=0;i<num.length;i++){
          if(num[i]>='0'&& num[i]<='9'){
                    result +=num[i];
          }          
     }
     return result;
}
const num="789";
const onlydigits=onlynumbers(num);
console.log(onlydigits);