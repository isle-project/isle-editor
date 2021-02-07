---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

一个动态背景组件，以指定的时间间隔循环浏览文本列表。

## Options

* __list__ | `array<string>`: 要显示的文本列表. Default: `[]`.
* __loop__ | `boolean`: 表示该过程是否要无限显示。. Default: `false`.
* __direction__ | `string`: 文本流的方向（可以是 "左"、"右"、"上"、"下"、"跟踪"、"焦点 "或 "旋涡"）。. Default: `'right'`.
* __still__ | `number`: 静止时间(秒). Default: `3`.
* __interval__ | `number`: 通话间隔时间. Default: `15`.
* __inTime__ | `number`: 入场时间(秒). Default: `0.6`.
* __outTime__ | `number`: 退场时间(秒). Default: `1`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: 文本的CSS样式. Default: `{}`.


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



