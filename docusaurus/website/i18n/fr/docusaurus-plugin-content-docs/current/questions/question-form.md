---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

Un élément de formulaire combinant différents éléments de questions avec un seul bouton de soumission.

## Options

* __buttonLabel__ | `string`: étiquette du bouton d'envoi. Default: `none`.
* __onSubmit__ | `function`: rappel invoqué lorsque l'on clique sur le bouton d'envoi. Default: `onSubmit() {}`.


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
