// object literals

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Doctors appointment',
        isCompleted: false
    }
];

/*
Convert object literals to JSON
*/
const todosJSON = JSON.stringify(todos);
// console.log(todosJSON)

/*
traditional for loop
*/
for (let i=0; i<todos.length; i++){
    console.log(`Todo ${i} = ${todos[i].text}`)
}

/*
forOf loop
*/
for(let todo of todos) {
    // console.log(todo.text);
}

/*
forEach loop
*/
todos.forEach(function(todo){
    // console.log(todo.text);
});

/*
Map: Returns an array
*/
const todoMap = todos.map(function(todo){
    return todo.text;
});
// console.log(todoMap);

/*
filter: to filter using condition
*/
const todoIsCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
// console.log(todoIsCompleted);