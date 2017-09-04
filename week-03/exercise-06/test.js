var test = require('tape');
var countLetterInString = require('./exercise-06');
test('count Letter in string', function (t) {
  const expectedNotString = 0;
  const actualNotString = countLetterInString([1,2,3], 'a');

  const expectedStringExist = 1;
  const actualStringExist = countLetterInString('apple', 'a');

  const expectedStringExistType2 = 2;
  const actualStringExistType2 = countLetterInString('apple', 'p');
  
  const expectedStringNotExist = 0;
  const actualStringNotExist = countLetterInString('apple', 'b');
  t.equal(expectedNotString, actualNotString);
  t.equal(expectedStringExist, actualStringExist);
  t.equal(expectedStringExistType2, actualStringExistType2);
  t.equal(expectedStringNotExist, actualStringNotExist);
  t.end();
})