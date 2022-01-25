export function getOperands(math) {
	let result = math.split(" ")
	return `a: ${result[0]}, b: ${result[2]}`
}
