# Scrolling Text

A dynamic background component that changes a background image at a specified interval.

#### Example:

```js
<ScrollingText
    list={[ 'Heading' ]}
    style={{ fontSize: 44, color: 'red' }}
    interval={5}
    inTime={1.2}
    outTime={1.2}
    still={2}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/scrolling-text/)

#### Options:

* __list__ | `array<string>`: list of image URLs to be displayed. Default: `[]`.
* __loop__ | `boolean`: indicates whether the process shall be displayed infinitely. Default: `false`.
* __direction__ | `string`: : the direction of the text flow, available values are left, right, up, down, tracking, focus and swirl. Default: `'right'`.
* __still__ | `number`: : the time the text remains still (in seconds). Default: `3`.
* __interval__ | `number`: : the interval between the calls (in seconds). Default: `15`.
* __inTime__ | `number`: : time of the entrance effect (in seconds). Default: `0.6`.
* __outTime__ | `number`: :  time of the exit effect (in seconds). Default: `1`.
* __style__ | `object`: : style definition of the text. Default: `{}`.
