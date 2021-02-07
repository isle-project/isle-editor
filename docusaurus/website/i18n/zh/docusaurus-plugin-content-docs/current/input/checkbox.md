---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

一个复选框输入组件。可以作为ISLE仪表板的一部分或独立使用。在后一种情况下，您希望通过`onChange`属性处理更改，或通过`bind`属性将值绑定到一个全局变量。

## Options

* __bind__ | `string`: 全局变量的名称，用于分配给复选框的值。. Default: `''`.
* __defaultValue__ | `boolean`: 布尔值，表示复选框的默认值。. Default: `false`.
* __value__ | `boolean`: 复选框值. Default: `none`.
* __disabled__ | `boolean`: 表示输入是否处于激活状态。. Default: `false`.
* __inline__ | `boolean`: 表示该复选框是否内嵌显示。. Default: `false`.
* __onChange__ | `function`: 当复选框被点击时调用的回调函数。该函数以当前复选框的值被调用。. Default: `onChange() {}`.
* __legend__ | `(string|node)`: 复选框旁显示的文字. Default: `''`.
* __tooltip__ | `string`: 鼠标悬停在复选框上时显示的文字. Default: `''`.
* __tooltipPlacement__ | `string`: 按钮工具提示的位置. Default: `'right'`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## Examples

```jsx live
<CheckboxInput
    legend="Take the logarithm"
    defaultValue={false}
/>
```

