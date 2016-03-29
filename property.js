Object.prototype.values = function(obj){
	var res = [];
	for (var key in obj) {
	    if (Object.hasOwnProperty.call(obj, key)) {
	        res.push(obj[key]);
	    }
	}
	return res;
}

var foo = {a: 1, b: 2}
console.log(Object.values(foo))

