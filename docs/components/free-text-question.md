# Free Text Question

An ISLE component for questions where answers by students should be supplied in the form of free text.

#### Example:

``` js
<FreeTextQuestion 
    question="What is the p-value your obtained for this test?" 
    rows={1} 
    solution="1.476303e-05" 
/>
``` 

[Open interactive preview](https://isle.heinz.cmu.edu/components/free-text-question/)

#### Options:

* __question__ | `(string|node)`: the question displayed at the top of the free text question component. `Default: "".`
* __hints__ | `Array<string>`: hints providing guidance on how to answer the question. `Default: [].`
* __hintPlacement__ | `string`: placement of the hints (either `top`, `left`, `right`, or `bottom`). `Default: "bottom".`
* __solution__ | `string`: a model answer to the problem. `Default: "".`
* __rows__ | `number`: number of rows of the text field for students to type their answers. `Default: 5.`
* __chat__ | `boolean`: controls whether to enable group chat should for the question. `Default: false.`
* __resizable__ | `boolean`: controls whether the text area should be resizable. `Default: false.`
* __placeholder__ | `string`: placeholder text displayed before user has entered any text. `Default: "Enter your answer here...".`
* __submissionMsg__ | `string`: notification displayed when the learner first submits his answer. `Default: "".`
* __resubmissionMsg__ | `string`: notification displayed for all submissions after the first one. `Default: "You have successfully re-submitted your answer.".`
* __maxlength__ | `number`: maximum allowed number of characters. `Default: 2500.`
* __onChange__ | `function`: callback invoked every time the text area value changes. `Default: onChange() {}.`
