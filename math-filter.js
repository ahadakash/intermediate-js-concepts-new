// map, filter, find
//map & filter will return an array, find will return only one element

//map
const numbers = [3, 4, 5, 7, 8];

const result = numbers.map(function (num) {
    return num * num;
})

//or, (same as)

const result2 = numbers.map(x => x * x);

console.log(result2);

//filter

const bigger = numbers.filter(x => x > 7);

console.log(bigger);

//find

const bigger2 = numbers.find(x => x > 7);

console.log(bigger2);