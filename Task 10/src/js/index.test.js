import { alphabetPosition } from "./index"

describe('alphabetPosition', function () {
	test('should return 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11 when we searh alphabet Position', function () {
		const result = alphabetPosition("The sunset sets at twelve o' clock.")
		expect(result).toBe("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
		)
	});
	test('should return 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 when we searh alphabet Position', function () {
		const result = alphabetPosition("A b c d e f g h i j k l m n o p q r s t u v w x y z")
		expect(result).toBe("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26"
		)
	});
});
