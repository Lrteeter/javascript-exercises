function range(start, end) {
  var arr = [];
  if (start === end) {
    arr.push(start);
    return arr;
  }
  else {
    console.log("start " + start);
    console.log("end " + end);
    range(start, end - 1).push(end);
  }
  return arr;
}

console.log(range(4, 9));
