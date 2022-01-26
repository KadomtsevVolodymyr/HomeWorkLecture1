import { getTime } from "./index"

describe('getTime', function () {
	test('should return 09:00 when passed Breakfast at 09:00', function () {
		const result = getTime("Breakfast at 09:00")
		expect(result).toBe("09:00")
	});
	test('should return 21:00 when passed Breakfast at 09:60, Dinner at 21:00', function () {
		const result = getTime("Breakfast at 09:60, Dinner at 21:00")
		expect(result).toBe("21:00")
	});
	test('should return 09:59 when passed Breakfast at 09:59, Dinner at 21:00', function () {
		const result = getTime("Breakfast at 09:59, Dinner at 21:00")
		expect(result).toBe("09:59")
	});	test('should return empty string If correct time not found', function () {
		const result = getTime("Breakfast at 09:94, Dinner at 25:00")
		expect(result).toBe("")
	});

});
