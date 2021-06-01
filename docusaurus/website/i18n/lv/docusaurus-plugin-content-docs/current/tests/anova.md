---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Dispersijas analīze.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __variable__ | `string (required)`: rādāmā mainīgā lieluma nosaukums. Default: `none`.
* __group__ | `(string|Factor)`: grupēšanas mainīgā nosaukums. Default: `none`.
* __showDecision__ | `boolean`: kontrolē, vai parādīt testa lēmumu. Default: `false`.


## Piemēri

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
