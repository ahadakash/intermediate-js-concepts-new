// break, continue
// break breaks the whole loop, continue only skip the logic that mathced

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < num.length; i++) {
    if (i > 5) {
        break;
    }
    console.log(num[i]);
}

for (let i = 0; i < num.length; i++) {
    if (i > 5) {
        continue;
    }
    console.log(num[i]);
}
