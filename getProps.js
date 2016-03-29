var Dalila = function(){
	this.name = 'Dalila';
}
//nao aparecem com console.log(object)
Dalila.prototype.lastName = 'bar';
Dalila.prototype.getCandy = function getCandy(){ return 'candy'}
Dalila.prototype.getProperties = function getProperties(){
	var props = [];
	for(i in this){
		props.push(this[i]);
	}
	return props;
}

var eu = new Dalila();

var bar = {
	a : 1,
	b : 2
}

for(i in bar){
	console.log(bar[i])
}