---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

Un componente di modulo che combina diversi componenti di domanda con un unico pulsante di invio.

## Opzioni

* __buttonLabel__ | `string`: etichetta del pulsante di invio. Default: `none`.
* __onSubmit__ | `function`: richiamata quando si fa clic sul pulsante di invio. Default: `onSubmit() {}`.


## Esempi

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
