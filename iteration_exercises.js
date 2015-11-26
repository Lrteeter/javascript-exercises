function bubble(array) {
  var swapped = true
  while (swapped === true) {
    swapped = false;
    for(var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        var elem1 = array[i];
        var elem2 = array[i + 1];
        array[i] = elem2;
        array[i + 1] = elem1;
        swapped = true;
      }
    }
  }
  return array;
}

console.log(bubble([5, 1, 4, 2, 8 ]));


function mySubstrings(str) {
  var subs = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length + 1; j++) {
      subs.push(str.substring(i, j));
    }
  }
  return subs;
}

console.log(mySubstrings("cat"));
