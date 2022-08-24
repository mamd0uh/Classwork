const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const result1 = nums.filter((num) => num < 4);
const result2 = panagram.filter((word) => word.length % 2 === 0);

console.log(result1)
console.log(result2)

const result3 = nums.find((num) => num % 4 === 0);
const result4 = panagram.find((word) => word.length > 5);

console.log(result3)
console.log(result4)

const result5 = nums.findIndex((num) => num % 3 === 0);
const result6 = panagram.findIndex((word) => word.length < 2);

console.log(result5)
console.log(result6)

nums.forEach((num) => console.log(num*3));
panagram.forEach((word) => console.log(word + "!"));

const result7 = nums.map((num) => num*100);
const result8 = panagram.map((word) => word.toUpperCase());

console.log(result7)
console.log(result8)

const result9 = nums.some((num) => num % 3 === 0);
const result10 = panagram.some((word) => word.toLowerCase().includes('a'));

console.log(result9)
console.log(result10)