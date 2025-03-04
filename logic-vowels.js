let s = "OpenAI";
let s1 = s.split("");
let arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
for (let i = 0; i <= s1.length; i++) {
  if (arr.includes(s1[i])) {
    s1.splice(i, 1);
    i--;
  }
}
s1 = s1.join("");
console.log(s1);
