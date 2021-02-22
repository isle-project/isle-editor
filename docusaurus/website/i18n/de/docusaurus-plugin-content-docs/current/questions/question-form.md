---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

Eine Formularkomponente, die verschiedene Fragekomponenten mit einer einzigen Absendetaste kombiniert.

## Options

* __buttonLabel__ | `string`: Beschriftung der Submit-Schaltfläche. Default: `none`.
* __onSubmit__ | `function`: Callback, der aufgerufen wird, wenn die Schaltfläche "Submit" angeklickt wird. Default: `onSubmit() {}`.


## Examples

```jsx live
<QuestionForm>
    <NumberQuestion
        question="What is 2+2?"
    />
    <FreeTextQuestion
        question="What is the meaning of life?"
    />    
</QuestionForm>
```
