---
id: number-input
title: Number Input
sidebar_label: Number Input
---

A number input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.

## Options

* __bind__ | `string`: name of global variable for the number to be assigned to. Default: `''`.
* __defaultValue__ | `number`: value indicating the default value of the input at startup. Default: `0`.
* __disabled__ | `boolean`: boolean indicating whether the input is active or not. Default: `false`.
* __inline__ | `boolean`: indicates whether the input is displayed inline. Default: `false`.
* __legend__ | `(string|node)`: string indicating the text displayed next to the number input. Default: `none`.
* __max__ | `number`: number indicating the maximum value that may be inserted. Default: `null`.
* __min__ | `number`: number indicating the smallest possible value that may be inserted. Default: `null`.
* __numbersOnly__ | `boolean`: controls whether only numbers are accepted. Default: `true`.
* __placeholder__ | `string`: undefined. Default: `'0'`.
* __onBlur__ | `function`: callback function to be invoked when using a blur method. Default: `onBlur() {}`.
* __onChange__ | `function`: callback function to be invoked when number input is changed. Default: `onChange() {}`.
* __onKeyDown__ | `function`: callback function to be invoked when any key is pressed down. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: callback function to be invoked when any key is entered. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: callback function to be invoked when key is released. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: number indicating the incremental changes when using the increment arrows. Default: `1`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __inputStyle__ | `object`: CSS inline styles for input element. Default: `{}`.
* __value__ | `number`: number value (for controlled component). Default: `none`.
* __tooltip__ | `string`: tooltip string (if not set, the tooltip is automatically generated). Default: `none`.
* __tooltipPlacement__ | `string`: direction of the tooltip. Default: `'left'`.


## Examples

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

