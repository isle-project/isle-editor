---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

Un componente de formulario que combina diferentes componentes de la pregunta junto con un único botón de envío.

## Options

* __buttonLabel__ | `string`: etiqueta del botón de envío. Default: `none`.
* __onSubmit__ | `function`: llamada de retorno invocada cuando se hace clic en el botón de envío. Default: `onSubmit() {}`.


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
