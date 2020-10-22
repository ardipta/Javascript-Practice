const sayHello = (name) => `Hey there ${name} ! `


console.log(sayHello('Dipto'));


const todos = [{
    title: 'Buy Bread',
    isDone: true
},{
    title: 'Go to gym',
    isDone: true
},{
    title: 'Record videos',
    isDone: false
}]

const thingsDone = todos.filter((todo)=> todo.isDone === true)

console.log(thingsDone);