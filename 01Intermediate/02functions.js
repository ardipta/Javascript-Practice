let myMultiplier = function(num1, num2){
    return num2 * num2
}

let guestUser = function(name = 'Dipto', courseCount = 0){
    return "Hello " + name + ' And your course count is ' + courseCount 
}

console.log(guestUser('ARD', 2));