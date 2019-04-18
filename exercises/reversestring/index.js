// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
}

module.exports = reverse;

/*//solution 1
function reverse(str) {
    return str.split('').reverse().join('');
}

//solution 2 w/ for loop
function reverse(str) {
    
    let reversed = '';
    
    for ( let i = str.length -1; i>=0; i-- ) {
        reversed += str[i];
    }
    
    return reversed;
}

//solution 3 w/ es6 for of loop
function reverse(str) {
    let reversed = '';
    
    for ( let char of str ) {
        reversed = char + reversed;
    }
    
    return reversed;
}

//solution 4 w/ reduce
function reverse(str) {
    return str.split('').reduce( (reversed, char) => {
        return char + reversed;
    }, '');
}

//solution 5 with map
function reverse(str) {
    let reversed = [];
    str.split('').map((e,i,arr)=>reversed.push(arr[arr.length-1-i]));
    return reversed.join('');
}

*/



