export function basicOp(operation, a, b) {
	switch (operation) {
		case "+":
			return (a + b);
			break;
		case "-":
			return (a - b);
			break;
		case "*":
			return (a * b);
			break;
		case "/":
			return (a / b);
			break;
		case "something else":
			return 0
			break;
	}
}
