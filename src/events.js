// event listener takes in an event parameter
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => console.log('click'))

/* usually the submit button submits to a file. 
    So you have to prevent the default behaviour 
    if you dont want it to submit
*/
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');

    // get the current item
    console.log(e.target)

    // get the class of current item
    console.log(e.target.className)
})


btn.addEventListener('click', (e) => {
    e.preventDefault();
    // use # for querying id
    document.querySelector('#my-form').style.background = 'grey';
    // add css class
    document.querySelector('#my-form').classList.add('bg-dark');
    // use . for querying class
    document.querySelector('.items').children[2].innerHTML = '<h4>Bye!</h4>';
})