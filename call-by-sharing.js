'use strict'

var swap = function(a, b){
	var c = a;
		b = a;
		a = b;
};

var swapArr = function(a, b, index){
	var c = b[index];
		b[index] = a[index];
		a[index] = c;
};

var arrA = [1,2,3];
var arrB = ['a','b','c'];

swap(arrA[2], arrB[2]);
console.log(arrA, arrB); //nothing happens

swapArr(arrA, arrB, 2);
console.log(arrA, arrB); //nothing happens