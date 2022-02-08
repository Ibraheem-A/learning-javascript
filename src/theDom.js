// Single element
console.log(document.getElementById('my-form'))
console.log(document.querySelector('.container'))

// Multiple element
console.log(document.querySelectorAll('.item'))

// looping 
const items = document.querySelectorAll('.item')
items.forEach((item) => console.log(item))

// remove on client side
const ul = document.querySelector('.items');
ul.remove();
// edit
ul.firstElementChild.textContent = 'Hi!'
ul.children[1].innerText = 'John Doe'
ul.lastElementChild.innerText = 'Bye!'