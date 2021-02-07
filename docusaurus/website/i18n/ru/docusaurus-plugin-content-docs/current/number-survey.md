---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

Компонент опроса, в котором преподаватель может собирать числовые данные опроса от студентов в режиме реального времени.

## Options

* __question__ | `(string|node)`: вопрос для отображения. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: контролирует, может ли один и тот же пользователь (или сеанс, если анонимно) предоставить несколько ответов). Default: `false`.
* __anonymous__ | `boolean`: Позволяет студентам подавать данные анонимно. Обратите внимание, что если эта опция установлена в "true", то преподаватели не смогут увидеть идентификатор подающего ученика.. Default: `false`.
* __step__ | `(number|string)`: Значение "строка" или "цифра", обозначающее шаг стрелок, который виден при наведении курсора на поле ввода. Если "любое", то шаг будет установлен на "1".. Default: `'any'`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onSubmit__ | `function`: функция обратного вызова, вызываемая после того, как ученик отправит ответ.. Default: `onSubmit() {}`.


## Examples

```jsx live
<NumberSurvey
    allowMultipleAnswers={true}
    anonymous="false"
    id="generic_mean_question"
    question="Submit a number"
    defaultValue={0}
    step="any"
/>
```

