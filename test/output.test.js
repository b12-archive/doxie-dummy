import dummyData from '../module/output';

const test = require('tape-catch');

test('`doxie-dummy/output` works as it should', (is) => {
  const outputs = ['a', {b: 2}, 3, true, null, undefined];

  is.deepEqual(
    dummyData(outputs),
    {docs: outputs.map((output) => ({output})), version: 1},
    'no kidding!'
  );

  is.end();
});
