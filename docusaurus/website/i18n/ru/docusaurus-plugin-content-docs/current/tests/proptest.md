---
id: proptest
title: One-Sample Proportion Test
sidebar_label: One-Sample Proportion Test
---

Тест на пропорции одной пробы.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __variable__ | `(string|Factor) (required)`: имя переменной. Default: `none`.
* __success__ | `any (required)`: категория успеха `переменная`. Default: `none`.
* __alpha__ | `number`: уровень значимости. Default: `0.05`.
* __direction__ | `string`: направление теста (либо `less`, `greater`, либо `two-sided`). Default: `'two-sided'`.
* __p0__ | `number`: пропорция при нулевой гипотезе. Default: `0.5`.
* __showDecision__ | `boolean`: управляет отображением того, отвергается ли нулевая гипотеза на указанном уровне значимости. Default: `false`.


## Примеры

```jsx live
<PropTest
    data={heartdisease} 
    variable="Complications"
    success={1}
/>
```
