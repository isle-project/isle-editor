---
id: principal-component-analysis
title: Principal Component Analysis
sidebar_label: Principal Component Analysis
---

Анализ основных компонентов.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __variables__ | `array<string> (required)`: имена переменных, используемых для кластеризации. Default: `none`.
* __center__ | `boolean`: средние значения путем вычитания среднего. Default: `true`.
* __scale__ | `boolean`: значения шкалы путем деления на стандартное отклонение. Default: `false`.
* __noComponents__ | `number`: количество компонентов, поставляемых для обратного вызова `onResult`.. Default: `0`.
* __onResult__ | `function`: вызов обратного вызова с помощью модельного объекта и компонентов. Default: `onResult() {}`.


## Примеры

```jsx live
<PrincipalComponentAnalysis 
    data={heartdisease} 
    variables={[ 'Age', 'Cost', 'Interventions' ]}
    scale
/>
```

