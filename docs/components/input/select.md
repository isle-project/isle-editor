# Select Input

A select input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.

#### Example:

``` js
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

[Open interactive preview](https://isle.heinz.cmu.edu/components/select-input/)

#### Options:

* __bind__ | `string`: name of global variable for the number to be assigned to. Default: `''`.
* __clearable__ | `boolean`: boolean value indicating whether one may clear choice(s) made. Default: `none`.
* __defaultValue__ | `(number|string|array)`: default value of the input at startup. Default: `none`.
* __disabled__ | `boolean`: controls whether the input is active or not. Default: `false`.
* __inline__ | `boolean`: indicates whether the input is displayed inline. Default: `false`.
* __legend__ | `(string|node)`: text displayed next to the input. Default: `''`.
* __menuPlacement__ | `string`: placement of the menu in relation to the control (either `auto`, `top`, or `bottom`). Default: `'auto'`.
* __multi__ | `boolean`: controls whether one may select multiple answers. Default: `false`.
* __onChange__ | `function`: callback function to be invoked when a choice is made. Default: `onChange() {}`.
* __options__ | `array`: array of indicating the choices available the user. Default: `[]`.
* __placeholder__ | `string`: value to be displayed before an initial choice is made. Default: `'Select...'`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
