
               let word1="who";
               let word2="howjj";
               let checking1=word1.split('').sort().join('');
               let checking2=word2.split('').sort().join('');
               if(checking1===checking2){
                   console.log("it is anagram");
               }else{
                   console.log("not anagram");
               }
        