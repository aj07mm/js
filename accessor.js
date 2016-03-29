function Name(first, last) {
    this.first = first;
    this.last = last;
}

Name.prototype = {
    get fullName() {
        return this.first + " " + this.last;
    },

    set fullName(name) {
        var names = name.split(" ");
        this.first = names[0];
        this.last = names[1];
    }
};

var eu = new Name('julio', 'marins');
eu.fullName = 'george harrison'
console.log(eu)