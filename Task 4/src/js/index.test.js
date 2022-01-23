import { getOperands } from "./index"

describe('getOperands', function () {
	test('should return a: 2, b: 2 when passed 2 + 2', function () {
		const result = getOperands("2 + 2")
		expect(result).toBe("a: 2, b: 2")
	});
	test('should return a: -7.445, b: 9.01 when passed -7.445 + 9.01', function () {
		const result = getOperands("-7.445 + 9.01")
		expect(result).toBe("a: -7.445, b: 9.01")
	});
	test('should return a: 7.0000000000001, b: 7.00004 when passed 7.0000000000001 + 7.00004', function () {
		const result = getOperands("7.0000000000001 + 7.00004")
		expect(result).toBe("a: 7.0000000000001, b: 7.00004")
	});
});
