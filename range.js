var range = function(n){
	var way1 = Array.apply(null, new Array(n))
	var way2 = Array(n).join().split(',')
	return way1.map(function (elm, i) {
		return i;
	});
}
console.log(range(4))