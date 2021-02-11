const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'J', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'A', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'V', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'A', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'JAVA')

    assert.isTrue(result);
  });

  it("should return true if the word is present backwards vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'J', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'G', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'O', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'D', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'T', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'O', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'H', 'Q', 'U', 'A', 'L'],
    ], 'HOTDOG')

    assert.isTrue(result);
  });

  it("should return true if the word is present backwards horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'J', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'G', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'O', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'D', 'A', 'V', 'A', 'J'],
      ['U', 'B', 'T', 'T', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'O', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'H', 'Q', 'U', 'A', 'L'],
    ], 'JAVA')

    assert.isTrue(result);
  });
});
