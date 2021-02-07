---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

A button to be displayed at the end of a lesson for students to click on. By default, a message confirming completion of the lesson is sent to their email address.

## Options

* __label__ | `string`: label of submit button. Default: `none`.
* __message__ | `string`: message for confirmation email. Default: `''`.
* __requireLogin__ | `boolean`: controls whether to require user to be signed in for button to be active (for anonymous users, no email confirmation is sent out). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: controls whether to send confirmation email upon lesson submission. Default: `true`.
* __className__ | `string`: class name. Default: `''`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onClick__ | `function`: callback invoked when clicking on the submission button. Default: `onClick() {}`.


## Examples

```jsx live
<LessonSubmit />
```

