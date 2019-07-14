import langMap from './config/lang';

class CustomRelativeTimeFormat {
  consturctor(lang) {
    this.local = langMap[lang] ? lang : this.local;
    this.localData = langMap[this.local];
    this.init();
  }

  init() {
    this.name = 'Custom.RelativeTimeFormat';
  }

  format(value, unit) {
    let outputStr = 'invalid date.';
    if (value > 0) {
      if (this.localData[unit].future.one) {
        if (value === 1) outputStr = this.localData[unit].future.one.replace(/\{0\}/, Math.abs(value));
        outputStr = this.localData[unit].future.other.replace(/\{0\}/, Math.abs(value));
      } else {
        if (value === 1 && this.local === 'zh') outputStr = this.localData[unit].previous.replace(/\{0\}/, Math.abs(value));
        if (value === 2 && this.local === 'zh') outputStr = this.localData[unit].previous2.replace(/\{0\}/, Math.abs(value));
        outputStr = this.localData[unit].future.replace(/\{0\}/, Math.abs(value));
      }
    } else if (value === 0) {
      outputStr = this.localData[unit].current.replace(/\{0\}/, Math.abs(value));
    } else if (value < 0) {
      if (this.localData[unit].past.one) {
        if (value === -1) outputStr = this.localData[unit].past.one.replace(/\{0\}/, Math.abs(value));
        outputStr = this.localData[unit].past.other.replace(/\{0\}/, Math.abs(value));
      } else {
        if (value === -1 && this.local === 'zh') outputStr = this.localData[unit].next.replace(/\{0\}/, Math.abs(value));
        if (value === -2 && this.local === 'zh') outputStr = this.localData[unit].next2.replace(/\{0\}/, Math.abs(value));
        outputStr = this.localData[unit].past.replace(/\{0\}/, Math.abs(value));
      }
    }

    return outputStr;
  }
}

export default CustomRelativeTimeFormat;
