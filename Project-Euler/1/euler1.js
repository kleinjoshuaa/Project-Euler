// Problem 1 of Project Euler
// Written for The Odin Project
// (c) 2015 Joshua Klein

// Find the sum of all multiples of 3 or 5 below 1000

var MAX_NUM = 1000;
var SUM = 0;

var i;

for(i=0;i<MAX_NUM;i+=1) {
	if(i % 3 ==0 || i %5 == 0) {	
	SUM+=i;
}}

print(SUM);
