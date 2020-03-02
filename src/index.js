
exports.min = function min (array) {
return (array === undefined || array.length === 0)? 0:Math.min.apply(null, array);	
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
