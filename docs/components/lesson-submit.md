# Lesson Submit

A button to be displayed at the end of a lesson for students to click on. By default, a message confirming completion of the lesson is sent to their email address.

#### Example:

``` js
<LessonSubmit />
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/lesson-submit/)

#### Options:

* __label__ | `string`: label of submit button. Default: `'Finish lesson'`.
* __message__ | `string`: message for confirmation email. Default: `''`.
* __sendConfirmationEmail__ | `boolean`: controls whether to send confirmation email upon lesson submission. Default: `true`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onClick__ | `function`: callback invoked when clicking on the submission button. Default: `onClick() {}`.
