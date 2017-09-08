const expect = require('expect');
const {isRealString} = require('./validation')

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var str = 2;
    expect(isRealString(str)).toBe(false);
  });
  it('should reject strings with only spaces', () => {
    var str = '   ';
    expect(isRealString(str)).toBe(false);
  });
  it('should allow string with non-space characters', () => {
    var str = ' jose ';
    expect(isRealString(str)).toBe(true);
  });
});
