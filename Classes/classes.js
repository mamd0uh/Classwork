// class Vehicle {
//     ​
//         // vin: 'X123Y',
//         // make: 'Boeing'
//     ​
//         // constructor() {}
//     ​
//         constructor(vinParam, makeParam, modelParam) {
//             this.vin = vinParam;
//             this.make = makeParam;
//             this.model = modelParam;
//             this.running = false;
//             // console.log('creating a new instance of Vehicle')
//         }
//     ​
//     ​
//         goVroom() {
//             console.log('vroom!')
//         }
//     ​
//         start() {
//             this.running = true;
//             console.log('running')
//         }
        
//         // toString() {
//         //     return 'Vehicle (' + this.vin + ') is a ' +
//         //         this.make + ' model ' + this.model;
//         // }
//     ​
//         toString() {
//             return 'Vehicle (' + this.vin + ') is a ' +
//                  this.make + ' model ' + this.model;
//         }
//     ​
//     ​
//     }
//     ​
//     // class Object { }
//     // class Vehicle { }
//     ​
//     const toyota = new Vehicle('X123Y', 'Boeing', 'shine')
//     const tesla = new Vehicle()
//     ​
//     // toyota.goVroom()
//     // tesla.goVroom()
//     ​
//     // toyota.start()
//     // tesla.start()
//     ​
//     // console.log(toyota, tesla)
//     ​
//     let arr = [1,2,3]
//     let arr2 = new Array()
//     ​
//     // arr.forEach()
//     ​
//     console.log(toyota.toString())


// class Character {
//     constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || false;  // short-circuit evaluation
// ​
//       console.log('inside of Character constructor...')
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//       console.log('Howdy ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
// ​
//     smite () {
//       console.log('i smited thee.');
//     }
  
//   }
// ​
// // child class and/or sub class
// // use extend to inherit properties and methods 
// // from parent and/or super class
// class Hobbit extends Character {
//     constructor(name, age, eyes, hair, height, weight) { // setup parameters...
//         super(name, age, eyes, hair) // pass them as arguments...
//         this.height = height
//         this.weight = weight
//         console.log('inside of Hobbit constructor...')
//     }
//     static steal() {
//         console.log('woohoo!')
//     }
//     greet(name) {
//         console.log('teeheee hi ' + name)
//         super.smite()
// ​
        
//     }
// }
// ​
// const frodo = new Hobbit('Frodo', 30, 'brown', 'black', 10, 100)
// // console.log(frodo)
// // frodo.greet('Sam')
// ​

// class Person {

// constructor(name) {

// this.name = name; 
// this.age = 0; 
// this.height = 0;
// this.weight = 0;
// this.mood = 0;
// this.hamster = [];
// this.bankAccount = 0;

// }

// getName() {
//   this.name = '';
// }

// getAge() {
//   return this.age 
// }

// getWeight() {
//   return this.weight 
// }

// getHeight() {
//   return this.height 
// }

// greet(name) {
//   console.log('Hello' + name)
// }

// eat() {
//   return this.weight++, this.mood++
// }

// excerice() {
//   return this.weight--
// }

// ageUp() {
//   this.age ++;
//   this.height ++;
//   this.weight ++;
//   this.mood --; 
//   this.bankAccount += 10
// }

// buyHamster(hamster) {

//   thisHamster.push(hamster);
//   return this.mood += 10, this.bankAccount -= this.getPrice() 
// }

// }

// const timmy = new Person ('Timmy');
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()

// timmy.eat()
// timmy.eat()
// timmy.eat()
// timmy.eat()
// timmy.eat()

// timmy.excerice()
// timmy.excerice()
// timmy.excerice()
// timmy.excerice()
// timmy.excerice()

// for (let i = 0; i < 9; i++){
//   timmy.ageUp()
// }

// const hamster = new Hamster('Gus') //Check this one

// hamster.owner = "Timmy"

// timmy.buyHamster(hamster)

// for (let i = 0; i < 15; i++){
//   timmy.ageUp()
// }

// timmy.eat()
// timmy.eat()

// timmy.excerice()
// timmy.excerice()


class Dinner {

constructor (appetizer, entree, dessert) {

  this.appetizer = appetizer;
  this.entree = entree; 
  this.dessert = dessert; 
}

}

class Chef { 

createDinner(appetizer, entree, dessert) {
  const newDinner = new Dinner (appetizer, entree, dessert);
  return newDinner;
}

}


const newChef = new Chef();
const dinner = newChef.createDinner('French Fries', "Pizza", "Ice Cream")

console.log(dinner);

