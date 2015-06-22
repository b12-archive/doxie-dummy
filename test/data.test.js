import dummyData from '../module/data';

const test = require('tape-catch');

test('`doxie-dummy/data` works as it should', (is) => {
  const docs = ['a', {b: 2}, 3, true, null, undefined];

  is.deepEqual(
    dummyData(docs),
    {docs, version: 1},
    'no kidding!'
  );

  is.end();
});
