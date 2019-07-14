const langMap = {
  en: {
    year: {
      previous: 'last year',
      current: 'this year',
      next: 'next year',
      past: {
        one: '{0} year ago',
        other: '{0} years ago',
      },
      future: {
        one: 'in {0} year',
        other: 'in {0} years',
      },
    },
    quarter: {
      previous: 'last quarter',
      current: 'this quarter',
      next: 'next quarter',
      past: {
        one: '{0} quarter ago',
        other: '{0} quarters ago',
      },
      future: {
        one: 'in {0} quarter',
        other: 'in {0} quarters',
      },
    },
    month: {
      previous: 'last month',
      current: 'this month',
      next: 'next month',
      past: {
        one: '{0} month ago',
        other: '{0} months ago',
      },
      future: {
        one: 'in {0} month',
        other: 'in {0} months',
      },
    },
    week: {
      previous: 'last week',
      current: 'this week',
      next: 'next week',
      past: {
        one: '{0} week ago',
        other: '{0} weeks ago',
      },
      future: {
        one: 'in {0} week',
        other: 'in {0} weeks',
      },
    },
    day: {
      previous: 'yesterday',
      current: 'today',
      next: 'tomorrow',
      past: {
        one: '{0} day ago',
        other: '{0} days ago',
      },
      future: {
        one: 'in {0} day',
        other: 'in {0} days',
      },
    },
    hour: {
      current: 'this hour',
      past: {
        one: '{0} hour ago',
        other: '{0} hours ago',
      },
      future: {
        one: 'in {0} hour',
        other: 'in {0} hours',
      },
    },
    minute: {
      current: 'this minute',
      past: {
        one: '{0} minute ago',
        other: '{0} minutes ago',
      },
      future: {
        one: 'in {0} minute',
        other: 'in {0} minutes',
      },
    },
    second: {
      current: 'now',
      past: {
        one: '{0} second ago',
        other: '{0} seconds ago',
      },
      future: {
        one: 'in {0} second',
        other: 'in {0} seconds',
      },
    },
  },
  zh: {
    year: {
      previous: '去年',
      current: '今年',
      next: '明年',
      past: '{0}年前',
      future: '{0}年后',
    },
    quarter: {
      previous: '上季度',
      current: '本季度',
      next: '下季度',
      past: '{0}个季度前',
      future: '{0}个季度后',
    },
    month: {
      previous: '上个月',
      current: '本月',
      next: '下个月',
      past: '{0}个月前',
      future: '{0}个月后',
    },
    week: {
      previous: '上周',
      current: '本周',
      next: '下周',
      past: '{0}周前',
      future: '{0}周后',
    },
    day: {
      previous: '昨天',
      previous2: '前天',
      current: '今天',
      next: '明天',
      next2: '后天',
      past: '{0}天前',
      future: '{0}天后',
    },
    hour: {
      current: '此时',
      past: '{0}小时前',
      future: '{0}小时后',
    },
    minute: {
      current: '此刻',
      past: '{0}分钟前',
      future: '{0}分钟后',
    },
    second: {
      current: '现在',
      past: '{0}秒钟前',
      future: '{0}秒钟后',
    },
  },
};

export default langMap;
