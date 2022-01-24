import { isPalindrome } from "./index"

describe('isPalindrome', function () {
	test('should return true when text are palinrom', function () {
		const result = isPalindrome("Eva, can I see bees in a cave?")
		expect(result).toBe(true)
	});
	test('should return false when text are not palinrom', function () {
		const result = isPalindrome("race a car")
		expect(result).toBe(false)
	});
	test('should return true when text are palinrom', function () {
		const result = isPalindrome("Was it a cat I saw?")
		expect(result).toBe(true)
	});
	test('should return false when text are not palinrom', function () {
		const result = isPalindrome("Hello")
		expect(result).toBe(false)
	});
});
