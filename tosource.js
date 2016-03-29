function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}
theDog = new Dog('asd','asd','ása','ad')

Cat = function(){
	this.name = 'fooCat'
}
// console.log(theDog.toSource()) Nao funciona
// console.log(Dog.toSource())
a = new Cat
a.toSource()