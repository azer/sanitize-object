module.exports = sanitize;

function sanitize () {
  var fields = Array.prototype.slice.call(arguments);

  return function (source) {
    if (!source) return;

    var i = fields.length;
    var result = {};

    while (i --) {
      result[ fields[i] ] = source[fields[i]];
    }

    return result;
  };
}
