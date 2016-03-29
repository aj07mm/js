var inputSample = 6574;
var outputSample = 6745;

var outputSample = 6754;

var getSmallestPermutation = function(num){
  var numSplitted = num.toString().split(''),
      maxNum = Math.max.apply(null, numSplitted),
      swap;
  
  numSplitted = numSplitted.map(function(n){
    return parseInt(n)
  });

  for(var i=0;i<numSplitted.length;i++){
    if(numSplitted[i] > maxNum ){
      maxNum = numSplitted[i];
    }
    if(numSplitted[i] < numSplitted[i+1] && numSplitted[i+1] == maxNum){
      swap = numSplitted[i+1];
      numSplitted[i+1] = numSplitted[i];
      numSplitted[i] = swap;
    }
  }
  numSplitted = numSplitted.map(function(n){
    return parseInt(n)
  });

  return parseInt(numSplitted.join(''));
}

console.log(getSmallestPermutation(inputSample))