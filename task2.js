•	Declare an array of strings, e.g. ["apple", "banana", "cherry", "date", "elderberry"]
•	Use array methods to perform the following manipulations:
o	Append a string to the end of the array
o	Prepend a string to the beginning of the array
o	Remove a string from a specific index in the array and replace it with another string
•	Display the array before and after each manipulation to the user as output.

// 2- Task: Create an Array Manipulation Program
// · Use array methods to perform the following manipulations:
// o Append a string to the end of the array
var fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.push("Mango");
console.log(fruits);
// o Prepend a string to the beginning of the array
fruits.unshift("Mango");
console.log(fruits);
// o Remove a string from a specific index in the array and replace it with another string
fruits.splice(2, 1, "lemon", "kiwi");
console.log(fruits);
// · Display the array before and after each manipulation to the user as output.
