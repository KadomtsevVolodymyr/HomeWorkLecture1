console.log('Kadomtsev Volodymyr');

export function swapCase(text) {
	let newText = "";
	for (let i = 0; i < text.length; i++) {
		if (text[i] === text[i].toUpperCase()) {
			newText += text[i].toLowerCase();
		} else {
			newText += text[i].toUpperCase();
		}

	}
	return newText;
}

console.log(swapCase("aBc"));
console.log(swapCase("GooD"));
console.log(swapCase("hello"));
console.log(swapCase("75386"));


