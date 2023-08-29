// Falsy:
// false, 0, "", undefined, null, NaN

// Truthy:
// '0', ' ', []

let name = 12;

if (name || name == 0) {
    console.log("This is true.");
}
else {
    console.log("This is false");
}