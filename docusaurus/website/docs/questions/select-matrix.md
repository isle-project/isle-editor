---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

A question with an answer consisting of multiple select boxes.

## Options

* __question__ | `(string|node)`: question to be displayed at the top of the select question matrix. Default: `''`.
* __rows__ | `array`: row labels. Default: `[]`.
* __cols__ | `array`: column labels. Default: `[]`.
* __options__ | `object`: object with key-value pairs with keys having the form `row:col`, e.g. `0:0`, `0:1`, `1:0` etc., and their corresponding values being arrays of the possible answer choices for the individual select questions. Default: `{}`.
* __solution__ | `object`: solution object with key-value pairs with keys having the form `row:col`, e.g. `0:0`, `0:1`, `1:0` etc., and their corresponding values being the index of the correct answer element from the respective `options` array. Default: `{}`.
* __hints__ | `array<(string|node)>`: hints providing guidance on how to answer the question. Default: `[]`.
* __hintPlacement__ | `string`: placement of the hints (either `top`, `left`, `right`, or `bottom`). Default: `'bottom'`.
* __feedback__ | `boolean`: controls whether to display feedback buttons. Default: `true`.
* __provideFeedback__ | `string`: whether to provide `none` feedback at all, `individual` feedback on the submitted answer(s), or `overall` feedback for all questions. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: whether to allow submissions without a selection made in each select box. Default: `false`.
* __nTries__ | `number`: after how many tries no further answers are accepted (if `provideFeedback` is not `none`). Default: `3`.
* __failureMsg__ | `string`: notification text displayed upon submitting incorrect answers. Default: `none`.
* __successMsg__ | `string`: notification text displayed upon submitting correct answers. Default: `none`.
* __cellLabels__ | `object`: labels for cells defined by object with keys having the format `row:col`. Default: `{}`.
* __chat__ | `boolean`: controls whether the element should have an integrated chat. Default: `false`.
* __panelProps__ | `object`: additional properties to be passed to the outer <Panel /> component. Default: `{}`.
* __className__ | `string`: class name. Default: `''`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback function invoked upon submission with the answers as a first and a boolean indicating correctness as second parameter. Default: `onSubmit() {}`.


## Examples


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Feedback Messages', value: 'feedbackMessages' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestionMatrix
  question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
    hints={[
        'His father Johann Sebastian was a famous composer too',
        'He was famous for his FAUST - so definitely an author',
        'Poussin was an 18th century painter',
        'Courbet was a realistic painter'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestionMatrix
    style={{ 
        fontFamily: 'Georgia',
        fontSize: 22, 
        textShadow: '0 0  10px white',
        background: 'rgb(251,213,112)',
        background: 'radial-gradient(circle, yellow 0%, orange 30%, green 100%)'
    }}
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>


<TabItem value="feedbackMessages">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    failureMsg="Sorry, that was wrong." 
    successMsg ="Wow! Congratulations, you are a specialist!"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```

</TabItem>

</Tabs>

