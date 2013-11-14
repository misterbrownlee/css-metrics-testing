css-metrics-testing
===================

### WTF

Small project to validate a bug in [grunt-css-metrics][0].

### TEST IT

Just `npm install` in this repo, then run `grunt`.  You'll see this:
```
Metrics for test.css
>> Total rules: 10
>> Total selectors: 0
>> Average selectors per rule: 0
>> File size: 528 bytes
>> GZip size: 285 bytes
```

The thing is, the `test.css` file only has comments in it.  Guess how many?

### FIX IT

The problem is that comments end up in the rule count. This is because [css-parse][1] puts comments in the rules array, and css-metrics just passes the array length as the rule value. 

See line 30 of css-metrics.js
```
    rules: function() {
        return this.parsedData.rules.length;
    },
```
Should be an easy fix with a little array jiggering.

[0]: https://github.com/phamann/grunt-css-metrics
[1]: https://github.com/visionmedia/css-parse