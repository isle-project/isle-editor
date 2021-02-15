---
id: meantest2
title: Two-Sample Mean Test
sidebar_label: Two-Sample Mean Test
---

Двухпробный средний тест.

## Options

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __x__ | `string (required)`: имя первой переменной. Default: `none`.
* __y__ | `string`: имя второй переменной (`y` или `group` должны быть поставлены). Default: `none`.
* __group__ | `string`: имя переменной группировки (`y` или `group` должны быть поставлены). Default: `none`.
* __type__ | `string`: тип теста (либо `Z Test`, либо `T Test`). Default: `'T Test'`.
* __xstdev__ | `number`: первое стандартное отклонение (для `Z Test`). Default: `none`.
* __ystdev__ | `number`: второе стандартное отклонение (для `Z Test`). Default: `none`.
* __alpha__ | `number`: уровень значимости. Default: `0.05`.
* __direction__ | `string`: направление теста (либо `без`, `грэйтер`, либо `двухстороннее`).. Default: `'two-sided'`.
* __diff__ | `number`: разница ниже H0. Default: `0`.
* __showDecision__ | `boolean`: управляет отображением того, отвергается ли нулевая гипотеза на указанном уровне значимости. Default: `false`.


## Examples

```jsx live
<MeanTest2
    data={heartdisease} 
    x="Cost"
    group="Gender"
/>
```
