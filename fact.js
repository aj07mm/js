// console.log((function(n){
// 	console.log(arguments.caller())
// 	if(n === 1) return 1
// 	return n * arguments.callee(n - 1)
// })(4))


function whoCalled() {
	console.log(whoCalled.caller.toString());
}

whoCalled()