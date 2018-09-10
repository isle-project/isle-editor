# Number Input

A number input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.

#### Example:

``` js
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/number-input/)

#### Options:

* __bind__ | `string`: A string indicating the variable for the number to be assigned. Default: `''`.
* __defaultValue__ | `number`: A value indicating the default value of the input at start. Default: `0`.
* __disabled__ | `boolean`: A boolean indicating whether the input is active or not. Default: `false`.
* __inline__ | `boolean`: Indicates whether the input is displayed inline. Default: `false`.
* __legend__ | `string`: A string indicating the text displayed next to the number input. Default: `''`.
* __max__ | `number`: A number indicating the maximum value that may be inserted. Default: `null`.
* __min__ | `number`: A number indicating the smallest possible value that may be inserted. Default: `null`.
* __numbersOnly__ | `boolean`: A boolean value indicating whether only numbers are accepted. Default: `true`.
* __onBlur__ | `function`: A function to be called when using a blur method. Default: `onBlur() {}`.
* __onChange__ | `function`: A function to be called when a number is inputted. Default: `onChange() {}`.
* __step__ | `(number|string)`: A number indicating the incremental changes when using the increment arrows. Default: `1`.
* __value__ | `number`: A property indicating a value that can overwrite others. Default: `none`.
* __width__ | `number`: A number indicating the width of the input bar in pixels. Default: `80`.
