import defaults from './config/defaults';
import version from './config/version';

import parseDate from './utils/parseDate';
import CustomRelativeTimeFormat from './customRelativeTimeFormat';
import inBrowser from './utils/inBrowser';

class RelativeTime {
  constructor(opt) {
    this.options = {
      ...defaults,
      ...opt,
    };
  }

  init() {
    this.version = version;
  }

  output() {
    const relativeTimeMs = this.timeUntil();
    return this.timeUntilFromMs(relativeTimeMs);
  }

  formatTime(value, unit) {
    let relativeTimeFomatObj = null;
    if ('Intl' in window && 'RelativeTimeFormat' in window.Intl) {
      relativeTimeFomatObj = new Intl.RelativeTimeFormat(this.options.lang, { numeric: 'auto' });
    } else {
      relativeTimeFomatObj = new CustomRelativeTimeFormat(this.options.lang);
    }

    return relativeTimeFomatObj.format(value, unit);
  }

  timeUntilFromMs(ms) {
    const seconds = Math.round(ms / 1e3);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);
    const months = Math.round(days / 30);
    const years = Math.round(months / 12);

    let ouputTimeStr = 'invalid date';
    if (months >= 12) {
      ouputTimeStr = this.formatTime(years, 'year');
    } else if (Math.abs(days) >= 45) {
      ouputTimeStr = this.formatTime(months, 'month');
    } else if (Math.abs(days) >= 30) {
      ouputTimeStr = this.formatTime(months, 'month');
    } else if (Math.abs(hours) >= 24) {
      ouputTimeStr = this.formatTime(days, 'day');
    } else if (Math.abs(minutes) >= 45) {
      ouputTimeStr = this.formatTime(hours, 'hour');
    } else if (Math.abs(seconds) >= 45) {
      ouputTimeStr = this.formatTime(minutes, 'minute');
    } else if (Math.abs(seconds) >= 10) {
      ouputTimeStr = this.formatTime(seconds, 'second');
    } else {
      ouputTimeStr = this.formatTime(0, 'second');
    }

    return ouputTimeStr;
  }

  timeUntil() {
    const date = parseDate(this.options.date);
    return date.getTime() - Date.now();
  }
}

if (inBrowser) {
  window.console.log('plugin is running browser.');
  window.Relative = RelativeTime;
}

export default RelativeTime;
