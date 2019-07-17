import parseDate from '../parseDate';

describe('parse date', () => {
  // 1
  const date = parseDate(new Date(2019));
  it('new Date(2019) is valid date', () => {
    expect(date).toEqual(new Date(2019).getTime());
  });
  // 2
  const date2 = parseDate('2019-10-1 10');
  it('2019-10-1 10 is valid date', () => {
    expect(date2).toBeTruthy();
    expect(date2).toEqual(new Date(2019, 10 - 1, 1, 10).getTime());
  });
  // 3
  const date3 = parseDate('2019-10-1-1');
  it('2019-10-1- is valid date', () => {
    expect(date3).toBeFalsy();
  });
  // 4 1563354424540
  const date4 = parseDate(1563354424540);
  it('1563354424540 is valid date', () => {
    expect(date4).toEqual(1563354424540);
  });
  // 5 '2019'
  const date5 = parseDate('2019-1');
  it('"2019" is valid date', () => {
    expect(date5).toEqual(new Date(2019, 0, 1).getTime());
  });
});
