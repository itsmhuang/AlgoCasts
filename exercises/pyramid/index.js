// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
}

console.log( pyramid(3) );

module.exports = pyramid;

/* function pyramid(n) {
    
    for ( let row = 1; row <= n; row++ ) {
        let pyramid = '';
        for ( let col = 1; col <= (n+n-1); col++ ) {
            if ( ( row + col ) > n && ( col - row ) < n ) {
                pyramid += '#';
            } else {
                pyramid += ' ';
            }
        }
        console.log( pyramid );
    }
} */


/*
function pyramid(n) {
    
    const midpoint = Math.floor( (2*n-1) /2 );
    
    for ( let row = 0; row < n; row++ ) {
        let pyramid = '';
        for ( let col = 0; col < (n+n-1); col++ ) {
            if ( midpoint - row <= col && midpoint + row >= col ) {
                pyramid += '#';
            } else {
                pyramid += ' ';
            }
        }
        console.log( pyramid );
    }
}
 */