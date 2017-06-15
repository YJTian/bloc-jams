/*define a function which takes two arguments, one is the array,
the other is the callback function*/
var forEachFunction = function (array, callback){
/*use "for" loop to call each element in the array in the callback
function*/
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}
