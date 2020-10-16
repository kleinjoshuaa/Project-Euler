// Starting in the top left corner of a 2×2 grid, 
//and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// how many are in a 20x20 grid

// Project Euler problem 15

// create map
var map = [];
for (var i = 0; i < 20; i += 1) {
    map[i] = [];
    for (var j = 0; j < 20; j += 1) {
        map[i][j] = 0;
    }
}

while