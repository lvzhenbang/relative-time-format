import RelativeTime from '../index';
import CustomRelativeTimeFormat from '../customRelativeTimeFormat';

// Each test requires time to modify the test according to local-time
const mockFormat = jest.fn();
jest.mock('../customRelativeTimeFormat', () => {
  return jest.fn().mockImplementation( () => {
    return { format: mockFormat }
  });
});

beforeEach(() => {
  CustomRelativeTimeFormat.mockClear();
  mockFormat.mockClear();
});

describe('Class RelativeTime call calss CustomRelativeTimeFormat', () => {
  /* relativeTime */
  // relativeTime instance without paramater
  it('relativeTime instance no-params', () => {
    let relativeTime = new RelativeTime();
    expect(relativeTime).toBeTruthy();
    expect(CustomRelativeTimeFormat).toHaveBeenCalledTimes(1);
  });

  it('relativeTime instance version', () => {
    let relativeTime = new RelativeTime();
    expect(relativeTime.version).toBe('1.0.0');
  });

  it('relativeTime instance default-inputDate', () => {
    let relativeTime = new RelativeTime();
    const date = new Date(2019, 6, 14, 10, 30, 30, 0);
    expect(relativeTime.inputDate).toEqual(date);
  });

  /* CustomRelativeTimeFormat */
  // year 2020-7-14
  it('check relativeTime instance pass to CustomRelativeTimeFormat params', () => {
    let relativeTime = new RelativeTime({
      lang: 'en',
      date: '2020-7-14 1:26:0'
    });
    expect(mockFormat.mock.calls[0]).toEqual([1, 'year']);
  });

  // month 2020-7-14
  it('check relativeTime instance pass to CustomRelativeTimeFormat params', () => {
    let relativeTime = new RelativeTime({
      lang: 'en',
      date: '2019-8-19 1:26:0'
    });
    expect(mockFormat.mock.calls[0]).toEqual([1, 'month']);
  });

  // in 2 days 2019-7-18
  it('check relativeTime instance pass to CustomRelativeTimeFormat params', () => {
    let relativeTime = new RelativeTime({
      lang: 'en',
      date: '2019-7-18 1:26:0'
    });
    expect(mockFormat.mock.calls[0]).toEqual([2, 'day']);
  });

  // hour  2019-7-16
  it('check relativeTime instance pass to CustomRelativeTimeFormat params', () => {
    let relativeTime = new RelativeTime({
      lang: 'en',
      date: '2019-7-16 0:26:0'
    });
    expect(mockFormat.mock.calls[0]).toEqual([-1, 'hour']);
  });

  // hour  2019-7-16
  it('check relativeTime instance pass to CustomRelativeTimeFormat params', () => {
    let relativeTime = new RelativeTime({
      lang: 'en',
      date: '2019-7-16 2:30:0'
    });
    expect(mockFormat.mock.calls[0]).toEqual([1, 'hour']);
  });

  // minute  2019-7-16
  it('check relativeTime instance pass to CustomRelativeTimeFormat params', () => {
    let relativeTime = new RelativeTime({
      lang: 'en',
      date: '2019-7-16 1:44:0'
    });
    expect(mockFormat.mock.calls[0]).toEqual([1, 'minute']);
  });
});
