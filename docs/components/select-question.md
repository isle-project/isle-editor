# Select Question

A select question component. 

#### Example:

``` js
<SelectQuestion
    question="The usual t-test is"
    solution="two-sided"
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
* __inline__ | `boolean`: controls whether the component is rendered inline or not. Default: `false`.
* __hintPlacement__ | `string`: placement of the hints (either `top`, `left`, `right`, or `bottom`). Default: `'bottom'`.
* __hints__ | `array<string>`: hints providing guidance on how to answer the question. Default: `[]`.
* __feedback__ | `boolean`: controls whether to display feedback buttons. Default: `false`.
* __chat__ | `boolean`: controls whether the element should have an integrated chat. Default: `false`.
* __failureMsg__ | `string`: message to be displayed when student selects a wrong answer. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: message to be displayed when student selects the correct answer. Default: `'That's the correct answer!'`.
* __onChange__ | `function`: callback  which is triggered after the submit action. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback invoked when answer is submitted; has as first parameter a `boolean` indicating whether the answer was correctly anwered (if applicable, `null` otherwise) and the supplied answer as the second parameter. Default: `onSubmit() {}`.
