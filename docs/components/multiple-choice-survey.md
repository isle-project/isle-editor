# Multiple Choice Survey

A survey component in which the instructor may collect multiple-choice survey data from students in real-time.

#### Example:

``` js
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}/>
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/multiple-choice-survey)

#### Options:

* __id__ | `string (required)`: component identifier. Default: `none`.
* __question__ | `string`: string indicating the question to ask the students. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controls whether one wishes to allow students to answer the survey multiple times. Default: `false`.
* __anonymous__ | `boolean`: controls whether student answers are anonymized. Default: `false`.
* __answers__ | `array`: array indicating answer choices for the students. Default: `[]`.
* __multipleAnswers__ | `boolean`: indicates whether students may select more than one answer. Note that this differs from allowMultipleAnswers in that allow makes students able to submit the question multiple times. Default: `false`.
* __title__ | `string`: panel title. Default: `'Survey'`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onSubmit__ | `function`: function to be called when an answer is submitted. Default: `onSubmit() {}`.
