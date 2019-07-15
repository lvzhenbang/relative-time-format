import isValidDate from '../isValidDate';
import parseDate from '../parseDate';

describe('parse date', () => {
  // 1
  const date = parseDate('2019-10-1');
  it('2019-10-1 is valid date', () => {
    expect(isValidDate(date)).toBeTruthy();
  });

  it('2019-10-1 is right format', () => {
    expect(date.getTime()).toEqual(new Date(2019, 10 - 1, 1).getTime());
  });
  // 2
  const date2 = parseDate('2019-10-1 10');
  it('2019-10-1 10 is valid 2', () => {
    expect(isValidDate(date2)).toBeTruthy();
  });

  it('2019-10-1 10 is right format', () => {
    expect(date2.getTime()).toEqual(new Date(2019, 10 - 1, 1, 10).getTime());
  });
  // 3
  const date3 = parseDate('2019-10-1-1');
  it('2019-10-1- is valid date', () => {
    expect(isValidDate(date3)).toBeFalsy();
  });
});
