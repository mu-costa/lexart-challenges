const arr = ["a", 10, "b", "hello", 122, 15];

// Obtain an array containing only letters.

const arr_only_letter = arr.filter((ele) => typeof ele === "string" && ele.length === 1);

console.log('Array com apenas letras', arr_only_letter);
console.log('-----------------------------------------');

const arr_only_numbers = arr.filter((ele) => typeof ele === "number");

console.log(arr_only_numbers)
