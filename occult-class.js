util = require('util');

function Point(x, y) {  
  this.X = x; // classe oculta A criada
  this.Y = y; // classe oculta B criada
}

var p1 = new Point(11, 22); // usando classe oculta B  
var p2 = new Point(33, 44); // usando classe oculta B

p1.Z = 55; // classe oculta C criada  
// p1 e p2 agora usam classes ocultas diferentes!
console.log(util.inspect(p1,  { showHidden: true, depth: 4 }))