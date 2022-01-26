
import { basicOp } from "./index"

describe('basicOp', function () {
	test('should return 4 when passed 2 plus 2', function () {
		const result = basicOp("+", 2, 2)
		expect(result).toBe(4)
	});
	test('should return 5 when passed 8 minus 3', function () {
		const result = basicOp("-", 8, 3)
		expect(result).toBe(5)
	});
	test('should return 16 when passed 4 multiply 4', function () {
		const result = basicOp("*", 4, 4)
		expect(result).toBe(16)
	});
	test('should return 7 when passed 49 divided 7', function () {
		const result = basicOp("/", 49, 7)
		expect(result).toBe(7)
	});
	test('should return 0 when basicOp is clean', function () {
		const result = basicOp('something else', 45, 45)
		expect(result).toBe(0)
	});
	test('should return 0 when basicOp is clean', function () {
		const result = basicOp('dfsdfsdfsdf', 45, 45)
		expect(result).toBe(0)
	});
});
