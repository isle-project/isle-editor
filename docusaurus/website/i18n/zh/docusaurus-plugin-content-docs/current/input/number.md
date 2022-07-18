---
id: number-input
title: Number Input
sidebar_label: Number Input
---

一个数字输入组件。可以作为ISLE仪表板的一部分或独立使用。在后一种情况下，你想通过`onChange`属性处理变化，或者通过`bind`属性将值绑定到一个全局变量。

## 选项

* __bind__ | `string`: 全局变量的名称，用于分配到的数字。. Default: `''`.
* __defaultValue__ | `number`: 表示启动时输入的默认值。. Default: `0`.
* __disabled__ | `boolean`: 表示输入是否处于活动状态的布尔值。. Default: `false`.
* __inline__ | `boolean`: 表明输入的内容是否内嵌显示。. Default: `false`.
* __legend__ | `(string|node)`: 字符串，表示在输入的数字旁边显示的文字。. Default: `none`.
* __max__ | `number`: 表示可插入的最大数值的数字。. Default: `null`.
* __min__ | `number`: 表示可插入的最小值的数字。. Default: `null`.
* __numbersOnly__ | `boolean`: 控制是否只接受数字. Default: `true`.
* __placeholder__ | `string`: 表示输入为空时显示的文本的字符串（要求将`defaultValue`设置为`null`或`undefined`）。. Default: `'0'`.
* __onBlur__ | `function`: 当使用模糊方法时要调用的回调函数。. Default: `onBlur() {}`.
* __onChange__ | `function`: 当数字输入发生变化时，将调用回调函数。. Default: `onChange() {}`.
* __onKeyDown__ | `function`: 当任何一个键被按下时，回调函数将被调用。. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: 当输入任何一个键时，回调函数将被调用. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: 释放键时调用的回调函数。. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: 表示使用递增箭头时的递增变化的数字。. Default: `1`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __inputStyle__ | `object`: 输入元素的CSS内联样式. Default: `{}`.
* __value__ | `number`: 数值. Default: `none`.
* __tooltip__ | `string`: 工具提示字符串(如果没有设置，则自动生成工具提示). Default: `none`.
* __tooltipPlacement__ | `string`: 工具提示的方向. Default: `'left'`.


## 例子

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

