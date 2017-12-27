# Select Input

A select input component. Usually, this will be used as part of an [ISLE dashboard](dashboard.md), but it can also be used standalone. In this case, you want to handle changes via the `onChange` attribute. 

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

#### Options:

* __defaultValue__: The option the select input is initialized with. Default: `''`.
* __inline__: `boolean` indicating whether the element should be displayed inline. Default: `false`.
* __legend__: `string` to be displayed as the title of te component. Default: `''`.
* __onChange__: Callback `function` invoked after each change of the slider value. Default: `null`.
* __options__: `Array` of options for the select input element. Default: `[]`.
