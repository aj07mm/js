x = 9; 
var module = {
  x: 81,
  getX: function() { return this.x; }
};

console.log(module.getX()); // scope: module, x:81

var boundGetX = module.getX; //joga uma function em this que é window
console.log(boundGetX()); // scope: window, x:9

console.log('----------');

var foo = module.getX
console.log(foo()); // scope: module

console.log('----------X');
console.log(this) // {}
var foo2 = module.getX.bind(this) //why? {}
console.log(foo2()); // scope: module
console.log('----------X');

var boundGetX = module.getX.bind(module); //joga uma function em this que é window
console.log(boundGetX()); // scope: window, x:81