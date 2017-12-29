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

* __allowMultipleAnswers__: a `boolean` which - when set - allows the user to input multiple answers
* __anonymous__: a `boolean` allowing an anonymous input which cannot be traced back to an user's ID.
* __onSubmit__: callback `function` invoked every time the user input an answer. Default: `null`.
* __question__: a `string` holding the question. Default: `''`.
* __rows__: a `number` indicating the rows of the textarea. 


