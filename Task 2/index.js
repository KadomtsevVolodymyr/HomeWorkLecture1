export function stringMerge(word1, word2, letter) {
	let position1 = word1.indexOf(letter);
	let position2 = word2.indexOf(letter)
	return word1.slice(0, position1) + word2.slice(position2);
}
