# Number Input

A number input component. Usually, this will be used as part of an [ISLE dashboard](dashboard.md), but it can also be used standalone. In this case, you want to handle changes via the `onChange` attribute. 

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

* __defaultValue__: The value the slider is initialized with. Default: `0`.
* __inline__: `boolean` indicating whether the element should be displayed inline. Default: `false`.
* __legend__: `string` to be displayed as the title of te component. Default: `''`.
* __max__: The maximum value of the slider. Default: `100`.
* __min__: The minimum value of the slider. Default: `0`.
* __step__: The step size of the slider. Default: `1`.
* __onChange__: Callback `function` invoked after each change of the slider value. Default: `null`.
