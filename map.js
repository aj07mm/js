var frase = ["c", "e", "u"];

var alfabeto = {
   c: 2,
   e: 3,
   u: 4
}
var fraseF = [];
frase.map(function(letter){
	fraseF.push(alfabeto[letter]) 
})
console.log(fraseF)