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

* __bind__ | `string`: A string indicating the variable for the number to be assigned. Default: `''`.
* __clearable__ | `boolean`: A boolean value indicating whether one may clear choice(s) made. Default: `none`.
* __defaultValue__ | `(number|string|array)`: A value indicating the default value of the input at start. Default: `none`.
* __disabled__ | `boolean`: A boolean indicating whether the input is active or not. Default: `false`.
* __inline__ | `boolean`: Indicates whether the input is displayed inline. Default: `false`.
* __legend__ | `string`: A string indicating the text displayed next to the input. Default: `''`.
* __multi__ | `boolean`: A boolean indicating whether one may select multiple answers. Default: `false`.
* __onChange__ | `function`: A function to be called when a number is inputted. Default: `onChange() {}`.
* __options__ | `array`: An array of indicating the choices available the user. Default: `[]`.
* __placeholder__ | `string`: A string indicating the value to be displayed before an initial choice is made. Default: `'Select...'`.
