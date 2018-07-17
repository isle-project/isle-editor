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

* __question__ | `string`: question for which the student has to select one of the available answer options. Default: `''`.
* __options__ | `array (required)`: available answer options from which the student can select. Default: `none`.
* __solution__ | `string (required)`: question solution (must be equal to one of the answer options). Default: `none`.
* __defaultValue__ | `string`: preselected answer option. Default: `''`.
* __failureMsg__ | `string`: message to be displayed when student selects a wrong answer. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: message to be displayed when student selects the correct answer. Default: `'That's the correct answer!'`.
* __inline__ | `boolean`: controls whether the component should be inlined. Default: `false`.
* __onChange__ | `function`: callback  which is triggered after the submit action. Default: `onChange() {}`.
