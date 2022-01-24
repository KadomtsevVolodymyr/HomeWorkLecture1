import { vowelCount } from "./index"

describe('vowelCount', function () {
	test('should return 5 when we searh vowels in the given string', function () {
		const result = vowelCount("abracadabra")
		expect(result).toBe(5)
	});
	test('should return 2 when we searh vowels in ‘letter’', function () {
		const result = vowelCount("letter")
		expect(result).toBe(2)
	});
	test('should return 1 when we searh vowels in toy', function () {
		const result = vowelCount("toy")
		expect(result).toBe(1)
	});
	test('should return 1 when we searh vowels in TOY', function () {
		const result = vowelCount("TOY")
		expect(result).toBe(1)
	});
	test('should return 0 when we searh vowels in 555', function () {
		const result = vowelCount("555")
		expect(result).toBe(0)
	});
	test('should return 13 when we searh vowels in floc­cin­aucini­hilip­il­i­fi­ca­tion', function () {
		const result = vowelCount("floc­cin­aucini­hilip­il­i­fi­ca­tion")
		expect(result).toBe(14)
	});
});
