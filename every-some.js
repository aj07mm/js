arr = [1,2,3,'a']
arrIntegers = [1,2,3,4]

console.log('every')
//para todo
console.log(arr.every(function(n){return Number.isInteger(n)})) //false
console.log(arrIntegers.every(function(n){return Number.isInteger(n)})) //true

console.log('some')
//existe
console.log(arr.some(function(n){return Number.isInteger(n)})) //true
console.log(arrIntegers.some(function(n){return Number.isInteger(n)})) //true
