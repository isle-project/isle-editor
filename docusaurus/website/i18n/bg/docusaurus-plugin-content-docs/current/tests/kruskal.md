---
id: kruskal
title: Kruskal Test
sidebar_label: Kruskal Test
---

Тест на Крускал-Уолис.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __variable__ | `string (required)`: име на променлива. Default: `none`.
* __group__ | `(string|Factor)`: променлива за групиране. Default: `none`.
* __showDecision__ | `boolean`: контролира дали да се показва, ако нулевата хипотеза е отхвърлена при зададеното ниво на значимост. Default: `false`.


## Примери

```jsx live
<Kruskal
    data={heartdisease} 
    variable="Cost"
    group="Gender"
/>
```
