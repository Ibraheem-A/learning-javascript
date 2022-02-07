/* 
var - global variable (like public)
let - can be reassigned (like private)
const - cannot be reassigned (like private final)
*/

const x = 10;

/* 
Javascript objects have type and value properties
== checks only value
=== checks value and type
*/

if (x == '10'){
    // this will be true
    console.log('the value of x is 10')
}


if (x === '10'){
    // this will be false
    console.log('the value and type of x is 10')
}