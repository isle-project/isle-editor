---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Тест Крускаль-Валлис.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __variable__ | `string (required)`: имя переменной. Default: `none`.
* __group__ | `string`: переменная группировки. Default: `none`.
* __showDecision__ | `boolean`: управляет отображением того, отвергается ли нулевая гипотеза на указанном уровне значимости. Default: `false`.


## Примеры

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
