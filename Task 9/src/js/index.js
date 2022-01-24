console.log('Kadomtsev Volodymyr');

export function vowelCount(text) {
	let counter = 0;
	let newText = "";
	for (let i = 0; i < text.length; i++) {
		newText += text[i].toLowerCase();
		if (newText[i] == "e" || newText[i] == "a" || newText[i] == "i" || newText[i] == "o" || newText[i] == "u") {
			counter++;
		}
		
	}
	return counter;
}

