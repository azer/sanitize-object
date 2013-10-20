var sanitize = require("./");

it('returns a new object with only the specified properties from the given object', function(){

  var input = {
    foo: 123,
    bar: 456,
    qux: 789
  };

  var sanitized = sanitize('foo', 'qux')(input);
  expect(sanitized.foo).to.equal(123);
  expect(sanitized.qux).to.equal(789);
  expect(Object.keys(sanitized).length).to.equal(2);
  expect(Object.keys(input).length).to.equal(3);

});
