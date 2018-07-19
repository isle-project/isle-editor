# Number Question

A number question component.

#### Example:

``` js
<NumberQuestion
    question="What is the number PI - three digits after the period"
    solution={3.142}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/number-question/)

#### Options:

* __question__ | `string`: number question. Default: `''`.
* __hintPlacement__ | `string`: placement of the hints (either `top`, `left`, `right`, or `bottom`). Default: `'bottom'`.
* __hints__ | `array<string>`: hints providing guidance on how to answer the question. Default: `[]`.
* __solution__ | `number`: a numeric answer to the problem. Default: `none`.
* __digits__ | `number`: number of digits for which the answer supplied by the student must match the solution to be considered correct. Set to 0 to match as an integer. If set to null it will search for an exact match.. Default: `3`.
* __max__ | `number`: maximum allowed input value. Default: `null`.
* __min__ | `number`: minimum allowed input value. Default: `null`.
* __chat__ | `boolean`: controls whether the element should have an integrated chat. Default: `false`.
* __onChange__ | `function`: callback  which is triggered after the submit action. Default: `onChange() {}`.
