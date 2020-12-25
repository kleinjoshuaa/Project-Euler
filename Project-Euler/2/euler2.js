// Problem 2 of Project Euler
// Written for The Odin Project
// (c) 2015 Joshua Klein

// Find the sum of all the even terms in the Fibonacci
// sequence whose values do not exceed 4 million

var MAX = 4000000;
var SUM = 0;

var i = 1;
var fibNums = [1,2];
var oldFibNum;

print("Fibbonacci Sequence");
print("===================");

for(i=0; fibNums[1] < MAX; i+=1) {
	 if(fibNums[1] % 2 === 0) {
	 SUM += fibNums[1]; 
 }
 oldFibNum = fibNums[1];
 fibNums[1] = getNextFibNum(fibNums);
 fibNums[0] = oldFibNum
 print('Next number: '+fibNums[1]);

}

function getNextFibNum (numAry) {
	return numAry[0]+numAry[1];
}

print(SUM);
