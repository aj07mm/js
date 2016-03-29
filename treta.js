var foo = {
	bar : function(){
		console.log(this.baz);
		this.xxx();
	},
	baz: 123,
	xxx : function(){
		console.log('xxx')
	}
}

var foo2 = function(){
	this.bar = function(){
		console.log(this.baz);
	},
	this.baz = 123
}

foo.bar()
//foo2.bar() // foo2.bar is not a function !
// var x = foo2(); // undefined !
var y = new foo2();
// y.bar()