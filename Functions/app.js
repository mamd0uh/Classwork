

// // function declaration / definition 

// function sayHello(){
//     return "Hello!"
// }

// //function expression 

// const sayHi = function() {
//     return "Hi!"
// }

// // Arrow function

// const sayHey = () => 'Hey'

// console.log(sayHello())
// console.log(sayHi())
// console.log(sayHey())

// function add(num1, num2) {
//     return num1 + num2 
// }

// console.log(add(2,3))
// console.log(add(5,5))

    // // Exercise 1

    // function computeArea(width, height){
    //     return `The area of a rectangle with a width of ${width} and a height of ${height} is ${width*height} square units.`
    
    // }
    
    // console.log(computeArea(9, 3))

//     // Exercise 2

function planetHasWater(planet) {
    if (planet.toLowerCase() == "earth" || planet.toLowerCase() == "mars") {
        return "true";
    } else {
        return "false";
    }
}

    console.log(planetHasWater("Mars"))
    console.log(planetHasWater("Jupiter"))

//     //Exercise 3

//     const computeArea2 = (width, height) => `The area of a rectangle with a width of ${width} and a height of ${height} is ${width*height} square units.`
//    console.log(computeArea2(3,4))
   
//    const planetHasWater2 = (planet) => (planet.toLowerCase()==="earth"||planet.toLowerCase()==="mars") ? 'true' : 'false'
//    console.log(planetHasWater2("earths"))
//    console.log(planetHasWater2("Mars"))
   