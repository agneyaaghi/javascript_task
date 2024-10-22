function findLongestWord(sentence) {
const words=sentence.split(' ');
let longestWord='';
for(let word of words){
if (word.length>longestWord.length) {
longestWord=word;
}
}          
return longestWord;
}
const sentence = "this is a javascript program";
const longestWord = findLongestWord(sentence);
console.log("The longest word is:", longestWord);