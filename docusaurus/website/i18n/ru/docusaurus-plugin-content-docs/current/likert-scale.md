---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

Компонент, показывающий вопрос и пятибалльную шкалу, на которую учащиеся должны ответить.

## Options

* __question__ | `(string|node)`: вопрос для печати. Default: `''`.
* __options__ | `array`: массив из пяти элементов, содержащих метки для различных уровней шкалы.. Default: `none`.
* __noMultipleResponses__ | `boolean`: запретить несколько работ от одного ученика. Default: `false`.
* __disableSubmitNotification__ | `boolean`: контроль выключения подачи уведомлений. Default: `false`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Examples

```jsx live
<LikertScale 
    id="discrimination" 
    question="After your initial analysis of the data, how likely do you think it is that players are discriminated against by soccer referees because of their skin tone?" 
    options={[ 'Very unlikely', 'Unlikely', 'Neither unlikely nor likely', 'Likely', 'Very Likely']} 
/>
```

