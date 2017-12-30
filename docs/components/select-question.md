# Select Question

A select question component. 

#### Example:

``` js
<SelectQuestion
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/select-question/)

#### Options:

* __defaultValue__: The option the select input is initialized with. Default: `''`.
* __inline__: `boolean` indicating whether the element should be displayed inline. Default: `false`.
* __legend__: `string` to be displayed as the title of te component. Default: `''`.
* __onChange__: Callback `function` invoked after each change of the slider value. Default: `null`.
* __options__: `Array` of options for the select input element. Default: `[]`.
