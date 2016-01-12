function range(start, end) {
  var arr = [];
  if (start === end) {
    arr.push(start);
    return arr;
  }
  else {
    range(start, end - 1).push(end);
  }
  return arr;
}
