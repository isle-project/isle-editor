# Text Input

A text input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.

#### Example:

``` js
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/text-input/)

#### Options:

* __defaultValue__ | `string`: A value indicating the default value of the input at start. Default: `''`.
* __legend__ | `(string|node)`: A string indicating the text displayed next to the number input. Default: `''`.
* __inline__ | `boolean`: Indicates whether the input is displayed inline. Default: `false`.
* __onChange__ | `function`: A function to be called when a text value is changed. Default: `onChange(){}`.
* __placeholder__ | `string`: A string indicating the value to be displayed before an initial choice is made. Default: `'Enter text'`.
* __width__ | `number`: A number indicating the width of the input in pixels. Default: `80`.
