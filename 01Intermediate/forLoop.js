const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// for(let i = 0; i< days.length; i++){
//     const element = days[i] 
//     console.log(element);
// } 

// for(i< days.length -1; i>=0; i--){
//     const element = days[i] 
//     console.log(element);
// }

days.forEach(function(day, index){
    console.log(`Starts with ${index+1}  -- ${day}`);
})