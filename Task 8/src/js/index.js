console.log('Kadomtsev Volodymyr');

export function countOccurrences(text, letter) {
	let counter = 0;
	let newText = "";
	for (let i = 0; i < text.length; i++) {
		newText += text[i].toLowerCase();
		if (newText[i] == letter) {
			counter ++;
		}
	}
	return counter;
}

console.log(countOccurrences("ability", 'i'));
console.log(countOccurrences("abc", 'a'));
console.log(countOccurrences("ABC", 'a'));
console.log(countOccurrences("floc­cin­aucini­hilip­il­i­fi­ca­tion", 'i'));
