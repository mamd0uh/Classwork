        // I. Variables and Datatypes
// A-1 = (Equal sign)
// A-2  resign with a value 
// A-3  We will combine each variable to new variable 
// A-4 Declare, Assign, Define
// A-5
// A-6

        //B.Strings
//B-1/2 const firstVariable = "Hello World"
//B-3  let firstVariable = 4
//B-4 let firstVariable = secondVariable
//B-5 let secondVariable = "Hey"
//B-6 hey
//B-7  let yourName = 'Mamdouh
    // console.log('Hello, my name is ' + yourName )

//C-1 

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
// console.log(false == false);
// console.log(e === 'Kevin');
// console.log(a != b || c);
// console.log(a * a === d);
// console.log(48 == '48');

//D-1/4  // let animal = "dog";
// if (animal === "cow"){
//     console.log ("mooooo")
//  }
//  else {
//     console.log("Hey! You're not a cow.")
//  }

//E-1/2

// let age = 10
// if (age >= 16 ){
// console.log ('Here are the keys!')
// }
// else if (age < 16){
//     console.log("Sorry, you're too young.")
// }

// II. LOOPS

//         // A. The basics

// 1.
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// 2. 
// for (let i = 10; i <= 400; i++) {
//     console.log(i);
// }

// 3. 
// for (let i = 12; i < 4001; i+=3) {
//     console.log(i);
// }

//         // B. Get even

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
//     }
//     else if (i % 5 === 0){
//         console.log("I found a " + i + " High five!")

//     }
//     else if(i % 3 === 0){
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

        //Arrays & Control flow
// A1-  Elements
// A2-  Yes, in the order that you create
// A3- Shopping list, Grocery list

// B1- let quotes = [ 'Be yourself', 'Be practical', 'Love yourself']

// C1- randomThings[0]
// C2-C3 
// const randomThings = [1, 10, 'Hello', true]
// randomThings[2] = 'World'
// console.log(randomThings)

// const ourClass = ['Slaty', 'Zoom', 'Sardine', 'Slack', 'Github']
// D1- ourClass[3]
// D2- 
// ourClass[4] = 'Octocat'
// console.log(ourClass)

// D3-
//  ourClass.push('Cloud City')
//  console.log(ourClass)


// E. Mix it Up

// const myArray = [5, 10, 500, 20];

// 1. myArray.push("Aegon", "Music");
// myArray.shift();
// myArray.unshift("Bob Marley");
// myArray.pop();
// myArray.reverse(); 
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

// function printGreeting(name) {
//         console.log("Hello there,  " + name + "!");
// }
// printGreeting('Mamdouh')
