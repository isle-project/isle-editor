---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Analýza rozptylu.

## Možnosti

* __data__ | `object (required)`: objekt polí hodnôt. Default: `none`.
* __variable__ | `string (required)`: názov premennej, ktorá sa má zobraziť. Default: `none`.
* __group__ | `(string|Factor)`: názov zoskupujúcej premennej. Default: `none`.
* __showDecision__ | `boolean`: kontroluje, či sa má zobraziť rozhodnutie o teste.. Default: `false`.


## Príklady

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
