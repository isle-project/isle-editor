---
id: range-question
title: Range Question
sidebar_label: Range Question
---

A range question component that asks students to supply a lower and upper end point.

## Options

* __question__ | `(string|node)`: displayed question. Default: `''`.
* __solution__ | `array<number>`: two-element array containing the endpoints of the correct range. Default: `none`.
* __hintPlacement__ | `string`: placement of the hints (either `top`, `left`, `right`, or `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: hints providing guidance on how to answer the question. Default: `[]`.
* __labels__ | `array`: two-element array of custom labels other than "Lower" and "Upper". Default: `none`.
* __feedback__ | `boolean`: controls whether to display feedback buttons. Default: `true`.
* __chat__ | `boolean`: controls whether the element should have an integrated chat. Default: `false`.
* __digits__ | `number`: number of digits that have to match between solution and user-supplied answer. If not given or set to null, the component checks for strict equality. If set to 0, checks for integer equality. Default: `3`.
* __max__ | `number`: maximum input value. Default: `null`.
* __min__ | `number`: minimum input value. Default: `null`.
* __nTries__ | `number`: after how many tries feedback should be supplied (if `provideFeedback` is `true`). Default: `1`.
* __provideFeedback__ | `boolean`: indicates whether feedback including the correct answer should be displayed after learners submit their answers. Default: `true`.
* __submitAfterFeedback__ | `boolean`: controls whether one should be able to resubmit even after the solution has been revealed. Default: `false`.
* __until__ | `Date`: time until students should be allowed to submit answers. Default: `none`.
* __points__ | `number`: maximum number of points awarded in grading. Default: `10`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onChangeLower__ | `function`: callback triggered after the lower bound is changed by the user. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: callback triggered after the upper bound is changed by the user. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: callback triggered after a bound is changed by the user (with lower and upper bound as arguments). Default: `onChange() {}`.
* __onSubmit__ | `function`: callback invoked when answer is submitted; has as first parameter a `boolean` indicating whether the answer was correctly answered (if applicable, `null` otherwise) and the supplied answer as the second parameter. Default: `onSubmit() {}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Points and Feedback', value: 'withPoints' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<RangeQuestion
    style={{ fontSize: 17, }}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withHints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<RangeQuestion
    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withPoints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
    points={20}
    onSubmit={(res) => {
     if (res === true) {
      alert('Great, you have received 20 points');
     }
     else alert('sorry, this answer was wrong');
    }}
/>
```

</TabItem>

</Tabs>
