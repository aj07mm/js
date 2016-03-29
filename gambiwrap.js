function makePromise() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){ resolve('hey!') }, 500);
    });
}

var gambiwrap = function(p) {
        return p.then(function(r) {
            gambiwrap = function() {
                return r;
            }//function se auto define depois que recebe reponse da promise
        })
}


p1 = gambiwrap(makePromise());
p2 = gambiwrap(makePromise());
console.log(p1, p2)
setTimeout(function(){ console.log(gambiwrap()) }, 500);