---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

A survey component in which the instructor may collect multiple-choice survey data from students in real-time.

## Options

* __question__ | `(string|node)`: string indicating the question to ask the students. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controls whether one wishes to allow students to answer the survey multiple times. Default: `false`.
* __anonymous__ | `boolean`: controls whether student answers are anonymized. Default: `false`.
* __answers__ | `array`: array indicating answer choices for the students. Default: `[]`.
* __multipleAnswers__ | `boolean`: indicates whether students may select more than one answer. Note that this differs from allowMultipleAnswers in that allow makes students able to submit the question multiple times. Default: `false`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onSubmit__ | `function`: function to be called when an answer is submitted. Default: `onSubmit() {}`.


## Examples

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

