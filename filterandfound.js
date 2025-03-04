let arr=[1,4,7,5,2,8];
let ans=arr.filter((num)=>num%2==0);
console.log(ans);

let details=[{name:"athira",course:"python"},
            {name:"arya",course:"mern"}
];
let found=details.find((item)=>{
return(item.name=="athira")
});
console.log(found);

let founds=details.filter((item)=>{
return(item.name=="arya")
});
console.log(founds);

let names=details.map((item)=>{
          return item.course
});
console.log(names);

let namesmap=details.map((item)=>{
          return item.name
});
console.log(namesmap);
