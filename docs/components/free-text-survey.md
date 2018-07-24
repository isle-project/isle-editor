# Free Text Survey

An ISLE component for questions where the answers by the students should be supplied in the form of free text. Which differentiates this component from the **Fre Text Question** is the fact that the aggregated group data is displayed to.

#### Example:

``` js
<FreeTextQuestion 
    question="What is the p-value your obtained for this test?" 
    rows={1} 
    solution="1.476303e-05" 
/>
``` 

[Open interactive preview](https://isle.heinz.cmu.edu/components/free-text-survey/)

#### Options:

* __allowMultipleAnswers__ | `boolean`: A boolean indicating whether one wishes to allow students to answer the survey multiple times. Default: `false`.
* __anonymous__ | `boolean`: A boolean indicating whether student answers are anonymized. Default: `false`.
* __onSubmit__ | `function`: A function to be called when an answer is submitted. Default: `onSubmit() {}`.
* __question__ | `string`: A string indicating the question to ask the students. Default: `''`.
* __rows__ | `number`: A number indicating the rows of text in the input method. Default: `4`.
