module.exports = sanitize;
module.exports.async = async;

function sanitize (fields) {
  if (typeof fields == 'string') {
    fields = Array.prototype.slice.call(arguments);
  }

  return function (source) {
    if (!source) return;

    var i = fields.length;
    var result = {};

    while (i --) {
      if (!source.hasOwnProperty(fields[i])) continue;
      result[ fields[i] ] = source[fields[i]];
    }

    return result;
  };
}

function async () {
  var sanitizer = sanitize.apply(undefined, arguments);

  return function (source, callback) {
    callback(undefined, sanitizer(source));
  };
}
