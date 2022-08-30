        // I. Variables and Datatypes

// A-1 We assign a value to a variable using the assignment operator (=)
// A-2 Reassign it to a new value
// A-3 Set the new varaible to equal the existing variable 
// A-4 declare = when you create a variable
//     assign = to set a value to a variable
//     define = define the data type that is being coded
// A-5 Pseudocoding is an informal way of writing out code
// A-6 Around 60% of the time should be thinking about how to solve the problem and 40% for coding it.

        // B. Strings

//B-1/2 let firstVariable = "Hello World"
//B-3 firstVariable = 4
//B-4 let secondVariable = firstVariable
//B-5 secondVariable = "Hey"
//B-6 4  // console.log(firstVariable)
//B-7 let yourName = 'Mamdouh'
//      console.log(`Hello, my name is ${yourName}`)

        // C-1 Booleans

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false);
// console.log(e === 'Kevin');
// console.log(a != b || c);
// console.log(a * a === d);
// console.log(48 == '48');


        // D. The farm

//D-1/4  // let animal = "dog";
// if (animal === "cow"){
//     console.log ("mooooo")
//  }
//  else {
//     console.log("Hey! You're not a cow.")
//  }

        // E-1/2 Driver's ED

// let age = 10
// if (age >= 16 ){
// console.log ('Here are the keys!')
// }
// else if (age < 16){
//     console.log("Sorry, you're too young.")
// }

        // II. LOOPS

// A. The basics

// 1.
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// 2. 
// for (let i = 10; i <= 400; i++) {
//     console.log(i);
// }

// 3. 
// for (let i = 12; i < 4000; i+=3) {
//     console.log(i);
// }

// B. Get even

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i +"<-- is an even number");
//     } else {
//         console.log(i);
//     }
// }

// C1- C3
// for (let i = 1; i <= 100; i++){
//     if (i % 5 === 0 && i % 3 === 0){
//         console.log("I found a " + i + " High five!")
//         console.log("I found a " + i + " Three is a crowd.")
//     } else if (i % 5 === 0){
//         console.log("I found a " + i + " High five!")
//     } else if(i % 3 === 0){
//         console.log("I found a " + i + " Three is a crowd.")
//     }  
// }

// D. Savings Account

// 1.
// const bank_account = () => {
//     let sum = 0;
//     for (let i = 1; i <= 10; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(bank_account());

// 2.
// const bank_account = () => {
//     let sum = 0;
//     for (let i = 1; i <= 100; i++) {
//         sum += i;
//     }
//     return sum * 2;
// }
// console.log(bank_account());

        // III. Arrays & Control flow

// A. Talk about it

// A1-  Elements
// A2-  Yes, in the order that you create
// A3- Shopping list, Grocery list

// B. Easy Does It

// B1- let quotes = [ 'Be yourself', 'Be practical', 'Love yourself']

// C. Accessing elements

// C1- randomThings[0]
// C2-C3 
// const randomThings = [1, 10, 'Hello', true]
// randomThings[2] = 'World'
// console.log(randomThings)

// D. Change Values

// const ourClass = ['Slaty', 'Zoom', 'Sardine', 'Slack', 'Github']
// D1- ourClass[2]
// D2- 
// ourClass[4] = 'Octocat'
// console.log(ourClass)

// D3-
//  ourClass.push('Cloud City')
//  console.log(ourClass)


// E. Mix it Up

// const myArray = [5, 10, 500, 20];

// E1. myArray.push("Aegon", "Music");
// E2. myArray.shift();
// E3. myArray.unshift("Bob Marley");
// E4. myArray.pop();
// E5. myArray.reverse(); 
// console.log(myArray); 
// Yes, the array was mutated. Mutate means to change the original structure.
// It returned the Array backwords. 

// F. Biggie Smalls

// let number = 150;
// if (number < 100) {
//     console.log("little number");
// } else {
//     console.log("big number");
// }

// G. Monkey in the Middle 

// let number = 7 

// if (number < 5) {
//     console.log('little number');
// } else if (number > 10) {
//     console.log('big number');
// } else {
//     console.log('monkey');
// }

// // H. What's in Your Closet?

// H1 
// console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!');
// H2- 
// kristynsCloset.splice(6,0,'raybans');
// console.log(kristynsCloset)
// //H3- 
// kristynsCloset[5] = 'stained knit hat'
// console.log(kristynsCloset)
// H4- console.log(thomsCloset[0][0])
// H5- 
// console.log(thomsCloset[1][1])
// H6-
// console.log(thomsCloset[2][1])
// H7- 
// console.log('Thom is looking fierce in a ' + thomsCloset[0][0] + ', ' + thomsCloset[1][1] + ' and ' + thomsCloset [2][1] + '!');
// H8-
// thomsCloset[1][2] = 'footie pajamas'
// console.log(thomsCloset)

// // IV.Functions

// A. function printGreeting(name) {
//         console.log(`Hello there, ${name}!`);
// }
// printGreeting('Mamdouh')

// B. function printCool(name) {
//     return `${name} is cool`;
// }
// console.log(printCool('Mamdouh'));

// C. function calculateCube(number) {
//     return number*number*number;
// }
// console.log(calculateCube('5'));

// D. function isVowel(letter) {
//     if (letter.toLowerCase() === "a" || letter.toLowerCase() ===  "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u") {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isVowel('I'))

// E. function getTwoLengths(firstString, secondString) {
//     return [firstString.length, secondString.length]
// }
// console.log(getTwoLengths('Mamdouh', "Elmallah"))

// F. function getMultipleLengths(arrString) {
//         let stringLengths =[];
//         for (let i = 0; i < arrString.length; i++) {
//             stringLengths.push(arrString[i].length);
//         }
//         return stringLengths;
//     }
//     console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. function maxOfThree(x,y,z) {
//         if (x >= y) {
//             if ( x >= z) {
//                 return x
//             } else {
//                 return z
//             }
//         } else {
//             if(y >= z) {
//                 return y
//             } else {
//                 return z
//             }
//         }
//     }    
//     console.log(maxOfThree(6,9,1))

// H. function printLongestWord(words) {
//         let long = words[0]
//         for(let i = 1; i < words.length; i++){
//             if (words[i].length > long.length) {
//                 long = words[i]
//             }
//         }
//         return long
//     }
//     console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big"]))
    
// // A. Make a user object

// const user = {
//         name: 'Mamdouh',
//         email: 'mamdouh.elmalah@gmail.com',
//         age: 27,
//         purchased: []
//     };
    
//     // B. Update the user
//     user.email = "mamdouh.elmalah@hotmail.com"
//     user.age++
    
//     // C. Addings Keys and values
    
//     user.location = "New Jersey"
//     console.log(user)
    
//     // D. Shopaholic!
    
//     user.purchased.push("carbohydrates")
//     user.purchased.push("peace of mind")
//     user.purchased.push("Merino jodhpurs")
//     console.log(user.purchased[2])
    
//     // E. Object-within-object
    
//     user['friend'] = {
//         name: 'Grace Hopper',
//         age: 85,
//         location: 'New York',
//         purchased: []
//     };
//     console.log(user.friend.name);
//     console.log(user.friend.location);
//     user.friend.age = 55;
//     user.friend.purchased.push('The One Ring');
//     user.friend.purchased.push('A latte');
//     console.log(user.friend.purchased[1]);
    
// F. Loops 

// 1. 
// for (let i = 0; i < user.purchased.length; i++) {
//         console.log(user.purchased[i]);
//     }
// 2. 
// for (let j = 0; j < user.friend.purchased.length; j++) {
//         console.log(user.friend.purchased[j]);
//     }

// G. Functions can operate on objects

// 1.
// function updateUser() {
//         user.age++;
//         user.name = user.name.toUpperCase();
//     }
//     updateUser();
//     console.log(user)

// 2.
//     function oldAndLoud(person) {
//         person.age++;
//         person.name = person.name.toUpperCase();
//     }
//     oldAndLoud(user);
//     console.log(user);

// // Cat Combinator

// 1. Mama Cat

// const cat1 = {
//         name: 'Kitty',
//         breed: 'Persian',
//         age: 3
//     }
//     console.log(cat1.age);
//     console.log(cat1.breed);

// 2. Baba Cat

//     const cat2 = {
//         name: 'Lola',
//         breed: 'Sphynx',
//         age: 5
//     }

// 3. Combine Cats!

//     const combineCats = (mama, papa) => {
//         let newCat = {
//             name: mama.name + papa.name,
//             age: 1,
//             breed: mama.breed + '-' + papa.breed
//         }
//         return newCat;
//     }
//     console.log(combineCats(cat1, cat2));

// 4. Cat brain bender
    
//     console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));

