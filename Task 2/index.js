export function stringMerge(word1, word2, letter) {
  const position1 = word1.indexOf(letter);
  const position2 = word2.indexOf(letter);

  return word1.slice(0, position1) + word2.slice(position2);
}
