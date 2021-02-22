---
id: image-question 
title: Image Question
sidebar_label: Image Question
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
* __placeholder__ | `string`: placeholder text displayed before user has entered any text. Default: `'Enter your answer here...'`.
* __disableSubmitNotification__ | `boolean`: controls whether to disable submission notifications. Default: `false`.
* __submissionMsg__ | `string`: notification displayed when the learner first submits his answer. Default: `''`.
* __resubmissionMsg__ | `string`: notification displayed for all submissions after the first one. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: indicates whether feedback including the correct answer should be displayed after learners submit their answers. Default: `true`.
* __maxlength__ | `number`: maximum allowed number of characters. Default: `2500`.
* __voiceID__ | `string`: voice control identifier. Default: `none`.
* __until__ | `Date`: time until students should be allowed to submit answers. Default: `none`.
* __points__ | `number`: maximum number of points awarded in grading. Default: `10`.
* __className__ | `string`: class name. Default: `''`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onChange__ | `function`: callback invoked every time the text area value changes; receives the current text as its sole argument. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback invoked when user submits an answer; receives the submitted text as its sole argument. Default: `onSubmit() {}`.

## Example
