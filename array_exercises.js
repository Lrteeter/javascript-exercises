function myUnique(array) {
  var uniqueArray = [];
  for (var i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

console.log(myUnique([1, 2, 2, 4, 3, 4]));

function twoSum(array) {
  var pairs = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        pairs.push([i,j]);
      }
    }
  }
  return pairs;
}

console.log(twoSum([-1, 0, 2, -2, 1]));

function myTranspose(array) {
  var transposedArray = [];
  for (var i = 0; i < array.length; i++) {
    transposedArray.push([]);
  }
  // while transposedArray.length < array.length { transposedArray.push([]) }

  for (var n = 0; n < array.length; n++) {
    for (var m = 0; m < array.length; m++) {
      transposedArray[n][m] = array[m][n];
    }
  }
  return transposedArray;
}

console.log(myTranspose([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]));


function stockPicker(array) {
  var days = [];
  var maxDifference = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] - array[i] > maxDifference) {
        maxDifference = array[j] - array[i];
        days = [i,j];
      }
    }
  }
  return days;
}
console.log(stockPicker([0, -13, 50, 36, 3, 37]));
