
//1st the this in the function

//call(this, name, price);

//chain constructor

function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError('Cannot create product ' +
                      this.name + ' with a negative price');
  }
}

function Food(name, price) {
  console.log(this) // Food {}
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  console.log(this) // Toy {}
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
console.log(cheese, fun);


//Anoynimous

	// var animals = [
	//   { species: 'Lion', name: 'King' },
	//   { species: 'Whale', name: 'Fail' }
	// ];

	// var i = 0;
	// (function(i) {
	// 	  console.log('#' + i + ' ' + this.species + ': ' + this.name);
	// }).call(animals[i], i);

// case 2

	// var foo = function foo(arg){
	// 	console.log(arg)
	// };

	// foo.call(this, 'foo') //foo

// case 3
// function bar(){
// 	console.log(123)
// };

// this.call('bar') // TypeError: this.call is not a function
// Object.call('bar') // nothing
// window.call('bar') // nothing