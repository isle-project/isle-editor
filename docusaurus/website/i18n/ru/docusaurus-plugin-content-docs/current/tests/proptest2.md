---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Тест на пропорции двух проб.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __var1__ | `string (required)`: имя первой переменной. Default: `none`.
* __success__ | `string (required)`: категория успеха `var1`. Default: `none`.
* __var2__ | `string`: имя второй переменной (`var2` или `group` должны быть поставлены). Default: `none`.
* __group__ | `string`: имя переменной группировки (необходимо указать `var2` или `group`). Default: `none`.
* __alpha__ | `number`: уровень значимости. Default: `0.05`.
* __direction__ | `string`: направление теста (либо `без`, `грэйтер`, либо `двухстороннее`).. Default: `'two-sided'`.
* __diff__ | `number`: разница ниже H0. Default: `0`.
* __showDecision__ | `boolean`: управляет отображением того, отвергается ли нулевая гипотеза на указанном уровне значимости. Default: `false`.


## Примеры

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
