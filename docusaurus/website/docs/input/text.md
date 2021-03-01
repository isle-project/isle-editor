---
id: text-input
title: Text Input
sidebar_label: Text Input
---

A text input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.

## Options

* __bind__ | `string`: name of global variable for the number to be assigned to. Default: `none`.
* __defaultValue__ | `string`: value indicating the default value of the input at start. Default: `''`.
* __value__ | `string`: text value (for controlled component). Default: `none`.
* __legend__ | `(string|node)`: string indicating the text displayed next to the number input. Default: `''`.
* __inline__ | `boolean`: Indicates whether the input is displayed inline. Default: `false`.
* __onBlur__ | `function`: callback function invoked when the text area loses focus. Default: `onBlur() {}`.
* __onChange__ | `function`: function to be called when a text value is changed. Default: `onChange() {}`.
* __onKeyDown__ | `function`: callback function to be invoked when any key is pressed down. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: callback function to be invoked when any key is entered. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: callback function to be invoked when key is released. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: string indicating the value to be displayed before an initial choice is made. Default: `none`.
* __width__ | `number`: number indicating the width of the input in pixels. Default: `80`.
* __style__ | `object`: CSS inline styles. Default: `{}`.


## Examples

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

