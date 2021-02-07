---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

一个滑块输入组件。可以作为ISLE仪表板的一部分或独立使用。在后一种情况下，你想通过`onChange`属性来处理变化，或者通过`bind`属性将值绑定到一个全局变量。

## Options

* __defaultValue__ | `number`: 滑块的起始值. Default: `10`.
* __disabled__ | `boolean`: 控制滑块输入是否处于活动状态。如果设置为 "true"，滑块将出现在屏幕上，尽管是灰色的。. Default: `false`.
* __inline__ | `boolean`: 控制是否将滑块置于文本的内联或外联。. Default: `false`.
* __legend__ | `(string|node)`: 输入标题. Default: `none`.
* __max__ | `number`: 滑块的最大值. Default: `100`.
* __maxLabel__ | `string`: 在滑块右侧显示标签，而不是最大值。. Default: `none`.
* __min__ | `number`: 滑块的最小值. Default: `0`.
* __minLabel__ | `string`: 在滑块左侧显示标签，而不是最小值。. Default: `none`.
* __onChange__ | `function`: 当滑块值发生变化时，用新的值调用回调。. Default: `onChange() {}`.
* __precision__ | `number`: 输入的四舍五入。该值将被四舍五入到不超过精度的重要数字。例如，如果只想使用整数，就会使用精度为10，而如果想四舍五入到百位，就会使用精度为0.001。. Default: `10`.
* __step__ | `(number|string)`: 滑块的步长. Default: `1`.
* __hideTooltip__ | `boolean`: 控制是否隐藏工具提示. Default: `false`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __numberInputStyle__ | `object`: 数字输入组件的CSS内联样式. Default: `{}`.
* __rangeInputStyle__ | `object`: 范围输入组件的CSS内联样式. Default: `{}`.


## Examples

```jsx live
<SliderInput
    legend="Success Probability"
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```



