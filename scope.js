'use strict'

Array.prototype.max = function() {
  //console.log(this)
};

[].max() //[]

// ------------------------------------

var Foo = function(){
	this.k = 123;
	this.bar = function(){
		//console.log(this)
		//console.log(this.zeta)
	}
	this.barzin = function(){
		return this
	}
}

//a = new Foo() // need to instantiate
//now a.k !
//console.log(typeof Foo) //function
//console.log(typeof a) //object


// ------------------------------------

var foo = function(){} //anonymous function

//add prop to this scope, NOT FOO! 
//you need to instantiate 'new foo.bar' to get k
foo.bar = function(){ 
	this.k = 123 
	//console.log(this)
}
foo.barzin = function(){
	return this
}

//foo.bar() //{ [Function] bar: [Function], k: 123 }
//console.log(typeof foo) //function

// ------------------------------------
var nuuu = function NUUU(){
	var foo2 = {
		zeta: 123,
		bar: function(){
			console.log(this);
			console.log(this.zeta)
		}
	}
	return foo2
}

var foo2 = nuuu()


foo2.bar(); //{ bar: [Function], k: 123 }
//console.log(typeof foo2) //object


