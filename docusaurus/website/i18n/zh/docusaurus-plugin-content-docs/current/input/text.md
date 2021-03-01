---
id: text-input
title: Text Input
sidebar_label: Text Input
---

一个文本输入组件。可以作为ISLE仪表板的一部分或独立使用。在后一种情况下，你想通过`onChange`属性来处理更改，或者通过`bind`属性将值绑定到一个全局变量。

## 选项

* __bind__ | `string`: 全局变量的名称，用于分配到的数字。. Default: `none`.
* __defaultValue__ | `string`: 表示启动时输入的默认值。. Default: `''`.
* __value__ | `string`: 文本值. Default: `none`.
* __legend__ | `(string|node)`: 字符串，表示在输入的数字旁边显示的文字。. Default: `''`.
* __inline__ | `boolean`: 表示输入是否内嵌显示。. Default: `false`.
* __onBlur__ | `function`: 当文本区域失去焦点时调用的回调函数。. Default: `onBlur() {}`.
* __onChange__ | `function`: 当文本值发生变化时，将调用该函数。. Default: `onChange() {}`.
* __onKeyDown__ | `function`: 当任何一个键被按下时，回调函数将被调用。. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: 当输入任何一个键时，回调函数将被调用. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: 释放键时调用的回调函数。. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: 字符串，表示在做出初始选择之前要显示的值。. Default: `none`.
* __width__ | `number`: 输入的宽度（像素）。. Default: `80`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## 例子

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

