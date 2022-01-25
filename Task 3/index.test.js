import { createPhoneNumber } from "./index"

describe('createPhoneNumber', function () {
	test('should return phone number (123) 456-7890, when passed 1, 2, 3, 4, 5, 6, 7, 8, 9, 0', function () {
		const result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
		expect(result).toBe("(123) 456-7890")
	});
	test('should return phone nuber (455) 741-2300, when passed 4, 5, 5, 7, 4, 1, 2, 3, 0, 0', function () {
		const result = createPhoneNumber([4, 5, 5, 7, 4, 1, 2, 3, 0, 0])
		expect(result).toBe("(455) 741-2300")
	});
});
