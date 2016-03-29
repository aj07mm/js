var arr = [1,2,3,4];
var arrOut = arr.reduce(function(memo, current){
	memo.push(current + 1);
	return memo;
}, [])

console.log(arrOut)