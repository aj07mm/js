arrChar = ['a', 'b', 'c']
arrNum = [1, 2, 3]
for (var i = arrChar.length - 1; i >= 0; i--) {
	console.log(arrChar[i])
	for (var j = arrNum.length - 1; j >= 0; j--) {
		console.log(arrNum[j])
		break;
	};
};