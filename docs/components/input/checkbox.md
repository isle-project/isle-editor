# Checkbox Input

A checkbox input component. Usually, this component will be used as part of an [ISLE dashboard](dashboard.md), but it can also be used standalone. In this case, you want to handle changes via the `onChange` attribute. 

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

* __bind__ | `string`: A string indicating the variable for the boolean to be assigned. Default: `''`.
* __defaultValue__ | `boolean`: A boolean value indicating the default value of the checkbox. Default: `false`.
* __disabled__ | `boolean`: A boolean indicating whether the input is active or not. Default: `false`.
* __inline__ | `boolean`: Indicates whether the checkbox is displayed inline. Default: `false`.
* __onChange__ | `function`: A function to be called when a checkbox is clicked. The function takes an argument value and should change whether value is true or false. Default: `onChange() {}`.
* __legend__ | `string`: A string indicating the text displayed next to the checkbox. Default: `''`.
