var checkUpperCase = function(str){
	var patt = /[A-Z]/
	return patt.test(str);
};

console.log(checkUpperCase('A'))