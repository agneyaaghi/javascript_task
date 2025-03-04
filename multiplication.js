const num = parseInt(prompt('Enter an integer: '));
for(let i = 1; i <= 10; i++) {
    const mul = i * num;
    console.log(`${num} * ${i} = ${mul}`);
}
