// let iAmGlobal = 'somevalue'

// if(true){
//     var iAmLocal = 'some more value'
//     iAmGlobal = 'changed'
//     console.log(iAmGlobal);
//     console.log(iAmLocal);
// }
// console.log(iAmLocal);
// console.log(iAmGlobal);

// Kings Problem

let king = 'John'

if (true){
    let king = 'Sam'

    if (true){
        let king = 'Ram'
        console.log(king);
    }
}

if (true){
    console.log("I am second part: " + king)
}