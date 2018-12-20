# Clock

This component allows the user to integrate a continuously updating clock in-line with text. This may be useful for allowing students to track themselves in timed assesments.

#### Example

```js
<Clock />
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/clock/)

#### Options:

* __style__ | `object`: CSS inline styles. Default: `{}`.
* __duration__ | `boolean`: if set the duration of the session is display (not the actual time). Default: `false`.
* __format__ | `string`: time format (either `HH:MM`, `HH:MM:SS`, or `HH:MM:SSS`). Default: `''`.
