// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
}

module.exports = chunk;

/* function chunk(array, size) {
    //push into empty array
    //create array in first slot
    //if subarray.length is less than size, push
    //else, create another subarray
    
    const chunked = [];
    
    
    array.forEach( function( val, i ) {
        
        const lastChunk = chunked[ chunked.length - 1 ];
        
        if ( lastChunk && lastChunk.length < size ) {
            lastChunk.push( val );
        } else {
            chunked.push( [ val ] );
        }
    } );
    
    return chunked;

}*/