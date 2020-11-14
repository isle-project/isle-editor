---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

A slider input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.

## Example

```jsx live
<SliderInput
    legend="Success Probability"
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```



## Options

* __defaultValue__ | `number`: The starting value of the slider. Default: `10`.
* __disabled__ | `boolean`: controls whether the slider input is active or not. If set to true, the slider will be present on the screen, albeit grayed-out. Default: `false`.
* __inline__ | `boolean`: controls whether to place the slider inline with text or outside. Default: `false`.
* __legend__ | `(string|node)`: caption of the input. Default: `none`.
* __max__ | `number`: The maximum value of the slider. Default: `100`.
* __maxLabel__ | `string`: label to be displayed to the right of slider instead of maximum value. Default: `none`.
* __min__ | `number`: The minimum value of the slider. Default: `0`.
* __minLabel__ | `string`: label to be displayed to the left of slider instead of minimum value. Default: `none`.
* __onChange__ | `function`: callback invoked with the new value when the slider value changes. Default: `onChange() {}`.
* __precision__ | `number`: rounding of the input. The value will be rounded to have no more significant digits than the precision. For example, if one wishes to only use integers, a precision of 10 would be used, while if one wishes to round to the hundreds place, one would use a precision of 0.001. Default: `10`.
* __step__ | `(number|string)`: step size of the slider. Default: `1`.
* __hideTooltip__ | `boolean`: controls whether to hide tooltip. Default: `false`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __numberInputStyle__ | `object`: CSS inline styles for number input component. Default: `{}`.
* __rangeInputStyle__ | `object`: CSS inline style for range input component. Default: `{}`.
