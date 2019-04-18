// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
}

module.exports = reverseInt;


/*
function reverseInt(n) {
    //toString, parseInt, sign
    const sign = Math.sign( n );
    
    const positiveNum = Math.sign( n ) === -1 ? n*-1 : n;
    
    return parseInt( positiveNum.toString().split('').reverse().join('') ) * sign;
    
}*/
