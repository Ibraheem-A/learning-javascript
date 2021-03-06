const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
var msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.style.color = 'red';
        msg.innerHTML = 'Please enter all fields!'

        setTimeout(() => msg.remove(), 3000) 
    } else if (!emailInput.value.includes('@')){
        msg.style.color = 'red';
        msg.innerHTML = 'Please enter a valid email address!'

        setTimeout(() => msg.remove(), 3000)
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        // Clear fields
        nameInput.value=''
        emailInput.value=''
    }
}