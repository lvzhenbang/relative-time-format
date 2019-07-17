# coutdown
A plugin of relativeTimeFormat.

## usage

```
new RelativeTIime({lang: 'en', date:'2019-7-17 17:00:00'}).output // "1 hour ago"
new RelativeTIime({lang: 'zh', date:'2019-7-16 17:00:00'}).output // "昨天"
new RelativeTIime({lang: 'zh', date:'2019-7-15 17:00:00'}).output // "前天"
```

### options

### options.lang

` default ` is 'en'

* only for en & zh

### options.date （required）

support ` Date `object, ` milliseconds `(Number), time in `2019-10-1 10:00:00` format.
