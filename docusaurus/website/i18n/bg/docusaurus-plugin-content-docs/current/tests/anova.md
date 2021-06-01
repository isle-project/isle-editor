---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Дисперсионен анализ.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __variable__ | `string (required)`: име на променливата, която ще се показва. Default: `none`.
* __group__ | `(string|Factor)`: име на променливата за групиране. Default: `none`.
* __showDecision__ | `boolean`: контролира дали да се показва решението за теста. Default: `false`.


## Примери

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
