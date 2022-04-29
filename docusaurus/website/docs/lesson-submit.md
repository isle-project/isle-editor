---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

A button to be displayed at the end of a lesson for students to click on. By default, a message confirming completion of the lesson is sent to their email address.

## Options

* __coverage__ | `array<string>`: list of identifiers to be submitted and included in the response document. Default: `none`.
* __label__ | `string`: label of submit button. Default: `none`.
* __message__ | `string`: message for confirmation email. Default: `''`.
* __requireLogin__ | `boolean`: controls whether to require user to be signed in for button to be active (for anonymous users, no email confirmation is sent out). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: controls whether to send confirmation email upon lesson submission. Default: `true`.
* __className__ | `string`: class name. Default: `''`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onClick__ | `function`: callback invoked when clicking on the submission button. Default: `onClick() {}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Label', value: 'customLabel' },
        { label: 'Email Feedback', value: 'emailFeedback' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<LessonSubmit />
```

</TabItem>

<TabItem value="customLabel">

```jsx live
<LessonSubmit label="Click to submit" />
```

</TabItem>

<TabItem value="withEmail">

```jsx live
<LessonSubmit 
    style={{ outline: '4px solid black'}}
    message={`
    Hi,
    I am very glad that you solved this lesson. Congratulations! 
    It was a sophisticated one.
    If you want some help how to use ISLE, have a look a 
    [this site](https://isledocs.com/docs/)
    
    Best
    The ISLE team
    `}
    label="Click to submit" />
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<LessonSubmit 
    requireLogin={false}
    onClick={() => {
        alert( 'The Button has been clicked...' );
    }}
    label="Click to submit" />
```
</TabItem>

</Tabs>
