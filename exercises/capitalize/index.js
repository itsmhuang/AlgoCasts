// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
}

module.exports = capitalize;

/*
function capitalize(str) {
    const arr = str.split(' ');
    
    return arr.map( function( val ) {
        return val[0].toUpperCase() + val.slice(1);
    } ).join( ' ' );

}
 */

/*
//this works too
    const caps = [];
    for ( let word of arr ) {
        caps.push( word[0].toUpperCase() + word.slice(1) );
    }
    return caps.join( ' ' );*/