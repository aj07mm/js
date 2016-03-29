function uniqueInteger(a,b,c,d){
	console.log(arguments)
	console.log(uniqueInteger)
	uniqueInteger.counter = 0
	return ++uniqueInteger.counter;
}

uniqueInteger(1,2,3,4)

// var Foo = function(args){
// 	this.whatIsThis = function(){
// 		console.log(this)
// 	}
// }
// var bar = new Foo()
// bar.whatIsThis()