---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Компонент, позволяющий группе людей голосовать о весах и важности предложенных вариантов.

## Варианты

* __allowMultipleAnswers__ | `boolean`: контролирует, можно ли разрешить учащимся отвечать на опрос несколько раз. Default: `false`.
* __anonymous__ | `boolean`: контролирует, являются ли ответы учеников анонимизированными. Default: `false`.
* __colors__ | `array`: массив цветов для компонентов круговой диаграммы. Если не определено, будет использована пользовательская цветовая шкала. Default: `none`.
* __disabled__ | `boolean`: контролирует, отключается ли опрос. Default: `false`.
* __group__ | `string`: заголовок группового отображения. Default: `'group results'`.
* __groupHeight__ | `number`: пропорции высота ввода для группового отображения (в px). Default: `100`.
* __legends__ | `array`: легендарные этикетки, описывающие варианты для взвешивания. Default: `[]`.
* __margin__ | `string`: пропорциональная входная маржа (в px). Default: `'40px'`.
* __onSubmit__ | `function`: функция обратного вызова, вызываемая после того, как ученик отправит ответ. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: пропорции входной высоты для отдельного ученика (в px). Default: `200`.
* __precision__ | `number`: отображаемая точность пропорций. Default: `2`.
* __question__ | `(string|node)`: вопрос для отображения. Default: `''`.
* __step__ | `number`: шаг стрелок, который виден при наведении курсора на поле ввода. Default: `0.25`.


## Примеры

```jsx live
<ProportionsSurvey 
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```



