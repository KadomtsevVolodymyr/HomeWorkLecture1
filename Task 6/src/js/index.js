console.log('Kadomtsev Volodymyr');

export function isPalindrome(text) {
	text = text.toLowerCase();
	let array2 = text.split('');
	let array = text.split('');
	for (let i = 0; i < array2.length; i++) {
		if (array2[i] == '.' || array2[i] == '?'|| array2[i] == ',' || array2[i] == '!'){
			array2.splice(i, 1)
		}
		if (array2[i] == ' '){
			array2.splice(i, 1)
		}
	}
	for (let i = 0; i < array.length; i++) {
		if (array[i] == '.' || array[i] == '?'|| array[i] == ',' || array[i] == '!'){
			array.splice(i, 1)
		}
		if (array[i] == ' '){
			array.splice(i, 1)
		}
	}

	array = array.reverse();
	let bool = true;
	for (let i = 0; i < array.length; i++) {
		if (array[i] != array2[i]){
			bool = false;
		}
		
	}
	return bool
	
	
}
	console.log(isPalindrome("Was it a cat I saw"));
	console.log(isPalindrome("race a car"));
	console.log(isPalindrome("Eva, can I see bees in a cave?"));



