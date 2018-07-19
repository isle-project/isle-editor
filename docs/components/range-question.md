# Range Question

A range question component.

#### Example:

``` js
<RangeQuestion
    question="Approximately in which range lie 99% of observations drawn from a standard normal distribution?"
    solution={[-3,3]}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/range-question/)

#### Options:

* __question__ | `string`: displayed question. Default: `''`.
* __solution__ | `array<number>`: two-element array containing the endpoints of the correct range. Default: `none`.
* __hintPlacement__ | `string`: placement of the hints (either `top`, `left`, `right`, or `bottom`). Default: `'bottom'`.
* __hints__ | `array<string>`: hints providing guidance on how to answer the question. Default: `[]`.
* __chat__ | `boolean`: controls whether the element should have an integrated chat. Default: `false`.
* __digits__ | `number`: number of digits that have to match between solution and user-supplied answer. If not given or set to null, the component checks for strict equality. If set to 0, checks for integer equality.. Default: `3`.
* __max__ | `number`: maximum input value. Default: `null`.
* __min__ | `number`: minimum input value. Default: `null`.
* __onChangeLower__ | `function`: callback triggered after the lower bound is changed by the user. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: callback triggered after the upper bound is changed by the user. Default: `onChangeUpper() {}`.
