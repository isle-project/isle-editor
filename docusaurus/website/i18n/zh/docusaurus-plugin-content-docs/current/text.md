---
id: text 
title: Text
sidebar_label: Text
---

文本组件，它允许将原始文本渲染为Markdown，并实现语音控制。

## Options

* __raw__ | `string`: 待发文字. Default: `''`.
* __className__ | `string`: 班名. Default: `''`.
* __inline__ | `boolean`: 控制是否将Markdown渲染为内联文本。. Default: `false`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __voiceID__ | `string`: 声控识别器. Default: `none`.


## Examples

```jsx live
<Text>*Markdown* formatted text comes here...</Text>
```



