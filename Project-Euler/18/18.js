// Project Euler
// Problem 18

//By starting at the top of the triangle below and moving to adjacent numbers on the row below, 
// the maximum total from top to bottom is 23.

//Find the maximum total from top to bottom of the triangle below:



var triangle = `75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`;


var testTriangle = `3
7 4
2 4 6
8 5 9 3`;
// Sneakily - I believe this is a directed acyclic graph


function Triangle(triangleText) {
    parsedTriangle = triangleText.split('\n').map(function(v, i, a) { return v.split(' '); });
    maxPathValue = 0;
    maxPathArray = Array.from('0'.repeat(parsedTriangle.length)).map(function(v, i, a) { return parseInt(v, 10); });
    this.computePathValue = function(pathArray) {
        var pathSum = 0;
        pathSum = pathArray.reduce(function(p, v, i, a) {  return p + parseInt(parsedTriangle[i][v], 10); }, 0);
        return pathSum;
    };
    this.validatePath = function(pathArray) {
        for (var i = 0; i < pathArray.length; i += 1) {
            if ((pathArray[i + 1] - pathArray[i]) > 1 || ((pathArray[i + 1] - pathArray[i]) < 0 )) {
                return false;
            }
        }
        return true;
    };
    this.returnNextPath = function(path) {
        var newPath = path.slice();
        for (var i = newPath.length-1; i >= 0; i -= 1) {
            if (newPath[i] < i && (newPath[i - 1] == newPath[i])) {
                newPath[i] += 1;
                break;
            }
        }
        console.log(newPath);
        return newPath;
    };


    this.enumerateAllPaths = function() {
        var paths = [];
        var currentPath = maxPathArray;
        paths.push(currentPath);
        for (var i = 1; i < Math.pow(2, (parsedTriangle.length - 1)); i += 1) {
            currentPath = this.returnNextPath(currentPath);
            paths.push(currentPath);
        }
        return paths;
    };
    this.bruteForceMaxPath = function() {
        var paths = this.enumerateAllPaths();
        for (var i = 0; i < paths.length; i += 1) {
            var path = paths[i];
            var value = this.computePathValue(path);
            if (value > maxPathValue) {
                maxPathValue = value;
                maxPathArray = path;
            }
        }

    };
   this.getMaxValues = function() {
       return {
           maxPath: maxPathValue,
           maxArray: maxPathArray
       };
   };
}

var test = new Triangle(testTriangle);
test.bruteForceMaxPath();
console.log(test.getMaxValues().maxPath);
console.log(test.getMaxValues().maxArray);