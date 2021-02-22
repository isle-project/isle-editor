---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

A question that asks the user to upload an image.

## Options

* __question__ | `(string|node)`: question for which the student has to bring the available `options` into the correct order. Default: `''`.
* __hintPlacement__ | `string`: placement of the hints (either `top`, `left`, `right`, or `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: hints providing guidance on how to answer the question. Default: `[]`.
* __feedback__ | `boolean`: controls whether to display feedback buttons. Default: `true`.
* __chat__ | `boolean`: controls whether the element should have an integrated chat. Default: `false`.
* __disableSubmitNotification__ | `boolean`: controls whether a notification should be displayed after submitting an image. Default: `false`.
* __className__ | `string`: class name. Default: `''`.
* __sketchpad__ | `object`: properties to be passed to <Sketchpad /> component; to render the sketchpad, pass in at least an empty object `{}`. Default: `none`.
* __solution__ | `string`: image URL of model solution. Default: `none`.
* __until__ | `Date`: time until students should be allowed to submit answers. Default: `none`.
* __points__ | `number`: maximum number of points awarded in grading. Default: `10`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onSubmit__ | `function`: callback invoked when answer is submitted; has as a sole parameter a `boolean` indicating whether the elements were placed in the correct order. Default: `onSubmit() {}`.


## Examples
