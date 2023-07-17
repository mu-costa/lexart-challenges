const arr = ["a", 10, "b", "hello", 122, 15];

// Obtain an array containing only letters.

const arr_only_letter = arr.filter((ele) => typeof ele === "string" && ele.length === 1);

console.log('Array com apenas letras', arr_only_letter);

console.log('-----------------------------------------');

const arr_only_numbers = arr.filter((ele) => typeof ele === "number");

console.log('Array com apenas números', arr_only_numbers)
console.log('-----------------------------------------');

const the_biggest_number = arr_only_numbers.reduce((prev,cur) => prev > cur ? prev : cur );

console.log('O maior número do array anterior',the_biggest_number);