    // inside parenthis we have
    // three statements:

    // statement 1:
    // declare and initialize a variable
    // scopred to the for loop

    //statement 2:
    // a condition that when true runs the
    // code in the for loop

    //incrementing of the variable in
    // order to eventually break the loop 

    // for (let i = 2; true; i++) {
    //     console.log(i)
    // }
   
    // Exercise #1 

    // for (let index =10; index > 0; index--){

    //     console.log(index)
    // }

    // //Exrercise #2

    // for (let index =1; index < 10; index=index+2){
    //     console.log(index)
    // }
    // for (let index =2; index < 11; index=index+2){
    //     console.log(index)
    // }

    // //Excerise #3

    // for (let index = 6; index < 61; index+=3){
    //     console.log(index)
    // }

    // // Exercise #4 

    // for (var index=1; index < 8; index++) {
    //     console.log("#".repeat(index))
    //   }

    //   // if 

    // // Exercise #7

    // let i = 1

    // while (i < 35 ) {
    //     console.log(i)
    //     i += 3

    // }

    // // Exercise #8
    
    // let i = 5

    // while (i <= 100) {
    //     console.log(i)
    //     i += 5
    // }
    
//     // Exercise #9

//     let i = 0

//     while (i<=20){
//         if (i %2 == 0){ 
//         console.log(i*3)
// } 
//     i ++
// }

//     // Exercise #10

//     let i = 0

//     while (i <= 20){
//         if(i == 1){
//         console.log(i += 1)
//     } else if (i == 2){
//         console.log(i)
//        } else if(i == 3){
//         console.log(i)
//        }
       
//         if (i %2!= 0 && i %3!=0){ 
//         console.log(i)
// } 
//         i ++
// }

 for (let i = 1; i <= 3; i++){
    let str = ""
    for (let j = 1; j <= i; j++){
        str += j
    }
    console.log(str)
 }