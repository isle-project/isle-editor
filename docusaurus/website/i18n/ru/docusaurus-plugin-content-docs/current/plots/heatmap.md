---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Тепловая карта для визуализации связи между двумя переменными.

## Options

* __data__ | `object (required)`: массивы значений для каждой переменной. Default: `none`.
* __x__ | `string (required)`: осевая переменная x. Default: `none`.
* __y__ | `string (required)`: переменная оси Y. Default: `none`.
* __overlayPoints__ | `boolean`: контролирует наложение точек для каждого наблюдения. Default: `false`.
* __smoothSpan__ | `number`: период затирки. Default: `0.66`.
* __regressionMethod__ | `array<string>`: массив, содержащий `линейную` и/или `сглаженную` линию регрессии для наложения линии линейной и/или сглаженной регрессии. Default: `none`.
* __alternateColor__ | `boolean`: контролирует, следует ли использовать альтернативную цветовую схему для карты теплоснабжения. Default: `false`.
* __commonXAxis__ | `boolean`: контролирует, использовать ли общую ось х при создании нескольких тепловых карт на значение переменной группировки. Default: `false`.
* __commonYAxis__ | `boolean`: контролирует использование общей оси y при создании нескольких тепловых карт на значение переменной группировки. Default: `false`.


## Examples

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
/>
```

