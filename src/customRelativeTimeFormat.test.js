import langMap from './config/lang';
import CustomRelativeTimeFormat from './customRelativeTimeFormat';

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
  it('zh: format(-2, "day") is "2 days ago"', () => {
    expect(crtfEn.format(-2, 'day')).toEqual('2 days ago');
  });

  it('zh: format(-1, "day") is "yesterday"', () => {
    expect(crtfEn.format(-1, 'day')).toEqual('yesterday');
  });

  it('zh: format(0, "day") is "today"', () => {
    expect(crtfEn.format(0, 'day')).toEqual('today');
  });

  it('zh: format(1, "day") is "tomorrow"', () => {
    expect(crtfEn.format(1, 'day')).toEqual('tomorrow');
  });

  it('zh: format(2, "day") is "in 2 days"', () => {
    expect(crtfEn.format(2, 'day')).toEqual('in 2 days');
  });
});
