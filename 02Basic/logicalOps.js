// && - And Operation - Both side need to be true!
// || - OR operation One side need to be true!

let isVarified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true
// !isVarified = reverse = true
if(isVarified && isLoggedIn && hasPaymentToken){
    console.log('Greeding Message to user!')
    console.log('Grand access!')
}
else if(isVarified || isGuest){
    console.log('Guest user!')
}
else{
    console.log('Please contact with admin!')
}