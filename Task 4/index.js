export function getOperands(math) {
	const result = math.split(" ")
	return `a: ${result[0]}, b: ${result[2]}`
}
