---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

Komponent formularza łączący różne komponenty pytania wraz z jednym przyciskiem zgłoszeniowym.

## Opcje

* __buttonLabel__ | `string`: etykieta przycisku nadawania. Default: `none`.
* __onSubmit__ | `function`: wywołanie zwrotne po kliknięciu przycisku wysyłania. Default: `onSubmit() {}`.


## Przykłady

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
