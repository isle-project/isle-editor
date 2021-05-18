---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

A select question component.

## Options

* __question__ | `(string|node)`: question for which the student has to select one of the available answer options. Default: `''`.
* __options__ | `array (required)`: available answer options from which the student can select. Default: `none`.
* __solution__ | `number`: index of solution element in `options`. Default: `none`.
* __preselected__ | `number`: index of preselected answer option. Default: `0`.
* __inline__ | `boolean`: controls whether the component is rendered inline or not. Default: `false`.
* __hintPlacement__ | `string`: placement of the hints (either `top`, `left`, `right`, or `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: hints providing guidance on how to answer the question. Default: `[]`.
* __feedback__ | `boolean`: controls whether to display feedback buttons. Default: `true`.
* __chat__ | `boolean`: controls whether the element should have an integrated chat. Default: `false`.
* __provideFeedback__ | `boolean`: indicates whether feedback including the correct answer should be displayed after learners submit their answers. Default: `true`.
* __failureMsg__ | `string`: message to be displayed when student selects a wrong answer. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: message to be displayed when student selects the correct answer. Default: `'That's the correct answer!'`.
* __points__ | `number`: maximum number of points awarded in grading. Default: `10`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onChange__ | `function`: callback  which is triggered after the submit action. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback invoked when answer is submitted; has as first parameter a `boolean` indicating whether the answer was correctly answered (if applicable, `null` otherwise) and the supplied answer as the second parameter. Default: `onSubmit() {}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Hints', value: 'with Hints' },
        { label: 'Submit Function Hints', value: 'submitFunction' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    style={{ background: 'gainsboro', boxShadow: '0 0 10px black'}}
/>
```
</TabItem>

<TabItem value="inline">

```jsx live
The usual t-test is:
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    inline
/> ... so you can us it in the midst of a longer paragraph
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestion
    question="White is "
    solution={1}
    options={[
        'a primary color',
        'not a primary color'
    ]}
    hints={[ "There are 3 primary colors", "Red is a primary color", "and so is yellow" ]}
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<SelectQuestion
    question="Select the primary color"
    solution={2}
    options={[
        'orange',
        'white',
        'red'
    ]}
    onSubmit={(result) => {
        switch ( result ) {
            case 'orange':
                alert( 'No, orange is a mix of yellow and red.' );
            break;
            case 'white':
                alert( 'White does not count as a color.' );
            break;
            case 'red':
                alert( 'That is correct.' );
            break;
        }
    }}
    provideFeedback={false}
/> 
```
</TabItem>

</Tabs>
