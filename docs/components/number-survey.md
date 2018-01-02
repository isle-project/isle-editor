# Number Survey

A survey component in which the instructor may take survey data from students. Typically found in a dashboard or panel; specifically for ease of access of the data produced.

``` js
<NumberSurvey
    allowMultipleAnswers={true}
    anonymous="false"
    id="generic_mean_question"
    legend="Submit a number"
    defaultValue={0}
    step="any"
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/number-survey)

#### Options

* __allowMultipleAnswers__: A `string` `bool` value indicating whether the same user (or session is anonymous) may submit multiple answers. Default: `'false'`.
* __id__: The `componentID` of the `query` used to obtain the data generated from the survey. Default: `''`.
* __anonymous__: Allows for the students to submit data anonymously. Note that if this option is set to "true", then the instructors will be unable to see the ID of the submitting student. Input type is `string`. Default: `'false'`.
* __legend__: The display legent text to appear to the left of "=" in the panel. Default: `''`.
* __defaultValue__: The starting value of the input. Default: `0`.
* __step__: A `string` or `numeric` value indicating the step of the arrows seen when hovering the cursor above the input box. If `'any'`, the step will be set to `1`. Default: `'any'`, meaning `1`.
