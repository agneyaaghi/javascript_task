const input = "hello123";
let arr = input.split("");
let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let vow= 0;
let dig = 0;
let cons = 0;
for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
        arr.splice(i, 1);
        vow++;
        i--;
    }
    else if (!isNaN(arr[i])) {
        arr.splice(i, 1);
        dig++;
        i--;
    }
}
cons = arr.length;
console.log('vowels',vow);
console.log('digits:',dig);
console.log('consonant',cons);
