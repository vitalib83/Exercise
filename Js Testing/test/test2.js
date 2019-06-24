function transpose(oldArray) {
  var newArray = [];
  for (var i = 0; i < oldArray.length; i++) {
    for (var j = 0; j < oldArray[i].length; j++) {
      if (newArray[j] === undefined) {
        newArray[j] = [];
      }
      newArray[j][i] = oldArray[i][j];
    }
  }
  return newArray;
}

var deepEqual = require(`deep-equal`);

var arrayToChange = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var sortedArray = transpose(arrayToChange);

it(` for a matrix A returns the transpose of A` , () => {
    deepEqual(changearray === )


}
