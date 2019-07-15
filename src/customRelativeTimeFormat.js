import langMap from '../config/lang';

class CustomRelativeTimeFormat {
  consturctor(lang) {
    this.local =  lang || 'en';
    this.localData = langMap[this.local];
    this.name = 'Custom.RelativeTimeFormat';
  }

  format(value, unit) {
    let outputStr = 'invalid date.';
    switch (unit) {
      case 'year':
      case 'month':
      case 'day':
        if (value > 1) {
          if (this.local === 'zh' && this.localData[unit]['next2']) {
            outputStr = this.localData[unit]['next2'].replace(/\{0\}/, Math.abs(value));
          } else {
            outputStr = this.localData[unit].future.replace(/\{0\}/, Math.abs(value));
          }
        } else if (value === 1) {
          outputStr = this.localData[unit].next.replace(/\{0\}/, Math.abs(value));
        } else if (value === 0) {
          outputStr = this.localData[unit].current.replace(/\{0\}/, Math.abs(value));
        } else if (value === -1) {
            outputStr = this.localData[unit].previous.replace(/\{0\}/, Math.abs(value));
        } else {
          if (this.local === 'zh' && this.localData[unit]['previous2']) {
            outputStr = this.localData[unit]['previous2'].replace(/\{0\}/, Math.abs(value));
          } else {
            outputStr = this.localData[unit].past.replace(/\{0\}/, Math.abs(value));
          }
        }
        break;
      case 'hour':
      case 'minute':
      case 'second':
        if (value > 1) {
          outputStr = this.localData[unit].future.replace(/\{0\}/, Math.abs(value));
        } else if (value === 1) {
          outputStr = this.localData[unit].next.replace(/\{0\}/, Math.abs(value));
        } else if (value === 0) {
          outputStr = this.localData[unit].current.replace(/\{0\}/, Math.abs(value));
        } else if (value === -1) {
            outputStr = this.localData[unit].previous.replace(/\{0\}/, Math.abs(value));
        } else {
          outputStr = this.localData[unit].past.replace(/\{0\}/, Math.abs(value));
        }
    }
    
    return outputStr;
  }
}

export default CustomRelativeTimeFormat;
