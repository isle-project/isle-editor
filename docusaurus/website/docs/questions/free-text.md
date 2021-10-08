---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

An ISLE component for questions where answers by students should be supplied in the form of free text.

## Options

* __question__ | `(string|node)`: the question displayed at the top of the free text question component. Default: `''`.
* __hints__ | `array<(string|node)>`: hints providing guidance on how to answer the question. Default: `[]`.
* __hintPlacement__ | `string`: placement of the hints (either `top`, `left`, `right`, or `bottom`). Default: `'top'`.
* __feedback__ | `boolean`: controls whether to display feedback buttons. Default: `true`.
* __solution__ | `(string|node)`: a model answer to the problem. Default: `''`.
* __instantSolution__ | `boolean`: whether one can toggle the display of the model answer immediately. Default: `false`.
* __rows__ | `number`: number of rows of the text field for students to type their answers. Default: `5`.
* __chat__ | `boolean`: controls whether to enable group chat should for the question. Default: `false`.
* __resizable__ | `boolean`: controls whether the text area should be resizable. Default: `false`.
* __placeholder__ | `string`: placeholder text displayed before user has entered any text. Default: `''`.
* __disableSubmitNotification__ | `boolean`: controls whether to disable submission notifications. Default: `false`.
* __submissionMsg__ | `string`: notification displayed when the learner first submits his answer. Default: `''`.
* __resubmissionMsg__ | `string`: notification displayed for all submissions after the first one. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: indicates whether feedback including the correct answer should be displayed after learners submit their answers. Default: `true`.
* __maxlength__ | `number`: maximum allowed number of characters. Default: `2500`.
* __until__ | `Date`: time until students should be allowed to submit answers. Default: `none`.
* __points__ | `number`: maximum number of points awarded in grading. Default: `10`.
* __className__ | `string`: class name. Default: `''`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onChange__ | `function`: callback invoked every time the text area value changes; receives the current text as its sole argument. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback invoked when user submits an answer; receives the submitted text as its sole argument. Default: `onSubmit() {}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Points for Grading', value: 'withPointsForGrading' },
        { label: 'No Feedback', value: 'withoutFeedbackAndNotification' },
        { label: 'Solution', value: 'withSolution' },
        { label: 'Hints', value: 'withHints' },
        { label: 'Placeholder', value: 'placeholderText' },
        { label: 'Due Date', value: 'dueDate' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
/>
```
</TabItem>

<TabItem value="withPointsForGrading" >

```jsx live
<FreeTextQuestion 
    question={<span>Can you please explain Montesquieu's System of *separation of powers*?</span>} 
    rows={3} 
    points={15}
/>
```

</TabItem>

<TabItem value="withoutFeedbackAndNotification" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3}
    disableSubmitNotification 
    feedback={false}
/>
```

</TabItem>

<TabItem value="withSolution" > 

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
/>
```

</TabItem>

<TabItem value="withHints" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
    hints = {["No, it was not Margret Thatcher", "He believed in Aliens by the way", "His first name was Winston - like the guy in 1984"]}
    submissionMsg = "His name was Winston churchill, and it occurred in a speech given by him to the House of Commons of the Parliament of the United Kingdom on 13 May 1940. The speech is sometimes known by that name"
/>
```

</TabItem>

<TabItem value="placeholderText" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={3} 
    solution="Winston Churchill" 
    placeholder="Think of an overweight politician with a big cigar in his mouth."
/>
```

</TabItem>

<TabItem value="dueDate" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
    until={new Date( Date.UTC(2029, 0, 1, 3, 33 ) )}
    placeholder="You can set a date until answers are accepted. In this case it is 2020, 1st of January, 3:30 am UTC time."
/>
```

</TabItem>

</Tabs>
