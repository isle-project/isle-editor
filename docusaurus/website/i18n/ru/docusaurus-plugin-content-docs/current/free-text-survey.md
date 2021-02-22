---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

ISLE-компонент для вопросов, ответы на которые должны быть предоставлены студентами в виде свободного текста. Отличие этого компонента от **FreeTextQuestion** заключается в том, что агрегированные групповые данные отображаются всем в режиме реального времени.

## Варианты

* __question__ | `(string|node)`: вопрос к студентам. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: контролирует, можно ли разрешить учащимся отвечать на опрос несколько раз.. Default: `false`.
* __anonymous__ | `boolean`: контролирует, собираются ли ответы учеников анонимно. Default: `false`.
* __rows__ | `number`: количество текстовых строк в поле ввода. Default: `4`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onSubmit__ | `function`: функция обратного вызова, вызываемая при отправке ответа.. Default: `onSubmit() {}`.


## Примеры

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

