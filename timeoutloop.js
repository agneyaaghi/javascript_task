function fivetimes(){
              let message="hii how are you";
              for(let i=1;i<=5;i++){
                    setTimeout(()=>{console.log(message);},i*1000);
                    }
                }
               console.log(fivetimes());                