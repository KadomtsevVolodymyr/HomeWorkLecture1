console.log('Kadomtsev Volodymyr');

export function createPhoneNumber(a, b, c, d, e, f, g, h, i, j) {
	let array = [a, b, c, d, e, f, g, h, i, j]
	return "(" + array[0] + array[1] + array[2] + ")" + " " + array[3] + array[4] + array[5] + "-" + array[6] + array[7] + array[8] + array[9]

}

console.log(createPhoneNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));