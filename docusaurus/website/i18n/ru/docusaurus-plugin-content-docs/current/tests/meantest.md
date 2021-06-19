---
id: meantest
title: One-Sample Mean Test
sidebar_label: One-Sample Mean Test
---

Средний тест на один образец.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __variable__ | `string (required)`: имя переменной. Default: `none`.
* __type__ | `string`: тип теста (`Z Test` или `T Test`). Default: `'T Test'`.
* __stdev__ | `number`: стандартное отклонение (для `Z Test`). Default: `none`.
* __alpha__ | `number`: уровень значимости. Default: `0.05`.
* __direction__ | `string`: направление теста (либо `less`, `greater`, либо `two-sided`). Default: `'two-sided'`.
* __mu0__ | `number`: среднее значение по нулевой гипотезе. Default: `0`.
* __showDecision__ | `boolean`: управляет отображением того, отвергается ли нулевая гипотеза на указанном уровне значимости. Default: `false`.


## Примеры

```jsx live
<MeanTest
    data={heartdisease} 
    variable="Drugs"
/>
```
