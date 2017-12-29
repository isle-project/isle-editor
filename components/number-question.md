# Number Question

A number question component. Usually, this will be used as part of an [ISLE dashboard](dashboard.md), but it can also be used standalone. In this case, you want to handle changes via the `onChange` attribute. 

#### Example:

``` js
<NumberQuestion
    question="What is the number PI - three digits after the period"
    solution={3.142}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/number-question/)

#### Options:

* __chat__: `boolean` indicating whether the element should have a chat integrated
* __hintPlacement__: `string`  indicating where the hints shall be displayed. Default: `bottom`
* __hints__: `array` of `strings` containing the hints. Default: `[]`  
* __max__: `number` indicating the input maximum. Default: `+Infinity`
* __min__: `number` indicating the input minimum. Default: `-Infinity`
* __onChange__: callback `function` which is triggered after the submit action. Default: empty function. 
* __question__: `string` containing the number question. Default: `''`.
* __solution__: `number` containing the number solution. Default: `null`.