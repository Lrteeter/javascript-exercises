function myEach(arr, fun) {
  for (var i = 0; i < arr.length; i++) {
    fun(arr[i], i);
  }
}

function multByTwo(num) {
  return (num * 2);
}

myEach([1, 2, 3, 4], multByTwo);

function myMap(array, func) {
  var mapped = [];

  myEach(array, function (el) {
    mapped.push(func(el));
  });

  return mapped;
}

function addNums(i, j) {
  return i + j;
}


console.log(myMap([1, 2, 5, 3, 7], multByTwo));

function myInject(array, fun) {
  var accum = array[0];

  myEach(array, function (el, i) {
    if (i > 0) {
      accum = fun(accum, el);
    }
  });
  return accum;
}

console.log(myInject([1, 2, 3], addNums));
