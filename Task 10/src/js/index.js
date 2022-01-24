console.log('Kadomtsev Volodymyr');

export function alphabetPosition(text) {
	let textResult = "";
	for (let i = 0; i < text.length; i++) {
		let codeAt = text.toUpperCase().charCodeAt(i)
		if (codeAt > 64 && codeAt << 91){
			textResult += (codeAt - 64) + " ";
		}
	}
	return textResult.slice(0, textResult.length - 1)
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("A b c d e f g h i j k l m n o p q r s t u v w x y z"));