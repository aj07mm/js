var Foo = function(){
	this.bar = function(a, b, c){
		console.log(a, b, c);
	};
},
	a = new Foo();

a.bar.call(null, 1, 2, 3);
a.bar.apply(null, [1, 2, 3]);
