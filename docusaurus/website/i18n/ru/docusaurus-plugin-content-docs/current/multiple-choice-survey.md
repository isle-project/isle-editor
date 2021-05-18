---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Компонент опроса, в котором преподаватель может собирать данные опроса по нескольким вариантам ответов от студентов в режиме реального времени.

## Варианты

* __question__ | `(string|node)`: строка, указывающая на вопрос, который нужно задать ученикам. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: контролирует, можно ли разрешить учащимся отвечать на опрос несколько раз. Default: `false`.
* __anonymous__ | `boolean`: контролирует, являются ли ответы учеников анонимизированными. Default: `false`.
* __answers__ | `array`: массив, указывающий варианты ответов для студентов. Default: `[]`.
* __multipleAnswers__ | `boolean`: указывает, могут ли ученики выбрать более одного ответа. Обратите внимание, что это отличается от разрешенияМножество ответов тем, что позволяет ученикам отправлять вопрос несколько раз. Default: `false`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onSubmit__ | `function`: функция, вызываемая при получении ответа. Default: `onSubmit() {}`.


## Примеры

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

