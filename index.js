const array = [2, 4, 6, 8, 11, 20, 15, 22]
let odd = 0;
const oddnumbers = []
for (let i = 0; i < array.length; i++) {
    const num = array [i];
    if (num % 2 === 1) {oddnumbers.push (num);}
}
console.log(oddnumbers); 