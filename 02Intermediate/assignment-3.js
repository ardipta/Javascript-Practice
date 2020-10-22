const todos = [{
    title: 'Coding',
    isDone: true
},{
    title: 'Eating',
    isDone: true
},{
    title: 'Sleeping',
    isDone: true
},{
    title: 'Playing',
    isDone: false
},{
    title: 'Watching Tv',
    isDone: false
},{
    title: 'Going School',
    isDone: false
}]

const thingsNotDone = todos.filter((todo) => todo.isDone === false)

console.log(thingsNotDone)