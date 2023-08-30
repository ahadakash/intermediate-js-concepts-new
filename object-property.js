const students = [
    { id: 33, name: 'hello' },
    { id: 34, name: 'hi' },
    { id: 45, name: 'hy' },
    { id: 36, name: 'by' }
];

const names = students.map(x => x.name);
const ids = students.map(x => x.id);
console.log(ids);

const idss = students.filter(x => x.id > 40);
console.log(idss);

const idsss = students.find(x => x.id > 40);
console.log(idsss);