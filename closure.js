function clock() {
    let value = 0;
    return function clock2() {
        value++;
        return value;
    }
}

const value1 = clock();
console.log(value1);

console.log(value1());

console.log(value1());


const value2 = clock();
console.log(value2());

console.log(value2());

