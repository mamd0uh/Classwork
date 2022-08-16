// // let learner = 'Sami'
// // let learner2 = 'Chris'
// // let learner3 = 'Stephin'

// //     //Arrays

// //     let learners = ['Sami', 'Chris', 'Stephin']
    

// let learners = [24, "Jade", true]

// learners // [24, Jade, true]

// learners [0] // index = 24

// // change 24 > 4 --- learners[0] = 4
// // to show length > console.log(learners.length)

// console.log(learners [2])

// // PUSH method (to add)
// learners.push("4") // 4 will be added to the index

// // POP method (to remove)
// learners.pop()

// //SHIFT method (removes first element)
// learners.shift()

// //UNSHIFT method (adds to the adds to the first of the array)
// learners.unshift("Usman")

// // Two extra methods

// let learners = ["Kristy", "Nathan", "Ronald"]
// let learners2 = ["Jade", "Rixio", "Teo"]

// // spread parameters

// let everybody = [...learners, ..learners2]
// //["Kristy", "Nathan", "Ronald","Jade", "Rixio", "Teo"]

// // rest operator

// function add(...numbers){

//     // first index is always 0
//     //last index is always length of array -1
//     // [4,5,6,7,8,10]
//     for (let i = 0; i < numbers.length; i++){
//         console.log(numbers[i])
//     }
// }

// add(4,5,6,7,8,19)

// // Excerise #1
// function maxOfTwoNumbers(num1, num2) {
//     if (num1 > num2) return num1;
//     else return num2;
//   }
//   console.log(maxOfTwoNumbers(30, 60))

// // Exercise #2

// let numbers = [12,26,42]
// function maxOfThree(num1, num2, num3) {
//     if ( 12 < 26 < 42 ){
//         return 42;
//     }
//     else{
//         return "nothing";
//     }
// }

// console.log(maxOfThree(12,26,42))

// // Exercise #3

// let vowels = ["a", "e", "i", "o", "u"]
//     function vowels(...vowels)
//         if (letter === vowels )

// // ARRAYS 

// let arr = [3, 10, 15]

// // firstName.split('.') string method
// // arrOfStrs.joint('.') array method

// for (let num of arr) {
//     console.log(num)
// }

// let str = "Bobby"

// for (let character of str) {
//     console.log(character)
// }

//     // SPLICE 

// let fruit = [apple, pear, banana, kiwi]
//         // 0 = starting remove, 3 = delete count
// fruit.splice(0, 3)

// fruit.splice (1, 0, 'blueberry', 'cherry') // adding items after the 2nd item

// console.log(arr)

//     // SLICE

//     let fruit2 = fruit.slice()

//     let fruit2 = fruit.slice(1, 3)

//     console.log('fruit: ', fruit1)
//     console.log('fruit2: ', fruit2)

//     // STRINGS

// let firstName = "Bobby. Went. To. The. Mall."


// console.log(firstName[0])

// for (let i = 0; i < firstName.length; console.log(firstName.charAt(i).toUpperCase()))


// // Exercise 3 


// function isCharAVowel(char) {
// if (char === 'a' || char === "e" || char === "i" || char === "o" === char === "u")

// } {
// return true 
// } 
//     return false
// }

// // Exercise 4 

// const sumArray = function (arr) {
//     let output = 0 
    
//     for (let i = 0; i < arr.length; i++) {

//         output += arr[i]
//     }

//     return output
// }

//  console.log(sumArray([6, 7, 3, 2, 1, 9]))

    // // Exercise 5

    // function multiplyArray(arr) {

    //     let output = 0
    //     for (let num of array) {

    //         output*= num
    //     }
    //     return output
    // }

    // console.log(multiplyArray([2, 4, 5]))


    //     // Exercise 6
    
    // const numArg = function (items) {
    //     return items.length 
    // }

    // console.log(numArg('item1', true, false, 1, 2, 3))

    //     // Exercise 7 

    //     function reverseString(str) {
    //         const output = []

    //         for (let it = str.length; i > 0 ; i--) {
    //         output.push(str[i])
    //     }
    //     return output
    // }

    // console.log(reverseString('Hello'))

        // // Exercise 8 
        
        // const longestStringInArray = function (arr) {
        //     let longestLength = 0 

        //     for (let i = 0; i < arr.length; i++) {

        //         if (arr[i].length > longestLength) {

        //             longestLength = arr[i].length
        //         }

        //     }

        //     return longestLength
        // }

        // console.log(longestStringInArray{['hello', 'bye', 'world', 'function']})

    //         // Exercise 9 

    // function stringLongestThan(arr, num) {
    //     const output = []

    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i].length > num) {
    //             output.push(arr[i])
    //         }
    //     }
    //         return output
    //     }

    //     console.log(stringLongestThan(['hello', 'bye', 'world', 'function'], 3))

    // // Bonus 
    // function addList(...nums) {
    //     if (!nums) return 0

    //     let output = 0 

    //     for (let i = 0; i < nums.length; i++) {
    //         output += nums[i]
    //     }

    //     return output
    // }

    // console.log(addList()) // 0
    // console.log(addList(1, 50, 1.23)) // 52.23



    // let fruits = ["kiwi", "oranges", "apple", "banana"]
         
    //         //for loops
    //         //for (let i = 0; i < fruits.length; i++)

    //         //while loops 
    //         // (while i < fruits.length)

    //         //for of
    //         // for (let item of fruits)

    //         // forEach (build-in array method)
    //             // fruits.forEach(function(items, index, myArray){})

    //         fruits.forEach(function(fruitItem) {
    //             console.log(fruitItem)
    //         })

    //         // callback functions
    //         const myForEachFunction =  function() {
                
    //         }
    // // map method 

    // let brandNewArray = fruits.map(function(item, idx){
    //     //change the current item
    //     return item + '!'

    // })

    // // console.log(brandNewArray)

    // for (number = 1; number <= 100; number++) {
    //     if (number % 3 == 0 && number % 5 == 0) {
    //         console.log('FizzBuzz');
    //     }
    //     else if (number % 3 == 0) {
    //         console.log("Fizz");	
    //     }
    //     else if (number % 5 == 0) {
    //         console.log("Buzz");
    //     }
    //     else {
    //         console.log(number);
    //     } 
    // }

    // // Bonus Question

    // const change = 

