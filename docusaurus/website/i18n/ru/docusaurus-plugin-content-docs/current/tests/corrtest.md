---
id: corrtest
title: Correlation Test
sidebar_label: Correlation Test
---

Тест на корреляцию.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __var1__ | `string (required)`: имя первой переменной. Default: `none`.
* __var2__ | `string (required)`: имя второй переменной. Default: `none`.
* __rho0__ | `number`: значение корреляции при нулевой гипотезе. Default: `0`.
* __alpha__ | `number`: уровень значимости. Default: `0.05`.
* __direction__ | `string`: направление теста (либо `без`, `грэйтер`, либо `двухстороннее`). Default: `'two-sided'`.
* __showDecision__ | `boolean`: управляет отображением того, отвергается ли нулевая гипотеза на указанном уровне значимости. Default: `false`.


## Примеры

```jsx live
<CorrTest
    data={heartdisease} 
    var1="Cost"
    var2="Age"
/>
```
