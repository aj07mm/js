//1 - Using Call
var DefaultService = function(){
	this.other = 'antonio';
}

var customMethods = {
	get: function(){
		return 123;
	}
}

var CustomMethods = function(){
	//executes DefaultService
	//using this as CustomMethods this as scope
	DefaultService.call(this);
	this.get = function(){
		return 123;
	}
};

console.log(new CustomMethods())
console.log(customMethods instanceof DefaultService);

console.log('-----------------')
//2 - Using prototype

var DefaultService = function(){
	this.other = 'jose';
};
var CustomMethods = function(){
	this.post = function(){
		return 123;
	}
};
CustomMethods.prototype = new DefaultService();
var customMethods = new CustomMethods();
console.log(customMethods.other) // jose
console.log(customMethods); // { post: [Function] }
console.log(customMethods instanceof DefaultService);

//OBS:

// (function(){
// 	var DefaultService = function(){
// 		this.other = 'antonio';
// 	}

// 	console.log(DefaultService());//undefined
// 	console.log(this.other);//antonio
// }());


// var DefaultService = function(){
// 	this.other = 'antonio';
// }

// console.log(DefaultService());//undefined
// console.log(this.other);//undefined :O
