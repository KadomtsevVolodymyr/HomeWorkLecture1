import { countOccurrences } from "./index"

describe('countOccurrences', function () {
	test('should return 2 when we searh i in ability', function () {
		const result = countOccurrences("ability", 'i')
		expect(result).toBe(2)
	});
	test('should return 1 when we searh a in abc', function () {
		const result = countOccurrences("abc", 'a')
		expect(result).toBe(1)
	});
	test('should return 1 when we searh a in ABC', function () {
		const result = countOccurrences("ABC", 'a')
		expect(result).toBe(1)
	});
	test('should return 9 when we searh i in floc­cin­aucini­hilip­il­i­fi­ca­tion', function () {
		const result = countOccurrences("floc­cin­aucini­hilip­il­i­fi­ca­tion", 'i')
		expect(result).toBe(9)
	});
});
