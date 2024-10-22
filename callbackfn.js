let details=(age,callback)=>{
          console.log("hello,"+age);
          callback();
};
let nam=()=>{
        console.log("aghi");
}
details("20",nam);

// const greet =(name,callback)=>{
//        console.log("hello,"+name)
//        callback();
// };
// const saygoodbye = () =>{
//        console.log("goodbye");
// };
// greet("anu",saygoodbye);