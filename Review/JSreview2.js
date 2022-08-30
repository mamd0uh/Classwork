    // Arrays, Loops, and Conditional Reps

// Part II: JavaScript Reps

// Easy Going

// for(let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// Get Even

// for(let i = 0; i <= 200; i+=2) {
//     console.log(i);
// }

// Fizz Buzz

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('Fizz Buzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

// Wild Wild Life

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// // 1.
// plantee[2]++;

// // 2.
// wolfy[3] = 'Gotham City';

// // 3.
// dart.push("Hawkins");

// // 4. 

// wolfy.splice(0, 1, "Gameboy");
// console.log(wolfy);

// Yell at the Ninja Turtles

// // 1.
// const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// // 2.
// for (let turtles of ninjaTurtles) {
//     console.log(turtles.toUpperCase());
// }

// // Methods, Revisited

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies[8]);

// // 1. 
// favMovies.sort();
// console.log(favMovies);  // sorts strings into an alphabetical order

// // 2. 
// favMovies.pop();

// // 3. 
// favMovies.push('Guardians of the Galaxy');

// // 4. 
// favMovies.reverse();

// // 5. 
// favMovies.shift();

// // 6. 
// favMovies.unshift(); // doesn't return anything unless we have something inside the parentheses 

// // 7.

// favMovies.splice(favMovies.indexOf("Django Unchained"), 1, 'Avatar');

// // 8.

// favMovies.slice(0, Math.floor(favMovies.length/2))
// console.log(favMovies.slice(0, Math.floor(favMovies.length/2))
// ) // it will not permanently change our array, it creates a shallow copy that needs to be stored in a new array

// // 9. 

// let newSlice = favMovies.slice(0, Math.floor(favMovies.length/2))
// console.log(newSlice) // it's now stored in a new Array

// // 10. 

// console.log(favMovies)

// // 11. 

// console.log(favMovies.indexOf('Django Unchained'))
// // we deleted "Django Unchained" not "Fast and Furious" and it gives -1 as an answer

// // 12. 

// // const defines a constant reference, not a constant array

// //  Where is Waldo

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];
// // 1.
//                     whereIsWaldo.splice(1, 1)

// // 2.
//                     whereIsWaldo[1][2] = 'No One'
// // 3.
//                     console.log(whereIsWaldo[2][1][1])

//  Excited Kitten

// let catPhrases = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
// for(let i = 0; i < 20; i++){
//     console.log("Love me, pet me! HSSSSSS!")
//     if(i%2===0){
//         console.log(catPhrases[Math.floor(Math.random()*3)])
//     }
// }

//  Find the Median

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// console.log(nums.length);
// let med = Math.floor((nums.length+1)/2);
// nums.sort();
// console.log(nums[med]);

//  Return of the Closets

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// 1. Alien Attire

// let kristynsShoe = kristynsCloset.shift()
// thomsCloset[2].push(kristynsShoe)

// 2. Dress Us Up

// let kristynOutfit1 = `Kristyn is wearing a ${kristynsCloset[3]}, some ${kristynsCloset[4]} and a ${kristynsCloset[5]}`
// let kristynOutfit2 = `Kristyn is wearing a ${kristynsCloset[0]}, some ${kristynsCloset[4]} and a ${kristynsCloset[2]}`
// let kristynOutfit3 = `Kristyn is wearing a ${kristynsCloset[5]}, some ${kristynsCloset[3]} and a ${kristynsCloset[0]}`
// console.log(kristynOutfit1)
// console.log(kristynOutfit2)
// console.log(kristynOutfit3)

// let thomsOutfit1 = `Thomas is wearing a ${thomsCloset[0][3]}, some ${thomsCloset[1][1]}, and some ${thomsCloset[2][2]}`
// let thomsOutfit2 = `Thomas is wearing a ${thomsCloset[0][0]}, some ${thomsCloset[1][1]}, and some ${thomsCloset[2][0]}`
// let thomsOutfit3 = `Thomas is wearing a ${thomsCloset[0][2]}, some ${thomsCloset[1][0]}, and a ${thomsCloset[2][1]}`
// console.log(thomsOutfit1)
// console.log(thomsOutfit2)
// console.log(thomsOutfit3)

// // Dirty Laundry

// for(let i of kristynsCloset){
//     console.log(`WHIRR: Now washing ${i}`)
// }

// // Inventory

// console.log(thomsCloset[0])
// console.log(thomsCloset[1])
// console.log(thomsCloset[2])

// //thomsCloset.forEach(arr => console.log(arr))


