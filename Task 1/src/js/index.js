
console.log('Kadomtsev Volodymyr');

export function basicOp(operation, a, b) {
	if (operation === "+") {
		return (a + b)
	}
	if (operation === "-") {
		return (a - b)
	}
	if (operation === "*") {
		return (a * b)
	}
	if (operation === "/") {
		return (a / b)
	}
	else {
		return 0
	}
}
