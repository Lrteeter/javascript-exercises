function myUnique(array) {
  var uniqueArray = [];
  for (var i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

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

function myTranspose(array) {
  var transposedArray = [];
  for (var i = 0; i < array.length; i++) {
    transposedArray.push([]);
  }

  for (var n = 0; n < array.length; n++) {
    for (var m = 0; m < array.length; m++) {
      transposedArray[n][m] = array[m][n];
    }
  }
  return transposedArray;
}

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
