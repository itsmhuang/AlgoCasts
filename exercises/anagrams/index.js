// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//replace(/[^\w]/g,'')

function anagrams(stringA, stringB) {
}



module.exports = anagrams;


/*
function anagrams(stringA, stringB) {
    const stringASorted = stringA.split('').sort().join('').toLowerCase().replace(/[^\w]/g,''),
          stringBSorted = stringB.split('').sort().join('').toLowerCase().replace(/[^\w]/g,'');
    
    return stringASorted === stringBSorted;
}*/

/*
//solution 2
function anagrams(stringA, stringB) {
    const stringAMap = buildCharMap( stringA ),
          stringBMap = buildCharMap( stringB );
    
    //if maps have same amount of properties
    if ( Object.keys( stringAMap ).length === Object.keys( stringBMap ).length ) {
        for ( key in stringAMap ) {
            if ( !(Object.keys( stringBMap ).includes( key )) && stringBMap[ key ] !== stringAMap[ key ] ) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

function buildCharMap( str ) {
    const map = {};
    for ( char of str.toLowerCase().replace(/[^\w]/g,'') ) {
        if ( map[ char ] ) {
            map[ char ]++;
        } else {
            map[ char ] = 1;
        }
    }
    return map;
};
 */

/*
//solution 3 with maps
function anagrams(stringA, stringB) {
    const normalA = stringA.replace(/[^\w]/g,'').toLowerCase();
    const normalB = stringB.replace(/[^\w]/g,'').toLowerCase();
    
    const mapA = new Map();
    const mapB = new Map();
    
    for (let char of stringA) {
        mapA.set(char, mapA.get(char)? mapA.get(char)+1: 1);
    }
    for (let char of stringB) {
        mapB.set(char, mapB.get(char)? mapB.get(char)+1: 1);
    }
    
    for (let [key,val] of mapB) {
        
        
        if (mapA.get(key)) {
            if (mapA.get(key) !== val) {
                return false;
            }
            
        } else {
            return false;
        }
        
    }
    return true;
    
}*/