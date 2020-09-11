---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

A number question component.

## Example

```jsx live
<NumberQuestion
    question="What is the number PI - three digits after the period"
    solution={3.142}
/>
```

## Options

* __question__ | `(string|node)`: number question. Default: `''`.
* __hintPlacement__ | `string`: placement of the hints (either `top`, `left`, `right`, or `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: hints providing guidance on how to answer the question. Default: `[]`.
* __feedback__ | `boolean`: controls whether to display feedback buttons. Default: `true`.
* __solution__ | `(number|array<number>)`: a numeric answer to the problem (or multiple correct answers if an array is supplied). Default: `none`.
* __digits__ | `number`: number of digits for which the answer supplied by the student must match the solution to be considered correct. Set to 0 to match as an integer. If set to null it will search for an exact match.. Default: `3`.
* __max__ | `number`: maximum allowed input value. Default: `null`.
* __min__ | `number`: minimum allowed input value. Default: `null`.
* __defaultValue__ | `number`: pre-selected value of number input. Default: `0`.
* __provideFeedback__ | `boolean`: indicates whether feedback including the correct answer should be displayed after learners submit their answers. Default: `true`.
* __nTries__ | `number`: after how many tries feedback should be supplied (if `provideFeedback` is `true`). Default: `1`.
* __disableSubmitNotification__ | `boolean`: controls whether to disable submission notifications. Default: `false`.
* __chat__ | `boolean`: controls whether the element should have an integrated chat. Default: `false`.
* __until__ | `Date`: time until students should be allowed to submit answers. Default: `none`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onChange__ | `function`: callback  which is triggered after the value of the number field changes; receives the current value as its sole argument. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback invoked when answer is submitted; has as first parameter a `boolean` indicating whether the answer was correctly answered (if applicable, `null` otherwise) and the supplied answer as the second parameter. Default: `onSubmit() {}`.
