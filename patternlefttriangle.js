let n=5;
let string="";
for(let i=1;i<=n;i++){
    for(let j=0;j<n-1;j++){
        string+=" ";
    }
    for(let a=0;a<i;a++){
        string+="*";
    }
    string+="\n";
}
console.log(string);
