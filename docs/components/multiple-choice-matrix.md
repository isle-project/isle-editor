# Multiple Choice Matrix

An ISLE component that renders a matrix of multiple choice questions with the same answers.

#### Example:

``` js
<MultipleChoiceMatrix 
    title="Do you think these concepts are important for an introductory statistics course, and do you (or your department) cover them in your introductory courses?" id="topics" 
    questions={[
        'Data Visualizations',
        'Hand calculations (e.g. standard deviation, z-scores)',
        'Combinatorics',
        'Basic probability theory (conditional probability, independence...)',
        'Calculus-based probability',
        'Sampling distributions',
        'Confidence intervals (traditional, formula-based)',
        'Boostrapping',
        'Hypothesis testing (traditional, e.g. t-test or chi-square formulas and tables)',
        'Simple linear regression',
        'Bayesian statistics',
        'Randomization- or simulation-based inference'
    ]}
    type="checkbox" 
    answers={[ 'I cover it', 'I think it\'s important' ]} 
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/multiple-choice-matrix/)

#### Options:

* __questions__ | `array (required)`: an array of questions. Default: `none`.
* __answers__ | `array (required)`: an array of answers. Default: `none`.
* __title__ | `(string|node)`: title to be displayed on top of the question matrix. Default: `none`.
* __solution__ | `array<array>`: boolean matrix the element of which indicate whether the respective radio button or checkbox should be ticked. Default: `none`.
* __type__ | `string`: question type (`radio` corresponds to "Select one", `checkbox` to "Select all that apply"). Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: controls whether to disable submission notifications. Default: `false`.
* __onChange__ | `function`: callback invoked when the value of a checkbox / radio button changes; invoked with the two-dimensional boolean array of the active status for each answer option. Default: `onChange() {}`.
* __onSubmit__ | `function`: undefined. Default: `onSubmit() {}`.
