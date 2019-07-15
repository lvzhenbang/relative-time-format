import langMap from '../../config/lang';
import CustomRelativeTimeFormat from '../customRelativeTimeFormat';

describe('custom relativeTimeFormat', () => {
  let crtfZh = new CustomRelativeTimeFormat('zh');
  crtfZh.local = 'zh';
  crtfZh.localData = langMap['zh'];
  let crtfEn = new CustomRelativeTimeFormat('en');
  crtfEn.local = 'en';
  crtfEn.localData = langMap['en'];
  let crtfDefault = new CustomRelativeTimeFormat();
  crtfDefault.local = 'en';
  crtfDefault.localData = langMap['en'];

  // init
  it('init', () => {
    expect(crtfDefault.local).toBe('en');
    expect(crtfDefault.name).toBe('Custom.RelativeTimeFormat');
  });

  /**
   * year
   */

  // default
  it('default: format(1, "year") is "in 1 year"', () => {
    expect(crtfDefault.format(1, 'year')).toEqual('next year');
  });

  it('default: format(2, "year") is "in 2 years"', () => {
    expect(crtfDefault.format(2, 'year')).toEqual('in 2 years');
  });

  it('default: format(-1, "year") is "last year"', () => {
    expect(crtfDefault.format(1, 'year')).toEqual('next year');
  });

  it('default: format(-2, "year") is "2 years ago"', () => {
    expect(crtfDefault.format(-2, 'year')).toEqual('2 years ago');
  });
  /**
   * day
   */
  // zh
  it('zh: format(-2, "day") is "前天"', () => {
    expect(crtfZh.format(-2, 'day')).toEqual('前天');
  });

  it('zh: format(-1, "day") is "昨天"', () => {
    expect(crtfZh.format(-1, 'day')).toEqual('昨天');
  });

  it('zh: format(0, "day") is "今天"', () => {
    expect(crtfZh.format(0, 'day')).toEqual('今天');
  });

  it('zh: format(1, "day") is "明天"', () => {
    expect(crtfZh.format(1, 'day')).toEqual('明天');
  });

  it('zh: format(2, "day") is "后天"', () => {
    expect(crtfZh.format(2, 'day')).toEqual('后天');
  });

  // en
  it('en: format(-2, "day") is "2 days ago"', () => {
    expect(crtfEn.format(-2, 'day')).toEqual('2 days ago');
  });

  it('en: format(-1, "day") is "yesterday"', () => {
    expect(crtfEn.format(-1, 'day')).toEqual('yesterday');
  });

  it('en: format(0, "day") is "today"', () => {
    expect(crtfEn.format(0, 'day')).toEqual('today');
  });

  it('en: format(1, "day") is "tomorrow"', () => {
    expect(crtfEn.format(1, 'day')).toEqual('tomorrow');
  });

  it('en: format(2, "day") is "in 2 days"', () => {
    expect(crtfEn.format(2, 'day')).toEqual('in 2 days');
  });

  /**
   * month
   */
  it('en: format(2, "month") is "in 2 months"', () => {
    expect(crtfEn.format(2, 'month')).toEqual('in 2 months');
  });

  /**
   * hour
   */
  it('en: format(2, "hour") is "in 2 hours"', () => {
    expect(crtfEn.format(2, 'hour')).toEqual('in 2 hours');
  });
  
  it('en: format(1, "hour") is "this hour"', () => {
    expect(crtfEn.format(0, 'hour')).toEqual('in 1 hour');
  });

  it('en: format(0, "hour") is "this hour"', () => {
    expect(crtfEn.format(0, 'hour')).toEqual('this hour');
  });

  it('en: format(-1, "hour") is "1 hour ago"', () => {
    expect(crtfEn.format(-1, 'hour')).toEqual('1 hour ago');
  });

  it('en: format(-2, "hour") is "2 hours ago"', () => {
    expect(crtfEn.format(-2, 'hour')).toEqual('2 hours ago');
  });

  /**
   * mintue
   */
  it('en: format(2, "minute") is "in 2 minute"', () => {
    expect(crtfEn.format(2, 'minute')).toEqual('in 2 minute');
  });

  /**
   * second
   */
  it('en: format(2, "day") is "in 2 days"', () => {
    expect(crtfEn.format(2, 'month')).toEqual('in 2 months');
  });
});
