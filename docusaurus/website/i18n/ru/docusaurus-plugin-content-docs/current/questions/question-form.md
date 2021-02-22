---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

Компонент формы, объединяющий различные компоненты вопросов вместе с одной кнопкой отправки.

## Options

* __buttonLabel__ | `string`: ярлык кнопки отправки. Default: `none`.
* __onSubmit__ | `function`: вызов обратного вызова при нажатии кнопки отправки. Default: `onSubmit() {}`.


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
