# Number Survey

A survey component in which the instructor may collect numeric survey data from students in real-time.

#### Example:

``` js
<NumberSurvey
    allowMultipleAnswers={true}
    anonymous="false"
    id="generic_mean_question"
    question="Submit a number"
    defaultValue={0}
    step="any"
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/number-survey)

#### Options:

* __question__ | `string`: the question to be displayed. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controls whether the same user (or session if anonymous) may submit multiple answers). Default: `false`.
* __anonymous__ | `boolean`: Allows for the students to submit data anonymously. Note that if this option is set to "true", then the instructors will be unable to see the ID of the submitting student. Default: `false`.
* __step__ | `(number|string)`: A `string` or `numeric` value indicating the step of the arrows seen when hovering the cursor above the input box. If `'any'`, the step will be set to `1`. Default: `'any'`.
* __onSubmit__ | `function`: callback function invoked once students submits an answer. Default: `onSubmit() {}`.
