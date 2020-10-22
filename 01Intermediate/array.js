const numbers = ['one', 'two', 'three', 'four', 'five']

numbers[1] = 'Something'

console.log(numbers);

// start
numbers.shift() // remove at start
console.log(numbers);
numbers.unshift('Something') //Insert at start
console.log(numbers);

// Middle
numbers.splice(2, 1, 'Something') // 2=index, 1=how many element


// End
numbers.pop() // remove last element
console.log(numbers);

numbers.push('Something') //insert into last index
