---
id: select-input
title: Select Input
sidebar_label: Select Input
---

一个选择输入组件。可以作为ISLE仪表板的一部分或独立使用。在后一种情况下，你想通过 "onChange "属性来处理更改，或者通过 "bind "属性将值绑定到一个全局变量。

## Options

* __bind__ | `string`: 全局变量的名称，用于分配到的数字。. Default: `''`.
* __clearable__ | `boolean`: 表示是否可以清除所做选择的布尔值。. Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: 启动时输入的默认值. Default: `none`.
* __disabled__ | `boolean`: 控制输入是否处于激活状态. Default: `false`.
* __inline__ | `boolean`: 表明输入的内容是否内嵌显示。. Default: `false`.
* __legend__ | `(string|node)`: 旁边显示的文字. Default: `''`.
* __menuPlacement__ | `string`: 菜单相对于控件的位置（可以是 "自动"、"顶部 "或 "底部"）。. Default: `'auto'`.
* __multi__ | `boolean`: 控制是否可以选择多个答案. Default: `false`.
* __onChange__ | `function`: 选择时调用的回调函数。. Default: `onChange() {}`.
* __options__ | `array`: 数组，表示用户可选择的选项. Default: `[]`.
* __placeholder__ | `string`: 在作出初步选择之前，要显示的值。. Default: `none`.
* __tooltip__ | `string`: 图例. Default: `none`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## Examples

```jsx live
<SelectInput
    legend="Choose the test direction"
    defaultValue="two-sided"
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```

