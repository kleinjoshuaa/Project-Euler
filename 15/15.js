// Starting in the top left corner of a 2×2 grid, 
//and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// how many are in a 20x20 grid

// Project Euler problem 15

/* this appears to be some kind of combinatorics problem
 * For a 2x2 grid, if you can only go right and down you need to have 2 right moves and 2 down moves in any order
 * [R,R,D,D]
 * [D,D,R,R]
 * [R,D,R,D]
 * [D,R,D,R]
 * [D,R,R,D]
 * [R,D,D,R]
 * 
 * For a 3x3 grid you have 3 right moves and 3 down moves. 
 * [D,D,D,R,R,R]
 * [D,D,R,R,R,D]
 * [...]
 * The question asks for a 20x20 grid so 20 right moves and 20 down moves
 * It's a combinatorics problem
 * 
 * Specifically a permutation of 40 different moves and 20 repititions of R and 20 repititions of D
 * So 40!/(20!*20!)
 */


function factorial(x) {
    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
}

console.log(factorial(40) / (factorial(20) * factorial(20)));