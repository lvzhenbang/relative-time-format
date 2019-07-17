import RelativeTime from '../index';

// Each test requires time to modify the test according to local-time

describe('Class RelativeTime call calss CustomRelativeTimeFormat', () => {
  /* relativeTime */

  it('relativeTime instance version', () => {
    const relativeTime = new RelativeTime();
    expect(relativeTime.version).toBe('1.0.0');
  });

  // 'last year'
  it('index last year', () => {
    const relativeTime = new RelativeTime({
      lang: 'en',
      date: Date.now() - 365 * 24 * 60 * 60 * 1000,
    });
    expect(relativeTime.output).toEqual('last year');
  });

  // '1 month ago'
  it('index 1 month ago', () => {
    const relativeTime = new RelativeTime({
      lang: 'en',
      date: Date.now() + 30 * 24 * 60 * 60 * 1000,
    });
    expect(relativeTime.output).toEqual('next month');
  });

  // in 2 days
  it('index in 2 days', () => {
    const relativeTime = new RelativeTime({
      lang: 'en',
      date: Date.now() + 2 * 24 * 60 * 60 * 1000,
    });
    expect(relativeTime.output).toEqual('in 2 days');
  });

  // '2 hours ago'
  it('index 2 hours ago', () => {
    const relativeTime = new RelativeTime({
      lang: 'en',
      date: Date.now() - 2 * 60 * 60 * 1000,
    });
    expect(relativeTime.output).toEqual('2 hours ago');
  });


  // '2 minutes ago'
  it('index 2 minutes ago', () => {
    const relativeTime = new RelativeTime({
      lang: 'en',
      date: Date.now() - 2 * 60 * 1000,
    });
    expect(relativeTime.output).toEqual('2 minutes ago');
  });

  // '10 second ago'
  it('index 10 second ago', () => {
    const relativeTime = new RelativeTime({
      lang: 'en',
      date: Date.now() - 10 * 1000,
    });
    expect(relativeTime.output).toEqual('10 seconds ago');
  });

  // 'now'
  it('index now', () => {
    const relativeTime = new RelativeTime({
      lang: 'en',
      date: Date.now() - 9 * 1000,
    });
    expect(relativeTime.output).toEqual('now');
  });

  // 'ivalid date'
  it('index now', () => {
    const relativeTime = new RelativeTime({
      lang: 'en',
      date: new Date(NaN),
    });
    expect(relativeTime.output).toBe('时间都去哪儿了');
  });
});
