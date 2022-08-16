
//     // Objects

//     //           0        1         2
// let arr = ['kiwi', 'banana', 'apple']
// // object literal 
// const cat = {
//     name: 'Mr. Bean',
//     fur: 'grey, black, and white',
//     legs: 4,
//     age: 3,
//     favoriteThings: ['yarn', 'string', 'food'],
//     canSpeakFrench: false,
//     meow: function() {   // method syntax 1
//         console.log('meow')
//     }, 
//     purr: () => {       // method syntax 2
//         console.log('purr')
//     },
//     talk(speech) {      // method syntax 3
//         console.log(speech)
//     }
// }
// console.log(cat.favoriteThings[0]) // [...] // 'yarn'
// // access a property with dot notation
// // console.log(cat.name)
// // console.log(cat.fur)
// // console.log(cat.legs)
// // we can also access properties with brackets
// // by treating the property names as strings (because they are)
// // console.log(cat['name'])
// // console.log(cat['fur'])
// // console.log(cat['legs'])
// // we can create or reassign properties to different values
// cat.breed = 'calico'
// cat.temperament = ['mild']
// cat.temperament.push('angry') // [...] // .push
// // we cannot reassign the cat variable because it's a constant
// // cat = 'nothing'
// // using object properties in conditionals
// // if (cat.science) {  // undefined 
// //     console.log('wi')
// // } else {
// //     console.log('no')
// // }
// // methods... how do we run those?
// // cat.meow()
// // cat.purr()
// // cat.talk('feed me!')
// // Extra things
// // for ... of is for arrays
// for (let item of arr) {
// }
// // for ... in loop is for objects
// for (let key in cat) {
//     // key represents ... fur, name, legs, age, meow
//     console.log('key: ', key)
//     // key is a string value 
//     console.log('value: ', cat[key]) // gives us the value
//     console.log() 
// }
// // 

// const Egypt = {
//     capital: 'Cairo',
//     population: 100000000,
//     Cities: ['Alexandria', 'Giza', 'Luxor'],
//     speakEnglish: false,
//     attraction: function() {   // method syntax 1
//         console.log('Pyramids')
//     }, 
//     climate: () => {       // method syntax 2
//         console.log('Warm')
//     },
//     }

//     console.log(Egypt.capital)
//     Egypt.attraction()
//     Egypt.climate()

function count(str){
    let obj={};
    for(let i = 0; i < str.length; i++){
        
        let char= str[i];
         if(obj[char]) {
            obj[char] ++;

        }
         else {
            obj[char] =1;
         }
    }
        return obj;
}
  console.log(count("Hello"));