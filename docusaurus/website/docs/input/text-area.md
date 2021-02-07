---
id: text-area
title: Text Area
sidebar_label: Text Area
---

A text area component. Used as a stand-alone component, changes should be handled via the `onChange` attribute.

## Options

* __defaultValue__ | `string`: default value of the text area. Default: `''`.
* __value__ | `string`: text value (for controlled component). Default: `none`.
* __disabled__ | `boolean`: controls whether the text area shall be disabled. Default: `false`.
* __legend__ | `(string|node)`: legend text. Default: `''`.
* __onBlur__ | `function`: callback function invoked when the text area loses focus. Default: `onBlur() {}`.
* __onChange__ | `function`: callback function invoked with the new text when the area text changes. Default: `onChange() {}`.
* __placeholder__ | `string`: placeholder text. Default: `none`.
* __resizable__ | `string`: controls whether the text area shall be resizable (can be either `both`, `horizontal`, `vertical`, or `none`). Default: `'none'`.
* __rows__ | `number`: number of rows. Default: `5`.
* __style__ | `object`: CSS inline styles. Default: `{}`.


## Examples

```jsx live
<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
/>
```



