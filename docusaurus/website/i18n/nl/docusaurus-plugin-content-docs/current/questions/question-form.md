---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

Een formuliercomponent die verschillende vraagcomponenten combineert met een enkele inzendtoets.

## Opties

* __buttonLabel__ | `string`: etiket van de verzendknop. Default: `none`.
* __onSubmit__ | `function`: terugbellen wordt aangeroepen wanneer op de verzendknop wordt geklikt. Default: `onSubmit() {}`.


## Voorbeelden

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
