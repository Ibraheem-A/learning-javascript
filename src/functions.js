/* 
    normal function
*/

function addnums (num1, num2){
    console.log(num1 + num2);
}

addnums(2,3);

// with default variables
function addnums (num1 = 1, num2 = 1){
    console.log(num1 + num2);
}

addnums();


/* 
    arrow function
*/

const addnums3 = (num1, num2) => {
    console.log(num1 + num2)
}
addnums3(6,6);

const addnums4 = (num1=4, num2=4) => console.log(num1 + num2)
addnums4();

const addnums5 = num1 => console.log(num1 + 1)
addnums5(9);


// traditional function
/*
todos.forEach(function(todo){
    console.log(todo.text)
})
//this becomes
todos.forEach((todo) => console.log(todo.text))
*/