const increment = n => n + 1;

console.log(increment(1));
//The only thing that’s immutable here is the binding. const assigns a value ({}) to a variable name (foo), and guarantees that no rebinding will happen.