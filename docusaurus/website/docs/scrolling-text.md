---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

A dynamic background component that cycles through a list of texts  at a specified interval.

## Options

* __list__ | `array<string>`: list of texts to be displayed. Default: `[]`.
* __loop__ | `boolean`: indicates whether the process shall be displayed infinitely. Default: `false`.
* __direction__ | `string`: the direction of the text flow (either `left`, `right`, `up`, `down`, `tracking`, `focus`, or `swirl`). Default: `'right'`.
* __still__ | `number`: the time the text remains still (in seconds). Default: `3`.
* __interval__ | `number`: the interval between the calls (in seconds). Default: `15`.
* __inTime__ | `number`: time of the entrance effect (in seconds). Default: `0.6`.
* __outTime__ | `number`: time of the exit effect (in seconds). Default: `1`.
* __className__ | `string`: class name. Default: `''`.
* __style__ | `object`: CSS styles of the text. Default: `{}`.


## Examples

```jsx live
<ScrollingText
    list={[ 'Heading' ]}
    style={{ fontSize: 44, color: 'red' }}
    interval={5}
    inTime={1.2}
    outTime={1.2}
    still={2}
/>
```



