# Free Text Question

An ISLE component for questions where the answers by the students should be supplied in the form of free text.

#### Example:

``` js
<FreeTextQuestion 
    question="What is the p-value your obtained for this test?" 
    rows={1} 
    solution="1.476303e-05" 
/>
``` 

#### Options:

* __question__: the question displayed at the top of the free text question component.
* __hints__: an `Array` of `strings` providing guidance on how to answer the question. Default: `[]`.
* __onChange__: callback `function` invoked every time the text area value changes. Default: `null`.
* __resizable__: `boolean` controlling whether the text area should be resizable. Default: `none`.
* __rows__: `number` of rows of the text field for students to type their answers into. Default: `5`.
* __solution__: a `string` giving a model answer to the problem. Default: `''`.
* __submissionMsg__: `string` which is displayed as a notification when the learner first submits his answer. Default: `Compare your answer with solution using the "Show Solution" button. You can then change your answer and re-submit if necessary.`.
* __resubmissionMsg__: `string` which is displayed as a notification for all submissions after the first one. Default: `You have successfully re-submitted your answer.`.
