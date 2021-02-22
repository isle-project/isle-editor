---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

Um componente de formulário que combina diferentes componentes de perguntas juntamente com um único botão de apresentação.

## Options

* __buttonLabel__ | `string`: etiqueta do botão submeter. Default: `none`.
* __onSubmit__ | `function`: chamada de retorno invocada quando o botão submeter é clicado. Default: `onSubmit() {}`.


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
