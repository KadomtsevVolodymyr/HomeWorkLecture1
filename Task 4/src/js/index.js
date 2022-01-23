console.log('Kadomtsev Volodymyr');

export function getOperands(math) {
	let first_operand = parseFloat(math);
	let math2 = math.indexOf("+" || "-" || "*"|| "/");
	math = math.slice(math2 + 1);
	let second_operand = parseFloat(math);
	return `a: ${first_operand}, b: ${second_operand}`
}

console.log(getOperands("2 + 2"));
console.log(getOperands("-7.445 + 9.01"));
console.log(getOperands("7.0000000000001 + 7.00004"));