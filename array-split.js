//slice, splice, join

const num = [1, 2, 3, 45, 6, 7];

const part = num.slice(1, 4);

console.log(part);

const part2 = num.splice(2, 2, 22, 44);

console.log(part2);

console.log(num);

const together = num.join(" , ");

console.log(together); 