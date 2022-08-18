// class Cat {

//     constructor(colorParam, breedParam, ageParam) {
//         this.color = colorParam;
//         this.breed = breedParam;
//         this.age = ageParam;
//         this.massage=false;
//     }

//     goMeow() {
//         console.log('Meooow!')
//     }

//     pet() {
//         this.massage = true;
//         console.log('Massage Cat') 
//     }
// }


// const Leo = new Cat('Grey', 'Sphynx', '3')
// const Bella = new Cat('White','Persian', '1')

// console.log(Leo)
// console.log(Bella)

// Bella.goMeow()
// Leo.goMeow()
    
// Bella.pet()
// Leo.pet()

//                 // Exercise 2 
// class Pirate {
//     constructor(name, age, sword) {
//         this.name = name
//         this.age = age
//         this.sword = sword
//     }
//     yoho(){
//         console.log(this.name + ': YO HO')
//     }
//        hasEyePatch() {
//         this.eyePatchOn = true;
//         console.log(this.name + ' has an eyepatch...');
//     }
     
//     dance() {
//         this.dancing = true;
//         console.log(this.name + ' doing a little pirate dancing');
//     }
// }

// const jollyRoger = [new Pirate('Justeene', 46, 'rapiers'), new Pirate('Black Jack', 38, 'sabers'), new Pirate('Blackbeard', 26, 'scimitars')]

// const blackPearl = [new Pirate('Captian Jolly', 26, 'Knives'), new Pirate('Davey', 28, 'machetes'), new Pirate('Silver-Hook', 32, 'axes')]

// for (let i = 0; i < jollyRoger.length; i++){
//     jollyRoger[i].yoho();
//     jollyRoger[i].hasEyePatch();
//     jollyRoger[i].dance(); 
// }



// for (let j = 0; j < blackPearl.length; j++){
//     blackPearl[j].yoho();
//     blackPearl[j].hasEyePatch();
//     blackPearl[j].dance();
// }


    // Extra Question

//     class Car {
//     constructor(number) {
//         this.number = number
//     }
// }

// let num = 0

// const freighter = []

// while (num <= 100) {

//     freighter.push(new Car(num))

//     num ++
// }

// console.log(freighter)


//         //Exercise 3


// class Governer {

//         static party = 'independent';
//         static age = 52;
//         static reelected = true;


//    static vote() {
//         console.log('Yes')
//     }
//     static veto() {
//         console.log('No')
//     }
//     static fundraise(funds) {

//         funds = 
//         console.log("Fundraise is " + funds + " Dollars")
//     }
// }

// Governer.vote()
// Governer.veto()
// Governer.fundraise(100)

    //Exercise 4

// class Person {
//     constructor (name, age, eyes) {
//         this.name = name;
//         this.age = age;
//         this.eyes = eyes;
//     }
// }

// class Person extends Governor {
//     constructor(name, age, eyes) { 
//         super(name, age, eyes) // pass them as arguments...
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

// function switcheroo(x){

//     let word = x.split(" ");
  
//   for (let index = 0; index < word.length; index++) {
//       if (word[index] == 'a') {
//           word[index] = 'b';
//       }
//       else if (word[index] == 'b') {
//           word[index] = 'a';
//       }
//   }
  
//     return word 

  
//   }

