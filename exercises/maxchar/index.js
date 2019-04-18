// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
}

module.exports = maxChar;

/*
function maxChar(str) {
    let chars = {};
    let greatest = 0;
    let greatestChar = '';
    for( let char of str ) {
        chars[char] ? chars[char]++ : chars[char] = 1;
    }
    
    for( let char in chars ) {
        if ( chars[char] > greatest ) {
            greatest = chars[char];
            greatestChar = char;
        }
    }
    
    return greatestChar;
}

//slightly more performant than for in?
function maxChar(str) {
    let charMap = new Map();
    let greatestChar = '';
    let greatestNum = 0;
    
    for (let char of str) {
        charMap.set(char, charMap.get(char)? charMap.get(char)+1 : 1);
    }
    
    for (let [key, value] of charMap) {
        if (value > greatestNum) {
            greatestChar = key;
            greatestNum = value;
        }
    }
    return greatestChar;
}
*/
