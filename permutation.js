var arrChars = ['a', 'b', 'c'],
	permutations = [],
	aux = ''

//simplest, for definite length

// for (var i = arrChars.length - 1; i >= 0; i--) {
// 	for (var j = arrChars.length - 1; j >= 0; j--) {
// 		for (var k = arrChars.length - 1; k >= 0; k--) {
// 			console.log(arrChars[j] + arrChars[i] + arrChars[k])
// 		};
// 	};
// };

//======

function matrix2(arrA, arrB){
	var arrRes = []
	for (var i = arrA.length - 1; i >= 0; i--) {
		for (var j = arrB.length - 1; j >= 0; j--) {
			arrRes.push(arrA[i] + arrB[j]);
		};
	};
	return arrRes;
}

//-----

function permutation(arr){
	var res = [],
		arrDefault;
		//set once
		if(arr != arrDefault){
			arrDefault = arr;
		}

	for (var i = arrDefault.length - 2; i >= 0; i--) {
		arr = matrix2(arr, arrDefault)
	};

	return arr
}

arrA = ['a']
arrB = ['a', 'b', 'c']
arrC = ['a', 'b', 'c', 'd']
arrD = ['a', 'b', 'c', 'd', 'e']

console.log(permutation(arrA))