Array.prototype.remove = function(elm){
	var arrAux = this

	var removeIndexA = this.indexOf(elm)
	var firstPart = this.splice(0,removeIndexA)

	var secondPart = this
	var removeIndexB = secondPart.indexOf(elm)

	var secondPart = this.splice(removeIndexB+1)

	return firstPart.concat(secondPart)
};

console.log(['a','b','c','d'].remove('a'))
console.log(['a','b','c','d'].remove('b'))
console.log(['a','b','c','d'].remove('c'))
console.log(['a','b','c','d'].remove('d'))
