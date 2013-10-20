## sanitize-object

Returns a new object with desired content from another source

## Install

```bash
$ npm install sanitize-object
```

## Usage

```js
sanitize = require('sanitize-object')

input = {
  foo: 123,
  bar: 456,
  qux: 789
}

sanitize('foo', 'qux')(input)
// => { foo: 123, qux: 789 }
```
