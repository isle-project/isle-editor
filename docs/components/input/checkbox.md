# Checkbox Input

A checkbox input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.

#### Example:

``` js
<CheckboxInput
    legend="Take the logarithm"
    defaultValue={false}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/checkbox-input1)

Note: To see a prior version of the demonstration, visit [the old link](https://isle.heinz.cmu.edu/components/checkbox-input)

#### Options:

* __bind__ | `string`: name of global variable for the checkbox value to be assigned to. Default: `''`.
* __defaultValue__ | `boolean`: A boolean value indicating the default value of the checkbox. Default: `false`.
* __disabled__ | `boolean`: indicates whether the input is active or not. Default: `false`.
* __inline__ | `boolean`: indicates whether the checkbox is displayed inline. Default: `false`.
* __onChange__ | `function`: callback function to be invoked when checkbox is clicked. The function is called with the current checkbox value. Default: `onChange() {}`.
* __legend__ | `string`: text displayed next to the checkbox'. Default: `''`.
