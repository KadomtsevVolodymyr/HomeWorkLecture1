import { stringMerge } from './index';

describe('Return a single word thats a combination of both words, merged at the point where the given letter first appears in each word', function() {
  test('should return held, when passed hello and world', function() {
    const result = stringMerge('hello', 'world', 'l');

    expect(result).toBe('held');
  });

  test('should return codinywhere, when passed coding and anywhere', function() {
    const result = stringMerge('coding', 'anywhere', 'n');

    expect(result).toBe('codinywhere');
  });

  test('should return jasamson, when passed jason and samson', function() {
    const result = stringMerge('jason', 'samson', 's');

    expect(result).toBe('jasamson');
  });

  test('should return wondeople, when passed wonderful and people', function() {
    const result = stringMerge('wonderful', 'people', 'e');

    expect(result).toBe('wondeople');
  });
});
