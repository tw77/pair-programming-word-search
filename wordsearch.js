// Pairing with Syd Sisco

const transpose = function(matrix) {
  let transposed = [];
  for (let i = 0; i < matrix[0].length; i++) {
    transposed.push([]);
    for (let j = 0; j < matrix.length; j++) {
      transposed[i].push(matrix[j][i]);
    }
  }
  return transposed;
};

const search = (letters, word) => {
  const reverseWord = word.split("").reverse().join("");
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word) || l.includes(reverseWord)) {
      return true;
    }
  }
  return false;
};

const wordSearch = (letters, word) => {
  let found;

  // search horizontally
  found = search(letters, word);
  if (found) return true;

  // search vertically by transposing the array
  const trans = transpose(letters);
  found = search(trans, word);
  if (found) return true;

  return false;
};

module.exports = wordSearch;
