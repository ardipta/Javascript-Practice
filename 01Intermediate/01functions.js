let sayHello = function (name) {
    console.log('Greeding message for users!');
    console.log(`Hey ${name}!`);
}

sayHello('Dipto')

let fullName = function(firstName, lastName){
    console.log('Welcome to My Site');
    console.log(`Hello Mr. ${firstName} ${lastName}`);
}

fullName('Md. Ashiqur', 'Rahaman')

let myAdder = function(num1, num2){
    let added = num1 + num2
    return added
}
console.log(myAdder(3, 5));
