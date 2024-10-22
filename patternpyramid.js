let n=5;
let string="";
for (let i=1;i<=n;i++) {
  for (let j=1;j<=n-i;j++){
    string+=" ";
  }
  for(let a=0;a<2*i-1;a++){
    string+="*";
  }
  string+="\n";
}
console.log(string);