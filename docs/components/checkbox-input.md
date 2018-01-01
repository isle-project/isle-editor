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

* __defaultValue__: The value the checkbox is initialized with. Default: `false`.
* __legend__: `string` to be displayed as the title of te component. Default: `''`.
* __onChange__: Callback `function` invoked after each change of the checkbox value. Default: `null`.
* __inline__: A `bool` value indicating whether to place the component inline with text. Default: `false`.
