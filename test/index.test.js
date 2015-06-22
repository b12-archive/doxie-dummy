import dummy from '../module/index';

const test = require('tape-catch');

test('`doxie-dummy` works as it should', (is) => {
  const docs = ['a', {b: 2}, 3, true, null, undefined];

  is.deepEqual(
    dummy(docs),
    {docs, version: 1},
    'no kidding!'
  );

  is.end();
});
