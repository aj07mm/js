var foo = [1,2,3,4,5,6,7,8,9,10,11,12]
for (var i = foo.length - 1; i >= 0; i--) {
	console.log(i)
	if(i == 0){
		setTimeout(function(){
			console.log(i+1	)
		}, 1000);
	}
};
